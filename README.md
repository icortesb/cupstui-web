# cupstui-web

Website for [cupstui](https://github.com/icortesb/cupstui), deployed to
GitHub Pages.

- `docs/` — Docusaurus documentation site, served at `/docs/`
- `landing/` — marketing landing page, served at the site root (not built yet)
- `web-root/` — static files copied to the site root as-is (currently just a
  redirect to `/docs/` until `landing/` exists)

## Developing the docs

```sh
cd docs
npm start
```

## Building

The `.github/workflows/deploy.yml` workflow builds `docs/`, combines it with
`web-root/` (and eventually `landing/`), and publishes to GitHub Pages on
every push to `main`.
