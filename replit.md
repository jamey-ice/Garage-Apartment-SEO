# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Main artifact is a SEO-optimized marketing website for dfwgarageapartments.com, built with React + Vite. No backend needed — pure frontend static site.

## Projects

### DFW Garage Apartments — `/artifacts/dfw-garage-apartments/`
- **Type**: React + Vite (presentation-first marketing website)
- **Preview path**: `/` (port 25407)
- **Purpose**: SEO-optimized marketing site for a DFW garage apartment/ADU construction company powered by 6th Ave Homes
- **Phase 1 (COMPLETE)**: Homepage, Services, Areas, About, Contact (3-step form), 404 page + all 15 reusable components
- **Phase 2 (PENDING)**: Service detail pages (4), process/how-it-works, comparison content
- **Phase 3 (PENDING)**: 8 city pages, resource guides, cost calculator
- **Phase 4 (PENDING)**: Blog, project gallery, CRO features (exit intent popup)

#### Brand Identity
- **Colors**: Navy `#013854`, Coral `#EA675A`, Light Coral `#EE837A`, Light Blue `#91D9F8`, Sky Blue `#CFEDF8`, Cream `#F8F0E6`
- **Fonts**: Cervo Neue (headings, self-hosted OTF from `/public/fonts/`) + Avenir (body, self-hosted TTF)
- **Logos**: `/public/logos/` — `logo-white.png` (dark bgs), `logo-coral-navy.png` (light bgs)
- **Photos**: 25+ real project photos in `attached_assets/` — imported via `@assets/` Vite alias

#### SEO
- Dynamic `document.title` + meta descriptions per page via `SEOHead` component
- JSON-LD LocalBusiness schema in Footer
- OpenGraph tags in `index.html`
- `public/robots.txt` + `public/sitemap.xml`

#### Key Files
- `src/App.tsx` — routing (wouter)
- `src/index.css` — design system (CSS variables, @font-face, Tailwind)
- `src/components/` — NavBar, Footer, CTABanner, ProjectCard, ServiceCard, CityCard, TestimonialCard, FAQAccordion, ProcessStep, StatBadge, StickyCTA, BreadcrumbNav, SEOHead
- `src/pages/` — home.tsx, services.tsx, areas.tsx, about.tsx, contact.tsx, not-found.tsx

#### Target Cities (wireframe spec)
Fort Worth, Dallas, Arlington, Plano, Frisco, Denton, McKinney, Southlake

#### Services (wireframe spec — exact URL slugs)
1. Garage Conversions → /services/garage-conversions
2. Above-Garage Apartments → /services/above-garage-apartments
3. Detached ADUs → /services/detached-adus
4. Guest Houses → /services/guest-houses

#### Homepage Sections (all 10 from wireframe — now complete)
1. Hero — SEO H1 "Garage Apartment Builders in Dallas–Fort Worth"
2. Trust Bar — brand authority signals (not stats)
3. Problem — "Most Garage Apartment Projects Fall Apart Before They Start"
4. Services — 4 service cards with correct wireframe names
5. How It Works — 3-step process
6. Why Homeowners Build — 6 use cases (rental income, aging parents, etc.)
7. Projects / Social Proof — testimonials + stats
8. Areas We Serve — city card grid (internal SEO linking)
9. The Stakes — urgency/conversion copy
10. Lead Magnet — email capture form for free guide

#### Phase 1 Completed (wireframe-compliant)
- NavBar with correct service names, correct cities, Resources dropdown
- Footer with 4-column wireframe layout (Brand, Services, Areas, Resources)
- About page with StoryBrand structure (Jamey Ice, Jimmy Williams, 2016, Fairmount)
- Services page with correct service names and cost/timeline data
- Areas page with correct 8 DFW cities
- JSON-LD schema updated with correct cities and foundingDate: 2016

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19, Vite 7, Tailwind CSS v4, wouter routing, framer-motion, shadcn/ui components

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/dfw-garage-apartments run dev` — run the website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
