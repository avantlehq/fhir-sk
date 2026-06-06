import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Slicing? — Reference",
  description: "Slicing splits a repeating FHIR element into named sub-types with their own constraints. Used to define multiple identifier types, coding systems, or observation components.",
};

export default function SlicingReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is Slicing?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>Slicing</strong> splits a repeating element (like <code className="font-mono text-sm bg-slate-100 px-1 rounded">identifier[]</code> or <code className="font-mono text-sm bg-slate-100 px-1 rounded">coding[]</code>) into named sub-types, each with its own cardinality and constraints. It is used in <Link href="/reference/profile" className="text-teal-600 hover:underline">profiles</Link> when different entries in a repeating element have different rules.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">The problem slicing solves</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            A Patient can have multiple identifiers: a national ID, a hospital number, a passport number. Base FHIR says <code className="font-mono text-xs bg-slate-100 px-1 rounded">identifier 0..*</code> — any number, any content. A profile might need to say: &quot;the national ID is 0..1 and must use this specific OID, but other identifiers are still allowed.&quot; Slicing expresses this.
          </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Slicing structure</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">slicing.discriminator</code> — how entries are assigned to slices. Common discriminator types: <code className="font-mono text-xs bg-slate-100 px-1 rounded">value</code> (match by element value), <code className="font-mono text-xs bg-slate-100 px-1 rounded">pattern</code> (match by pattern), <code className="font-mono text-xs bg-slate-100 px-1 rounded">type</code> (match by data type), <code className="font-mono text-xs bg-slate-100 px-1 rounded">exists</code> (match by presence)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">slicing.rules</code> — <code className="font-mono text-xs bg-slate-100 px-1 rounded">open</code>: unmatched entries allowed (most common) / <code className="font-mono text-xs bg-slate-100 px-1 rounded">closed</code>: only defined slices allowed / <code className="font-mono text-xs bg-slate-100 px-1 rounded">openAtEnd</code>: defined slices first, then open</li>
            <li>Each slice is a named element with its own cardinality, path, and constraints</li>
          </ul>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">FhirSkPatient — identifier slice by system</p>
          <pre className="text-xs text-slate-100 font-mono overflow-x-auto">{`"element": [
  {
    "id": "Patient.identifier",
    "path": "Patient.identifier",
    "slicing": {
      "discriminator": [{ "type": "value", "path": "system" }],
      "rules": "open"
    },
    "min": 1
  },
  {
    "id": "Patient.identifier:nationalId",
    "path": "Patient.identifier",
    "sliceName": "nationalId",
    "max": "1"
  },
  {
    "id": "Patient.identifier:nationalId.system",
    "path": "Patient.identifier.system",
    "fixedUri": "urn:oid:2.16.840.1.113883.2.9.4.3.2",
    "min": 1
  }
]`}</pre>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>
          <Link href="/reference/structure-definition" className="text-teal-600 hover:underline">StructureDefinition</Link>
        </div>
      </div>
    </article>
  );
}
