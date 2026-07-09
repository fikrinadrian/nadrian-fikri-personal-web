# Claude Project Guide

## Project

This is Fikri Nadrian's personal web project. The codebase is currently based on `ts-nextjs-tailwind-starter`, so treat starter defaults as scaffolding that should be replaced with personal branding, portfolio content, real metadata, and production-ready assets.

## Stack

- Next.js pages router, React, TypeScript.
- Tailwind CSS with the shared `.layout` utility and emerald primary colors defined in `src/styles/globals.css`.
- Jest and Testing Library for unit/component tests.
- pnpm is the package manager. Do not introduce npm or Yarn lockfiles.
- Path aliases:
  - `@/*` maps to `src/*`.
  - `~/*` maps to `public/*`.

## Commands

- Install: `pnpm install`
- Dev server: `pnpm dev`
- Production build: `pnpm build`
- Lint: `pnpm lint`
- Strict lint: `pnpm lint:strict`
- Typecheck: `pnpm typecheck`
- Tests: `pnpm test`
- Format check: `pnpm format:check`

Run the smallest useful verification for the change. For broad UI, SEO, or configuration changes, prefer `pnpm typecheck`, `pnpm lint:strict`, and `pnpm test`; use `pnpm build` when routing, Next config, metadata, sitemap, images, or deployment behavior is affected.

## Code Conventions

- Keep components typed with explicit props where helpful.
- Prefer existing components in `src/components` before adding new primitives.
- Use `clsxm` from `src/lib/clsxm` for conditional Tailwind classes when class composition becomes non-trivial.
- Keep imports sorted according to the existing ESLint setup.
- Keep homepage and layout changes in `src/pages/index.tsx`, `src/components/layout`, and small focused components under `src/components`.
- Use `Seo` from `src/components/Seo.tsx`; update its starter defaults before considering the site production-ready.
- Use `NextImage` when adding optimized local or remote images, and update `next.config.js` if remote image domains are required.
- Do not leave `!STARTERCONF` defaults in production-facing content.
- Keep `docs/personal-web-enhancement.md` updated whenever portfolio content, navigation, theme behavior, metadata, or verification guidance changes.

## Commit Discipline

- Before committing, always review whether the documentation needs an update and include the relevant docs change in the same commit when behavior, content, workflow, verification guidance, or project conventions change.
- Treat `docs/personal-web-enhancement.md` as the primary docs file for personal web enhancement notes unless a more specific docs file clearly owns the change.

## UI Direction

- This is a personal web, not a starter demo. The first viewport should immediately communicate who Fikri Nadrian is, what he does, and what visitors can do next.
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
