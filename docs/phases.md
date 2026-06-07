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
| Phase 7 | Slovak eHealth Analysis |
| Phase 8 | FHIR Mapping |
| Phase 9 | Slovak FHIR Profiles |
| Phase 10 | Architecture Patterns |
| Phase 11 | Implementation Guide + Terminology Architecture |

### Year 3 — EHDS + Cross-border

| Phase | Topic |
|-------|-------|
| Phase 12+ | EHDS EHRxF conformance, MyHealth@EU cross-border, national rollout |

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

## Phase 7 — Slovak eHealth Analysis

**Status:** In Progress (started 2026-06-07)

**Goal:** Pochopiť ako slovenské zdravotníctvo funguje dnes — architektúru eZdravia, Integračný manuál NCZI, SOAP služby, XML správy, XSD schémy, ADL archetypy, číselníky, identifikátory. Toto je samostatný learning track, nie len vstupný dokument pre mapovanie.

**Strategická hodnota:** Väčšina FHIR konzultantov vie FHIR. Málokto vie zároveň eZdravie, NCZI IM, XML/XSD, SOAP a vedieť to preložiť do FHIR a EHDS. Toto je vzácna kompetencia špecifická pre slovenský kontext.

**Celý knowledge chain:**
```
Súčasný stav SR
↓
Integračný manuál NCZI
↓
XML / XSD / ADL
↓
FHIR mapovanie  (Phase 8)
↓
FHIR profily    (Phase 9)
↓
EHDS            (Phase 12+)
```

