import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "FHIR.sk 8-phase learning roadmap — Phases 1–6 complete, Phase 7 (Synthetic Data at Scale) and Phase 8 (AI over FHIR) planned for Year 2.",
  alternates: { canonical: "https://fhir.sk/learn/roadmap" },
};

type Phase = {
  number: number;
  name: string;
  status: "Complete" | "In Progress" | "Planned";
  description: string;
  goals: string[];
  deliverable: string;
  relatedModules: string[];
};

const phases: Phase[] = [
  {
    number: 1,
    name: "FHIR Foundations",
    status: "Complete",
    description:
      "Core FHIR concepts, REST API fundamentals and basic resource operations. HAPI FHIR running locally via Docker Compose, Patient CRUD and Transaction Bundles.",
    goals: [
      "Deploy HAPI FHIR R4 locally via Docker Compose + PostgreSQL",
      "Perform full CRUD on Patient resource via curl",
      "Read and interpret a CapabilityStatement",
      "Create and POST a Transaction Bundle with multiple resources",
      "Understand transaction vs batch Bundle semantics",
    ],
    deliverable:
      "HAPI FHIR running locally, synthetic Patient CRUD verified, Transaction Bundle posted",
    relatedModules: ["Mock Server"],
  },
  {
    number: 2,
    name: "Core Clinical Resources",
    status: "Complete",
    description:
      "The clinical resources that form the backbone of a healthcare record. Observation with LOINC, Condition with SNOMED CT and ICD-10, Encounter, MedicationRequest with ATC codes. Mock Server MVP.",
    goals: [
      "Model Observation with LOINC codes — body weight, blood pressure, HbA1c",
      "Create Condition with clinicalStatus, verificationStatus, SNOMED CT + ICD-10 coding",
      "Model Encounter — status lifecycle, class codes (AMB/EMER/IMP), reasonCode",
      "Create MedicationRequest with ATC codes and dosage instructions",
      "Build a Transaction Bundle linking all resources via urn:uuid references",
    ],
    deliverable:
      "Clinical Bundle: Patient + Observation + Condition + Encounter + MedicationRequest. Mock Server with 8 endpoints.",
    relatedModules: ["Mock Server"],
  },
  {
    number: 3,
    name: "Profiling and Validation",
    status: "Complete",
    description:
      "FHIR base resources define the minimum. Profiles constrain them for specific use cases. FhirSkPatient StructureDefinition, Validator MVP and 25 Reference entries.",
    goals: [
      "Understand StructureDefinition — differential vs snapshot, constraints, extensions, must-support",
      "Create FhirSkPatient profile: identifier (rodné číslo), name, gender binding, birthDate required",
      "Add national identifier slice by system OID (urn:oid:2.16.840.1.113883.2.9.4.3.2)",
      "Validate Patient resources against the profile using HAPI FHIR $validate",
      "Build Validator at /lab/validator — OperationOutcome with severity and expression paths",
    ],
    deliverable:
      "FhirSkPatient v0.2.0 profile + Validator MVP + Reference expanded to 25 entries in 5 groups",
    relatedModules: ["Validator"],
  },
  {
    number: 4,
    name: "Terminologies",
    status: "Complete",
    description:
      "FHIR uses structured vocabularies — LOINC, SNOMED CT, ICD-10, ATC. CodeSystem, ValueSet, binding strengths. Terminology Explorer over static data.",
    goals: [
      "Understand CodeSystem, ValueSet — composition, includes, binding strengths",
      "Add required binding on Patient.gender in FhirSkPatient v0.2.0",
      "Understand required vs extensible vs preferred vs example binding strength",
      "Model 5 ValueSets and 4 CodeSystems (administrative-gender, condition-clinical, LOINC vital signs, fhirsk-identifier-type)",
      "Build Terminology Explorer at /lab/terminology-explorer — tab UI, 2-panel layout",
    ],
    deliverable:
      "Terminology Explorer with 5 ValueSets + 4 CodeSystems. FhirSkPatient v0.2.0 with required gender binding.",
    relatedModules: ["Terminology Explorer"],
  },
  {
    number: 5,
    name: "EHDS and EHRxF",
    status: "Complete",
    description:
      "European Health Data Space Regulation 2025/327. EHRxF Phase 1 (2027): Patient Summary, ePrescription, Lab results. IPS Document Bundle with Composition, AllergyIntolerance and 4 required sections.",
    goals: [
      "Study EHDS Regulation 2025/327 — EHRxF Phase 1 (2027), Phase 2 (2029), MyHealth@EU",
      "Understand IPS Document Bundle — Composition first entry, urn:uuid internal references, narrative text",
      "Model AllergyIntolerance with SNOMED CT + ATC coding, criticality, reaction manifestation",
      "Build IPS Patient Summary with 4 sections (Allergies 48765-2, Medication 10160-0, Problem List 11450-4, Results 30954-2)",
      "Add AllergyIntolerance and IPS Bundle endpoints to Mock Server",
    ],
    deliverable:
      "IPS Patient Summary Bundle (Jana Horváth, 9 entries, 4 sections) + 2 Learn articles on EHDS",
    relatedModules: ["Mock Server"],
  },
  {
    number: 6,
    name: "Governance and Consolidation",
    status: "Complete",
    description:
      "Consent for GDPR compliance, AuditEvent with DICOM vocabulary for access logging, Provenance for data lineage. Validator extended with AllergyIntolerance profile. Conformance vs compliance explained.",
    goals: [
      "Model Consent for GDPR opt-in — provision tree with nested deny for marketing",
      "Create AuditEvent using DICOM audit vocabulary (type 110106, action R, outcome 0, agent + entity)",
      "Create Provenance tracking IPS document authorship (author + assembler roles)",
      "Extend Validator with AllergyIntolerance profile (fhirsk-allergy) — 4 required checks",
      "Understand CapabilityStatement, conformance resources and conformance vs compliance",
    ],
    deliverable:
      "Governance resource triad (Consent, AuditEvent, Provenance) + consolidated Mock Server + Validator",
    relatedModules: ["Mock Server", "Validator"],
  },
  {
    number: 7,
    name: "Synthetic Data at Scale + Analytics",
    status: "Planned",
    description:
      "Generate a large synthetic dataset (50–100 patients), build a FHIR → PostgreSQL analytics pipeline and create Power BI dashboards. Requires real data volume to be meaningful.",
    goals: [
      "Generate 50–100 synthetic patients with realistic clinical histories (Synthea or hand-crafted)",
      "Implement FHIR Bulk Data ($export) to extract NDJSON",
      "Design ETL pipeline: NDJSON → analytics PostgreSQL schema",
      "Build Power BI dashboards: demographics, diagnoses, lab trends, medication distribution",
      "Study EHDS secondary use framework",
    ],
    deliverable:
      "Analytics pipeline over synthetic FHIR population + Power BI dashboard",
    relatedModules: ["Synthetic Data"],
  },
  {
    number: 8,
    name: "AI over FHIR",
    status: "Planned",
    description:
      "AI demonstration over structured, interoperable health data. LLM integration, clinical NLP over FHIR narrative text and EHDS AI secondary use framework.",
    goals: [
      "AI-ready data requirements for structured health data",
      "LLM integration over FHIR resources",
      "Clinical NLP over FHIR narrative text",
      "EHDS AI secondary use framework",
    ],
    deliverable:
      "AI demonstration over structured FHIR health data",
    relatedModules: ["Synthetic Data"],
  },
];

