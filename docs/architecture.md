# FHIR.sk — Information Architecture

Last validated: 2026-06-07

---

## Navigation

```
Lab | Learn | Reference | About
```

- Active section highlighted with teal underline (desktop) and font-semibold (mobile)
- Implemented via `usePathname()` + `startsWith()` in `components/Header.tsx`

### Rules

- Roadmap no longer in nav — redirects to /learn
- Do not add: Contact, Academy, Marketplace, Jobs, Certifications, Forum, Community
- Nav reflects actual live structure, not aspirations

---

## Site Map

```
fhir.sk/
├── /                                        ← Homepage
├── /lab/                                    ← Lab index (3 live, 3 stubs)
│   ├── /lab/mock-server                     ← Live — access request form → Resend email
│   ├── /lab/validator                       ← Live — FHIR JSON validation, 3 profiles
│   ├── /lab/terminology-explorer            ← Live — 5 ValueSets, 4 CodeSystems
│   ├── /lab/resource-builder                ← Stub (planned)
│   ├── /lab/synthetic-data                  ← Stub (planned)
│   └── /lab/profile-explorer               ← Stub (planned)
├── /learn/                                  ← Learn index (6 track cards)
│   ├── /learn/fhir-foundations              ← Track 1 — full article + core resources links
│   ├── /learn/resources                     ← Article index (no top-level card, still accessible)
│   │   ├── /learn/resources/observation
│   │   ├── /learn/resources/condition
│   │   ├── /learn/resources/encounter
│   │   ├── /learn/resources/search
│   │   └── /learn/resources/bundle
│   ├── /learn/profiling                     ← Profiling & Conformance track index
│   │   ├── /learn/profiling/profile
│   │   ├── /learn/profiling/validation
│   │   ├── /learn/profiling/standards-comparison
│   │   └── /learn/profiling/conformance
│   ├── /learn/terminology                   ← Terminology track index
│   │   └── /learn/terminology/why-terminologies-matter
│   ├── /learn/ehds                          ← EHDS and EHRxF track index
│   │   ├── /learn/ehds/fhir-and-ehds
│   │   ├── /learn/ehds/international-patient-summary
│   │   └── /learn/ehds/compliance-timeline
│   ├── /learn/privacy                       ← Data Privacy in FHIR (single article track)
│   └── /learn/slovak                        ← Slovak Interoperability track
│       └── (links to /learn/ehds/compliance-timeline + Phase 7–8 stubs)
├── /reference/                              ← 25 entries, 5 grouped categories, search + filter
│   └── /reference/[slug]                   ← 25 entry pages
├── /about/                                  ← What FHIR.sk is/isn't, contact form
├── /copyright/                              ← Third-party terminology acknowledgments
├── /disclaimer/
└── /newsletter/
```

## Redirects (permanent 308)

| From | To |
|------|----|
| `/learn/roadmap` | `/learn` |
| `/roadmap` | `/learn/roadmap` → `/learn` |
| `/fhir` | `/learn/fhir-foundations` |

Defined in `apps/web/next.config.mjs`.

---

## Lab

**Purpose:** Practical experimentation and interoperability tooling.

**Rule:** Lab implies interactivity. Stubs must clearly communicate "planned" without implying functionality exists.

### Modules

| Module | Status | Route | Purpose |
|--------|--------|-------|---------|
| Mock Server | Live | /lab/mock-server | 9 FHIR API endpoints, access request form |
| Validator | Live | /lab/validator | JSON validation, 3 profiles, OperationOutcome |
| Terminology Explorer | Live | /lab/terminology-explorer | 5 ValueSets, 4 CodeSystems |
| Resource Builder | Planned | /lab/resource-builder | Create/edit FHIR R4 resources |
| Synthetic Data | Planned | /lab/synthetic-data | Generate synthetic FHIR datasets |
| Profile Explorer | Planned | /lab/profile-explorer | StructureDefinition inspector |

**Homepage display:** Show 3 live modules only (Mock Server, Validator, Terminology Explorer).

---

## Learn

**Purpose:** Practical guides, examples and implementation knowledge.

**Core question:** How do I do this?

### Tracks (current 6 top-level cards)

| Track | Route | Articles |
|-------|-------|---------|
| FHIR Foundations | /learn/fhir-foundations | 1 article + core resources links |
| Slovak Interoperability | /learn/slovak | 1 live + Phase 7–8 upcoming |
| Profiling & Conformance | /learn/profiling | 4 articles |
| Terminology | /learn/terminology | 1 article |
| EHDS and EHRxF | /learn/ehds | 3 articles |
| Data Privacy in FHIR | /learn/privacy | 1 article |

**Note:** Core Resources (/learn/resources) is no longer a top-level card. Articles remain accessible and are linked from /learn/fhir-foundations.

### Article navigation

`ArticleNav` client component appended to every multi-article track page. Resolves prev/next from `lib/learn-tracks.ts`. Tracks with ordering defined: resources (5), profiling (4), ehds (3).

---

## Reference

**Purpose:** Concise definitions — answers *what is this*.

**Architecture:** `page.tsx` (server component, metadata) imports `ReferenceList` (client component, search + filter). Data lives in `lib/reference-data.ts`.

### Categories (5 groups)

| Category | Color | Entries |
|----------|-------|---------|
| Core Concepts | teal | FHIR, Resource, REST API, Search, Bundle, CapabilityStatement, OperationOutcome, FHIRPath |
| Clinical Resources | blue | Patient, Observation, Condition, Encounter, MedicationRequest |
| Profiling & Conformance | violet | Profile, StructureDefinition, Extension, Must-Support, Slicing, Implementation Guide, Validation |
| Terminology | amber | ValueSet, CodeSystem |
| Related Standards | slate | HL7 v2, CDA, SMART on FHIR |

**Features:** Real-time search (title + summary), AND difficulty filter (Beginner/Intermediate/Advanced), category anchor links, "New" badge (<30 days), "See also" links, left border accent by category.

---

## Homepage Structure

| # | Section | Notes |
|---|---------|-------|
| 1 | Hero | Title + subtitle + 2 CTAs: "Open Lab →" (primary), "Learn →" (text-only) |
| 2 | Disclaimer | Amber banner — under construction, synthetic data, no affiliation |
| 3 | Lab Modules | 3 live modules only |
| 4 | Learn Tracks | 6 track cards |

Newsletter section removed — covered by footer Connect column.

---

## Learn / Reference Separation

| User question | Goes to |
|--------------|---------|
| How do I create a Patient resource? | Learn |
| What is a Patient resource? | Reference |
| How do I use SNOMED CT in FHIR? | Learn |
| What is SNOMED CT? | Reference |
| How do I validate a Bundle? | Learn |
| What is a Bundle? | Reference |

Learn links to Reference entries for definitions. Reference does not link to Learn how-tos.

---

## Vercel Configuration

- Root directory: `apps/web` (set in Vercel project settings)
- Domain: fhir.sk (DNS: Websupport.sk → ns1/ns2.vercel-dns.com, DNSSEC disabled)
- Preview: fhir-sk.vercel.app
