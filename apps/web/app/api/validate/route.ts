import { NextResponse } from "next/server";

type Issue = {
  severity: "error" | "warning" | "information";
  code: string;
  diagnostics: string;
  expression?: string;
};

function operationOutcome(issues: Issue[]) {
  return {
    resourceType: "OperationOutcome",
    issue: issues.map((i) => ({
      severity: i.severity,
      code: i.code,
      diagnostics: i.diagnostics,
      expression: i.expression ? [i.expression] : undefined,
    })),
  };
}

const KNOWN_RESOURCE_TYPES = [
  "Patient", "Observation", "Condition", "Encounter", "MedicationRequest",
  "Bundle", "CapabilityStatement", "StructureDefinition", "OperationOutcome",
  "Practitioner", "Organization", "Location", "DiagnosticReport",
  "Procedure", "AllergyIntolerance", "Immunization", "DocumentReference",
];

function validateBase(resource: Record<string, unknown>): Issue[] {
  const issues: Issue[] = [];

  if (!resource.resourceType) {
    issues.push({ severity: "error", code: "required", diagnostics: "resourceType is missing — every FHIR resource must declare its type.", expression: "resourceType" });
    return issues;
  }

  if (!KNOWN_RESOURCE_TYPES.includes(resource.resourceType as string)) {
    issues.push({ severity: "error", code: "code-invalid", diagnostics: `Unknown resourceType: "${resource.resourceType}". Must be a valid FHIR R4 resource type.`, expression: "resourceType" });
  }

  if (!resource.id) {
    issues.push({ severity: "information", code: "informational", diagnostics: "Resource has no id — the server will assign one on create (POST)." });
  }

  if (!resource.meta) {
    issues.push({ severity: "information", code: "informational", diagnostics: "No meta element — versionId and lastUpdated will be set by the server." });
  }

  return issues;
}

function validateFhirSkPatient(resource: Record<string, unknown>): Issue[] {
  const issues: Issue[] = [];

  if (resource.resourceType !== "Patient") {
    issues.push({ severity: "error", code: "invalid", diagnostics: `FhirSk Patient profile requires resourceType = "Patient", got "${resource.resourceType}".` });
    return issues;
  }

  const identifier = resource.identifier as unknown[] | undefined;
  if (!identifier || identifier.length === 0) {
    issues.push({ severity: "error", code: "required", diagnostics: "Patient.identifier: minimum required = 1, but only found 0 (from FhirSkPatient|0.1.0)", expression: "Patient.identifier" });
  }

  const name = resource.name as Record<string, unknown>[] | undefined;
  if (!name || name.length === 0) {
    issues.push({ severity: "error", code: "required", diagnostics: "Patient.name: minimum required = 1, but only found 0 (from FhirSkPatient|0.1.0)", expression: "Patient.name" });
  } else {
    const first = name[0];
    if (!first.family) {
      issues.push({ severity: "error", code: "required", diagnostics: "Patient.name.family: minimum required = 1, but only found 0 (from FhirSkPatient|0.1.0)", expression: "Patient.name[0].family" });
    }
    const given = first.given as unknown[] | undefined;
    if (!given || given.length === 0) {
      issues.push({ severity: "error", code: "required", diagnostics: "Patient.name.given: minimum required = 1, but only found 0 (from FhirSkPatient|0.1.0)", expression: "Patient.name[0].given" });
    }
  }

  if (!resource.gender) {
    issues.push({ severity: "error", code: "required", diagnostics: "Patient.gender: minimum required = 1, but only found 0 (from FhirSkPatient|0.1.0)", expression: "Patient.gender" });
  }

  if (!resource.birthDate) {
    issues.push({ severity: "error", code: "required", diagnostics: "Patient.birthDate: minimum required = 1, but only found 0 (from FhirSkPatient|0.1.0)", expression: "Patient.birthDate" });
  }

  if (issues.length === 0) {
    issues.push({ severity: "information", code: "informational", diagnostics: "Resource is valid against FhirSkPatient|0.1.0 — all required constraints satisfied." });
  }

  return issues;
}

