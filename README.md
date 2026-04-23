# bdwilliams.github.io

This site is generated from shared content so `index.html` and `resume.html` stay in sync.

## Editing

Update shared content in [assets/site-data.mjs](/home/brian/repos/bdwilliams/bdwilliams.github.io/assets/site-data.mjs:1) and page generation logic in [build-site.mjs](/home/brian/repos/bdwilliams/bdwilliams.github.io/build-site.mjs:1) if needed.

## Build

Regenerate the static files with:

```bash
make build
```

This rebuilds:

- `index.html`
- `resume.html`

## Local Preview

Run the local server with:

```bash
make serve
```

This also rebuilds the generated files before starting the server.

## Before Push

Always run `make build` before pushing changes so the generated `index.html` and `resume.html` files match the shared source content committed in the repo.
