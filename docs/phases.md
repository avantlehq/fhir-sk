# FHIR.sk — Phases

Last revised: 2026-06-07

---

## Current Status

**Active phase:** Phase 7 — Slovak Interoperability Mapping

Phases 1–6 complete (v1.4.2). Phase 7 started 2026-06-07.

---

## Roadmap Logic (revised 2026-06-07)

Phases 1–6 established FHIR foundations — abstract knowledge. Phases 7–10 are grounded in Slovak reality.

**The correct sequence:**

```
Phase 7  Mapping        ← what Slovak systems actually send today (source of truth)
Phase 8  Profiles       ← FHIR constraints derived from the mapping (not invented)
Phase 9  IG             ← formalization of what emerged from reality
Phase 10 Architecture   ← deployment, SMART, Subscriptions, Bulk Data
```

Profiles and IGs must emerge from reality, not precede it. A profile invented without source system analysis is a guess. Phase 7 eliminates the guessing.

---

## Timeline

### Year 1 — FHIR Foundations (complete)

| Month | Phase | Status |
|-------|-------|--------|
| 1 | Phase 1 — FHIR Foundations | ✅ Complete |
| 2 | Phase 2 — Core Clinical Resources | ✅ Complete |
| 3 | Phase 3 — Profiling and Validation | ✅ Complete |
| 4 | Phase 4 — Terminologies | ✅ Complete |
| 5 | Phase 5 — EHDS and EHRxF | ✅ Complete |
| 6 | Phase 6 — Governance and Consolidation | ✅ Complete |

### Year 2 — Slovak Interoperability + Architecture

| Phase | Topic |
|-------|-------|
| Phase 7 | Slovak Interoperability Mapping |
| Phase 8 | Slovak FHIR Profiles |
| Phase 9 | Architecture Patterns |
| Phase 10 | Implementation Guide + Terminology Architecture |

### Year 3 — EHDS + Cross-border

| Phase | Topic |
|-------|-------|
| Phase 11+ | EHDS EHRxF conformance, MyHealth@EU cross-border, national rollout |

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

## Phase 7 — Slovak Interoperability Mapping

**Status:** In Progress (started 2026-06-07)

**Goal:** Analyze Slovak eHealth modules from eZdravie IM v4.6.0. For each module: extract data elements, map to FHIR R4, identify terminological bindings, document gaps. Output: mapping tables that will drive Phase 8 profile design.

**Why mapping precedes profiles:** A profile invented without source system analysis is a guess. Phase 7 produces the source of truth that Phases 8–9 build on.

**Modules in scope:**

| Priority | Module | FHIR target resources | Why |
|----------|--------|----------------------|-----|
| 1 | eLab v3 | Observation, DiagnosticReport | Core EHDS Phase 1, strong LOINC model, clean data structure |
| 2 | eVyšetrenie v8/v9 | Composition, Encounter, Condition, Observation, Procedure | Most clinically rich, ambulatory record |
| 3 | eRecept v6 | MedicationRequest, MedicationDispense | EHDS Phase 1 ePrescription |
| 4 | JRUZ v1.2.0 | Patient, Practitioner, Organization | Identity foundation for all other profiles |

