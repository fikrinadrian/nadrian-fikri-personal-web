---
name: personal-homepage-build
description: Build or revise the personal homepage from the starter page into a real portfolio-style page for Nadrian Fikri.
---

# Personal Homepage Build

Use this skill when changing `src/pages/index.tsx` or building homepage sections for this personal web project.

## Context To Read First

- `src/pages/index.tsx`
- `src/components/layout/Layout.tsx`
- `src/components/layout/Header.tsx`
- `src/components/Seo.tsx`
- `src/styles/globals.css`
- `tailwind.config.js`

## Workflow

1. Remove starter-demo content from the homepage.
2. Create a first viewport that clearly presents Nadrian Fikri, a concise role statement, and primary actions.
3. Add only sections that can be backed by real content or clear placeholders:
   - profile summary
   - selected projects
   - skills or focus areas
   - experience or timeline
   - writing or notes
   - contact and social links
4. Keep section data easy to maintain. For a small site, local arrays in the page file are acceptable; extract only when repetition grows.
5. Use existing link and button components where they fit.
6. Keep responsive behavior explicit with Tailwind classes.
7. Update `Seo` usage on the page when page-specific title or description is needed.

## Quality Bar

- No visible starter template copy.
- The first viewport is useful on mobile and desktop.
- CTAs are descriptive.
- Project cards include project name, short value, stack, and link when available.
- Run `yarn typecheck` and `yarn lint:strict` after implementation when practical.
