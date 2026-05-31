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
│       ├── components/       ← Header, Footer
│       └── lib/
│           ├── site.ts       ← siteConfig, navLinks
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
| Web frontend | Next.js 16, App Router, TypeScript, Tailwind CSS v3 |
| Web deploy | Vercel (root directory: `apps/web`) |
| FHIR server | HAPI FHIR R4 (`hapiproject/hapi:v7-tomcat`) |
| Database | PostgreSQL 16 |
| Local infra | Docker Compose |
| Cloud infra | Railway |
| FHIR version | R4 (primary), R4B noted where relevant, R5 monitoring |

---

## Web App (apps/web)

### Routes

| Route | Status | Description |
|-------|--------|-------------|
| `/` | ✅ Live | Homepage: hero, 4 feature cards, Phase 1 status, disclaimer |
| `/fhir` | ✅ Live | What is HL7 FHIR R4 — concepts, REST, Resources, Bundles |
| `/roadmap` | ✅ Live | 8-phase roadmap with status badges |
| `/about` | ✅ Live | Philosophy, objectives, tech stack, what it is NOT |
| `/disclaimer` | ✅ Live | Synthetic data notice, no affiliation, legal |
| `/sitemap.xml` | ✅ Live | Auto-generated |
| `/robots.txt` | ✅ Live | Auto-generated |

### Planned routes (future phases)
- `/docs` — documentation hub (Phase 2+)
- `/examples` — interactive FHIR resource explorer (Phase 3+)
- `/status` — lab services status (Phase 2+)

### Version management

Version is defined in `apps/web/lib/version.ts`:
- `VERSION` — semantic version string (e.g. "0.1.0")
- `VERSION_NAME` — human name (e.g. "Foundation")
- `CHANGELOG` — array of version entries with date and changes

**Rule: update version.ts + package.json after every meaningful deployment.**

Current version: **0.1.0 "Foundation"**

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
| Web (production) | https://fhir.sk | DNS pending |
| Web (preview) | https://fhir-sk.vercel.app | ✅ Live |
| HAPI FHIR (cloud) | https://hapi.fhir.sk | ❌ Not deployed |
| GitHub | https://github.com/avantlehq/fhir-sk | ✅ |

**DNS:** fhir.sk registered at Websupport.sk, NS pointed to Vercel (ns1.vercel-dns.com).
**Vercel root directory:** `apps/web` — must be set in Vercel project settings.

---

## Roadmap

### Phase 1 — FHIR Foundations (IN PROGRESS)
- Deploy HAPI FHIR locally
- Patient CRUD via Postman
- CapabilityStatement understanding
- First Transaction Bundle
- Synthetic dataset
- **Deliverable:** Running local FHIR server with working examples

### Phase 2 — Core Healthcare Resources (PLANNED)
- Patient, Practitioner, Organization, Encounter, Observation, Condition
- Resource relationships
- **Deliverable:** Synthetic healthcare dataset

### Phase 3 — Profiling and Validation (PLANNED)
- StructureDefinition, Profiles, Extensions
- FHIR Validator
- Implementation Guides
- **Deliverable:** First custom FHIR profile

### Phase 4 — Terminology Services (PLANNED)
- SNOMED CT, LOINC, ICD-10, ICD-11
- ValueSets, CodeSystems, ConceptMaps
- **Deliverable:** Basic terminology environment

### Phase 5 — Healthcare Integration Patterns (PLANNED)
- Clinical workflows, event patterns
- API design patterns
- **Deliverable:** Reference interoperability scenarios

### Phase 6 — EHDS and EHRxF (PLANNED)
- Patient Summary, ePrescription, eDispensation
- MyHealth@EU, Provenance, Audit
- **Deliverable:** EHDS-aligned examples

### Phase 7 — Interoperability Architecture (PLANNED)
- IAM, Consent, Governance, Registry patterns
- **Deliverable:** Healthcare interoperability architecture lab

### Phase 8 — Advanced Experiments (PLANNED)
- Terminology server, advanced validation
- Synthetic data generation
- AI-assisted FHIR mapping
- **Deliverable:** Advanced interoperability playground

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
