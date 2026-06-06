# FHIR.sk — Phases

Last revised: 2026-06-06

---

## Current Status

**Active phase:** Phase 6 — Governance and Conformance

Phase 1, 2, 3, 4, and 5 complete (v1.3.0). Starting Phase 6.

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
