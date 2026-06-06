# FHIR.sk — Phases

Last revised: 2026-06-06

---

## Current Status

**Active phase:** Phase 7 — Synthetic Data at Scale + Analytics

Phases 1–6 complete (v1.4.0). Starting Phase 7.

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

**Status:** Complete (v0.4.0 → v0.5.0)

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

- [x] What is FHIR — /learn/fhir-foundations
- [ ] FHIR Resource — planned Phase 3
- [ ] Patient Resource — planned Phase 3
- [ ] REST API Basics — planned Phase 3
- [ ] HAPI FHIR Setup — planned Phase 3

---

## Phase 2 — Core Clinical Resources

**Status:** Complete (v0.5.0 → v0.6.0)

**Month:** 2

**Goal:** Work with Observation, Condition, Encounter, MedicationRequest. First Mock Server prototype.

### Success Criteria

- [x] Synthetic dataset: Patient + Observation + Condition + Encounter + MedicationRequest
- [x] All resources valid FHIR R4 (posted to HAPI FHIR, stored in examples/)
- [x] Transaction Bundle with multiple resource types (examples/bundles/bundle-phase2-clinical.json)
- [x] Mock Server MVP running (/lab/mock-server, 8 API routes)

### Content (Track 1)

- [x] Observation — /learn/resources/observation
- [x] Condition — /learn/resources/condition
- [x] Encounter — /learn/resources/encounter
- [x] Search — /learn/resources/search
- [x] Bundle — /learn/resources/bundle

### Reference (first 10 entries)

- [x] FHIR, Resource, Patient, Observation, Bundle, Profile, REST API, Search, Validation, CapabilityStatement

### Navigation change

- [x] Reference added to nav (Lab | Learn | Reference | About)

---

## Phase 3 — Profiles and Validation

**Status:** Complete (v0.8.0 → v1.1.0)

**Month:** 3

**Goal:** Understand StructureDefinitions, validate resources against profiles. Validator MVP.

### Success Criteria

- [x] FhirSkPatient StructureDefinition created (examples/profiles/fhirsk-patient.json)
- [x] Profile validated against HAPI FHIR (Jana Horváth: 0 errors, invalid Patient: 4 errors)
- [x] Validator MVP at /lab/validator (structural + FhirSkPatient profile)
- [x] Learn articles: Profile, Validation, Standards comparison (HL7 v2 / CDA / FHIR)
- [x] Reference +15: StructureDefinition, Extension, Must-Support, Slicing, Implementation Guide, FHIRPath, HL7 v2, CDA, OperationOutcome, Condition, Encounter, MedicationRequest, ValueSet, CodeSystem, SMART on FHIR
- [x] Reference index reorganized to 25 entries in 5 groups

### Content

Track 1: Profile, Validation, OperationOutcome ✅

Track 2: HL7 v2, CDA, FHIR comparison ✅

### Reference

+15 new entries ✅ (total: 25)

---

## Phase 4 — Terminologies

**Status:** Complete (v1.2.0)

**Month:** 4

**Goal:** Use SNOMED CT and LOINC in resources. ValueSet Viewer over static data.

### Success Criteria

- [x] Resources coded with SNOMED CT and LOINC (done in Phase 2/3 — Condition, Observation)
- [x] ValueSet referenced in a profile (FhirSkPatient v0.2.0 — required binding on Patient.gender)
- [x] Terminology Explorer MVP at /lab/terminology-explorer (5 ValueSets, 4 CodeSystems)
- [x] Learn article: Why Terminologies Matter (/learn/terminology/why-terminologies-matter)

### Content (Track 3)

- [x] Why Terminologies Matter: CodeSystem, ValueSet, binding strengths, SNOMED vs LOINC

### Reference

- [x] ValueSet, CodeSystem (added in Phase 3)

---

## Phase 5 — EHDS and EHRxF

**Status:** Complete (v1.3.0)

**Month:** 5

**Goal:** Understand EHDS regulation, EHRxF, Patient Summary (IPS), ePrescription.

### Success Criteria

- [x] Synthetic IPS-compliant Patient Summary created (examples/bundles/ips-patient-summary.json)
- [x] EHDS compliance checklist understood (docs/phase-5-notes.md, /learn/ehds/fhir-and-ehds)
- [x] Learn article: FHIR and EHDS + International Patient Summary

### Content (Track 4)

- [x] FHIR and EHDS: regulation, EHRxF, MyHealth@EU, Slovak context, compliance checklist
- [x] International Patient Summary: Composition, sections, document Bundle rules

---

## Phase 6 — Governance and Consolidation

**Status:** Complete (v1.4.0)

**Month:** 6

**Goal:** Complete governance resources (Consent, AuditEvent, Provenance). Consolidate and deepen Phases 1–5 through hands-on exercises. No analytics pipeline — that belongs in Phase 7 when real data volume makes it meaningful.

### Success Criteria

**Governance:**
- [x] Consent resource modelled for synthetic patient (GDPR opt-in, provision tree)
- [x] AuditEvent resource for IPS document access (DICOM type, agent, entity)
- [x] Provenance resource tracking IPS document authorship (author + assembler)
- [x] Learn article: What is Conformance (/learn/profiling/conformance)

**Consolidation:**
- [x] Mock Server extended: AllergyIntolerance + IPS Document Bundle endpoints
- [x] Validator extended: AllergyIntolerance structural validation (fhirsk-allergy profile)
- [ ] Postman collection updated with Phase 2–5 resources (manual step)
- [x] docs/phase-6-notes.md: governance concepts, conformance vs compliance, 6 review Q&A

### Content (Track 5)

Consent, AuditEvent, Provenance, Conformance

### Why no Analytics PoC here

Analytics over a 5-patient synthetic dataset has no learning value. Phase 7 will build the full pipeline when we have 50–100 patients across multiple conditions and time periods. The tools (FHIR Bulk Data, SQL schema design, Power BI) deserve a dedicated phase, not a footnote.

---

## Phase 7 — Synthetic Data at Scale + Analytics

**Status:** Year 2

**Goal:** Generate a large synthetic dataset (50–100 patients), build a FHIR → PostgreSQL analytics pipeline, create Power BI dashboards.

### Success Criteria

- [ ] 50–100 synthetic patients with realistic clinical histories (Synthea or hand-crafted)
- [ ] FHIR Bulk Data ($export) pipeline to extract NDJSON
- [ ] ETL: NDJSON → analytics PostgreSQL schema
- [ ] Power BI dashboards: patient demographics, diagnoses, lab trends, medication distribution
- [ ] Learn article: FHIR for Analytics

### Topics

FHIR Bulk Data, $export, NDJSON, ETL design, FHIR → SQL mapping, population health, quality indicators, Power BI, secondary use, EHDS secondary use framework

### Note

This replaces the former "Analytics PoC" that was incorrectly placed in Phase 6. Real analytics requires real data volume — 5 patients teaches nothing about query patterns or dashboard design.

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
