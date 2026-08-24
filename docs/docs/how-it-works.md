---
sidebar_position: 5
---

# How it works

Reads and control go over IPP on the unix socket rather than through
`lpstat`. The output of the command line tools is localised and free-form,
while IPP returns typed attributes — `printer-state` is an integer and
`printer-state-reasons` is machine-readable. Over the unix socket CUPS
authenticates the local user; the same request over TCP to
`localhost:631` answers 401.

Submitting jobs and setting quotas go through `lp` and `lpadmin` instead.
The Go IPP library available today sends `copies` twice, cannot encode
`page-ranges` as a `rangeOfInteger` — it sends text, which the filter may
ignore without saying so — and attributes the job to root instead of the
real user. It also cannot encode the multi-valued access list a quota
needs. Both were checked against CUPS 2.4.19 by comparing the attributes
each route leaves stored on the job.

The IPP transport is a single connection with one shared `http.Transport`.
The library builds a fresh transport per request and never closes it,
which leaks a socket per query until the collector gets to it;
refreshing every few seconds that exhausts the `MaxClients` of cupsd and
stalls printing for every program on the machine, not just this one.
