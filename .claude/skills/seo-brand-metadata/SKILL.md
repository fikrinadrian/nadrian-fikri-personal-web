---
name: seo-brand-metadata
description: Replace starter SEO, Open Graph, favicon, manifest, and sitemap defaults with personal web production metadata.
---

# SEO Brand Metadata

Use this skill when updating metadata, social previews, favicons, manifest, sitemap, domain, or production branding.

## Context To Read First

- `src/components/Seo.tsx`
- `next-sitemap.config.js`
- `next.config.js`
- `public/favicon/site.webmanifest`
- `public/favicon/browserconfig.xml`
- `public/favicon/*`
- `public/images/large-og.png`
- `public/favicon/large-og.jpg`

## Required Decisions

Confirm or infer these values before final edits:

- Real site name.
- Default page title.
- One-sentence description.
- Production URL without a trailing slash.
- Author name.
- Social preview image path or URL.
- Theme color and favicon brand color.

## Workflow

1. Replace `ts-next-tw.thcl.dev`, starter names, and Theodorus Clarence author defaults.
2. Keep canonical and Open Graph URLs stable and absolute.
3. Ensure social image dimensions are appropriate for previews.
4. Align manifest name, short name, theme color, and icon paths.
5. Update `next-sitemap.config.js` to the production domain.
6. Search for `STARTERCONF`, `ts-next`, `Theodorus`, and starter title strings before finishing.

## Verification

- Run `yarn typecheck`.
- Run `yarn build` if sitemap, Next config, or production metadata paths changed.