export default function RoadmapPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <Link
            href="/learn"
            className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Roadmap
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-2xl">
            8 phases from FHIR basics to analytics and AI. Phases 1–6 complete. Phase 7 and 8 planned for Year 2.
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className={`border rounded-xl overflow-hidden ${
                phase.status === "Complete"
                  ? "border-emerald-200 bg-emerald-50/30"
                  : phase.status === "In Progress"
                  ? "border-teal-300 bg-teal-50/50"
                  : "border-slate-200 bg-white"
              }`}
            >
              {/* Phase header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-bold flex-shrink-0 ${
                        phase.status === "Complete"
                          ? "bg-emerald-600 text-white"
                          : phase.status === "In Progress"
                          ? "bg-teal-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {phase.status === "Complete" ? "✓" : phase.number}
                    </span>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        Phase {phase.number} — {phase.name}
                      </h2>
                    </div>
                  </div>
                  <span
                    className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      phase.status === "Complete"
                        ? "bg-emerald-100 text-emerald-700"
                        : phase.status === "In Progress"
                        ? "bg-teal-100 text-teal-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed pl-11">
                  {phase.description}
                </p>
              </div>

              {/* Goals */}
              <div className="px-6 pb-4 pl-[3.25rem]">
                <ul className="space-y-1.5">
                  {phase.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 w-3 h-3 flex-shrink-0 rounded-sm border ${
                          phase.status === "Complete"
                            ? "bg-emerald-500 border-emerald-500"
                            : phase.status === "In Progress"
                            ? "border-teal-500"
                            : "border-slate-300"
                        }`}
                      />
                      <span className="text-sm text-slate-700">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverable */}
              <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 pl-[3.25rem]">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Deliverable:{" "}
                </span>
                <span className="text-xs text-slate-600">
                  {phase.deliverable}
                </span>
              </div>

              {/* Related Lab Modules */}
              {phase.relatedModules.length > 0 && (
                <div className="px-6 py-3 border-t border-slate-100 pl-[3.25rem]">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Related Lab Modules: </span>
                  {phase.relatedModules.map((mod, i) => (
                    <span key={mod}>
                      <span className="text-xs text-teal-600">{mod}</span>
                      {i < phase.relatedModules.length - 1 && <span className="text-xs text-slate-300 mx-1">·</span>}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
