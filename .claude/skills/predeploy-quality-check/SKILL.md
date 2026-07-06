---
name: predeploy-quality-check
description: Run a focused pre-deploy review for the personal web project before publishing to Vercel or merging major changes.
---

# Predeploy Quality Check

Use this skill before deployment or after broad changes to UI, SEO, routing, assets, or configuration.

## Review Checklist

- No production-facing starter copy remains.
- `src/components/Seo.tsx` contains real metadata.
- `next-sitemap.config.js` points to the real production URL.
- Favicons, manifest, Open Graph images, and theme color match the brand.
- Homepage has meaningful content and accessible headings.
- Links have clear text and correct destinations.
- Images have dimensions and alt text.
- No unrelated dirty files were modified.

## Commands

Run the smallest set that matches the change:

- `yarn typecheck`
- `yarn lint:strict`
- `yarn test`
- `yarn build`

Use `yarn build` when Next config, sitemap, pages, public assets, or metadata behavior changed.

## Report Format

Summarize:

- checks run
- issues found
- files changed
- deploy blockers, if any
