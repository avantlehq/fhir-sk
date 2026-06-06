import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a ValueSet? — Reference",
  description: "A FHIR ValueSet is a curated collection of codes selected from one or more CodeSystems, used to constrain what codes are valid in a specific context.",
};

export default function ValueSetReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Terminology</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is a ValueSet?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          A <strong>ValueSet</strong> is a curated collection of codes selected from one or more <Link href="/reference/code-system" className="text-teal-600 hover:underline">CodeSystems</Link>. ValueSets are used in profiles to constrain what codes are valid for a specific element — for example, a list of allowed clinical status codes for a Condition, or the set of LOINC codes used for lab results in a given IG.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">ValueSet vs CodeSystem</h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li><span className="font-semibold">CodeSystem</span> — defines codes and their meanings (SNOMED CT, LOINC, ICD-10 are CodeSystems)</li>
            <li><span className="font-semibold">ValueSet</span> — selects a subset of codes from one or more CodeSystems for use in a specific context</li>
            <li>A ValueSet does not define new codes — it references existing ones</li>
          </ul>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">ValueSet — condition clinical status codes</p>
          <pre className="text-sm text-slate-100 font-mono overflow-x-auto">{`{
  "resourceType": "ValueSet",
  "id": "condition-clinical",
  "url": "http://terminology.hl7.org/ValueSet/condition-clinical",
  "name": "ConditionClinicalStatusCodes",
  "status": "active",
  "compose": {
    "include": [{
      "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "concept": [
        { "code": "active" },
        { "code": "recurrence" },
        { "code": "relapse" },
        { "code": "inactive" },
        { "code": "remission" },
        { "code": "resolved" }
      ]
    }]
  }
}`}</pre>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Binding strength</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">required:</span> Must use a code from this ValueSet. Validation fails if not.</li>
            <li><span className="font-semibold text-slate-800">extensible:</span> Prefer codes from this ValueSet. May use other codes if needed.</li>
            <li><span className="font-semibold text-slate-800">preferred:</span> Use codes from this ValueSet if possible — not enforced.</li>
            <li><span className="font-semibold text-slate-800">example:</span> Illustrative only — no validation constraint.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/code-system" className="text-teal-600 hover:underline">CodeSystem</Link>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>
        </div>
      </div>
    </article>
  );
}
