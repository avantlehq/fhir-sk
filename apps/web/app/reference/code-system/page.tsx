import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a CodeSystem? — Reference",
  description: "A FHIR CodeSystem defines a set of codes and their meanings. SNOMED CT, LOINC, and ICD-10 are all CodeSystems.",
};

export default function CodeSystemReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Terminology</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is a CodeSystem?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          A <strong>CodeSystem</strong> defines a set of codes and their meanings. Every code used in FHIR belongs to a CodeSystem, identified by a URI. CodeSystems are the source of codes; <Link href="/reference/value-set" className="text-teal-600 hover:underline">ValueSets</Link> select subsets of them.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Major CodeSystems in healthcare</h2>
          <div className="overflow-x-auto">
            <table className="text-sm text-slate-600 w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase">
                  <th className="pb-2 pr-4">CodeSystem</th>
                  <th className="pb-2 pr-4">URI</th>
                  <th className="pb-2">Used for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-2 pr-4 font-semibold">SNOMED CT</td><td className="py-2 pr-4 font-mono text-xs">http://snomed.info/sct</td><td className="py-2">Diagnoses, findings, procedures, anatomy</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">LOINC</td><td className="py-2 pr-4 font-mono text-xs">http://loinc.org</td><td className="py-2">Lab tests, observations, panels, vitals</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">ICD-10</td><td className="py-2 pr-4 font-mono text-xs">http://hl7.org/fhir/sid/icd-10</td><td className="py-2">Diagnoses (billing, epidemiology)</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">ATC</td><td className="py-2 pr-4 font-mono text-xs">http://www.whocc.no/atc</td><td className="py-2">Medications by anatomical/therapeutic class</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">RxNorm</td><td className="py-2 pr-4 font-mono text-xs">http://www.nlm.nih.gov/research/umls/rxnorm</td><td className="py-2">US drug codes (clinical drugs)</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">UCUM</td><td className="py-2 pr-4 font-mono text-xs">http://unitsofmeasure.org</td><td className="py-2">Units of measure (mg, mmol/L, kg)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Custom CodeSystems</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            When no standard CodeSystem covers a concept (e.g. an institution-specific ward type or a country-specific reason code), you define a custom CodeSystem with a URL under your domain — e.g. <code className="font-mono text-xs bg-slate-100 px-1 rounded">https://fhir.sk/fhir/CodeSystem/ward-type</code>. Custom CodeSystems must be published as FHIR resources so validators can look them up.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/value-set" className="text-teal-600 hover:underline">ValueSet</Link>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>
        </div>
      </div>
    </article>
  );
}
