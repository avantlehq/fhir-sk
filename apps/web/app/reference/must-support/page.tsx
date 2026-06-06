import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Must-Support? — Reference",
  description: "mustSupport is a profile flag meaning systems must be able to store and return an element. It does not change cardinality.",
};

export default function MustSupportReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is Must-Support?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>mustSupport</strong> is a flag in a <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link> that marks an element as significant for conformance. A system claiming to implement the profile must be able to meaningfully store and return the element if it is present.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-amber-800 mb-2">mustSupport ≠ required</h2>
          <p className="text-sm text-amber-700 leading-relaxed">
            mustSupport does <strong>not</strong> change cardinality. An element can be <code className="font-mono text-xs bg-amber-100 px-1 rounded">0..1</code> and mustSupport — it is still optional in the resource, but if present, the system must handle it. To make an element required, you must change the cardinality to <code className="font-mono text-xs bg-amber-100 px-1 rounded">1..1</code>.
          </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">What mustSupport requires</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">Sender:</span> Must populate the element when the information is available.</li>
            <li><span className="font-semibold text-slate-800">Receiver:</span> Must store the element and return it in subsequent reads. Must not discard it as unknown.</li>
            <li><span className="font-semibold text-slate-800">Profile author defines:</span> The exact meaning of &quot;support&quot; depends on the profile context. Each IG should document what mustSupport means in their context.</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Example from FhirSkPatient</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In our <code className="font-mono text-xs bg-slate-100 px-1 rounded">FhirSkPatient</code> profile, <code className="font-mono text-xs bg-slate-100 px-1 rounded">Patient.address</code> and <code className="font-mono text-xs bg-slate-100 px-1 rounded">Patient.communication</code> are mustSupport but remain <code className="font-mono text-xs bg-slate-100 px-1 rounded">0..*</code>. A system implementing this profile must store and return addresses and language preferences when present — but is not required to collect them if unavailable.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>
          <Link href="/reference/structure-definition" className="text-teal-600 hover:underline">StructureDefinition</Link>
          <Link href="/reference/validation" className="text-teal-600 hover:underline">Validation</Link>
        </div>
      </div>
    </article>
  );
}
