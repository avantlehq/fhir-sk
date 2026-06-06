import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a Profile? — Reference",
  description: "A FHIR Profile is a StructureDefinition that constrains a base resource for a specific use case, country, or institution.",
};

export default function ProfileReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is a Profile?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          A <strong>Profile</strong> is a <code className="font-mono text-sm bg-slate-100 px-1 rounded">StructureDefinition</code> that constrains a base <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link> for a specific use case. Profiles define what elements are required, what values are allowed, and what code systems must be used — without changing the underlying FHIR specification.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8">
          For example, the EHDS Patient Summary profile constrains Patient to require a national identifier, specific name elements, and a set of must-support conditions. A resource that follows this profile is valid FHIR R4 <em>and</em> valid Patient Summary.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">What a Profile can define</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">Cardinality:</span> make optional elements required (1..1) or restrict repeating elements (0..1)</li>
            <li><span className="font-semibold text-slate-800">Must-support:</span> elements that systems must be able to store and return</li>
            <li><span className="font-semibold text-slate-800">Fixed values:</span> lock an element to a specific value</li>
            <li><span className="font-semibold text-slate-800">Binding:</span> restrict a CodeableConcept to a specific ValueSet</li>
            <li><span className="font-semibold text-slate-800">Extensions:</span> add new elements not in the base spec</li>
            <li><span className="font-semibold text-slate-800">Slicing:</span> define multiple sub-types of a repeating element (e.g. different identifier types)</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">Implementation Guides (IGs)</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            An <strong>Implementation Guide</strong> bundles profiles, value sets, code systems, and examples into a publishable specification. Major IGs include the International Patient Summary (IPS), US Core, and the upcoming EHDS EHRxF IG.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link>
          <Link href="/reference/validation" className="text-teal-600 hover:underline">Validation</Link>
          <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link>
        </div>
      </div>
    </article>
  );
}
