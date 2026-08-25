# cupstui-web

Website for [cupstui](https://github.com/icortesb/cupstui), deployed to
GitHub Pages.

- `docs/` — Docusaurus documentation site, served at `/docs/`
- `landing/` — static marketing landing page, served at the site root, no
  build step

## Developing the docs

```sh
cd docs
npm start
```

## Developing the landing page

`landing/` is plain HTML/CSS/JS — open `landing/index.html` in a browser, or
serve it locally:

```sh
cd landing
python3 -m http.server 8000
```

## Building

The `.github/workflows/deploy.yml` workflow builds `docs/`, combines it with
`landing/` (copied to the site root as-is), and publishes to GitHub Pages on
every push to `main`.
