# CLAUDE.md — fhir-sk

## Project Overview

**FHIR.sk** is a FHIR Interoperability Lab — a personal learning and experimentation platform for HL7 FHIR R4, synthetic healthcare data, and EHDS concepts.

**Primary objective:** Become a practical expert in HL7 FHIR, healthcare interoperability, and EHDS through hands-on implementation.

**Philosophy:** Learn by building. Every implementation must answer: why does this exist, which problem does it solve, how is it used in real healthcare systems.

---

## What this IS / IS NOT

**IS:**
- FHIR Interoperability Lab
- Personal learning environment
- Test and experimentation platform
- EHDS concept exploration environment
- Synthetic healthcare dataset platform

**IS NOT:**
- Production healthcare system
- EHR or hospital information system
- National healthcare platform
- Affiliated with NCZI, HL7 Slovakia, Ministry of Health, or any institution
- A system that uses real patient data (NEVER, under any circumstances)

---

## Monorepo Structure

```
fhir-sk/
├── apps/
│   └── web/                  ← Next.js 16 web app (Vercel)
│       ├── app/              ← App Router pages
│       │   ├── lab/          ← /lab index + 6 module stubs
│       │   ├── learn/        ← /learn index + roadmap + fhir-foundations + 4 stubs
│       │   ├── about/
│       │   └── disclaimer/
│       ├── components/       ← Header, Footer, StatusBadge, ModuleCard, LearningCard, SectionHeader
│       └── lib/
│           ├── site.ts       ← siteConfig, navLinks (Lab / Learn / About)
│           └── version.ts    ← VERSION, VERSION_NAME, CHANGELOG
├── infra/
│   └── hapi/                 ← HAPI FHIR R4 Docker Compose + PostgreSQL
│       ├── docker-compose.yml
│       ├── application.yaml  ← HAPI FHIR config
│       └── README.md
├── examples/
│   ├── patients/             ← Synthetic Patient resources (JSON)
│   ├── observations/         ← Synthetic Observation resources (JSON)
│   └── bundles/              ← Transaction/batch Bundles (JSON)
├── postman/                  ← Postman Collection v2.1
└── docs/                     ← Learning notes, architecture docs (Markdown)
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Web frontend | Next.js 16.2.6, App Router, TypeScript, Tailwind CSS v3 |
| Web deploy | Vercel (root directory: `apps/web`) |
| FHIR server | HAPI FHIR R4 (`hapiproject/hapi:v7-tomcat`) |
| Database | PostgreSQL 16 |
| Local infra | Docker Compose |
| Cloud infra | Railway (planned) |
| FHIR version | R4 (primary), R4B noted where relevant, R5 monitoring |

---

## Web App (apps/web)

### Navigation

Three top-level sections: **Lab** (`/lab`), **Learn** (`/learn`), **About** (`/about`).

### Routes

| Route | Status | Description |
|-------|--------|-------------|
| `/` | ✅ Live | Homepage: hero, Lab/Learn overview, lab modules preview, disclaimer |
| `/lab` | ✅ Live | Lab index with 6 module cards |
| `/lab/mock-server` | ✅ Stub | HAPI FHIR R4 mock server |
| `/lab/resource-builder` | ✅ Stub | Create/edit FHIR R4 resources |
| `/lab/validator` | ✅ Stub | Validate FHIR JSON/XML |
| `/lab/synthetic-data` | ✅ Stub | Generate synthetic FHIR datasets |
| `/lab/terminology-explorer` | ✅ Stub | Explore CodeSystem/ValueSet/ConceptMap |
| `/lab/profile-explorer` | ✅ Stub | Inspect StructureDefinitions and EHDS profiles |
| `/learn` | ✅ Live | Learn index with 5 learning path cards |
| `/learn/roadmap` | ✅ Live | 8-phase roadmap with status badges |
| `/learn/fhir-foundations` | ✅ Live | What is HL7 FHIR R4 — concepts, REST, Resources, Bundles |
| `/learn/resources` | ✅ Stub | Core healthcare resources |
| `/learn/profiling` | ✅ Stub | Profiling and validation |
| `/learn/terminology` | ✅ Stub | Terminology services |
| `/learn/ehds` | ✅ Stub | EHDS and EHRxF |
| `/about` | ✅ Live | Philosophy, objectives, tech stack, what it is NOT |
| `/disclaimer` | ✅ Live | Synthetic data notice, no affiliation, legal |
| `/sitemap.xml` | ✅ Live | Auto-generated (17 routes) |
| `/robots.txt` | ✅ Live | Auto-generated |

### Redirects (permanent 308)

| Old URL | New URL |
|---------|---------|
| `/roadmap` | `/learn/roadmap` |
| `/fhir` | `/learn/fhir-foundations` |

Defined in `apps/web/next.config.mjs`.

### Components

| Component | Location | Description |
|-----------|----------|-------------|
| `Header` | `components/Header.tsx` | Top nav: Lab / Learn / About |
| `Footer` | `components/Footer.tsx` | Nav links, version display |
| `StatusBadge` | `components/StatusBadge.tsx` | "In Progress" / "Planned" / "Live" badge |
| `ModuleCard` | `components/ModuleCard.tsx` | Lab module card with status badge |
| `LearningCard` | `components/LearningCard.tsx` | Learn section card |
| `SectionHeader` | `components/SectionHeader.tsx` | Section heading with label/description |

### Version management

Version is defined in `apps/web/lib/version.ts`:
- `VERSION` — semantic version string
- `VERSION_NAME` — human name
- `CHANGELOG` — array of version entries with date and changes

**Rule: update version.ts + package.json after every meaningful deployment.**

Current version: **0.2.0 "Lab Architecture"**

### Design system

- Font: Inter (Google Fonts)
- Colors: slate-900 (primary dark), teal-600 (accent), white/slate-50 (surfaces)
- Style: clean, technical, developer-oriented
- No animations, no shadcn/ui, no unnecessary dependencies

---

## HAPI FHIR Server (infra/hapi)

### Local setup

```bash
cd infra/hapi
docker compose up -d
# FHIR endpoint: http://localhost:8080/fhir
# CapabilityStatement: http://localhost:8080/fhir/metadata
```

### Configuration

- FHIR version: R4
- Database: PostgreSQL 16
- Default encoding: JSON
- CORS: enabled (all origins, for lab use)
- Pretty print: enabled

### Cloud deployment

- Provider: **Railway**
- Planned subdomain: `hapi.fhir.sk`
- Status: NOT YET DEPLOYED

### RAM requirements

Minimum 1 GB RAM. Railway plan must accommodate this.

---

## Examples (examples/)

All examples use **synthetic data only**. Fictional names and identifiers.

| File | Resource | Description |
|------|----------|-------------|
| `patients/patient-example.json` | Patient | John Doe, synthetic Slovak address |
| `observations/observation-example.json` | Observation | Body weight, LOINC 29463-7, 75 kg |
| `bundles/bundle-transaction.json` | Bundle | Transaction: Patient + Observation |

---

## Postman (postman/)

Collection: `FHIR-R4-Foundations.postman_collection.json`

Variable: `base_url` = `http://localhost:8080/fhir`

