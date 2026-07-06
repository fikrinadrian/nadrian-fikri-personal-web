---
name: component-system-extension
description: Add or revise reusable React/Tailwind components while staying consistent with the existing component system.
---

# Component System Extension

Use this skill when adding reusable components under `src/components`.

## Context To Read First

- Similar components in `src/components`
- `src/lib/clsxm.ts`
- `src/styles/globals.css`
- `tailwind.config.js`

## Workflow

1. Check if an existing component can be reused or lightly extended.
2. Keep component APIs small and typed.
3. Use `React.ComponentPropsWithoutRef` when wrapping native elements.
4. Use `clsxm` for class merging and conditional classes.
5. Preserve accessibility semantics: buttons for actions, links for navigation, headings in order, alt text for images.
6. Avoid adding dependencies for simple UI.
7. Add tests when the component has conditional rendering, logic, or accessibility-critical behavior.

## Quality Bar

- Component names are specific and discoverable.
- Tailwind classes do not duplicate complex layouts across many call sites.
- No unnecessary abstraction for one-off page sections.
- Run `yarn typecheck` and `yarn lint:strict` when practical.
