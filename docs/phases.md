# FHIR.sk — Phases

## Current Status

**Active phase:** Phase 1 — FHIR Foundations (In Progress)

Web infrastructure complete (v0.3.1). FHIR server work not yet started.

---

## Phase 1 — FHIR Foundations

**Status:** In Progress

**Goal:** Deploy HAPI FHIR locally, perform basic CRUD, understand CapabilityStatement and Bundles.

### Success Criteria

- [x] Web app deployed to Vercel (fhir-sk.vercel.app)
- [x] Domain DNS configured (fhir.sk → Vercel NS)
- [x] Information architecture: Lab / Learn / About
- [x] Homepage: FHIR Interoperability Lab identity (v0.3.1)
- [ ] fhir.sk DNS resolves (Vercel green status)
- [ ] HAPI FHIR running locally via Docker Compose
- [ ] Postman collection — all requests return expected responses
- [ ] Synthetic Patient: CRUD complete
- [ ] CapabilityStatement read and understood
- [ ] Transaction Bundle processed successfully
- [ ] All 7 review questions answered (docs/phase-1-notes.md)

### Next Immediate Step

```
cd infra/hapi && docker compose up -d
# endpoint: http://localhost:8080/fhir
```

---

## Phase 2 — Core Clinical Resources

**Status:** Planned

**Goal:** Work with Observation, Condition, Encounter, MedicationRequest. Understand clinical data modelling.

### Topics

- Patient demographics
- Observation (LOINC codes)
- Condition (ICD-10/SNOMED CT)
- Encounter
- MedicationRequest
- Practitioner, Organization

### Success Criteria

- [ ] Synthetic dataset: Patient + Observation + Condition + Encounter
- [ ] All resources valid FHIR R4
- [ ] Transaction Bundle with multiple resource types
- [ ] Learn article: First Observation

---

## Phase 3 — Profiles and Validation

**Status:** Planned

**Goal:** Understand StructureDefinitions, create a simple profile, validate resources against it.

### Topics

- StructureDefinition
- Profile vs base resource
- Slicing
- Must Support
- Validation (HAPI FHIR validator)
- Implementation Guide concept

### Success Criteria

- [ ] Simple profile created and validated against
- [ ] HAPI FHIR validator used for resource validation
- [ ] Learn article: What is a Profile

---

## Phase 4 — Terminologies

**Status:** Planned

**Goal:** Understand SNOMED CT, LOINC, ICD-10/11. Use ValueSets and CodeSystems in resources.

### Topics

- SNOMED CT
- LOINC
- ICD-10, ICD-11
- ValueSet
- CodeSystem
- ConceptMap
- Terminology service concept

### Success Criteria

- [ ] Resources coded with SNOMED CT and LOINC
- [ ] ValueSet referenced in a profile
- [ ] Learn article: Why Terminologies Matter

---

## Phase 5 — EHDS and EHRxF

**Status:** Planned

**Goal:** Understand EHDS regulation, EHRxF, Patient Summary (IPS), ePrescription.

### Topics

- EHDS regulation
- European Health Record Exchange Format (EHRxF)
- International Patient Summary (IPS)
- ePrescription
- MyHealth@EU

### Success Criteria

- [ ] Synthetic IPS-compliant Patient Summary created
- [ ] EHDS compliance checklist understood
- [ ] Learn article: FHIR and EHDS

---

## Phase 6 — Governance and Conformance

**Status:** Planned

**Goal:** Understand clinical governance, consent, provenance, audit, conformance testing.

### Topics

- Consent resource
- Provenance resource
- AuditEvent
- Clinical Governance
- Conformance testing
- Certification concepts
- Implementation Guides (EU)

### Success Criteria

- [ ] Consent resource modelled for synthetic patient
- [ ] AuditEvent logged for a FHIR operation
- [ ] Learn article: What is Conformance

---

## Phase 7 — Analytics and Secondary Use

**Status:** Planned

**Goal:** Move beyond GET /Patient/123. Extract FHIR data to SQL, build analytics over synthetic dataset.

### Topics

- FHIR to PostgreSQL
- FHIR to SQL patterns
- FHIR to OMOP
- Population health queries
- Quality indicators
- Secondary use concepts
- Power BI over FHIR data
- EHDS secondary use

### Stack

```
FHIR Server → PostgreSQL → Power BI (Azure)
```

### Success Criteria

- [ ] Synthetic dataset exported to PostgreSQL
- [ ] SQL queries over FHIR data
- [ ] Simple Power BI dashboard over synthetic dataset
- [ ] Learn article: FHIR to SQL

### Important

Analytics must remain a consequence of interoperability. Not a standalone BI module.

---

## Phase 8 — AI over FHIR

**Status:** Planned

**Goal:** Demonstrate AI over structured, interoperable health data.

### Topics

- AI-ready data requirements
- Structured health data for ML
- LLM over FHIR resources
- Clinical NLP concepts
- EHDS AI secondary use

### Success Criteria

- [ ] AI demonstration over synthetic FHIR dataset
- [ ] Learn article: AI over FHIR

---

## Learn Tracks (aligned with phases)

| Track | Phase Alignment |
|-------|----------------|
| Track 1 — FHIR Fundamentals | Phase 1–2 |
| Track 2 — Health Data Standards | Phase 1–2 |
| Track 3 — Terminologies | Phase 4 |
| Track 4 — EHDS and EHRxF | Phase 5 |
| Track 5 — Governance and Conformance | Phase 6 |
| Track 6 — Analytics and Secondary Use | Phase 7 |
