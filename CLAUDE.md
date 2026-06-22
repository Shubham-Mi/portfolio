# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check (tsc --noEmit)
```

There are no automated tests in this project.

## Architecture

Single-page Next.js 14 App Router portfolio. All visible content lives on one route (`/`), with hash-based in-page navigation (`#about`, `#skills`, etc.).

**Key files:**
- `src/lib/data.ts` — All portfolio content (bio, skills, experience, projects). Edit here to update what's displayed.
- `src/app/layout.tsx` — Root layout: metadata, fonts (Inter, JetBrains Mono, Geist Sans), global styles.
- `src/app/icon.tsx` — Favicon generated via `next/og` ImageResponse.
- `next.config.js` — Rewrites that proxy `/project/<slug>` to external Vercel-deployed apps.

**Component pattern:** All components under `src/components/` are Client Components (`"use client"`). `ParticlesBackground` is dynamically imported with `ssr: false`.

**Styling:** Tailwind CSS with a custom dark theme. Core color tokens (`background`, `surface`, `border`) are defined in `tailwind.config.ts` and as CSS variables in `src/app/globals.css`. Accent color is violet (`#a855f7`). Path alias `@/*` maps to `src/*`.

**Adding a proxied project:** Add two rewrite rules to `next.config.js` — one for the root path and one for `/:path*` — pointing to the deployed Vercel URL.
