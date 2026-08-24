---
sidebar_position: 2
---

# Encryption

Nothing is encrypted by default, which is what CUPS does — turn it on with
the `Encryption` directive or `CUPS_ENCRYPTION`:

| Value | |
|---|---|
| `Never` | in the clear (default) |
| `IfRequested` | upgrade when the server asks |
| `Required` | upgrade before anything is sent |
| `Always` | TLS from the first byte, as https does |

```sh
CUPS_SERVER=print.example.org CUPS_ENCRYPTION=Required cupstui
```

The certificate is verified. CUPS defaults the other way, which makes a
man in the middle indistinguishable from the real server, so accepting one
this machine cannot vouch for has to be asked for: `AllowAnyRoot Yes` in
`client.conf`, or `CUPS_ANYROOT=1`. A server whose certificate is
unverified says so in the header, and an unencrypted connection is flagged
before a password is typed into it.
