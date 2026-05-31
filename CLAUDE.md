# CLAUDE.md — fhir-sk

## Project Overview

FHIR.sk is a FHIR Interoperability Lab — a personal learning and experimentation platform for HL7 FHIR R4, synthetic healthcare data, and EHDS concepts.

**Primary objective:** Become a practical expert in HL7 FHIR, healthcare interoperability, and EHDS through hands-on implementation.

## What this IS

- FHIR Interoperability Lab
- Learning environment
- Test environment with synthetic data
- EHDS experimentation environment

## What this is NOT

- Production healthcare system
- EHR platform
- National platform
- Affiliated with NCZI, HL7 Slovakia, Ministry of Health
- Uses real patient data (NEVER)

## Monorepo Structure

```
apps/web/          ← Next.js 15, TypeScript, Tailwind CSS, Vercel
infra/hapi/        ← HAPI FHIR R4, Docker Compose, PostgreSQL, Railway
examples/          ← Synthetic FHIR R4 resources (JSON)
postman/           ← Postman collections
docs/              ← Architecture notes (Markdown)
```

## Tech Stack

- **Frontend:** Next.js 15, App Router, TypeScript, Tailwind CSS v3
- **FHIR Server:** HAPI FHIR R4 (hapiproject/hapi:v7-tomcat)
- **Database:** PostgreSQL 16
- **Infra:** Docker Compose (local), Railway (cloud)
- **Deploy web:** Vercel (root directory: apps/web)

## FHIR Version

**R4** (primary). R4B compatibility noted where relevant. R5 monitoring only.

## Language

English-only for now. Slovak (sk) planned as future addition — do NOT implement i18n yet, but keep content in components ready for extraction.

## Core Philosophy

1. Learn by implementation — build before discussing theory
2. Architecture before coding — always explain WHY
3. Simplicity first — Docker Compose, not Kubernetes
4. FHIR first — everything built on FHIR
5. AI last — AI comes after mastering FHIR foundations

## Domain & Deployment

- Web: https://fhir.sk (Vercel)
- HAPI FHIR: Railway (https://hapi.fhir.sk or Railway URL)
- GitHub: https://github.com/avantlehq/fhir-sk
- Domain registered: fhir.sk

## Vercel Configuration

Vercel root directory must be set to `apps/web` (not monorepo root).

## Roadmap Phases

- Phase 1: FHIR Foundations — IN PROGRESS
- Phase 2: Core Healthcare Resources — PLANNED
- Phase 3: Profiling and Validation — PLANNED
- Phase 4: Terminology Services — PLANNED
- Phase 5: Healthcare Integration Patterns — PLANNED
- Phase 6: EHDS and EHRxF — PLANNED
- Phase 7: Interoperability Architecture — PLANNED
- Phase 8: Advanced Experiments — PLANNED

## Synthetic Data Rule

NEVER use real patient data. All examples use synthetic data with clearly fictional names and identifiers.
