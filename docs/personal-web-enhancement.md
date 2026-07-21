# Personal Web Enhancement Log

## Date

2026-07-06

## Source Context

The homepage was enhanced using the information extracted from `CV_Ahmad_Template.pdf` and structured in `CV_Ahmad_Template.md`.

## Goal

Convert the starter homepage into a minimal dark personal portfolio for Fikri Nadrian, focused on software engineering experience, full-stack capability, skills, education, and contact paths.

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
  - Set emerald as the fixed primary accent color.
  - Added theme-matched text selection styling using the primary accent.
  - Added reduced-motion handling.
  - Added a subtle grid utility used by the homepage background.

- `src/components/Seo.tsx`

  - Replaced starter title, site name, description, and author metadata with Fikri Nadrian personal branding.
  - Added `NEXT_PUBLIC_SITE_URL` support with `https://fikrinadrian.vercel.app` as the temporary fallback URL.

- `next-sitemap.config.js`
  - Replaced the starter sitemap URL with `NEXT_PUBLIC_SITE_URL` support and the same temporary fallback URL.

## Design Direction

- Minimal dark interface using near-black surfaces, white text, zinc neutrals, and emerald accents.
- Thin borders, compact cards, and restrained hover movement.
- No new UI dependency was added.
- Animations use Framer Motion and respect `prefers-reduced-motion`.
- Navigation uses in-page anchors with browser-native smooth scroll.
- Decorative section backgrounds use minimal animated square accents that follow the fixed emerald primary color.

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
- Confirm the GitHub URL. The current homepage uses `https://github.com/fikrinadrian` as an inferred profile URL.
- Consider adding a real profile image or custom Open Graph image asset.
- Consider adding a Projects section once project names, descriptions, stacks, and links are available.
- Run the full verification set after dependencies are installed: `pnpm typecheck`, `pnpm lint:strict`, `pnpm test`, and `pnpm build`.

## Update Log

### 2026-07-09

- Updated the public identity from `Ahmad Alfikri Nadrian` to `Fikri Nadrian`.
- Removed the accent color switcher and localStorage-based accent state.
- Locked the primary accent to emerald through `src/styles/globals.css`.
- Removed the demo `@/styles/colors.css` import from `src/pages/_app.tsx` so alternate color classes cannot override the fixed emerald accent.
- Replaced decorative path backgrounds with minimal Framer Motion square accents per section.
- Keep this document updated whenever portfolio content, theme behavior, navigation, metadata, or verification commands change.

### 2026-07-21

- Added Freelance Software Developer experience for 2023–Present, highlighting multiple completed client projects and the three portfolio examples.
- Added a Curated Projects section to the homepage with three freelance projects.
- Added a dedicated `/projects` page with expanded project context, public live-site links, and a contact call to action.
- Added shared project data in `src/data/projects.ts` so the homepage and projects page use one content source.
- Added reusable `ProjectCard` and CSS-based `ProjectPreview` components. The previews do not depend on external screenshots or remote images.
- Added Projects to the shared navigation. Experience and Skills are hidden in the smallest navigation layout to keep it usable on narrow screens.
- Identified PT Redision Teknologi Indonesia as the internal dashboard client while keeping product screens and live access private.
- Public project descriptions were aligned with the live Aura Teknologi and Moxie Lab Digital websites. No unconfirmed technology stack or business result is claimed.
