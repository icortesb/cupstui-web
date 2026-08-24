---
sidebar_position: 1
slug: /
---

# Introduction

**cupstui** is a terminal interface for [CUPS](https://www.cups.org/). Watch
the print queue, cancel and hold jobs, enable and disable printers, send
files, add and remove queues, set per-printer quotas, read the daemon logs
and export a usage report — without leaving the terminal or opening the CUPS
web page.

The queue refreshes on its own every three seconds, and the tab carries its
count so it can be watched from any other screen. A job that is printing
shows how far along it is, drawn from the sheet counts CUPS reports.

## Quick install

```sh
curl -fsSL https://raw.githubusercontent.com/icortesb/cupstui/main/scripts/install.sh | sh
```

See [Installation](/getting-started/installation) for the other routes (Go,
tarball, from source) and what the script actually does.

## Requirements

CUPS, running. Nothing else — `lp` and `lpadmin` ship with CUPS itself, and
the binary carries no runtime dependencies of its own. See
[Requirements & permissions](/getting-started/requirements) for what each
CUPS operation needs.
