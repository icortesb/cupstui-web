---
sidebar_position: 4
---

# History & usage reports

The history is read from the CUPS page log, which is the durable record —
the daemon keeps only recent completed jobs in memory. `s` switches between
the rows and the totals:

```
10 jobs · 3 pages

  BY USER                                BY PRINTER
  icortes    ██████████ 3p · 10j         Epson_WiFi    ██████████ 3p · 3j
                                         Epson_L3150   ░░░░░░░░░░ 0p · 7j
```

`E` writes what the filter currently shows to a dated CSV in your home
directory.
