# Manhaj — منهج

An Arabic-first (RTL) learning site for the **Seerah** (Prophetic biography) and the lives of the **Sahabah**, built with [vinext](https://github.com/cloudflare/vinext) and deployed to Cloudflare Workers.

## Content policy

Every claim carries a source, a certainty level and a review status:
`internal_unapproved` → `under_review` → `approved` → `published`.
Only `published` content is shown to learners. This repository currently contains **structure and placeholders only** — no lesson text has been approved. Raw source scans/PDFs are never committed here.

## Development

```bash
npm ci
npm run dev        # local dev server
npm run typecheck
npm run build
npm test           # requires a build first
```

## Deploy

CI (`.github/workflows/ci.yml`) runs install, typecheck, build and tests on pull requests.
Deployment (`.github/workflows/deploy.yml`) is **manual only** (`workflow_dispatch`) and needs the repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
