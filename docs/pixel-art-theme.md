# Pixel Art Theme

## Purpose

The pixel-art experience is an alternate presentation of the portfolio, not a
global theme override. It lives under the `/pixel-art` route prefix and uses
the same project and blog content as the classic site.

## Route Map

| Route                    | Purpose                       |
| ------------------------ | ----------------------------- |
| `/pixel-art`             | Pixel-art portfolio homepage  |
| `/pixel-art/projects`    | Complete project archive      |
| `/pixel-art/blog`        | Blog archive                  |
| `/pixel-art/blog/[slug]` | Pixel-styled Markdown article |

Links inside the pixel experience should remain under `/pixel-art` when an
equivalent pixel page exists. The shared animated theme dropdown is the
explicit way to switch between the pixel route family and the classic UI.
Equivalent paths, query parameters, and hashes are preserved during the
switch. For example, `/blog/post-slug` maps to
`/pixel-art/blog/post-slug` and back.

## Components

- `PixelLayout` owns the pixel header and keyboard skip link.
- `PixelHeader` provides navigation for the prefixed routes and the Classic UI
  theme selector.
- `ThemeSwitcher` provides the animated dropdown, active-theme state,
  click-away behavior, Escape handling, and arrow-key menu navigation for both
  headers.
- `ThemeTransition` persists above page layouts, covers the full viewport,
  performs route navigation behind the overlay, and reveals the destination
  theme after navigation completes.
- `ThemeTransition.module.css` contains isolated classic and pixel transition
  treatments without adding rules to `globals.css`.
- `PixelPortfolio.module.css` contains the complete pixel design system,
  responsive behavior, archive layouts, and article typography.

The classic `Layout`, `Header`, and pages remain independent.

## Styling Rules

- Keep pixel-specific rules in `PixelPortfolio.module.css`.
- Do not add pixel selectors or tokens to `globals.css`.
- Resolve module classes through the local `cx` helper while allowing shared
  Tailwind utilities such as `layout` to pass through unchanged.
- Keep interactive targets at least 44px high and preserve visible keyboard
  focus states.
- Test at 390px and desktop widths with no horizontal overflow.
- Keep reduced-motion handling for transitions and interactive feedback.
- Keep route pairs synchronized in `getThemePath()` whenever a new equivalent
  classic and pixel page is added.

## Shared Content

Do not fork content solely for the alternate presentation:

- Projects use `src/data/projects.ts`.
- Blog archives use `getAllBlogPosts()`.
- Article pages use `getBlogPostBySlug()`.

This ensures titles, descriptions, dates, tags, and project details stay
consistent across both visual themes.

## Verification

After changing pixel routes or styling, run:

```bash
pnpm typecheck
pnpm lint:strict
pnpm test
pnpm build
```

Confirm the production build lists `/pixel-art`, `/pixel-art/projects`,
`/pixel-art/blog`, and `/pixel-art/blog/[slug]`.
