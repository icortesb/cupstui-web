---
sidebar_position: 5
---

# Diagnosis

`i` on a printer turns its live CUPS state into a short list of checks —
queue, connection, driver, the last job — each read as plain text rather
than a raw IPP attribute. When the make and model is one cupstui
recognises, it also names the driver package and the command that installs
it.

cupstui never runs that command. It has no package manager of its own, no
AUR helper, and no way to gain the privileges installing a driver needs —
the command is shown so the user can decide whether to run it, not
executed on their behalf.
