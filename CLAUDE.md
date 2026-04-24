# CLAUDE.md – Project Guidelines

Read this fully at the start of every session.
You are working in the **Billings Builds** site — a React + Vite + TypeScript project for Billings Builds LLC (billingsbuilds.com), a freelancing business. Follow these rules strictly.

## Stack & Tools
- React 19+ (hooks only)
- Vite 7+ for dev/build
- TypeScript (strict, no `any`)
- Tailwind CSS v4 (utility-first + `cn` from `@/lib/utils`)
  - Tailwind is loaded via `@tailwindcss/vite` plugin (not PostCSS)
  - `tailwind.config.ts` at project root, referenced from `App.css` via `@config`
  - Animation support via `tailwindcss-animate` + `tw-animate-css`
- **shadcn/ui is the foundation for all UI**:
  - Style: New York, base color: Neutral, icons: Lucide
  - Base every component on shadcn primitives (Button, Card, Input, Dialog, etc.)
  - Add missing shadcn components via CLI: `npx shadcn@latest add [component]`
  - Extend with `cva` for variants when needed
  - Reuse existing custom components from `/src/components/` if they fit
  - shadcn primitives in `/src/components/ui/` may be edited when default styles conflict with the brand
- **Icons**: Lucide (`lucide-react`)
- **Font**: Inter Variable (`@fontsource-variable/inter`)
- Routing: TanStack Router (file-based in `/src/routes/`)
  - Pages/layouts in `/src/routes/`
  - Use `<Link />` for internal routes, `<a href>` for external URLs
  - Use `useNavigate`, `<Outlet />`
  - Route tree auto-generates via `@tanstack/router-plugin` — don't edit `routeTree.gen.ts`
- Data: TanStack Query for all fetching, caching, mutations
  - Prefer `useQuery` / `useMutation` / `useSuspenseQuery`
  - Co-locate queries in hooks or components

## Brand & Design System
- **Theme**: Dark-first premium agency. No light mode toggle needed.
- **Background**: `oklch(0.071 0 0)` ≈ `#09090B` (zinc-950)
- **Primary / Gold accent**: `oklch(0.795 0.166 85)` ≈ `#EAB308` (yellow-500) — used for CTAs, icons, highlights
- **Card surface**: `oklch(0.115 0 0)` ≈ `#18181B` (zinc-900)
- **Muted text**: `oklch(0.556 0 0)` ≈ `#71717A` (zinc-500)
- **Border**: `oklch(1 0 0 / 8%)` — subtle white at 8% opacity
- **Glass card pattern**: `.glass-card` utility — `bg-white/4 backdrop-blur-xl border border-white/10`
- **Gold gradient text**: `.gold-gradient-text` — `bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent`
- **Section max-width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (`.section-container`)
- **Responsive breakpoints**: Mobile-first. `md:` for desktop nav, `lg:` for layout shifts
- **Primary button**: `bg-yellow-400 text-zinc-950 hover:bg-yellow-300 font-bold` + shadow `shadow-yellow-500/20`

## Project Structure
```
/src
  /assets/images/       → Image & media assets (import as modules, not URL strings)
  /components/          → Custom composed components (Navbar, HeroSection, Footer, etc.)
  /components/ui/       → shadcn primitives (editable when brand requires it)
  /routes/              → TanStack Router file-based routes
  /hooks/               → Custom hooks (queries, utils) — create as needed
  /lib/                 → Utilities (utils.ts with `cn` helper)
  /types/               → Shared TypeScript types — create as needed
  App.css               → Single CSS entry point (Tailwind, theme vars, base styles)
  main.tsx              → App entry point (imports App.css, sets up Router + QueryClient)
```
- Aliases: `@/*` → `./src/*`
- `App.css` is the sole CSS entry point imported in `main.tsx`

## Existing Components

### Custom (`/src/components/`)
| Component | Purpose |
|---|---|
| `SignatureLogo` | Inline SVG of David Billings' handwritten signature — uses `currentColor` for theming |
| `Navbar` | Site nav with logo, links, CTA |
| `Footer` | Site footer with signature, nav links, social icons |
| `SpaceBackground` | Animated star/space canvas background for hero section |

### shadcn Primitives (`/src/components/ui/`)
<!-- List installed shadcn components as they are added -->
_(none yet — add via `npx shadcn@latest add [component]`)_

## Image Assets (`/src/assets/images/`)
<!-- List image assets as they are added -->
- Import images as ES modules: `import img from "@/assets/images/file.webp"`

## Routes (`/src/routes/`)
| Route file | Path | Purpose |
|---|---|---|
| `__root.tsx` | (layout) | Root layout — wraps all pages with Navbar + Footer |
| `index.tsx` | `/` | Home / landing page |

## Rules
- Always TypeScript + responsive + accessible (ARIA where needed)
- No inline styles, no `!important`, no raw div/button soup
- Use `cn` for class merging
- Handle loading/error states properly (especially with TanStack Query)
- External links use `<a href>`, internal links use TanStack Router `<Link to>`
- Always run `npm run build` after changes to verify TypeScript + Vite pass
- For new pages from images/screenshots/designs:
  1. Analyze attached image for design, content, and structure
  2. Describe layout & map to shadcn + existing/custom components
  3. Add missing/needed shadcn components via CLI: `npx shadcn@latest add [component]`

When in doubt, ask for clarification.
Update this file as conventions, component listings, and structures evolve.
