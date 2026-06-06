import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is FHIRPath? — Reference",
  description: "FHIRPath is a path-based expression language for navigating FHIR resources. Used in profiles, search, mapping, and invariants.",
};

export default function FhirPathReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is FHIRPath?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>FHIRPath</strong> is a path-based expression language for navigating and extracting data from FHIR resources. It is similar in concept to XPath for XML or JSONPath for JSON, but purpose-built for FHIR&apos;s type system and polymorphic elements.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8">
          FHIRPath appears in profiles (as invariant constraints), search parameters, FHIR mapping rules, questionnaires, and CQL clinical logic.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">FHIRPath expressions</h2>
          <div className="overflow-x-auto">
            <table className="text-sm text-slate-600 w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase">
                  <th className="pb-2 pr-4">Expression</th>
                  <th className="pb-2">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-2 pr-4 font-mono text-xs">Patient.name</td><td className="py-2">All HumanName elements</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">Patient.name.family</td><td className="py-2">All family name strings</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">Patient.name.where(use = &apos;official&apos;)</td><td className="py-2">Only the official name</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">Patient.identifier.count()</td><td className="py-2">Number of identifiers</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">Observation.value.ofType(Quantity).value</td><td className="py-2">Numeric value when value[x] is Quantity</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">Patient.birthDate.exists()</td><td className="py-2">true if birthDate is present</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">Patient.name.family.hasValue()</td><td className="py-2">true if family name has a non-empty value</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Invariants in profiles</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            Profiles use FHIRPath to define invariants — constraints that cannot be expressed as simple cardinality rules. For example:
          </p>
          <div className="bg-slate-800 rounded-lg p-3">
            <pre className="text-xs text-slate-100 font-mono">{`// At least one identifier must have system + value
Patient.identifier.where(system.exists() and value.exists()).count() >= 1

// If telecom exists, it must have a value
Patient.telecom.all(value.exists())`}</pre>
          </div>
          <p className="text-sm text-slate-600 mt-3">
            The dom-6 warning from HAPI (&quot;A resource should have narrative&quot;) is a FHIRPath invariant defined on DomainResource: <code className="font-mono text-xs bg-slate-100 px-1 rounded">text.&apos;div&apos;.exists()</code>.
          </p>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-2">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Where FHIRPath is used</h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li><span className="font-semibold">Profile invariants:</span> element constraints that go beyond cardinality</li>
            <li><span className="font-semibold">Search parameters:</span> defines which element a search param extracts</li>
            <li><span className="font-semibold">Questionnaires:</span> conditional display logic (enableWhen expressions)</li>
            <li><span className="font-semibold">FHIR Mapping Language:</span> source/target path expressions</li>
            <li><span className="font-semibold">CQL:</span> Clinical Quality Language builds on FHIRPath for measure logic</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>
          <Link href="/reference/validation" className="text-teal-600 hover:underline">Validation</Link>
          <Link href="/reference/search" className="text-teal-600 hover:underline">Search</Link>
        </div>
      </div>
    </article>
  );
}
