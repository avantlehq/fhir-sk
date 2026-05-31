import type { Metadata } from "next";
import Link from "next/link";
import { ModuleCard } from "@/components/ModuleCard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FHIR.sk — FHIR Interoperability Lab",
  description: "Test environment for HL7 FHIR R4, synthetic health data, validation and EHDS concepts.",
  alternates: { canonical: siteConfig.url },
};

const labModules = [
  { title: "Resource Builder", description: "Create and edit FHIR R4 resources. View JSON output and validate against base profiles.", status: "Planned" as const, href: "/lab/resource-builder" },
  { title: "Validator", description: "Validate FHIR JSON and XML against R4 rules and profiles. Supports Bundles, Patient Summary and ePrescription.", status: "Planned" as const, href: "/lab/validator" },
  { title: "Mock Server", description: "Simulated FHIR REST API for CRUD operations, search and transaction testing based on HAPI FHIR R4.", status: "In Progress" as const, href: "/lab/mock-server" },
  { title: "Synthetic Data", description: "Generate realistic fictional FHIR datasets: patients, encounters, observations, medications and Patient Summary.", status: "Planned" as const, href: "/lab/synthetic-data" },
  { title: "Terminology Explorer", description: "Explore CodeSystem, ValueSet and ConceptMap. Work with LOINC, SNOMED CT, ICD-10 and ATC examples.", status: "Planned" as const, href: "/lab/terminology-explorer" },
  { title: "Profile Explorer", description: "Inspect StructureDefinitions, constraints, Must Support elements and example resources for EHDS profiles.", status: "Planned" as const, href: "/lab/profile-explorer" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold bg-teal-900 text-teal-300 px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            HL7 FHIR R4 · Synthetic Data · EHDS
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            FHIR Interoperability Lab
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Test environment for HL7 FHIR R4, synthetic health data, validation
            and EHDS concepts. A practical learning environment for healthcare
            interoperability.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/lab" className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-500 transition-colors">
              Explore the Lab →
            </Link>
            <Link href="/learn" className="border border-slate-600 text-slate-200 font-semibold px-6 py-3 rounded-lg hover:border-slate-400 hover:text-white transition-colors">
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Two core areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/lab" className="block">
              <div className="border-2 border-teal-200 bg-teal-50 rounded-xl p-8 hover:border-teal-400 transition-colors h-full">
                <div className="text-teal-700 font-bold text-xs uppercase tracking-widest mb-3">Practical Tools</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Lab</h2>
                <p className="text-slate-600 leading-relaxed">
                  Practical modules for creating, validating and testing FHIR
                  resources, synthetic health data, terminology and EHDS concepts.
                </p>
              </div>
            </Link>
            <Link href="/learn" className="block">
              <div className="border-2 border-blue-200 bg-blue-50 rounded-xl p-8 hover:border-blue-400 transition-colors h-full">
                <div className="text-blue-700 font-bold text-xs uppercase tracking-widest mb-3">Knowledge</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Learn</h2>
                <p className="text-slate-600 leading-relaxed">
                  Roadmap, guides and explanations for HL7 FHIR, profiles,
                  terminology, EHDS and European healthcare interoperability.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lab modules preview */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Lab Modules</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Practical Tools</h2>
            <p className="mt-3 text-slate-500 text-lg">Tools for working with FHIR resources, validation, and synthetic data.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labModules.map((m) => (
              <ModuleCard key={m.title} {...m} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/lab" className="text-teal-600 font-semibold hover:text-teal-700 text-sm">
              View all Lab modules →
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-amber-50 border-t border-amber-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="text-amber-700 font-semibold text-sm flex-shrink-0">⚠ Important:</span>
          <p className="text-amber-800 text-sm leading-relaxed">
            This is a personal learning project. All data is synthetic. Not affiliated with NCZI, HL7 Slovakia, or any healthcare institution.{" "}
            <Link href="/disclaimer" className="underline hover:no-underline">Read full disclaimer.</Link>
          </p>
        </div>
      </section>
    </>
  );
}
