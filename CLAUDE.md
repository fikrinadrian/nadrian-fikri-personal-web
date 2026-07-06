# Claude Project Guide

## Project

This is Nadrian Fikri's personal web project. The codebase is currently based on `ts-nextjs-tailwind-starter`, so treat starter defaults as scaffolding that should be replaced with personal branding, portfolio content, real metadata, and production-ready assets.

## Stack

- Next.js 13 pages router, React 18, TypeScript.
- Tailwind CSS 3 with the shared `.layout` utility and primary colors defined in `src/styles/globals.css`.
- Jest and Testing Library for unit/component tests.
- Yarn is the package manager. Do not introduce npm or pnpm lockfiles.
- Path aliases:
  - `@/*` maps to `src/*`.
  - `~/*` maps to `public/*`.

## Commands

- Install: `yarn install`
- Dev server: `yarn dev`
- Production build: `yarn build`
- Lint: `yarn lint`
- Strict lint: `yarn lint:strict`
- Typecheck: `yarn typecheck`
- Tests: `yarn test`
- Format check: `yarn format:check`

Run the smallest useful verification for the change. For broad UI, SEO, or configuration changes, prefer `yarn typecheck`, `yarn lint:strict`, and `yarn test`; use `yarn build` when routing, Next config, metadata, sitemap, images, or deployment behavior is affected.

## Code Conventions

- Keep components typed with explicit props where helpful.
- Prefer existing components in `src/components` before adding new primitives.
- Use `clsxm` from `src/lib/clsxm` for conditional Tailwind classes when class composition becomes non-trivial.
- Keep imports sorted according to the existing ESLint setup.
- Keep homepage and layout changes in `src/pages/index.tsx`, `src/components/layout`, and small focused components under `src/components`.
- Use `Seo` from `src/components/Seo.tsx`; update its starter defaults before considering the site production-ready.
- Use `NextImage` when adding optimized local or remote images, and update `next.config.js` if remote image domains are required.
- Do not leave `!STARTERCONF` defaults in production-facing content.

## UI Direction

- This is a personal web, not a starter demo. The first viewport should immediately communicate who Nadrian Fikri is, what he does, and what visitors can do next.
- Favor a polished portfolio interface: clear hierarchy, strong typography, restrained motion, readable contrast, and responsive sections for profile, projects, writing/notes, experience, and contact.
- Avoid generic template copy, oversized marketing filler, and purely decorative UI that does not support the personal brand.
- Keep layouts responsive and test mobile spacing mentally when editing Tailwind classes.

## SEO And Content

- Replace title, site name, description, URL, Open Graph image, author, favicon, and manifest data before release.
- Use concise page titles and unique descriptions for new pages.
- Keep external links intentional and set accessible labels where link text alone is unclear.
- Prefer real project names, outcomes, stack, and links over vague portfolio claims.

## Testing

- Add or update tests when behavior changes, helper functions are added, or pages/components gain conditional rendering.
- For presentational-only changes, at minimum run typecheck and lint where practical.
- Do not snapshot large UI trees unless there is a clear reason.

## Claude Agents

Use the agents in `.claude/agents` when the task benefits from focused review:

- `personal-site-ux-designer`: information architecture, homepage sections, visual direction, responsive polish.
- `nextjs-tailwind-implementer`: implementation in Next.js, React, TypeScript, and Tailwind.
- `seo-performance-auditor`: metadata, accessibility, image, sitemap, and production-readiness review.
- `test-and-release-reviewer`: verification strategy, tests, lint/typecheck/build gates, release risks.

## Claude Skills

Use the skills in `.claude/skills` for repeatable workflows:

- `personal-homepage-build`: turn the starter homepage into a real personal website page.
- `seo-brand-metadata`: replace starter SEO, social preview, favicon, manifest, and sitemap defaults.
- `component-system-extension`: add reusable components that fit the existing starter component style.
- `predeploy-quality-check`: run a focused pre-deploy review and command checklist.
