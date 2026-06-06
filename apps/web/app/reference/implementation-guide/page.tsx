import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is an Implementation Guide? — Reference",
  description: "A FHIR Implementation Guide (IG) bundles profiles, value sets, examples, and documentation into a publishable specification.",
};

export default function ImplementationGuideReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is an Implementation Guide?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          An <strong>Implementation Guide</strong> (IG) bundles <Link href="/reference/profile" className="text-teal-600 hover:underline">profiles</Link>, value sets, code systems, examples, narrative documentation, and conformance rules into a single publishable specification. An IG defines what a system must implement to be compliant with a particular use case or regulation.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">What an IG contains</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">Profiles:</span> StructureDefinitions constraining base resources</li>
            <li><span className="font-semibold text-slate-800">ValueSets:</span> Curated sets of codes from one or more CodeSystems</li>
            <li><span className="font-semibold text-slate-800">CodeSystems:</span> Custom code lists not covered by SNOMED/LOINC</li>
            <li><span className="font-semibold text-slate-800">Examples:</span> Sample resources demonstrating correct usage</li>
            <li><span className="font-semibold text-slate-800">CapabilityStatements:</span> What servers/clients implementing this IG must support</li>
            <li><span className="font-semibold text-slate-800">Narrative pages:</span> Human-readable documentation and guidance</li>
          </ul>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Major IGs</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <div><span className="font-semibold text-slate-800">International Patient Summary (IPS)</span> — minimal patient summary for cross-border use. Basis for EHDS.</div>
            <div><span className="font-semibold text-slate-800">US Core</span> — US national baseline, mandated by ONC 21st Century Cures Act. All US payers must expose FHIR APIs compliant with US Core.</div>
            <div><span className="font-semibold text-slate-800">EHDS EHRxF</span> — European Health Data Space exchange format. Under development by the EU. Mandates cross-border patient summaries, ePrescriptions, and lab results.</div>
            <div><span className="font-semibold text-slate-800">SMART on FHIR</span> — authorization framework IG. Defines how apps connect to FHIR servers using OAuth2.</div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>
          <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link>
          <Link href="/reference/smart-on-fhir" className="text-teal-600 hover:underline">SMART on FHIR</Link>
        </div>
      </div>
    </article>
  );
}
