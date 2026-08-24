---
sidebar_position: 1
---

# Installation

## Install script

```sh
curl -fsSL https://raw.githubusercontent.com/icortesb/cupstui/main/scripts/install.sh | sh
```

That takes the release build for this machine, checks it against the
published checksum and leaves it in `~/.local/bin`. When that directory is
not on your `PATH`, the line that puts it there is added to your shell's
startup file, so a new shell finds `cupstui` — `CUPSTUI_NO_MODIFY_PATH`
leaves your files alone and prints the line instead. `CUPSTUI_INSTALL_DIR`
puts the binary somewhere else, `CUPSTUI_VERSION` pins a tag.

## From a release tarball

Take the tarball for your architecture from the
[releases](https://github.com/icortesb/cupstui/releases) and move the binary
onto your `PATH` yourself.

## With Go

```sh
go install github.com/icortesb/cupstui/cmd/cupstui@latest
```

This one leaves the binary in `$(go env GOPATH)/bin`, which is on the `PATH`
only if you have put it there — `cupstui: command not found` right after a
successful install means you have not:

```sh
export PATH="$(go env GOPATH)/bin:$PATH"
```

## From source

```sh
git clone https://github.com/icortesb/cupstui
cd cupstui
make build
```

Every route produces a static binary with no shared library dependencies.
