# Personal Web Enhancement Log

## Date

2026-07-06

## Source Context

The homepage was enhanced using the information extracted from `CV_Ahmad_Template.pdf` and structured in `CV_Ahmad_Template.md`.

## Goal

Convert the starter homepage into a minimal dark personal portfolio for Ahmad Alfikri Nadrian, focused on software engineering experience, full-stack capability, skills, education, and contact paths.

## Files Changed

- `src/pages/index.tsx`

  - Replaced the starter landing page with a complete personal portfolio homepage.
  - Added content sections for hero, profile highlights, experience, skills, education, contact, and footer.
  - Used CV data for summary, career highlights, Reku.id roles, previous surveying work, education, and skills.
  - Added external links for email, LinkedIn, and GitHub.

- `src/components/layout/Layout.tsx`

  - Added a site-level dark background and text color.
  - Mounted the shared `Header` around page content.

- `src/components/layout/Header.tsx`

  - Replaced starter navigation with portfolio anchors: Experience, Skills, and Contact.
  - Updated styling to a sticky dark translucent header with smooth hover states.

- `src/styles/globals.css`

  - Enabled smooth scrolling.
  - Added `page-enter` and `section-enter` animations for initial page and section entrance transitions.
  - Added reduced-motion handling.
  - Added a subtle grid utility used by the homepage background.

- `src/components/Seo.tsx`

  - Replaced starter title, site name, description, and author metadata with Ahmad Alfikri Nadrian personal branding.
  - Added `NEXT_PUBLIC_SITE_URL` support with `https://nadrianfikri.vercel.app` as the temporary fallback URL.

- `next-sitemap.config.js`
  - Replaced the starter sitemap URL with `NEXT_PUBLIC_SITE_URL` support and the same temporary fallback URL.

## Design Direction

- Minimal dark interface using near-black surfaces, white text, zinc neutrals, and emerald accents.
- Thin borders, compact cards, and restrained hover movement.
- No new UI dependency was added.
- Animations are CSS-based and respect `prefers-reduced-motion`.
- Navigation uses in-page anchors with browser-native smooth scroll.

## Content Model

Homepage data is currently stored as local arrays in `src/pages/index.tsx`:

- `highlights`
- `experiences`
- `education`
- `skillGroups`
- `stats`

This keeps the first iteration simple. If content grows, these arrays can be moved to `src/constant/profile.ts` or a content file.

## Follow-Up Notes

- Replace `NEXT_PUBLIC_SITE_URL` with the final production domain when it is ready.
- Confirm the GitHub URL. The current homepage uses `https://github.com/nadrianfikri` as an inferred profile URL.
- Consider adding a real profile image or custom Open Graph image asset.
- Consider adding a Projects section once project names, descriptions, stacks, and links are available.
- Run the full verification set after dependencies are installed: `yarn typecheck`, `yarn lint:strict`, `yarn test`, and `yarn build`.
