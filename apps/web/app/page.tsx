import type { Metadata } from "next";
import Link from "next/link";
import { ModuleCard } from "@/components/ModuleCard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FHIR.sk — FHIR Interoperability Lab",
  description: "A practical lab for exploring healthcare interoperability through HL7 FHIR, terminologies, synthetic health data and EHDS.",
  alternates: { canonical: siteConfig.url },
};

const labModules = [
  { title: "Mock Server", description: "Simulated FHIR REST API — 9 endpoints covering Patient, Condition, Encounter, MedicationRequest, Observation, AllergyIntolerance and IPS Document Bundle.", status: "Live" as const, href: "/lab/mock-server" },
  { title: "Validator", description: "Validate FHIR JSON against R4 rules and profiles. Supports base R4, FhirSkPatient and AllergyIntolerance (fhirsk-allergy) profiles with OperationOutcome output.", status: "Live" as const, href: "/lab/validator" },
  { title: "Terminology Explorer", description: "Browse ValueSets and CodeSystems — administrative-gender, condition-clinical, LOINC vital signs, observation-category and FHIR.sk identifier types.", status: "Live" as const, href: "/lab/terminology-explorer" },
];

const learnAreas = [
  { title: "FHIR Fundamentals", description: "Resources, REST API, Bundles, CapabilityStatement and HAPI FHIR.", href: "/learn/fhir-foundations" },
  { title: "Health Data Standards", description: "HL7 v2, CDA, FHIR and how the standards relate — comparison and coexistence.", href: "/learn/resources" },
  { title: "Terminologies", description: "SNOMED CT, LOINC, ICD-10, ATC — CodeSystem, ValueSet and binding strengths.", href: "/learn/terminology" },
  { title: "EHDS and EHRxF", description: "European Health Data Space regulation, EHRxF timeline, IPS Patient Summary and MyHealth@EU.", href: "/learn/ehds" },
  { title: "Governance and Conformance", description: "Consent, AuditEvent, Provenance, CapabilityStatement and conformance resources.", href: "/learn/profiling" },
  { title: "Data Privacy in FHIR", description: "GDPR and health data, Consent resource, AuditEvent, Provenance and Privacy by Design in FHIR systems.", href: "/learn/privacy" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold bg-teal-900 text-teal-300 px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            Mock Server · 25 Reference entries · IPS Bundle · EHDS
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            FHIR Interoperability Lab
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            A practical lab for exploring healthcare interoperability through HL7 FHIR,
            terminologies, synthetic health data and EHDS.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/lab" className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-500 transition-colors">
              Open Lab →
            </Link>
            <Link href="/reference" className="border border-slate-600 text-slate-200 font-semibold px-6 py-3 rounded-lg hover:border-slate-400 hover:text-white transition-colors">
              Browse Reference
            </Link>
            <Link href="/learn" className="text-slate-400 font-semibold px-6 py-3 rounded-lg hover:text-slate-200 transition-colors">
              Learn →
            </Link>
          </div>
        </div>
      </section>

      {/* Lab Modules */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Lab</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Interoperability Tools</h2>
            <p className="mt-3 text-slate-500 text-lg">Tools for working with FHIR resources, validation and synthetic data.</p>
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

      {/* Learn */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Learn</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Knowledge Tracks</h2>
            <p className="mt-3 text-slate-500 text-lg">Practical guides and explanations across six areas of healthcare interoperability.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learnAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="flex items-start justify-between gap-4 border border-slate-200 rounded-xl p-5 transition-colors group hover:border-teal-300 hover:bg-slate-50"
              >
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{area.description}</p>
                </div>
                <span className="font-bold text-lg flex-shrink-0 text-teal-600 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/learn" className="text-teal-600 font-semibold hover:text-teal-700 text-sm">
              View all learning content →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
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
