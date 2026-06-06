# Phase 6 Notes — Governance and Consolidation

Date: 2026-06-07

---

## What we built

### Governance resources (examples/patients/)

| File | Resource | Content |
|------|----------|---------|
| consent-example.json | Consent | GDPR opt-in for Jana Horváth, 3-year period, treatment purpose, healthcare marketing denied |
| audit-event-example.json | AuditEvent | IPS document access by MUDr. Novák — action R, outcome 0 (success), DICOM type 110106 Export |
| provenance-example.json | Provenance | IPS document authorship — author (MUDr. Novák), assembler (HAPI FHIR), source (Patient record) |

### Mock Server consolidation

New endpoints added (apps/web/app/api/fhir/):
- `GET /api/fhir/AllergyIntolerance` — searchset with patient filter
- `GET /api/fhir/Bundle/[id]` — IPS Document Bundle

FHIR-mock lib extended:
- `ALLERGY_INTOLERANCE` constant — amoxicillin, high criticality
- `IPS_BUNDLE` constant — document Bundle with Composition + 4 resources
- CapabilityStatement updated: AllergyIntolerance and Bundle resource types added

### Validator consolidation

- AllergyIntolerance profile validation added to POST /api/validate
- Checks: clinicalStatus (required), verificationStatus (required), code (required), patient (required), criticality (warning if missing), reaction.manifestation (required if reaction present)
- ValidatorClient: new profile option "fhirsk-allergy", sample JSON per profile (valid + invalid)

### Learn article

/learn/profiling/conformance: Conformance vs validation vs compliance, CapabilityStatement, conformance resources table, testing conformance, governance resources explained.

---

## Governance Resources — Key Concepts

### Consent

**Purpose:** Records patient agreement to data processing under GDPR/healthcare law.

**Key elements:**
- `status`: draft | proposed | active | rejected | inactive | entered-in-error
- `scope`: patient-privacy | research | treatment | adr
- `policyRule`: opt-in (OPTIN) or opt-out (OPTOUT)
- `provision.type`: permit | deny — root provision
- `provision.period`: validity window
- `provision.actor`: who the consent applies to
- `provision.action`: access | correct | use | disclose | store
- `provision.purpose`: treatment | research | payment | healthcare-marketing
- `provision.provision[]`: nested overrides — e.g. deny marketing within a global permit

**GDPR note:** Health data is "special category" under GDPR Art. 9. Explicit consent (Art. 9(2)(a)) or Art. 9(2)(h) (medical treatment) is required. Consent must be specific, informed, unambiguous, and withdrawable.

### AuditEvent

**Purpose:** GDPR Art. 30/32 compliance — records who accessed what, when, from where.

**Key elements:**
- `type`: DICOM audit event type code (110106 Export, 110100 Application Activity, etc.)
- `subtype`: FHIR interaction (read, create, update, delete, search-type)
- `action`: C (create) | R (read) | U (update) | D (delete) | E (execute)
- `outcome`: 0 (success) | 4 (minor failure) | 8 (serious failure) | 12 (major failure)
- `agent[]`: who acted — requestor (human user) and device (system)
- `source`: which system generated the audit record
- `entity[]`: what was accessed — the resource(s) involved

**DICOM audit event types:**
- 110100 — Application Activity (startup/shutdown)
- 110106 — Export (data leaving the system)
- 110107 — Import (data entering the system)
- 110112 — Query (search)
- 110113 — Security Alert

### Provenance

**Purpose:** Records where a resource came from — data lineage and trust.

**Key elements:**
- `target[]`: which resource(s) this provenance record describes
- `occurredDateTime` / `occurredPeriod`: when the activity happened
- `recorded`: when the provenance record was created (required)
- `reason[]`: why the activity happened (treatment, research, etc.)
- `activity`: what was done (CREATE, UPDATE, VERIFY, etc.)
- `agent[]`: who was involved — roles: author, verifier, performer, assembler, custodian
- `entity[]`: source data used — role: source | revision | quotation | instantiates | removal

**Difference from AuditEvent:**
- AuditEvent: who accessed the resource and when (access log)
- Provenance: where the resource came from and who created it (data lineage)
- Both can exist for the same resource — they answer different questions

---

## Conformance — Key Concepts

### CapabilityStatement vs ImplementationGuide

CapabilityStatement describes a running server/client instance. ImplementationGuide describes a specification. A server may claim to implement an IG by listing it in its CapabilityStatement `implementationGuide[]`.

### Checking HAPI FHIR conformance

```bash
# Full CapabilityStatement
curl http://localhost:8080/fhir/metadata | jq .

# Just resource types and interactions
curl http://localhost:8080/fhir/metadata | jq '.rest[0].resource[] | {type, interactions: [.interaction[].code]}'

# Supported search parameters for Patient
curl http://localhost:8080/fhir/metadata | jq '.rest[0].resource[] | select(.type=="Patient") | .searchParam[] | {name, type}'
```

### Conformance vs Compliance

- HAPI FHIR is FHIR R4 conformant — it implements the spec
- A system claiming EHDS compliance must implement EHRxF profiles, pass EHRxF conformance tests, and be certified by the relevant authority
- Conformance is technical; compliance is legal/regulatory

---

## Consolidation Summary

### What was extended from previous phases

| Phase | Consolidated |
|-------|-------------|
| Phase 2 | Mock Server: AllergyIntolerance + IPS Bundle endpoints added |
| Phase 3 | Validator: AllergyIntolerance profile validation, per-profile samples |
| Phase 5 | IPS Bundle exposed via mock server, Provenance links to it |

### Postman collection updates needed

Add requests for:
- GET /api/fhir/AllergyIntolerance
- GET /api/fhir/AllergyIntolerance?patient=patient-horvath-001
- GET /api/fhir/Bundle/ips-horvath-001
- POST /api/validate (AllergyIntolerance, fhirsk-allergy profile)

---

## Review Questions

**Q1: What is the difference between Consent and AuditEvent?**
Consent records patient agreement to data processing (forward-looking, permissions). AuditEvent records what actually happened — who accessed what resource when (backward-looking, access log).

**Q2: Why does a Consent resource have nested provisions?**
Healthcare consent is layered. A patient may give broad permission for treatment (root permit) while denying specific uses like marketing or research (nested deny). The provision tree models these overrides precisely.

**Q3: What is the DICOM audit event vocabulary and why does FHIR use it?**
DICOM defined the audit event vocabulary before FHIR existed — it is already widely adopted in healthcare IT for HIPAA compliance. FHIR reuses it rather than inventing a parallel system. The codes (110106, 110112 etc.) map to familiar healthcare IT audit concepts.

**Q4: What is the difference between Provenance and AuditEvent?**
Provenance answers "where did this resource come from?" (data lineage, authorship). AuditEvent answers "who touched this resource and when?" (access log). A Provenance record stays with the resource; AuditEvents are generated by the system at access time.

**Q5: What does a CapabilityStatement NOT tell you?**
It does not tell you if the server is actually compliant with a regulation. It does not guarantee that listed search parameters work correctly. It is a declaration, not a certified test result.

**Q6: Why was Analytics PoC moved out of Phase 6?**
5 synthetic patients produce no meaningful analytics patterns. Population health queries, trend detection, and dashboard design require data volume — 50-100+ patients over time. Phase 7 will build the pipeline when there is something worth analyzing.
