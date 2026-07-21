# Fikri Nadrian — Personal Portfolio

Personal portfolio for Fikri Nadrian, a software engineer working across
frontend and full-stack product development.

The website offers two independent visual experiences backed by the same
project and blog content:

- **Classic UI** — the primary dark portfolio at `/`
- **Pixel Art UI** — an RPG-inspired portfolio under `/pixel-art`

Visitors can switch themes from either header through an animated, accessible
theme dropdown without the themes overriding each other.

## Routes

| Content      | Classic UI     | Pixel Art UI             |
| ------------ | -------------- | ------------------------ |
| Homepage     | `/`            | `/pixel-art`             |
| Projects     | `/projects`    | `/pixel-art/projects`    |
| Blog archive | `/blog`        | `/pixel-art/blog`        |
| Blog article | `/blog/[slug]` | `/pixel-art/blog/[slug]` |

Both route families reuse the same data sources. Projects come from
`src/data/projects.ts`, while blog posts are Markdown files in
`src/content/blog`.

## Technology

- Next.js Pages Router
- React and TypeScript
- Tailwind CSS
- CSS Modules for the isolated pixel-art design
- Framer Motion
- Markdown processing with Remark
- Jest and Playwright

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the classic portfolio
or [http://localhost:3000/pixel-art](http://localhost:3000/pixel-art) for the
pixel-art portfolio.

## Verification

Run the complete local verification set before committing:

```bash
pnpm typecheck
pnpm lint:strict
pnpm test
pnpm build
```

The production build also generates sitemap files through `next-sitemap`.

## Content

### Projects

Edit `src/data/projects.ts`. Both project pages and the homepage showcases read
from this shared collection.

### Blog

Add Markdown files to `src/content/blog`. Front matter is normalized by
`src/lib/blog.ts` and used by both visual themes.

## Theme Architecture

The classic experience keeps the shared `Layout` and Tailwind-based styling.
The pixel experience uses dedicated components and a scoped stylesheet:

- `src/components/layout/PixelLayout.tsx`
- `src/components/layout/PixelHeader.tsx`
- `src/components/layout/ThemeSwitcher.tsx`
- `src/styles/PixelPortfolio.module.css`
- `src/pages/pixel-art/`

Pixel-art rules are not written to `globals.css`, preventing the alternate
design from leaking into classic pages. See
[`docs/pixel-art-theme.md`](docs/pixel-art-theme.md) for the route and styling
conventions.

## Environment

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin. When it is not provided, SEO
and sitemap configuration use `https://fikrinadrian.vercel.app`.
