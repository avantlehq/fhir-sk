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
    title: "Resource Builder",
    description: "Create and edit FHIR R4 resources such as Patient, Observation, Condition, MedicationRequest and Encounter. View JSON output, inspect profile requirements and validate before sending to the mock server.",
    status: "Planned" as const,
    href: "/lab/resource-builder",
  },
  {
    title: "Validator",
    description: "Validate FHIR JSON and XML resources against base FHIR R4 rules and selected profiles. Supports validation of Bundles, Patient Summary and ePrescription examples.",
    status: "Planned" as const,
    href: "/lab/validator",
  },
  {
    title: "Mock Server",
    description: "Simulated FHIR REST API for testing CRUD operations, transactions, search and integration scenarios. Based on HAPI FHIR R4 with Docker Compose.",
    status: "In Progress" as const,
    href: "/lab/mock-server",
  },
  {
    title: "Synthetic Data",
    description: "Generate realistic fictional FHIR datasets: patients, encounters, diagnoses, observations, medications and Patient Summary examples. Synthetic, not anonymized real data.",
    status: "Planned" as const,
    href: "/lab/synthetic-data",
  },
  {
    title: "Terminology Explorer",
    description: "Explore CodeSystem, ValueSet and ConceptMap resources. Work with LOINC, SNOMED CT, ICD-10, ATC and custom terminology examples.",
    status: "Planned" as const,
    href: "/lab/terminology-explorer",
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
            <strong className="text-slate-700">Note:</strong> Lab modules are built gradually across phases.
            Mock Server is based on HAPI FHIR R4 running locally via Docker Compose — see{" "}
            <code className="font-mono text-xs bg-slate-200 px-1 py-0.5 rounded">infra/hapi/</code> in the repository.
            All other modules are planned for upcoming phases.
          </p>
        </div>
      </div>
    </div>
  );
}
