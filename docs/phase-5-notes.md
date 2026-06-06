# Phase 5 Notes — EHDS and EHRxF

Date: 2026-06-07

---

## What we built

### Synthetic IPS Document Bundle

File: `examples/bundles/ips-patient-summary.json`

Patient: Jana Horváth (synthetic). Bundle type: `document`. 8 entries.

| Entry | Resource | Content |
|-------|----------|---------|
| 1 | Composition | 4 sections: Allergies, Medication, Problem List, Results |
| 2 | Patient | Jana Horváth — demographics, Slovak national identifier |
| 3 | Practitioner | MUDr. Peter Novák (synthetic GP) |
| 4 | Organization | Všeobecná ambulancia MUDr. Novák (synthetic) |
| 5 | AllergyIntolerance | Amoxicillin — high criticality, confirmed, skin rash |
| 6 | MedicationRequest | Metformin 500 mg twice daily (ATC A10BA02) |
| 7 | Condition | Diabetes type 2 (SNOMED 44054006, ICD-10 E11) |
| 8 | Observation | Blood glucose 7.2 mmol/L (LOINC 2339-0, high) |
| 9 | Observation | Blood pressure 128/82 mmHg (LOINC 55284-4) |

### Key IPS rules followed

- Composition is the first entry (document Bundle requirement)
- All references are `urn:uuid:` internal references
- All referenced resources are present in the Bundle (self-contained document)
- Three required sections present: Allergies (48765-2), Medication (10160-0), Problem List (11450-4)
- Each section has narrative text (`text.div` XHTML block) — satisfies dom-6 best practice
- `meta.profile` references IPS StructureDefinitions (not validated against actual IG, structural only)

### AllergyIntolerance resource

New resource type introduced in Phase 5. File: `examples/patients/allergy-intolerance-example.json`

Key elements:
- `clinicalStatus` (required, CodeableConcept): active / inactive / resolved
- `verificationStatus` (required, CodeableConcept): unconfirmed / confirmed / refuted / entered-in-error
- `type`: allergy | intolerance
- `category`: medication | food | environment | biologic
- `criticality`: low | high | unable-to-assess
- `code`: the allergen — SNOMED CT preferred (IPS GPS subset)
- `reaction.manifestation`: how the reaction presented — SNOMED CT
- `reaction.severity`: mild | moderate | severe

---

## EHDS Regulation — Key Facts

**Regulation:** EU 2025/327 (European Health Data Space)
**Adopted:** March 2025
**Legal basis:** Article 168 TFEU (public health)

### Primary Use Objectives

1. Patient access to their own health data across EU borders
2. Portability — a patient can share their data with any authorized provider in any EU country
3. Cross-border care — a clinician in another country can access a patient's summary

### EHRxF Phase 1 — Mandatory from 2027

| Dataset | FHIR Resources | Notes |
|---------|---------------|-------|
| Patient Summary | Bundle (document), Composition, Patient, Condition, AllergyIntolerance, MedicationRequest, Observation | Based on IPS |
| ePrescription | MedicationRequest, Patient, Practitioner, Organization | ATC coding preferred |
| eDispensation | MedicationDispense | References ePrescription |
| Lab results | DiagnosticReport, Observation, ServiceRequest | LOINC coding required |
| Discharge report | Bundle (document), Composition, Encounter, Condition, Procedure | CDA migration |

### EHRxF Phase 2 — Mandatory from 2029

- Medical images and imaging reports (DICOM + FHIR ImagingStudy)
- Genomic data (FHIR Genomics IG)

### MyHealth@EU

- Connects national NCPeH nodes
- Slovakia: NCPeH operated by NCZI
- eHN pilot (pre-EHDS) has been running since 2019 — CDA-based patient summaries
- EHDS migration: CDA → FHIR IPS

---

## IPS — Key Technical Points

**IG URL:** http://hl7.org/fhir/uv/ips/

### Document Bundle rules

1. `type: "document"` — not transaction or batch
2. First entry MUST be Composition
3. All referenced resources must be present in the Bundle — document is self-contained
4. Internal references use `urn:uuid:` or relative URLs matching `fullUrl`

### Composition

- `type.coding`: LOINC 60591-5 (Patient summary Document) — required
- `subject`: reference to Patient — required
- `date`: document creation date — required
- `author`: Practitioner or Organization — required
- `custodian`: Organization responsible for the document — recommended
- `section[]`: clinical sections with code, narrative text, and entries

### Section LOINC codes

| LOINC | Section | Status |
|-------|---------|--------|
| 48765-2 | Allergies and Intolerances | Required |
| 10160-0 | Medication Summary | Required |
| 11450-4 | Problem List | Required |
| 30954-2 | Results (labs, diagnostics) | Recommended |
| 8716-3 | Vital Signs | Recommended |
| 11369-6 | Immunizations | Recommended |
| 47519-4 | History of Procedures | Optional |
| 46264-8 | Medical Devices | Optional |

### IPS profiles (not validated — structural only in this lab)

| Resource | IPS Profile |
|----------|------------|
| Bundle | Bundle-uv-ips |
| Composition | Composition-uv-ips |
| Patient | Patient-uv-ips |
| AllergyIntolerance | AllergyIntolerance-uv-ips |
| Condition | Condition-uv-ips |
| MedicationRequest | MedicationRequest-uv-ips |
| Observation | Observation-results-uv-ips |

To validate against these profiles, load the IPS IG into HAPI:
```bash
curl -X POST http://localhost:8080/fhir \
  -H "Content-Type: application/fhir+json" \
  --data-binary @examples/bundles/ips-patient-summary.json
```

Then validate against the IPS profile:
```bash
curl -X POST "http://localhost:8080/fhir/Bundle/ips-jana-horvath-20240315/\$validate?profile=http://hl7.org/fhir/uv/ips/StructureDefinition/Bundle-uv-ips"
```

Note: Requires HAPI configured with IPS IG loaded. Not available in current Docker Compose setup.

---

## Review Questions

**Q1: What is the difference between a document Bundle and a transaction Bundle?**
Document Bundle: self-contained, immutable, Composition must be first entry. Transaction Bundle: server processes each entry as a separate operation, entries can be create/update/delete.

**Q2: Why must all references in a document Bundle be internal?**
A document is a sealed record. It must be interpretable without accessing external servers — important for exchange across borders where the originating server may not be accessible.

**Q3: What are the three required IPS sections?**
Allergies and Intolerances (48765-2), Medication Summary (10160-0), Problem List (11450-4).

**Q4: What is the difference between IPS and EHRxF?**
IPS is the base HL7 IG for cross-border patient summaries. EHRxF is the EU-specific layer on top of IPS — it adds EU constraints, national profile extensions, and covers additional datasets (ePrescription, labs, discharge reports) that IPS does not.

**Q5: What does EHDS mandate technically by 2027?**
FHIR R4 APIs exposing 4 datasets: Patient Summary (IPS-based), ePrescription, Laboratory results, Hospital discharge reports — all via FHIR REST with SMART on FHIR authentication.

**Q6: Why is AllergyIntolerance a required IPS section even if the patient has no known allergies?**
Cross-border safety: a clinician treating a patient in another country needs to know that allergies were actively assessed — not just absent from the record. The section is present with `emptyReason: "nilknown"` (no known allergies) or `emptyReason: "notasked"` — the distinction matters clinically.