**Source material:** eZdravie IM v4.6.0 / ZS 8.5 (April 2026). Interný NCZI dokument. Predchádzajúca analýza: `C:\Users\rasti\Projects\eZdravie_IM_evaluation\`.

### Privacy Rule

IM je interný NCZI dokument. Verejné (fhir.sk + GitHub): abstraktné analýzy, popis architektúry, Learn články. Privátne (len lokálne docs/): XML štruktúry, XSD excerpty, endpoint detaily, procesné scenáre z IM.

### Track A — Current State Analysis

**Cieľ:** Porozumieť tomu ako eZdravie funguje — nie ako ho zmeniť, ale ako ho čítať a interpretovať.

**Oblasti štúdia:**

| Oblasť | Čo pochopiť |
|--------|-------------|
| Architektúra eZdravia | 13 modulov, verzie, vzájomné závislosti, NZIS vs eZdravie |
| SOAP/XML services | WSDL, operácie, request/response pattern, WS-Security, eID |
| XSD schémy | Ako čítať XSD, typy, reštrikcie, extensions, enumerations |
| ADL archetypy | Čo je ADL, vzťah k XSD a klinickému modelu (ak eZdravie používa) |
| Číselníky NCZI | Ako sú organizované, OID strom, verzie, vzťah k medzinárodným (MKCH-10, ATC) |
| Identifikátory | Rodné číslo (OID), JRÚZ ID, poistný kód, IČO PZS, kód lekára, kód zariadenia |
| JRUZ | Národný register — dátový model, identitné vzťahy, update model |
| NZIS | Vzťah k eZdraviu, sekundárne využitie, štatistické výstupy |

**Moduly na analýzu:**

| Modul | Prečo |
|-------|-------|
| eLab v3 | Najštruktúrovanejší, najčistejší dátový model |
| eVyšetrenie v8/v9 | Najklinicky bohatší — ambulantný nález |

**JRUZ identifikátory — priečna kapitola (nie samostatný modul):**
Rodné číslo, JRÚZ ID, poistný kód, IČO PZS, kód lekára sú referencované v oboch moduloch. Analyzujú sa ako súčasť eLab a eVyšetrenie analýzy, nie ako samostatná fáza.

### Výstupy Phase 7

**Output A — Analytické dokumenty (privátne, docs/):**
- docs/phase-7-architecture.md — architektúra eZdravia
- docs/phase-7-elab-analysis.md — eLab v3 dátové elementy, XSD, procesný tok
- docs/phase-7-evysetrenie-analysis.md — eVyšetrenie sekcie, povinné/voliteľné elementy
- Vstup pre Phase 8 mapovanie

**Output B — Moderná dokumentácia (MkDocs PoC):**
- eVyšetrenie a eLab prevedené do štruktúrovaného Markdown formátu
- PoC pre NCZI proposal — ukázať ako môže vyzerať lepší IM
- Verejná: abstraktná architektúra, dátové elementy bez proprietárnych detailov

**Output C — eZdravie Examples (nový lab modul na fhir.sk):**
- Statické XML príklady eLab výsledku a eVyšetrenie dokumentu
- Vedľa každého príkladu FHIR ekvivalent
- Vizuálna ukážka hodnoty mapovania — čo prišlo z eZdravia, čo odchádza ako FHIR

**Success criteria:**
- [ ] Architektúra eZdravia zdokumentovaná (docs/phase-7-architecture.md)
- [ ] eLab v3: dátové elementy, XSD štruktúra, procesný tok + JRUZ identifikátory (docs/phase-7-elab-analysis.md)
- [ ] eVyšetrenie: sekcie dokumentu, povinné vs voliteľné elementy (docs/phase-7-evysetrenie-analysis.md)
- [ ] Číselníky NCZI: OID strom, vzťah k LOINC/MKCH-10 zdokumentovaný
- [ ] Output B: MkDocs PoC — aspoň jeden modul v modernom formáte
- [ ] Output C: eZdravie Examples lab modul na fhir.sk

**Learn články Track A (fhir.sk — Track 6: Slovak Interoperability):**
- How eZdravie Works Today
- Understanding the NCZI Integration Manual
- SOAP Architecture of Slovak eHealth
- XSD to Data Elements: Reading eZdravie Schemas
- Slovak Health Identifiers: rodné číslo, JRÚZ, IČO PZS
- Current State of Slovak Interoperability

---

## Phase 8 — FHIR Mapping

**Status:** Planned (po Phase 7 Track A)

**Goal:** Pre každý analyzovaný modul vytvoriť mapovanie: XML element → FHIR R4 path. Identifikovať terminologické medzery, gap analýzy, design rozhodnutia. Výstup: mapovanie tabuľky ktoré budú vstupom pre Phase 9 profily.

**Input:** Phase 7 analýza eLab v3 a eVyšetrenie. Mapovanie začína až po pochopení zdrojového systému.

### Mapovanie modulov

**eLab v3 → FHIR:**

| eZdravie element | FHIR resource | FHIR path | Poznámka |
|------------------|---------------|-----------|---------|
| laboratoryResult.testCode | Observation | Observation.code | LOINC binding — treba ConceptMap |
| laboratoryResult.value | Observation | Observation.value[x] | Numeric vs string |
| laboratoryResult.unit | Observation | Observation.valueQuantity.unit | UCUM binding |
| laboratoryResult.referenceRange | Observation | Observation.referenceRange | Low/high/text |
| laboratoryResult.status | Observation | Observation.status | Enum mapping |
| laboratoryResult.performer | Observation | Observation.performer | → Practitioner ref |
| panel / set výsledkov | DiagnosticReport | DiagnosticReport.result[] | 1 DR + N Observations |

**eVyšetrenie v8/v9 → FHIR:**
- Hlavička dokumentu → Composition (type, subject, author, date)
- Návšteva pacienta → Encounter (class AMB, period, reasonCode)
- Diagnózy → Condition[] (MKCH-10 binding, clinicalStatus)
- Objektívny nález / Observation → Observation[]
- Výkony → Procedure[]
- Celý dokument → Document Bundle (Composition first entry)

**JRUZ identifikátory → FHIR (priečna kapitola):**
- Pacient → Patient (rodné číslo + JRÚZ ID slices, name, birthDate, gender, address)
- Lekár → Practitioner (kód lekára, špecializácia binding)
- Zariadenie → Organization (IČO PZS, kód zariadenia)

### Success criteria

- [ ] Mapovacia tabuľka eLab v3: každý XML element → FHIR path (docs/phase-8-elab-mapping.md)
- [ ] Terminologická gap analýza: SK kódy bez priameho LOINC ekvivalentu
- [ ] Design rozhodnutie zdokumentované: DiagnosticReport + Observation[] vs samostatné Observations
- [ ] Mapovacia tabuľka eVyšetrenie: sekcia → FHIR resource (docs/phase-8-evysetrenie-mapping.md)
- [ ] JRUZ identifikátory → Patient/Practitioner/Organization.identifier slices (docs/phase-8-identifiers.md)

**Learn články (fhir.sk — Track 6):**
- How eLab Maps to FHIR
- How eVyšetrenie Maps to FHIR: From XML Document to FHIR Bundle
- From XML/SOAP to FHIR REST: The Full Transformation

**Reference — FHIR Mapping Catalog** (nová sekcia):
- eLab v3 → Observation + DiagnosticReport
- eVyšetrenie → Composition + Encounter + Condition
- Slovak Health Identifiers → Patient/Practitioner/Organization slices

---

## Phase 9 — Slovak FHIR Profiles

**Status:** Planned (po Phase 8)

**Goal:** Vytvoriť Slovak FHIR profily odvodené z Phase 8 mapovania. Každý constraint má dôvod zdokumentovaný v Phase 7–8. Žiadna profile práca bez dokončeného mapovania.

**7 profilov:**

| Profil | Základ | Nahrádza |
|--------|--------|---------|
| FhirSkPatient v1.0 | JRUZ identifikátory (Phase 7–8) | vymyslený v0.2.0 |
| FhirSkObservation | eLab analýza (Phase 8) | — |
| FhirSkDiagnosticReport | eLab analýza (Phase 8) | — |
| FhirSkEncounter | eVyšetrenie analýza (Phase 8) | — |
| FhirSkCondition | eVyšetrenie + MKCH-10 (Phase 8) | — |
| FhirSkPractitioner | JRUZ identifikátory (Phase 8) | — |
| FhirSkOrganization | JRUZ identifikátory (Phase 8) | — |

**Tooling:** StructureDefinition JSON pre drafty. FSH/SUSHI pre finálne profily v Phase 11.

---

## Phase 10 — Architecture Patterns

**Status:** Planned (after Phase 9 — Slovak Profiles)

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

## Phase 11 — Implementation Guide + Terminology Architecture

**Status:** Planned (after Phase 10 — Architecture Patterns)

**Goal:** Two parallel tracks that are tightly coupled in practice — publish Slovak FHIR profiles as a formal IG, and stand up a proper terminology infrastructure. For EHDS, both are required. A system that cannot expand a ValueSet or validate a SNOMED code is not conformant.

**Why after Architecture:** IG structure reflects architecture decisions. Facade IG ≠ FHIR-native IG. Terminology architecture is infrastructure — needs to fit the deployment pattern chosen in Phase 10.

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

---

## Learn Tracks

| Track | Phase Alignment | Status |
|-------|----------------|--------|
| Track 1 — FHIR Fundamentals | Phase 1–2 | ✅ Live |
| Track 2 — Health Data Standards | Phase 3 | ✅ Live |
| Track 3 — Terminologies | Phase 4 | ✅ Live |
| Track 4 — EHDS and EHRxF | Phase 5 | ✅ Live |
| Track 5 — Governance and Conformance | Phase 6 | ✅ Live |
| Track 6 — Slovak Interoperability | Phase 7–8 | Year 2 |
| Track 7 — Architecture Patterns | Phase 10 | Year 2 |
| Track 8 — Terminology Architecture | Phase 11 | Year 2 |
| Track 9 — EHDS and Cross-border | Phase 12+ | Year 3 |
