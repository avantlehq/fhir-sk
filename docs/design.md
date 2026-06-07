# FHIR.sk — Design Manual

---

## Design Philosophy

Clean, technical, developer-oriented. No decorative elements, no gradients, no animations. Prioritize readability and structure over visual flair.

---

## Colors

| Role | Token | Hex |
|------|-------|-----|
| Primary text | `slate-900` | `#0f172a` |
| Secondary text | `slate-600` | `#475569` |
| Muted text | `slate-500` | `#64748b` |
| Accent | `teal-600` | `#0d9488` |
| Accent hover | `teal-700` | `#0f766e` |
| Accent light | `teal-100` | `#ccfbf1` |
| Background | `white` | `#ffffff` |
| Surface | `slate-50` | `#f8fafc` |
| Border | `slate-200` | `#e2e8f0` |
| Border light | `slate-100` | `#f1f5f9` |

Teal custom scale defined in `tailwind.config.ts`:

```
teal-50:  #f0fdfa
teal-100: #ccfbf1
teal-500: #14b8a6
teal-600: #0d9488
teal-700: #0f766e
teal-800: #115e59
```

---

## Typography

| Role | Class | Notes |
|------|-------|-------|
| Base font | `Inter` | Google Fonts, subsets: latin |
| Logo / monospace | `font-mono` | Used in Header logo "FHIR.sk" |
| Body | `text-slate-900 antialiased` | Set on `<body>` |
| Page max-width | `max-w-6xl mx-auto` | Consistent across all pages |
| Horizontal padding | `px-4 sm:px-6 lg:px-8` | Responsive, consistent |

---

## Status Badges

Component: `components/StatusBadge.tsx`

| Status | Background | Text |
|--------|-----------|------|
| Live | `bg-green-100` | `text-green-700` |
| In Progress | `bg-teal-100` | `text-teal-700` |
| Planned | `bg-slate-100` | `text-slate-500` |

Style: `rounded-full`, `text-xs`, `font-semibold`, `px-2.5 py-0.5`

---

## Components

### Header (`components/Header.tsx`)

- Sticky top, `z-50`
- Background: `bg-white`, border: `border-b border-slate-200`
- Height: `h-16`
- Logo: `text-base font-semibold text-slate-900` — text "FHIR.sk", links to `/`
- Nav links: `text-sm font-medium text-slate-600 hover:text-teal-700`
- Active nav link (desktop): `text-teal-700 underline underline-offset-4 decoration-teal-300`
- Active nav link (mobile): `text-teal-700 font-semibold`
- Active detection: `usePathname().startsWith(link.href)`
- Mobile: hamburger menu below `md` breakpoint

### Footer (`components/Footer.tsx`)

- 3-column layout on desktop
- Version display from `lib/version.ts`
- Links: same color treatment as header nav

### ModuleCard (`components/ModuleCard.tsx`)

- Lab module card with StatusBadge
- Used on `/lab` index and homepage

### LearningCard (`components/LearningCard.tsx`)

- Learn section card
- Used on `/learn` index

### SectionHeader (`components/SectionHeader.tsx`)

- Section heading: label (small caps / muted) + title + description
- Used across all major page sections

### ArticleNav (`components/ArticleNav.tsx`)

- Client component — uses `usePathname()` to resolve position in track
- Renders `← prev title` / `next title →` at bottom of multi-article Learn pages
- Data source: `lib/learn-tracks.ts`
- Renders nothing on pages not in a defined track

### ReferenceList (`components/ReferenceList.tsx`)

- Client component — search input + difficulty filter buttons
- Imported by `/reference/page.tsx` (server component) to preserve `metadata` export
- Data source: `lib/reference-data.ts`
- Filters: text (title + summary) AND difficulty (Beginner / Intermediate / Advanced)

---

## Layout Patterns

### Page container

```tsx
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Section spacing

- Between sections: `py-16` or `py-20`
- Inner content gap: `gap-8` or `gap-12`

### Grid patterns

- 3-column cards: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- 2-column: `grid grid-cols-1 md:grid-cols-2 gap-8`

---

## Tone of Voice

- Technical and precise
- Developer-oriented
- No marketing fluff, no superlatives
- No "revolutionary", "cutting-edge", "world-class"
- State what something is and what it does
- Short sentences

**Example — wrong:** "FHIR.sk is a revolutionary platform that transforms how you experience healthcare interoperability."

**Example — correct:** "FHIR.sk is a lab for exploring healthcare interoperability through FHIR, terminologies and EHDS."

---

## What to Avoid

- Animations (no Framer Motion; CSS transitions limited to `transition-colors` and subtle `translate-x/y` on interactive arrows)
- shadcn/ui or other heavy component libraries
- Gradients
- Drop shadows on cards (use border instead)
- Icon libraries beyond what Next.js provides
- Unnecessary npm dependencies
- Emojis in UI
- Marketing copy patterns

---

## Dependencies

Minimal by design. Do not add dependencies without a clear functional reason.

Current stack:
- `next` 16.2.6
- `react` 19
- `tailwindcss` v3
- `resend` — email delivery for contact form and mock server access requests
- `autoprefixer`, `postcss`, `typescript`

No UI component libraries. No animation libraries. No icon packs (use inline SVG when needed).
