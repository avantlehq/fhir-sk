const BASE = "https://fhir.sk/api/fhir";

export const PATIENT = {
  resourceType: "Patient",
  id: "patient-horvath-001",
  meta: { tag: [{ system: "https://fhir.sk/tags", code: "synthetic" }] },
  identifier: [{ use: "official", system: "urn:oid:2.16.840.1.113883.2.9.4.3.2", value: "SYNTHETIC-HORVATH-001" }],
  active: true,
  name: [{ use: "official", family: "Horváth", given: ["Jana"] }],
  gender: "female",
  birthDate: "1979-03-12",
  address: [{ city: "Bratislava", postalCode: "82104", country: "SK" }],
  communication: [{ language: { coding: [{ system: "urn:ietf:bcp:47", code: "sk" }] }, preferred: true }],
};

export const CONDITION = {
  resourceType: "Condition",
  id: "condition-diabetes-001",
  meta: { tag: [{ system: "https://fhir.sk/tags", code: "synthetic" }] },
  clinicalStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-clinical", code: "active" }] },
  verificationStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-ver-status", code: "confirmed" }] },
  category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/condition-category", code: "encounter-diagnosis" }] }],
  code: {
    coding: [
      { system: "http://snomed.info/sct", code: "44054006", display: "Diabetes mellitus type 2" },
      { system: "http://hl7.org/fhir/sid/icd-10", code: "E11", display: "Type 2 diabetes mellitus" },
    ],
    text: "Diabetes mellitus type 2",
  },
  subject: { reference: "Patient/patient-horvath-001" },
  onsetDateTime: "2018-05-10",
  recordedDate: "2018-05-10",
};

export const ENCOUNTER = {
  resourceType: "Encounter",
  id: "encounter-checkup-001",
  meta: { tag: [{ system: "https://fhir.sk/tags", code: "synthetic" }] },
  status: "finished",
  class: { system: "http://terminology.hl7.org/CodeSystem/v3-ActCode", code: "AMB", display: "ambulatory" },
  type: [{ coding: [{ system: "http://snomed.info/sct", code: "185349003", display: "Encounter for check up" }] }],
  subject: { reference: "Patient/patient-horvath-001" },
  reasonReference: [{ reference: "Condition/condition-diabetes-001" }],
  period: { start: "2026-06-06T09:00:00Z", end: "2026-06-06T09:30:00Z" },
};

export const MEDICATION_REQUEST = {
  resourceType: "MedicationRequest",
  id: "medreq-metformin-001",
  meta: { tag: [{ system: "https://fhir.sk/tags", code: "synthetic" }] },
  status: "active",
  intent: "order",
  medicationCodeableConcept: {
    coding: [{ system: "http://www.whocc.no/atc", code: "A10BA02", display: "Metformin" }],
    text: "Metformin 500mg",
  },
  subject: { reference: "Patient/patient-horvath-001" },
  encounter: { reference: "Encounter/encounter-checkup-001" },
  authoredOn: "2026-06-06",
  dosageInstruction: [{
    text: "500mg twice daily with meals",
    timing: { repeat: { frequency: 2, period: 1, periodUnit: "d" } },
    doseAndRate: [{ doseQuantity: { value: 500, unit: "mg", system: "http://unitsofmeasure.org", code: "mg" } }],
  }],
};

export const OBS_GLUCOSE = {
  resourceType: "Observation",
  id: "obs-glucose-001",
  meta: { tag: [{ system: "https://fhir.sk/tags", code: "synthetic" }] },
  status: "final",
  category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory" }] }],
  code: { coding: [{ system: "http://loinc.org", code: "2339-0", display: "Glucose [Mass/volume] in Blood" }], text: "Blood glucose" },
  subject: { reference: "Patient/patient-horvath-001" },
  encounter: { reference: "Encounter/encounter-checkup-001" },
  effectiveDateTime: "2026-06-06T09:15:00Z",
  valueQuantity: { value: 7.8, unit: "mmol/L", system: "http://unitsofmeasure.org", code: "mmol/L" },
};

export const OBS_BLOOD_PRESSURE = {
  resourceType: "Observation",
  id: "obs-bp-001",
  meta: { tag: [{ system: "https://fhir.sk/tags", code: "synthetic" }] },
  status: "final",
  category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "vital-signs" }] }],
  code: { coding: [{ system: "http://loinc.org", code: "55284-4", display: "Blood pressure systolic and diastolic" }], text: "Blood pressure" },
  subject: { reference: "Patient/patient-horvath-001" },
  encounter: { reference: "Encounter/encounter-checkup-001" },
  effectiveDateTime: "2026-06-06T09:10:00Z",
  component: [
    { code: { coding: [{ system: "http://loinc.org", code: "8480-6", display: "Systolic blood pressure" }] }, valueQuantity: { value: 138, unit: "mmHg", system: "http://unitsofmeasure.org", code: "mm[Hg]" } },
    { code: { coding: [{ system: "http://loinc.org", code: "8462-4", display: "Diastolic blood pressure" }] }, valueQuantity: { value: 88, unit: "mmHg", system: "http://unitsofmeasure.org", code: "mm[Hg]" } },
  ],
};

export const OBS_WEIGHT = {
  resourceType: "Observation",
  id: "obs-weight-001",
  meta: { tag: [{ system: "https://fhir.sk/tags", code: "synthetic" }] },
  status: "final",
  category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "vital-signs" }] }],
  code: { coding: [{ system: "http://loinc.org", code: "29463-7", display: "Body weight" }], text: "Body weight" },
  subject: { reference: "Patient/patient-horvath-001" },
  encounter: { reference: "Encounter/encounter-checkup-001" },
  effectiveDateTime: "2026-06-06T09:05:00Z",
  valueQuantity: { value: 82, unit: "kg", system: "http://unitsofmeasure.org", code: "kg" },
};

export function searchsetBundle(resources: object[], resourceType: string) {
  return {
    resourceType: "Bundle",
    type: "searchset",
    total: resources.length,
    entry: resources.map((r: any) => ({
      fullUrl: `${BASE}/${resourceType}/${r.id}`,
      resource: r,
      search: { mode: "match" },
    })),
  };
}

export const CAPABILITY_STATEMENT = {
  resourceType: "CapabilityStatement",
  id: "fhir-sk-mock",
  status: "active",
  date: "2026-06-06",
  kind: "instance",
  fhirVersion: "4.0.1",
  format: ["application/fhir+json"],
  description: "FHIR.sk Mock Server — static FHIR R4 responses for learning and testing. Synthetic data only.",
  rest: [{
    mode: "server",
    resource: [
      { type: "Patient", interaction: [{ code: "read" }, { code: "search-type" }, { code: "create" }] },
      { type: "Condition", interaction: [{ code: "read" }, { code: "search-type" }] },
      { type: "Encounter", interaction: [{ code: "read" }, { code: "search-type" }] },
      { type: "MedicationRequest", interaction: [{ code: "read" }, { code: "search-type" }] },
      { type: "Observation", interaction: [{ code: "read" }, { code: "search-type" }] },
    ],
  }],
};
