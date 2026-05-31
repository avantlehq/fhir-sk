import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "FHIR.sk learning roadmap — 8 phases from FHIR Foundations to EHDS and advanced interoperability patterns.",
};

type Phase = {
  number: number;
  name: string;
  status: "In Progress" | "Planned";
  description: string;
  goals: string[];
  deliverable: string;
};

const phases: Phase[] = [
  {
    number: 1,
    name: "FHIR Foundations",
    status: "In Progress",
    description:
      "Core FHIR concepts, REST API fundamentals, and basic resource operations. The starting point for everything that follows.",
    goals: [
      "Deploy HAPI FHIR R4 server locally via Docker Compose",
      "Understand FHIR Resources as the basic unit of all FHIR data",
      "Perform full CRUD operations on Patient resource via REST API",
      "Read and interpret a CapabilityStatement",
      "Create and POST a transaction Bundle with multiple resources",
      "Understand transaction vs batch Bundle semantics",
    ],
    deliverable:
      "Working HAPI FHIR server + Postman collection with all CRUD operations verified",
  },
  {
    number: 2,
    name: "Core Healthcare Resources",
    status: "Planned",
    description:
      "The clinical resources that form the backbone of any healthcare record. Patients, observations, conditions, medications.",
    goals: [
      "Model a complete patient record using FHIR resources",
      "Create Observation resources with LOINC and SNOMED CT codes",
      "Work with Condition (diagnosis) resources",
      "Model Medication and MedicationRequest",
      "Create Encounter and link clinical data to it",
    ],
    deliverable:
      "Synthetic patient with full clinical record — demographics, vitals, diagnoses, medications, encounter",
  },
  {
    number: 3,
    name: "Profiling and Validation",
    status: "Planned",
    description:
      "FHIR base resources define the minimum. Profiles constrain them for specific use cases. Learn to create, publish, and validate against profiles.",
    goals: [
      "Understand FHIR Profiling — StructureDefinition, constraints, extensions",
      "Create a simple Patient profile with custom constraints",
      "Validate resources against profiles using HAPI validator",
      "Use ImplementationGuide structure",
      "Understand Must Support semantics",
    ],
    deliverable: "Custom FHIR Profile for a Slovak Patient with validation",
  },
  {
    number: 4,
    name: "Terminology Services",
    status: "Planned",
    description:
      "FHIR uses structured vocabularies — LOINC, SNOMED CT, ICD-10, ATC. Learn to work with CodeSystem, ValueSet, and ConceptMap.",
    goals: [
      "Understand CodeSystem, ValueSet, and ConceptMap resources",
      "Load LOINC codes into HAPI FHIR",
      "Use ValueSet $expand and $validate-code operations",
      "Work with SNOMED CT expressions",
      "Map between code systems using ConceptMap",
    ],
    deliverable:
      "Terminology server with LOINC + ICD-10 + custom CodeSystem, validated ValueSets",
  },
  {
    number: 5,
    name: "Healthcare Integration Patterns",
    status: "Planned",
    description:
      "Real-world FHIR is about integration. Learn the patterns used in production systems: subscriptions, messaging, bulk data, and SMART on FHIR.",
    goals: [
      "Implement FHIR Subscriptions for real-time notifications",
      "FHIR Messaging — message Bundles and MessageHeader",
      "FHIR Bulk Data ($export operation)",
      "SMART on FHIR — OAuth2 authorization for FHIR APIs",
      "CDS Hooks — clinical decision support integration pattern",
    ],
    deliverable:
      "Working Subscription + Bulk Export + SMART on FHIR authorization flow",
  },
  {
    number: 6,
    name: "EHDS and EHRxF",
    status: "Planned",
    description:
      "The European Health Data Space mandates FHIR-based data exchange. EHRxF is the FHIR implementation guide for EHDS. Build for EU compliance.",
    goals: [
      "Understand EHDS regulation and its FHIR requirements",
      "Study the EHRxF FHIR Implementation Guide",
      "Implement Patient Summary (IPS — International Patient Summary)",
      "Cross-border data exchange simulation",
      "Map Slovak healthcare data to EHDS profiles",
    ],
    deliverable:
      "Synthetic IPS (International Patient Summary) conformant with EHRxF profiles",
  },
  {
    number: 7,
    name: "Interoperability Architecture",
    status: "Planned",
    description:
      "Design and implement a multi-system FHIR architecture. Integration engines, FHIR facades for legacy systems, and HIE patterns.",
    goals: [
      "FHIR Facade pattern — wrapping non-FHIR systems",
      "Integration engine patterns with FHIR",
      "FHIR Repository vs. FHIR Facade design decisions",
      "Multi-server FHIR architecture",
      "Performance and scalability considerations",
    ],
    deliverable:
      "Architecture diagram + working FHIR Facade over a simulated legacy HL7 v2 system",
  },
  {
    number: 8,
    name: "Advanced Experiments",
    status: "Planned",
    description:
      "Advanced topics: clinical reasoning, care planning, clinical trials, genomics. Pushing FHIR to its limits.",
    goals: [
      "Clinical Reasoning — PlanDefinition, ActivityDefinition, Measure",
      "CarePlan and CareTeam resources",
      "FHIR for clinical trial data (ResearchStudy, ResearchSubject)",
      "Genomics in FHIR — MolecularSequence",
      "CQL (Clinical Quality Language) basics",
    ],
    deliverable:
      "Working clinical quality measure (CQL + FHIR Measure) with synthetic population data",
  },
];

export default function RoadmapPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block"
          >
            ← Back to home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Roadmap
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-2xl">
            8 phases from FHIR basics to EHDS compliance. Each phase builds on
            the previous. Phase 1 is in progress.
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className={`border rounded-xl overflow-hidden ${
                phase.status === "In Progress"
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
                        phase.status === "In Progress"
                          ? "bg-teal-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {phase.number}
                    </span>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        Phase {phase.number} — {phase.name}
                      </h2>
                    </div>
                  </div>
                  <span
                    className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      phase.status === "In Progress"
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
                          phase.status === "In Progress"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
