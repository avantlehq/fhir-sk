import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is an Extension? — Reference",
  description: "FHIR Extensions add data elements not present in the base spec. Every element in FHIR can carry extensions.",
};

export default function ExtensionReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is an Extension?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          An <strong>Extension</strong> adds a data element to a FHIR resource that is not part of the base specification. Extensions are the formal mechanism for adding country-specific, institution-specific, or use-case-specific data without forking the standard.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8">
          Every FHIR element supports extensions. An extension on a Patient might record birth place, ethnic origin, or a national insurance number system not covered by the base <code className="font-mono text-xs bg-slate-100 px-1 rounded">identifier</code> element.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">Extension on a Patient (birthPlace)</p>
          <pre className="text-sm text-slate-100 font-mono overflow-x-auto">{`{
  "resourceType": "Patient",
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/patient-birthPlace",
      "valueAddress": {
        "city": "Košice",
        "country": "SK"
      }
    }
  ],
  "name": [{ "family": "Horváth", "given": ["Jana"] }]
}`}</pre>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Rules for extensions</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">url:</span> Every extension must have a URL — a globally unique identifier pointing to its <Link href="/reference/structure-definition" className="text-teal-600 hover:underline">StructureDefinition</Link>. The URL is the contract.</li>
            <li><span className="font-semibold text-slate-800">value[x]:</span> Simple extensions carry a value — valueString, valueBoolean, valueQuantity, valueCodeableConcept, valueAddress, etc.</li>
            <li><span className="font-semibold text-slate-800">Complex extensions:</span> Extensions with nested sub-extensions instead of a single value. Used when multiple related fields need to be grouped.</li>
            <li><span className="font-semibold text-slate-800">modifierExtension:</span> An extension that changes the meaning of the resource — e.g. marks data as &quot;do not use&quot;. Receivers that do not understand a modifierExtension must reject the resource.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>
          <Link href="/reference/structure-definition" className="text-teal-600 hover:underline">StructureDefinition</Link>
          <Link href="/reference/must-support" className="text-teal-600 hover:underline">Must-Support</Link>
        </div>
      </div>
    </article>
  );
}