**Source material:** eZdravie IM v4.6.0 / ZS 8.5 (April 2026). Internal NCZI document. Prior analysis: `C:\Users\rasti\Projects\eZdravie_IM_evaluation\`.

### Privacy Rule

IM is an internal NCZI document. What goes public (fhir.sk, GitHub): abstract mapping tables, profile design decisions, Learn articles. What stays private (local docs/ only): specific XML structures, message schemas, endpoint details, XSD excerpts from IM.

### Success Criteria

**eLab v3:**
- [ ] Data elements extracted and documented (docs/phase-7-elab-analysis.md)
- [ ] Mapping table: XML element → FHIR R4 path + data type + cardinality
- [ ] Terminology gap identified: what codes does eLab use, where is LOINC needed
- [ ] Key design decisions documented: single Observation vs DiagnosticReport + Observation[]
- [ ] Learn article: How eLab Maps to FHIR

**eVyšetrenie v8/v9:**
- [ ] Document structure mapped: what sections, what data elements
- [ ] Mapping: eVyšetrenie → Composition + Encounter + Condition + Observation + Procedure
- [ ] MKCH-10 binding identified for Condition.code
- [ ] Learn article: How eVyšetrenie Maps to FHIR

**eRecept v6:**
- [ ] Mapping: eRecept → MedicationRequest + MedicationDispense
- [ ] ATC binding for medication codes
- [ ] Learn article: How ePrescription Maps to FHIR

**JRUZ v1.2.0:**
- [ ] Slovak patient identifiers documented (rodné číslo OID, JRÚZ ID, poistný kód)
- [ ] Practitioner identifier scheme (kód lekára, špecializácia číselník)
- [ ] Organization identifier scheme (IČO PZS, kód zariadenia)

### New fhir.sk Content

**Learn track: Slovak Interoperability** (Track 6 — replaces Analytics placeholder)
- How eLab Maps to FHIR
- How eVyšetrenie Maps to FHIR
- How ePrescription Maps to FHIR
- From XML/SOAP to FHIR REST
- EHDS and Slovak eHealth — the Road to 2027

**Reference: FHIR Mapping Catalog** (new section)
- eLab v3 → Observation + DiagnosticReport
- eRecept v6 → MedicationRequest
- JRUZ → Patient identifiers

---

## Phase 8 — Slovak FHIR Profiles

**Status:** Planned (after Phase 7)

**Goal:** Create Slovak FHIR profiles derived from Phase 7 mapping analysis. Profiles constrain FHIR R4 to match what Slovak systems actually exchange — not invented constraints.

**Input:** Phase 7 mapping tables. No profile work before mapping is done.

**Profiles to create:**

| Profile | Based on | Replaces |
|---------|----------|---------|
| FhirSkPatient v1.0 | JRUZ analysis | current vymyslený v0.2.0 |
| FhirSkObservation | eLab v3 analysis | — |
| FhirSkDiagnosticReport | eLab v3 analysis | — |
| FhirSkMedicationRequest | eRecept v6 analysis | — |
| FhirSkEncounter | eVyšetrenie analysis | — |
| FhirSkCondition | eVyšetrenie + MKCH-10 | — |
| FhirSkPractitioner | JRUZ analysis | — |
| FhirSkOrganization | JRUZ analysis | — |

**Tooling:** StructureDefinition JSON (current approach) for drafts. FSH/SUSHI for final profiles in Phase 9.

---

## Phase 9 — Architecture Patterns

**Status:** Planned (after Phase 8)

**Goal:** Understand how FHIR integrates at system level. The most important decisions in any FHIR project are architectural — Facade vs Hybrid vs FHIR-native determines the entire project trajectory, costs, and timeline. This is consultant-level competency, not developer tooling.

**Why before IG:** Architecture decisions shape what the IG must cover. A Facade IG looks different from a FHIR-native IG. Architecture first.

**Reference:** Darren Devitt's FHIR architecture framework — architectural decisions are superordinate to technology choices.

### Core decision framework

**Facade** — FHIR REST API in front of existing SOAP/XML system. No migration, fast to deploy, limited FHIR depth. Slovak example: eZdravie SOAP → FHIR Facade → EHDS-conformant endpoint. Risk: FHIR is a thin layer, underlying system constraints leak through.

**Hybrid** — new FHIR-native modules alongside legacy systems, with integration layer. Most realistic for Slovak healthcare in 2025–2030 transition period. Some data is FHIR-native (new modules), some is Facade (legacy eZdravie), ConceptMap bridges terminology differences.

**FHIR-native** — greenfield. New systems built on FHIR R4 from day one. Maximum FHIR depth, highest migration cost from legacy. Target state for EHDS 2027+ new implementations.

### Topics

| Topic | What you learn |
|-------|---------------|
| Facade vs Hybrid vs FHIR-native | When to use each, cost/risk tradeoffs |
| FHIR Facade pattern | Wrapping eZdravie SOAP/XML behind FHIR REST |
| FHIR Subscriptions | Event-driven notifications, R4 vs R5 model |
| SMART on FHIR | OAuth2 for FHIR — EHR launch, standalone, backend services |
| Bulk Data ($export) | NDJSON export, async pattern, EHDS secondary use |
| HAPI FHIR cloud | Railway deploy, hapi.fhir.sk, production configuration |

### Slovak context

Every Slovak PZS that needs EHDS compliance by 2027 will face this exact decision: Facade eZdravie, build hybrid, or replace. Understanding the architecture options and their tradeoffs is the core consulting value.

---

## Phase 10 — Implementation Guide + Terminology Architecture

**Status:** Planned (after Phase 9)

**Goal:** Two parallel tracks that are tightly coupled in practice — publish Slovak FHIR profiles as a formal IG, and stand up a proper terminology infrastructure. For EHDS, both are required. A system that cannot expand a ValueSet or validate a SNOMED code is not conformant.

**Why after Architecture:** IG structure reflects architecture decisions. Facade IG ≠ FHIR-native IG. Terminology architecture is infrastructure — needs to fit the deployment pattern chosen in Phase 9.

### Track A — Slovak FHIR Implementation Guide

**Tooling chain:**
```
FSH files (human-readable)
↓ SUSHI compiler
StructureDefinition JSON + ValueSet JSON + CodeSystem JSON
↓ HL7 IG Publisher
HTML site (profiles, examples, narrative, differential view)
```

**FSH (FHIR Shorthand)** — domain-specific language for writing FHIR profiles. Replaces 200-line StructureDefinition JSON with readable constraints. Industry standard for IG authoring.

**IG structure:** Home, Profiles (one page per profile with differential + snapshot + examples), Terminology (ValueSets, CodeSystems), Examples, Downloads.

**Output:** Slovak FHIR IG — minimum locally published, target: hosted on fhir.sk subdomain or GitHub Pages.

### Track B — Terminology Architecture

FHIR resources reference external terminology servers for $expand, $validate-code and subsumption queries. This is a separate infrastructure from HAPI FHIR.

| Component | Tool | Purpose |
|-----------|------|---------|
| SNOMED CT server | Snowstorm (IHTSDO open-source) | Full SNOMED CT hierarchy, ECL queries, $expand |
| LOINC | HAPI FHIR with LOINC loaded, or Ontoserver | Lab code lookup, panel definitions |
| Custom CodeSystems | HAPI FHIR | Slovak číselníky (špecializácie, kódy zariadení) |
| ConceptMap | HAPI FHIR | SK lab codes → LOINC, MKCH-10 → ICD-10 |
| Terminology governance | Process, not tooling | Versioning, deprecation, ownership |

**Why Snowstorm, not HAPI FHIR for SNOMED:** SNOMED CT has 350,000+ concepts and a complex hierarchy. HAPI FHIR can load it but Snowstorm is purpose-built — faster subsumption queries, proper ECL support, IHTSDO-maintained. For EHDS conformance testing, SNOMED CT server will be required.

**ConceptMap priority for Slovak context:**
- Slovak lab test codes (eLab číselník) → LOINC (needed for EHDS cross-border)
- MKCH-10-SK → ICD-10-CM (needed for EHRxF Condition coding)
- ATC SK → ATC International (medication coding alignment)

---

## Learn Tracks

| Track | Phase Alignment | Status |
|-------|----------------|--------|
| Track 1 — FHIR Fundamentals | Phase 1–2 | ✅ Live |
| Track 2 — Health Data Standards | Phase 3 | ✅ Live |
| Track 3 — Terminologies | Phase 4 | ✅ Live |
| Track 4 — EHDS and EHRxF | Phase 5 | ✅ Live |
| Track 5 — Governance and Conformance | Phase 6 | ✅ Live |
| Track 6 — Slovak Interoperability | Phase 7 | Year 2 |
| Track 7 — Architecture Patterns | Phase 9 | Year 2 |
| Track 8 — Terminology Architecture | Phase 10 | Year 2 |
| Track 9 — EHDS and Cross-border | Phase 11+ | Year 3 |
