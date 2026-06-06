# FHIR.sk — Phases

Last revised: 2026-06-06

---

## Current Status

**Active phase:** Phase 1 — FHIR Foundations (In Progress)

Web infrastructure complete (v0.4.0). FHIR server work not yet started.

---

## Timeline

### Year 1 — Interoperability Foundations

| Month | Primary Phase | Secondary |
|-------|--------------|-----------|
| 1 | Phase 1 — FHIR Foundations | — |
| 2 | Phase 2 — Core Clinical Resources | Reference nav added (10+ entries) |
| 3 | Phase 3 — Profiles and Validation | — |
| 4 | Phase 4 — Terminologies | Phase 5 intro |
| 5 | Phase 5 — EHDS and EHRxF | Phase 6 start |
| 6 | Phase 6 — Governance and Conformance | Analytics PoC, Phase 7/8 concepts |

**Rule: Do not open a new phase before the current phase success criteria are complete.**

### Year 2 — Analytics and AI

| Phase | Topic |
|-------|-------|
| Phase 7 | Analytics and Secondary Use |
| Phase 8 | AI over FHIR |

---

## 6-Month Targets (End of Year 1)

### Web

Navigation: `Lab | Learn | Reference | About`

Reference added in Month 2 — not before. Empty nav section is not acceptable.

### Lab

Three functional tools:

| Module | Target |
|--------|--------|
| Mock Server | MVP |
| Validator | MVP |
| Synthetic Data | MVP |

No Terminology Explorer, no Conformance Lab, no Analytics Lab in Year 1.

### Learn

15–25 articles across Tracks 1–5.

### Reference

20–30 entries. Not 60.

### Analytics

One demonstration scenario only — not a lab module:

```
Patient + Observation
↓
FHIR (HAPI FHIR)
↓
PostgreSQL
↓
Power BI (one dashboard)
```

No OMOP. No BigQuery. No AI.

### Infrastructure

HAPI FHIR + Docker + PostgreSQL — stable and documented.

---

## Phase 1 — FHIR Foundations

**Status:** In Progress

**Month:** 1

**Goal:** Deploy HAPI FHIR locally, perform basic CRUD, understand CapabilityStatement and Bundles.

### Success Criteria

- [x] Web app deployed to Vercel (fhir-sk.vercel.app)
- [x] Domain DNS configured (fhir.sk → Vercel NS)
- [x] Information architecture: Lab / Learn / About
- [x] Homepage: 4 sections (v0.4.0)
- [x] fhir.sk DNS resolves (Vercel, www.fhir.sk primary, fhir.sk → www redirect)
- [x] HAPI FHIR running locally via Docker Compose (curl, not Postman)
- [x] Synthetic Patient: CRUD complete (curl, 2026-06-06)
- [x] CapabilityStatement read and understood
- [x] Transaction Bundle processed successfully (2026-06-06)
- [x] All 7 review questions answered (docs/phase-1-notes.md)

### Content (Track 1)

- [ ] What is FHIR
- [ ] FHIR Resource
- [ ] Patient Resource
- [ ] REST API Basics
- [ ] HAPI FHIR Setup

### Next Immediate Step

```
cd infra/hapi && docker compose up -d
# endpoint: http://localhost:8080/fhir
```

---

## Phase 2 — Core Clinical Resources

**Status:** Planned

**Month:** 2

**Goal:** Work with Observation, Condition, Encounter, MedicationRequest. First Mock Server prototype.

### Success Criteria

- [ ] Synthetic dataset: Patient + Observation + Condition + Encounter
- [ ] All resources valid FHIR R4
- [ ] Transaction Bundle with multiple resource types
- [ ] Mock Server MVP running

### Content (Track 1)

- [ ] Observation
- [ ] Condition
- [ ] Encounter
- [ ] Search
- [ ] Bundle

### Reference (first 10 entries)

FHIR, Resource, Patient, Observation, Bundle, Profile, REST API, Search, Validation, CapabilityStatement

### Navigation change

Add `Reference` to nav when 10+ entries exist.

---