function validateAllergyIntolerance(resource: Record<string, unknown>): Issue[] {
  const issues: Issue[] = [];

  if (resource.resourceType !== "AllergyIntolerance") {
    issues.push({ severity: "error", code: "invalid", diagnostics: `AllergyIntolerance profile requires resourceType = "AllergyIntolerance", got "${resource.resourceType}".` });
    return issues;
  }

  if (!resource.clinicalStatus) {
    issues.push({ severity: "error", code: "required", diagnostics: "AllergyIntolerance.clinicalStatus is required (1..1). Must be coded from allergyintolerance-clinical.", expression: "AllergyIntolerance.clinicalStatus" });
  }

  if (!resource.verificationStatus) {
    issues.push({ severity: "error", code: "required", diagnostics: "AllergyIntolerance.verificationStatus is required (1..1). Must be coded from allergyintolerance-verification.", expression: "AllergyIntolerance.verificationStatus" });
  }

  if (!resource.code) {
    issues.push({ severity: "error", code: "required", diagnostics: "AllergyIntolerance.code is required (1..1) — the substance the patient is allergic to.", expression: "AllergyIntolerance.code" });
  }

  if (!resource.patient) {
    issues.push({ severity: "error", code: "required", diagnostics: "AllergyIntolerance.patient is required (1..1) — reference to the Patient.", expression: "AllergyIntolerance.patient" });
  }

  if (!resource.criticality) {
    issues.push({ severity: "warning", code: "best-practice", diagnostics: "AllergyIntolerance.criticality should be set (low | high | unable-to-assess) to support clinical decision support.", expression: "AllergyIntolerance.criticality" });
  }

  const reaction = resource.reaction as Record<string, unknown>[] | undefined;
  if (reaction && reaction.length > 0) {
    reaction.forEach((r, i) => {
      const manifestation = r.manifestation as unknown[] | undefined;
      if (!manifestation || manifestation.length === 0) {
        issues.push({ severity: "error", code: "required", diagnostics: `AllergyIntolerance.reaction[${i}].manifestation is required (1..*).`, expression: `AllergyIntolerance.reaction[${i}].manifestation` });
      }
    });
  }

  if (issues.length === 0) {
    issues.push({ severity: "information", code: "informational", diagnostics: "Resource is structurally valid — all required AllergyIntolerance constraints satisfied." });
  }

  return issues;
}

export async function POST(req: Request) {
  let body: { json: string; profile: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      operationOutcome([{ severity: "error", code: "invalid", diagnostics: "Request body must be JSON with fields: json (string), profile (string)." }]),
      { status: 400 }
    );
  }

  const { json: rawJson, profile } = body;

  let resource: Record<string, unknown>;
  try {
    resource = JSON.parse(rawJson);
  } catch (e) {
    return NextResponse.json(
      operationOutcome([{ severity: "error", code: "invalid", diagnostics: `JSON syntax error: ${(e as Error).message}` }]),
      { status: 200 }
    );
  }

  const baseIssues = validateBase(resource);
  const hasBlockingError = baseIssues.some((i) => i.severity === "error" && i.expression === "resourceType");
  if (hasBlockingError) {
    return NextResponse.json(operationOutcome(baseIssues), { status: 200 });
  }

  let profileIssues: Issue[] = [];
  if (profile === "fhirsk-patient") {
    profileIssues = validateFhirSkPatient(resource);
  } else if (profile === "fhirsk-allergy") {
    profileIssues = validateAllergyIntolerance(resource);
  }

  const all = [...baseIssues, ...profileIssues];
  if (all.length === 0) {
    all.push({ severity: "information", code: "informational", diagnostics: "Resource is structurally valid FHIR R4." });
  }

  return NextResponse.json(operationOutcome(all), { status: 200 });
}
