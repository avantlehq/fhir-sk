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
│       │   ├── api/fhir/     ← Mock FHIR REST API (7 resource routes)
│       │   ├── api/validate/ ← POST /api/validate — OperationOutcome response
│       │   ├── lab/          ← /lab index + 3 active modules + 3 stubs
│       │   ├── learn/        ← /learn + resources/ + profiling/ + terminology/ + ehds/
│       │   ├── reference/    ← /reference + 25 entry pages
│       │   ├── about/
│       │   └── disclaimer/
│       ├── components/       ← Header, Footer, StatusBadge, ModuleCard, LearningCard, SectionHeader
│       └── lib/
│           ├── site.ts       ← siteConfig, navLinks (Lab / Learn / Reference / About)
│           ├── version.ts    ← VERSION, VERSION_NAME, CHANGELOG
│           ├── fhir-mock/    ← Static FHIR data: Patient, Condition, Encounter, MedicationRequest,
│           │   index.ts         Observation, AllergyIntolerance, IPS Bundle, CapabilityStatement
│           └── fhir-terminology.ts ← Static ValueSets + CodeSystems (5 + 4)
├── infra/
│   └── hapi/                 ← HAPI FHIR R4 Docker Compose + PostgreSQL
│       ├── docker-compose.yml
│       ├── application.yaml  ← HAPI FHIR config
│       └── README.md
├── examples/
│   ├── patients/             ← Synthetic resources: Patient, AllergyIntolerance,
│   │                            Consent, AuditEvent, Provenance
│   ├── observations/         ← Synthetic Observation resources
│   ├── profiles/             ← FhirSkPatient StructureDefinition (v0.2.0)
│   └── bundles/              ← Transaction Bundle (Phase 2), IPS Document Bundle (Phase 5)
├── postman/                  ← Postman Collection v2.1
└── docs/                     ← Learning notes and architecture docs
    ├── vision.md
    ├── architecture.md
    ├── phases.md             ← Phase status (Phases 1–6 complete, Phase 7 next)
    ├── design.md
    ├── phase-1-notes.md
    ├── phase-3-notes.md
    ├── phase-5-notes.md
    └── phase-6-notes.md
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Web frontend | Next.js 16, App Router, TypeScript, Tailwind CSS v3 |
| Web deploy | Vercel (root directory: `apps/web`) |
| FHIR server | HAPI FHIR R4 (`hapiproject/hapi:v7-tomcat`) |
| Database | PostgreSQL 16 |
| Local infra | Docker Compose |
| Cloud infra | Railway (planned for HAPI cloud deploy) |
| FHIR version | R4 (primary) |

---

## Web App (apps/web)

### Navigation

Four top-level sections: **Lab** (`/lab`), **Learn** (`/learn`), **Reference** (`/reference`), **About** (`/about`).

### Routes

