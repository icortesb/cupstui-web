---
sidebar_position: 2
---

# Requirements & permissions

CUPS, running. Nothing else — `lp` and `lpadmin` ship with CUPS itself, and
the binary carries no runtime dependencies of its own.

Reading the queue, the printers and the logs works for any user. Enabling a
printer, setting quotas, adding and removing queues need membership in the
CUPS administrative group: `wheel` on Arch and Fedora, `lpadmin` on Debian
and Ubuntu. The first run reports which of these apply on your machine, and
`cupstui -check` repeats it later.
