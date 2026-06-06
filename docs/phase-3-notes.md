# Phase 3 Notes — Profiles and Validation

Started: 2026-06-06

---

## 1. What is a Profile

A **Profile** is a `StructureDefinition` resource that constrains a base FHIR resource for a specific use case. It does not replace the base spec — a resource that conforms to a profile is also valid base FHIR R4.

A profile can:
- Increase cardinality: make optional elements required (0..1 → 1..1)
- Restrict cardinality: prevent repeating elements (0..* → 0..1)
- Mark elements as must-support
- Fix values to a specific code or URI
- Restrict a CodeableConcept to a specific ValueSet (binding)
- Define slices on repeating elements (e.g. two types of identifier)
- Add extensions

---

## 2. FhirSkPatient Profile

**URL:** `https://fhir.sk/fhir/StructureDefinition/fhirsk-patient`  
**File:** `examples/profiles/fhirsk-patient.json`  
**Base:** `http://hl7.org/fhir/StructureDefinition/Patient`  
**Derivation:** `constraint`

### Constraints applied

| Element | Base cardinality | Profile cardinality | Notes |
|---------|-----------------|---------------------|-------|
| `identifier` | 0..* | **1..*** | At least one identifier required |
| `identifier:nationalId` | — | 0..1 | Slice for Slovak national identifier |
| `identifier:nationalId.system` | 0..1 | 1..1, fixed | `urn:oid:2.16.840.1.113883.2.9.4.3.2` |
| `identifier:nationalId.value` | 0..1 | 1..1 | Value required when slice present |
| `name` | 0..* | **1..*** | At least one name required |
| `name.family` | 0..1 | **1..1** | Family name required |
| `name.given` | 0..* | **1..*** | At least one given name required |
| `gender` | 0..1 | **1..1** | Administrative gender required |
| `birthDate` | 0..1 | **1..1** | Date of birth required |
| `address` | 0..* | 0..* (must-support) | Stored and returned if present |
| `communication` | 0..* | 0..* (must-support) | Preferred language captured if known |

### Key concepts used

**Slicing** — `identifier` is sliced by `system` value. The `nationalId` slice constrains entries where `system = urn:oid:2.16.840.1.113883.2.9.4.3.2`. `rules: open` means other identifiers are still allowed.

**fixedUri** — `identifier:nationalId.system` is fixed to the Slovak OID. If the slice is present, the system must exactly match this value.

**mustSupport** — does not change cardinality. It means: any system claiming conformance to this profile must be able to store and return these elements if they are present.

---

## 3. Uploading the Profile to HAPI FHIR

```bash
curl -X POST http://localhost:8080/fhir/StructureDefinition \
  -H "Content-Type: application/fhir+json" \
  -d @examples/profiles/fhirsk-patient.json
```

Response: `StructureDefinition/1012` — HAPI assigned server ID `1012`.

---

## 4. Validation Results

### $validate endpoint

```
POST /fhir/Patient/$validate
POST /fhir/Patient/$validate?profile=https://fhir.sk/fhir/StructureDefinition/fhirsk-patient
```

The `profile` query parameter tells HAPI to validate against a specific StructureDefinition in addition to base R4.

### Jana Horváth vs base FHIR R4

```
OperationOutcome — 2 issue(s):
  [information] None of the codings provided are in the value set 'Common Languages'
                (sk language code is not in the HL7 default list — informational only)
  [warning]     dom-6: resource should have narrative text (best practice)
```

No errors. Resource is valid R4.

### Jana Horváth vs FhirSkPatient profile

```
OperationOutcome — 1 issue(s):
  [warning] dom-6: resource should have narrative text (best practice)
```

Passes the profile. Jana Horváth has: identifier ✓, name.family ✓, name.given ✓, gender ✓, birthDate ✓.

The `information` about Common Languages disappeared — our profile does not restrict the communication.language binding, so HAPI does not apply the HL7 default binding warning when validating against our profile only.

### Invalid Patient vs FhirSkPatient profile

```json
{ "resourceType": "Patient", "name": [{ "family": "Test" }] }
```

```
OperationOutcome — 5 issue(s):
  [error] Patient.identifier: minimum required = 1, but only found 0
  [error] Patient.gender: minimum required = 1, but only found 0
  [error] Patient.birthDate: minimum required = 1, but only found 0
  [error] Patient.name.given: minimum required = 1, but only found 0
  [warning] dom-6: resource should have narrative text
```

4 errors — resource is rejected. The profile cardinality constraints are enforced.

---

## 5. Review Questions

**Q: What is the difference between a profile and the base resource?**  
A profile is a constraint layer on top of a base resource. It can only restrict — it cannot add new data types or remove existing ones. A resource valid against a profile is automatically valid base FHIR R4.

**Q: What does mustSupport mean?**  
It does not change cardinality. It is a conformance statement: any system claiming to implement this profile must store the element if received and return it if present. The profile author defines what "support" means in their context.

**Q: What is slicing?**  
Slicing allows a repeating element (like `identifier[]`) to be split into named sub-types, each with its own constraints. The discriminator defines how entries are assigned to slices — in our case by `system` value.

**Q: What does `derivation: constraint` mean?**  
The profile constrains an existing resource type. The alternative is `derivation: specialization`, which creates a new resource type — almost never used.

**Q: What is `rules: open` on a slice?**  
It means entries that do not match any defined slice are still allowed. `rules: closed` would reject any identifier with an unrecognised system.

**Q: Why does dom-6 always appear?**  
dom-6 is a best-practice constraint defined in DomainResource (the parent of all resource types). It recommends that resources include a `text` element with human-readable narrative. It is a `warning`, not an `error` — resources without narrative are still valid.
