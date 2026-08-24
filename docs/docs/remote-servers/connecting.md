---
sidebar_position: 1
---

# Connecting

A CUPS on another machine is reached the same way the command line tools
reach it: the `CUPS_SERVER` environment variable, or `ServerName` in
`~/.cups/client.conf`. `CUPS_USER` and the `User` directive set the account.

```sh
CUPS_SERVER=print.example.org cupstui
```

The server is named in the header so it is never a surprise which machine
is being administered. Many servers answer reads without credentials and
ask for them only on an administrative operation; when that happens the
password is asked for then, kept for the session and never written to
disk. `S` brings the prompt up on demand.