Requests: CapabilityStatement, Patient CRUD, Search, Transaction Bundle, Observation.

---

## Domain & Deployment

| Resource | URL | Status |
|----------|-----|--------|
| Web (production) | https://fhir.sk | DNS pending propagation |
| Web (preview) | https://fhir-sk.vercel.app | ✅ Live |
| HAPI FHIR (cloud) | https://hapi.fhir.sk | ❌ Not deployed |
| GitHub | https://github.com/avantlehq/fhir-sk | ✅ |

**DNS:** fhir.sk registered at Websupport.sk, NS pointed to Vercel (ns1.vercel-dns.com). DNSSEC disabled (Vercel does not support it).
**Vercel root directory:** `apps/web` — must be set in Vercel project settings.

---

## Phase 1 Status — FHIR Foundations (IN PROGRESS)

Web infrastructure done (v0.2.0). FHIR server work not yet started.

- [x] Web app deployed to Vercel
- [x] Domain DNS configured (NS → Vercel)
- [x] Information architecture (Lab / Learn / About)
- [ ] Deploy HAPI FHIR locally via Docker Compose
- [ ] Patient CRUD via Postman
- [ ] Read and interpret CapabilityStatement
- [ ] POST a transaction Bundle
- [ ] Complete Phase 1 learning notes (docs/phase-1-notes.md)

**Next step: `cd infra/hapi && docker compose up -d`, then run Postman collection.**

---

## Roadmap Summary

| Phase | Name | Status |
|-------|------|--------|
| 1 | FHIR Foundations | In Progress |
| 2 | Core Healthcare Resources | Planned |
| 3 | Profiling and Validation | Planned |
| 4 | Terminology Services | Planned |
| 5 | Healthcare Integration Patterns | Planned |
| 6 | EHDS and EHRxF | Planned |
| 7 | Interoperability Architecture | Planned |
| 8 | Advanced Experiments | Planned |

Full roadmap at `/learn/roadmap`.

---

## Core Rules

1. **Synthetic data only.** NEVER use real patient data.
2. **FHIR R4 first.** All resources must be valid R4.
3. **Simplicity first.** Docker Compose, not Kubernetes.
4. **Architecture before coding.** Always explain WHY before HOW.
5. **AI last.** AI features come only after Phase 5+.
6. **English content.** Slovak i18n planned but not implemented yet.
7. **Version bump on every meaningful deploy.** Update `version.ts` + `package.json`.

---

## Broader Ecosystem Context

- `fhir.sk` — this project (FHIR Interoperability Lab)
- `dpia.sk` — Slovak DPIA content portal (separate project)
- `avantle.ai` — parent organization marketing site
- `dpia.ai` — future SaaS product for DPIA creation