| Route | Status | Description |
|-------|--------|-------------|
| `/` | ✅ Live | Homepage: hero, lab modules, learning roadmap, newsletter |
| `/lab` | ✅ Live | Lab index with 6 module cards |
| `/lab/mock-server` | ✅ Live | Mock FHIR REST API — 9 endpoints, curl examples |
| `/lab/validator` | ✅ Live | Validate FHIR JSON — 3 profiles, OperationOutcome display |
| `/lab/terminology-explorer` | ✅ Live | Browse ValueSets and CodeSystems — static data |
| `/lab/resource-builder` | 🔧 Stub | Planned: create/edit FHIR R4 resources |
| `/lab/synthetic-data` | 🔧 Stub | Planned: generate synthetic FHIR datasets |
| `/lab/profile-explorer` | 🔧 Stub | Planned: inspect StructureDefinitions |
| `/learn` | ✅ Live | Learn index with 5 track cards |
| `/learn/roadmap` | ✅ Live | 8-phase roadmap with status badges |
| `/learn/fhir-foundations` | ✅ Live | What is HL7 FHIR R4 — concepts, REST, Resources, Bundles |
| `/learn/resources` | ✅ Live | Article index: Observation, Condition, Encounter, Search, Bundle |
| `/learn/resources/observation` | ✅ Live | Observation deep-dive |
| `/learn/resources/condition` | ✅ Live | Condition deep-dive |
| `/learn/resources/encounter` | ✅ Live | Encounter deep-dive |
| `/learn/resources/search` | ✅ Live | FHIR search parameter types |
| `/learn/resources/bundle` | ✅ Live | Transaction vs batch, urn:uuid references |
| `/learn/profiling` | ✅ Live | Article index: Profile, Validation, Standards comparison, Conformance |
| `/learn/profiling/profile` | ✅ Live | What is a Profile |
| `/learn/profiling/validation` | ✅ Live | Validation and OperationOutcome |
| `/learn/profiling/standards-comparison` | ✅ Live | HL7 v2 vs CDA vs FHIR |
| `/learn/profiling/conformance` | ✅ Live | Conformance, CapabilityStatement, governance resources |
| `/learn/terminology` | ✅ Live | Article index: Why Terminologies Matter |
| `/learn/terminology/why-terminologies-matter` | ✅ Live | CodeSystem, ValueSet, binding, SNOMED vs LOINC |
| `/learn/ehds` | ✅ Live | Article index: FHIR and EHDS, International Patient Summary |
| `/learn/ehds/fhir-and-ehds` | ✅ Live | EHDS regulation 2025/327, EHRxF, MyHealth@EU |
| `/learn/ehds/international-patient-summary` | ✅ Live | IPS Composition, sections, document Bundle |
| `/reference` | ✅ Live | 25 entries in 5 groups |
| `/reference/[slug]` | ✅ Live | 25 individual reference pages |
| `/about` | ✅ Live | Philosophy, objectives, tech stack, what it is NOT |
| `/disclaimer` | ✅ Live | Synthetic data notice, no affiliation, legal |

### Mock FHIR API routes (apps/web/app/api/fhir/)

| Method | Route | Returns |
|--------|-------|---------|
| GET | `/api/fhir/metadata` | CapabilityStatement |
| GET | `/api/fhir/Patient` | searchset Bundle |
| GET | `/api/fhir/Patient/[id]` | Patient or OperationOutcome 404 |
| GET | `/api/fhir/Condition` | searchset Bundle |
| GET | `/api/fhir/Encounter` | searchset Bundle |
| GET | `/api/fhir/MedicationRequest` | searchset Bundle |
| GET | `/api/fhir/Observation` | searchset Bundle |
| GET | `/api/fhir/AllergyIntolerance` | searchset Bundle (patient= filter) |
| GET | `/api/fhir/Bundle/[id]` | IPS Document Bundle or 404 |
| POST | `/api/validate` | OperationOutcome (3 profiles) |

### Validator profiles (POST /api/validate)

| profile value | Validates |
|---------------|-----------|
| `base` | Structural FHIR R4 — resourceType, id, meta |
| `fhirsk-patient` | FhirSkPatient v0.2.0 — identifier, name, gender (with binding), birthDate |
| `fhirsk-allergy` | AllergyIntolerance — clinicalStatus, verificationStatus, code, patient |

### Version management

Version is defined in `apps/web/lib/version.ts`:
- `VERSION` — semantic version string
- `VERSION_NAME` — human name
- `CHANGELOG` — array of version entries with date and changes

**Rule: update version.ts + package.json after every deployment. No exceptions.**

Current version: **1.4.0 "Phase 6 — Governance and Consolidation"**

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

### patients/

| File | Resource | Description |
|------|----------|-------------|
| `patient-example.json` | Patient | John Doe, synthetic Slovak address |
| `allergy-intolerance-example.json` | AllergyIntolerance | Amoxicillin allergy, high criticality |
| `consent-example.json` | Consent | GDPR opt-in, treatment permit, marketing deny |
| `audit-event-example.json` | AuditEvent | IPS document read — DICOM audit trail |
| `provenance-example.json` | Provenance | IPS document authorship and assembly |

### observations/

| File | Resource | Description |
|------|----------|-------------|
| `observation-example.json` | Observation | Body weight, LOINC 29463-7, 75 kg |

