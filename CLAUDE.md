# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing site for Charlie's Jewelry and Watch Repair, built with Next.js 16 (App Router) and Sanity as a headless CMS. Content-heavy pages (home, about, services, contact) fetch nearly all copy/images from Sanity rather than hardcoding it — there is no local content fallback beyond hero defaults on a couple of pages.

## Commands

```bash
npm run dev              # Next.js dev server (localhost:3000); Sanity Studio is served at /studio
npm run build             # Production build
npm run start             # Serve production build
npm run lint               # ESLint (flat config: eslint.config.mjs)
npm run storybook          # Storybook dev server on port 6006
npm run build-storybook    # Static Storybook build
```

There is no test runner configured in this repo (no Jest/Vitest/Playwright). Storybook stories (`*.stories.tsx`) exist for most components and act as the visual dev/QA loop — check them when changing a component's UI.

Required environment variables (Sanity, no `.env.example` committed):
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional, defaults to a pinned date in `sanity/env.ts`)

## Architecture

**Content flow:** Sanity schema (`sanity/schemaTypes/*.ts`) → GROQ queries (`sanity/lib/queries.ts`) → server components in `app/*/page.tsx` that call `client.fetch(...)` directly in async page components → plain presentational components in `components/`.

- `sanity/lib/client.ts` — the read client used by every page (`useCdn: true`). `sanity/lib/live.ts` exports `sanityFetch`/`SanityLive` (next-sanity Live Content API) but pages currently fetch via the plain `client`, not `sanityFetch`, so content is not live-updating by default.
- `sanity/lib/queries.ts` is the single source of truth for GROQ — add new queries here rather than inlining GROQ in a page. Queries reshape data at the GROQ level (renaming fields, dereferencing `->`, resolving `asset->url`) so page components can consume near-final shapes.
- `sanity/lib/image.ts` — `urlFor()` builds Sanity CDN image URLs from image objects (used when hotspot/crop metadata is needed on the client, as in `app/services/page.tsx`). Queries that just need a flat URL resolve `asset->url` directly in GROQ instead.
- `sanity/structure.ts` pins several document types as **singletons** with fixed document IDs (`homePage`, `aboutPage`, `contactPage`, `contactInformation`, `servicesPage`) so editors can't create duplicates in Studio. When adding a new page-level singleton, follow this same pattern (fixed `documentId`, listed explicitly, filtered out of the generic document list).
- `sanity.config.ts` (project root, not under `sanity/`) is the Studio config, mounted at `/studio` via `app/studio/[[...tool]]/page.tsx`. `sanity/schemaTypes/index.ts` is the schema registry — new schema types must be imported and added to the `types` array there.
- Hero sections across pages share the `heroSection` object schema and resolve `backgroundImage`/`backgroundVideo` with their asset URLs (and hotspot, for `about`) directly in GROQ; the `HeroSection` component expects already-resolved URLs, not raw Sanity image refs.
- Rich text fields (Sanity `block` content) are rendered with `@portabletext/react` using shared renderers from `components/PortableText/portableTextComponents.tsx` (`ptComponents`) — reuse this rather than adding ad hoc block rendering per page.

**Pages** (`app/*/page.tsx`) are async server components. Each defines small local `getX()` fetch helpers that call `client.fetch(query)`, then derives safe local variables with `??` fallbacks before rendering (Sanity content is optional/nullable throughout — always guard for missing singleton documents or empty arrays, matching the existing pages).

**Styling:** No CSS framework. `app/globals.css` defines the design system as CSS custom properties (colors, type scale, spacing) plus a handful of global utility classes (`.container`, `.section`, `.card`, `.checkList`, `.p-large`, `.muted`, `.special-note`, status color utilities like `.text-error`/`.bg-success`, etc.) — prefer these existing utilities/tokens over introducing new ad hoc values. Component-specific styles use CSS Modules (`Component.module.css`) alongside each component. `Button` is the one exception using a plain imported `button.css` with hand-built BEM-ish class concatenation rather than a module.

**Forms:** The consultation form in `components/ContactSection/ContactSection.tsx` submits via `fetch` to `/__forms.html`, a static Netlify Forms detection stub (`public/__forms.html`) — this is a Netlify-hosted-site pattern (form is detected at build/deploy time from the static HTML, honeypot field `bot-field`). Keep the field names in the React form, the hidden `public/__forms.html` form, and Netlify's form name (`consultation`) in sync if the form changes.

**Icons:** `react-icons` (`fa`, `io` sets) mapped to Sanity service slugs via a local `icons` record in `app/page.tsx` — when adding a new service in Sanity, add a matching icon mapping there or it falls back to a default icon.
