import type { Metadata } from "next";
import Link from "next/link";
import { ModuleCard } from "@/components/ModuleCard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FHIR.sk — FHIR Interoperability Lab",
  description: "A practical environment for testing, validating and exploring HL7 FHIR concepts using synthetic healthcare data.",
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

const futureScenarios = [
  { title: "Patient Summary", description: "IPS-based Patient Summary aligned with EHDS and EHRxF." },
  { title: "ePrescription", description: "Cross-border ePrescription and eDispensation workflows." },
  { title: "Laboratory Results", description: "Structured lab reports using FHIR DiagnosticReport and Observation." },
  { title: "Cross-border Care", description: "MyHealth@EU interoperability scenarios using synthetic data." },
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
            A practical environment for testing, validating and exploring HL7 FHIR
            concepts using synthetic healthcare data.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/lab" className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-500 transition-colors">
              Open Lab →
            </Link>
            <Link href="/learn/roadmap" className="border border-slate-600 text-slate-200 font-semibold px-6 py-3 rounded-lg hover:border-slate-400 hover:text-white transition-colors">
              Explore Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Lab modules */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Lab Modules</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What you can test</h2>
            <p className="mt-3 text-slate-500 text-lg">Tools for working with FHIR resources, validation and synthetic data. Statuses reflect current project maturity.</p>
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

      {/* Learning Roadmap */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Learn</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Learning Roadmap</h2>
            <p className="mt-3 text-slate-500 text-lg max-w-2xl">
              Structured content to help you understand the FHIR concepts needed to use the lab effectively.
              Eight phases from foundations to advanced interoperability architecture.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/learn/roadmap" className="inline-block border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-lg hover:border-slate-500 hover:text-slate-900 transition-colors text-sm">
              View full roadmap →
            </Link>
            <Link href="/learn/fhir-foundations" className="inline-block border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-lg hover:border-slate-500 hover:text-slate-900 transition-colors text-sm">
              FHIR Foundations →
            </Link>
          </div>
        </div>
      </section>

      {/* Future Direction */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Future Direction</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">EHDS and EHRxF Scenarios</h2>
            <p className="mt-3 text-slate-500 text-lg max-w-2xl">
              As the lab matures, it will expand to cover European Health Data Space interoperability scenarios
              using synthetic data aligned with EHRxF profiles and EHDS use cases.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {futureScenarios.map((s) => (
              <div key={s.title} className="bg-white border border-slate-200 rounded-xl p-5">
                <span className="inline-block text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-widest mb-3">Planned</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest mb-3">About</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About the Project</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg max-w-3xl">
            FHIR.sk is an independent interoperability lab focused on HL7 FHIR R4, synthetic healthcare data
            and EHDS adoption in the Central European context. It is not affiliated with any healthcare institution,
            national authority or standards body. All data used is synthetic and fictional.
          </p>
          <div className="mt-6">
            <Link href="/about" className="text-teal-600 font-semibold hover:text-teal-700 text-sm">
              Read more about the project →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14 px-4 bg-teal-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-teal-300 uppercase tracking-widest mb-3">Newsletter</p>
          <h2 className="text-2xl font-bold mb-3">
            Stay updated on HL7 FHIR, EHDS and interoperability.
          </h2>
          <p className="text-teal-200 text-sm leading-relaxed mb-6">
            Practical notes sent when there is something worth sharing. No spam.
          </p>
          <Link
            href="/newsletter"
            className="inline-block bg-white text-teal-900 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors text-sm"
          >
            Subscribe →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-amber-50 border-t border-amber-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <span className="text-amber-700 font-semibold text-sm flex-shrink-0">⚠ Important:</span>
          <p className="text-amber-800 text-sm leading-relaxed">
            All data is synthetic. Not affiliated with NCZI, HL7 Slovakia, or any healthcare institution.{" "}
            <Link href="/disclaimer" className="underline hover:no-underline">Read full disclaimer.</Link>
          </p>
        </div>
      </section>
    </>
  );
}