### profiles/

| File | Resource | Description |
|------|----------|-------------|
| `fhirsk-patient.json` | StructureDefinition | FhirSkPatient v0.2.0 — Slovak national ID, name, gender (with binding), birthDate required |

### bundles/

| File | Resource | Description |
|------|----------|-------------|
| `bundle-transaction.json` | Bundle | Transaction: Patient + Observation |
| `bundle-phase2-clinical.json` | Bundle | Transaction: Patient + Condition + Encounter + MedicationRequest |
| `ips-patient-summary.json` | Bundle | IPS Document Bundle: 9 entries, 4 sections, Jana Horváth |

---

## Domain & Deployment

| Resource | URL | Status |
|----------|-----|--------|
| Web (production) | https://fhir.sk | ✅ Live (DNS via Vercel) |
| Web (preview) | https://fhir-sk.vercel.app | ✅ Live |
| HAPI FHIR (cloud) | https://hapi.fhir.sk | ❌ Not deployed |
| GitHub | https://github.com/avantlehq/fhir-sk | ✅ |

**Vercel root directory:** `apps/web` — must be set in Vercel project settings.

---

## Phase Status

| Phase | Name | Status | Version |
|-------|------|--------|---------|
| 1 | FHIR Foundations | ✅ Complete | v0.5.0 |
| 2 | Core Clinical Resources | ✅ Complete | v0.7.0 |
| 3 | Profiling and Validation | ✅ Complete | v1.1.0 |
| 4 | Terminologies | ✅ Complete | v1.2.0 |
| 5 | EHDS and EHRxF | ✅ Complete | v1.3.0 |
| 6 | Governance and Consolidation | ✅ Complete | v1.4.0 |
| 7 | Slovak eHealth Analysis | 🔄 In Progress | — |
| 8 | FHIR Mapping | 🔲 Planned | — |
| 9 | Slovak FHIR Profiles | 🔲 Planned | — |
| 10 | Architecture Patterns | 🔲 Planned | — |
| 11 | Implementation Guide + Terminology Architecture | 🔲 Planned | — |

Phases 7–11: eHealth Analysis → Mapping → Profiles → Architecture → IG + Terminology.
Full details in `docs/phases.md`.

---

## Core Rules

1. **Synthetic data only.** NEVER use real patient data.
2. **FHIR R4 first.** All resources must be valid R4.
3. **Simplicity first.** Docker Compose, not Kubernetes.
4. **Architecture before coding.** Always explain WHY before HOW.
5. **AI last.** AI features come only after Phase 5+.
6. **English content.** Slovak i18n planned but not implemented yet.
7. **Version bump on every deploy.** Every commit pushed to production MUST bump the version in `apps/web/lib/version.ts` (VERSION, VERSION_NAME, CHANGELOG entry) and `apps/web/package.json`. No deploy without a version bump. No exceptions.
8. **Docs update before commit.** Any commit that changes IA, navigation, design system, or phase plan must also update the relevant file in `docs/` in the same commit. Code and docs stay in sync.

## Project Docs

Strategic and design documentation lives in `docs/`. Always read before making structural decisions.

| File | Purpose |
|------|---------|
| `docs/vision.md` | What the project is, positioning, scope, content principles |
| `docs/architecture.md` | IA, navigation, routes, homepage structure, Learn/Reference separation |
| `docs/phases.md` | 8 phases, current status, success criteria |
| `docs/design.md` | Colors, typography, components, tone, dependencies |
| `docs/phase-1-notes.md` | FHIR learning notes for Phase 1 |
| `docs/phase-3-notes.md` | Profiling and validation notes |
| `docs/phase-5-notes.md` | EHDS, IPS, AllergyIntolerance notes |
| `docs/phase-6-notes.md` | Governance resources, conformance, consolidation notes |

---

## Broader Ecosystem Context

- `fhir.sk` — this project (FHIR Interoperability Lab)
- `dpia.sk` — Slovak DPIA content portal (separate project)
- `avantle.ai` — parent organization marketing site
- `dpia.ai` — future SaaS product for DPIA creation