## Phase 3 — Profiles and Validation

**Status:** Planned

**Month:** 3

**Goal:** Understand StructureDefinitions, validate resources against profiles. Validator MVP.

### Success Criteria

- [ ] Simple profile created and validated against
- [ ] Validator MVP: JSON validation, profile validation, bundle validation
- [ ] Learn article: What is a Profile

### Content

Track 1: Profiles, StructureDefinition, Validation, CapabilityStatement

Track 2: HL7 v2, CDA, FHIR comparison

### Reference

+15 new entries

---

## Phase 4 — Terminologies

**Status:** Planned

**Month:** 4 (+ Phase 5 intro)

**Goal:** Use SNOMED CT and LOINC in resources. ValueSet Viewer over static data.

### Success Criteria

- [ ] Resources coded with SNOMED CT and LOINC
- [ ] ValueSet referenced in a profile
- [ ] Terminology Explorer MVP: ValueSet Viewer and CodeSystem Explorer over static data
- [ ] Learn article: Why Terminologies Matter

### Terminology Explorer scope

Static data only. No Snowstorm, no Ontoserver, no full SNOMED CT server in Year 1.

Acceptable MVP: ValueSet Viewer + CodeSystem Explorer using bundled static JSON.

### Content (Track 3)

SNOMED CT, LOINC, ValueSet, CodeSystem

### Reference

Terminologies and EHDS expansion

---

## Phase 5 — EHDS and EHRxF

**Status:** Planned

**Month:** 4 (intro) — 5 (primary)

**Goal:** Understand EHDS regulation, EHRxF, Patient Summary (IPS), ePrescription.

### Success Criteria

- [ ] Synthetic IPS-compliant Patient Summary created
- [ ] EHDS compliance checklist understood
- [ ] Learn article: FHIR and EHDS

### Content (Track 4)

EHDS, EHRxF, Patient Summary, ePrescription, MyHealth@EU

---

## Phase 6 — Governance and Conformance

**Status:** Planned

**Month:** 5 (start) — 6 (primary)

**Goal:** Consent, Provenance, AuditEvent. Analytics Proof of Concept.

### Success Criteria

- [ ] Consent resource modelled for synthetic patient
- [ ] AuditEvent logged for a FHIR operation
- [ ] Learn article: What is Conformance
- [ ] Analytics PoC complete (see below)

### Content (Track 5)

Consent, Provenance, AuditEvent, Clinical Governance, Conformance

### Analytics Proof of Concept (Month 6)

One demonstration scenario. Not a separate module. Not a new product.

```
Patient + Observation
↓
HAPI FHIR
↓
PostgreSQL
↓
Power BI (1 dashboard)
```

Example dashboards: patient count, diagnoses, lab results.

Document the flow. Do not build an Analytics Lab section.

---

## Phase 7 — Analytics and Secondary Use

**Status:** Year 2

**Goal:** Full analytics pipeline over synthetic FHIR dataset.

### Topics

FHIR to PostgreSQL, FHIR to SQL, FHIR to OMOP, population health, quality indicators, secondary use, Power BI

### Note

Phase 6 Analytics PoC provides the foundation. Phase 7 expands it into a full lab module.

---

## Phase 8 — AI over FHIR

**Status:** Year 2

**Goal:** AI demonstration over structured, interoperable health data.

### Topics

AI-ready data requirements, structured health data for ML, LLM over FHIR resources, EHDS AI secondary use

### Note

AI features only after Phase 5+. Year 2 only.

---

## Learn Tracks

| Track | Phase Alignment | Year |
|-------|----------------|------|
| Track 1 — FHIR Fundamentals | Phase 1–2 | Year 1 |
| Track 2 — Health Data Standards | Phase 3 | Year 1 |
| Track 3 — Terminologies | Phase 4 | Year 1 |
| Track 4 — EHDS and EHRxF | Phase 5 | Year 1 |
| Track 5 — Governance and Conformance | Phase 6 | Year 1 |
| Track 6 — Analytics and Secondary Use | Phase 7–8 | Year 2 |
