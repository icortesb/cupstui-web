---
sidebar_position: 2
---

# Filtering

The queue and the history take the same query. A bare term is looked for
everywhere; a prefixed one is scoped to a single field. Terms combine, and
every one must match.

```
printer:epson user:ana state:held
```
