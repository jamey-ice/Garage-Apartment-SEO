# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Main artifact is a SEO-optimized marketing website for dfwgarageapartments.com, built with Next.js 15 + SSG. No backend needed — pure static site generation.

## Projects

### DFW Garage Apartments — `/artifacts/dfw-garage-apartments/`
- **Type**: Next.js 15 (Pages Router, static site generation)
- **Preview path**: `/` (port 25407)
- **Purpose**: SEO-optimized marketing site for a DFW garage apartment/ADU construction company powered by 6th Ave Homes
- **Phase 1 (COMPLETE)**: Homepage, Services, Areas, About, Contact, 404 page + all reusable components
- **Phase 2 (COMPLETE)**: Service detail pages (4), Process page — all with FAQ schema markup
- **Phase 3 (COMPLETE)**: 8 city pages, 4 resource guides, Resources index
- **Phase 4 (PENDING)**: Blog, project gallery, CRO features (exit intent popup), cost calculator

#### Architecture: Next.js Pages Router with SSG
- **Routing**: `src/pages/` directory (Next.js file-based routing)
- **Page components**: `src/views/` directory (React component files)
- **`src/pages/`**: Thin Next.js page files that import from `src/views/`
- **Dynamic routes**: `src/pages/areas/[city].tsx` and `src/pages/resources/[slug].tsx` with `getStaticPaths` + `getStaticProps`
- **Layout**: `src/pages/_app.tsx` wraps all pages with NavBar, Footer, StickyCTA, TooltipProvider
- **CSS**: `src/index.css` — Tailwind v4 via `@tailwindcss/postcss` PostCSS plugin
- **Images**: Copied to `public/images/`, referenced as `/images/filename.jpg` strings
- **Fonts**: Self-hosted in `public/fonts/` — Cervo Neue (headings) + Avenir (body)
- **Config**: `next.config.mjs`, `postcss.config.mjs`

#### Why SSG Matters
Every page is pre-rendered as full HTML at build time. Google crawls the complete text of all 23 pages — city-specific content, FAQ text, cost data — without needing to execute JavaScript.

#### Brand Identity
- **Colors**: Navy `#013854` (`bg-primary`), Coral `#EA675A` (`bg-accent`/`text-accent`), Cream `#F8F0E6` (`bg-card`)
- **Tailwind**: v4 with CSS variable tokens — use `bg-primary`, `bg-accent`, `bg-card`, `bg-muted` (NOT `bg-navy`, `bg-coral`, `bg-cream`)
- **Fonts**: Cervo Neue (headings, self-hosted OTF from `/public/fonts/`) + Avenir (body, self-hosted TTF)
- **Logos**: `/public/logos/` — `logo-white.png` (dark bgs), `logo-coral-navy.png` (light bgs)
- **Photos**: 31 real project photos in `public/images/` — referenced as `/images/filename.jpg`

#### SEO
- JSON-LD FAQPage schema in all service and city pages via `dangerouslySetInnerHTML`
- JSON-LD LocalBusiness schema in Footer
- Full content pre-rendered in HTML for Googlebot (SSG)
- All 23 routes return HTTP 200

#### Site Map (23 routes)
- `/` — Homepage (10 sections)
- `/about` — About (Jamey Ice + Jimmy Williams, 2016, Fairmount)
- `/contact` — Contact (3-step form)
- `/process` — How We Work
- `/services` — Services overview
- `/services/garage-conversions`
- `/services/above-garage-apartments`
- `/services/detached-adus`
- `/services/guest-houses`
- `/areas` — Areas overview
- `/areas/fort-worth` through `/areas/southlake` (8 city pages)
- `/resources` — Resource index
- `/resources/cost-guide`
- `/resources/zoning-guide`
- `/resources/texas-adu-laws`
- `/resources/financing-options`

#### Key Files
- `src/pages/_app.tsx` — global layout (NavBar, Footer, StickyCTA)
- `src/pages/_document.tsx` — custom HTML document
- `src/pages/areas/[city].tsx` — SSG dynamic city pages
- `src/pages/resources/[slug].tsx` — SSG dynamic resource pages
- `src/index.css` — design system (CSS variables, @font-face, Tailwind v4)
- `src/components/` — NavBar, Footer, CTABanner, ServiceCard, CityCard, StickyCTA, BreadcrumbNav, etc.
- `src/views/` — page component implementations

#### Target Cities
Fort Worth, Dallas, Arlington, Plano, Frisco, Denton, McKinney, Southlake

#### Services (exact URL slugs)
1. Garage Conversions → /services/garage-conversions
2. Above-Garage Apartments → /services/above-garage-apartments
3. Detached ADUs → /services/detached-adus
4. Guest Houses → /services/guest-houses

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19, Next.js 15 (Pages Router), Tailwind CSS v4, framer-motion, shadcn/ui components

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/dfw-garage-apartments run dev` — run the website locally
- `pnpm --filter @workspace/dfw-garage-apartments run build` — build static site

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
