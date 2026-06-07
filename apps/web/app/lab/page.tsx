import type { Metadata } from "next";
import { ModuleCard } from "@/components/ModuleCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Lab",
  description: "Practical modules for working with FHIR resources, validation, synthetic data, terminology and EHDS concepts.",
  alternates: { canonical: "https://fhir.sk/lab" },
};

const modules = [
  {
    title: "Mock Server",
    description: "Simulated FHIR REST API — 9 endpoints: Patient, Condition, Encounter, MedicationRequest, Observation, AllergyIntolerance, IPS Document Bundle and metadata. Searchset Bundles with patient= filter.",
    status: "Live" as const,
    href: "/lab/mock-server",
  },
  {
    title: "Validator",
    description: "Validate FHIR JSON against R4 rules and profiles. Supports base FHIR R4 (structural), FhirSkPatient v0.2.0 and AllergyIntolerance (fhirsk-allergy). Returns OperationOutcome with severity and expression paths.",
    status: "Live" as const,
    href: "/lab/validator",
  },
  {
    title: "Terminology Explorer",
    description: "Browse ValueSets and CodeSystems — administrative-gender, condition-clinical, LOINC vital signs, observation-category and FHIR.sk identifier types. Two-panel layout with detail view.",
    status: "Live" as const,
    href: "/lab/terminology-explorer",
  },
  {
    title: "Resource Builder",
    description: "Create and edit FHIR R4 resources such as Patient, Observation, Condition, MedicationRequest and Encounter. View JSON output, inspect profile requirements and validate before sending to the mock server.",
    status: "Planned" as const,
    href: "/lab/resource-builder",
  },
  {
    title: "Synthetic Data",
    description: "Generate realistic fictional FHIR datasets: patients, encounters, diagnoses, observations, medications and Patient Summary examples.",
    status: "Planned" as const,
    href: "/lab/synthetic-data",
  },
  {
    title: "Profile Explorer",
    description: "Inspect FHIR profiles, StructureDefinitions, constraints, cardinalities, extensions, Must Support elements and example resources.",
    status: "Planned" as const,
    href: "/lab/profile-explorer",
  },
];

export default function LabPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Lab"
          title="Practical Modules"
          description="Tools for creating, validating and testing FHIR resources, synthetic health data, terminology and EHDS concepts."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <ModuleCard key={m.title} {...m} />
          ))}
        </div>
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6">
          <p className="text-sm text-slate-500 leading-relaxed">
            <strong className="text-slate-700">Note:</strong> Mock Server, Validator and Terminology Explorer are live.
            Resource Builder, Synthetic Data and Profile Explorer are planned for a future release.
            The mock server data mirrors{" "}
            <code className="font-mono text-xs bg-slate-200 px-1 py-0.5 rounded">infra/hapi/</code>{" "}
            running locally via Docker Compose — see the repository for setup.
          </p>
        </div>
      </div>
    </div>
  );
}
