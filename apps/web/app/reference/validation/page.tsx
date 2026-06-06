import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is FHIR Validation? — Reference",
  description: "FHIR Validation checks that a resource conforms to the FHIR specification or a profile. Returns an OperationOutcome.",
};

export default function ValidationReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is Validation?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>Validation</strong> checks that a FHIR <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link> conforms to the FHIR specification, a <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>, or both. The result is an <code className="font-mono text-sm bg-slate-100 px-1 rounded">OperationOutcome</code> resource listing any errors, warnings, or informational messages.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Types of validation</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">Structural:</span> JSON is valid, resourceType is known, required fields are present</li>
            <li><span className="font-semibold text-slate-800">Cardinality:</span> elements appear the correct number of times (0..1, 1..*, etc.)</li>
            <li><span className="font-semibold text-slate-800">Data type:</span> dates are valid dates, codes are from the right CodeSystem</li>
            <li><span className="font-semibold text-slate-800">Profile conformance:</span> resource meets must-support, binding, and cardinality rules of a Profile</li>
            <li><span className="font-semibold text-slate-800">Business rules:</span> invariants defined in the spec (e.g. Observation must have a value or dataAbsentReason)</li>
          </ul>
        </div>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">$validate operation</p>
          <div className="space-y-1 font-mono text-sm text-slate-100">
            <div><span className="text-blue-400">POST</span> /Patient/$validate</div>
            <div className="text-slate-400 text-xs mt-2">Body: the Patient resource to validate</div>
            <div className="text-slate-400 text-xs">Returns: OperationOutcome</div>
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">OperationOutcome severity levels</h2>
          <div className="space-y-2 text-sm text-slate-600">
            <div><span className="font-mono text-xs bg-red-100 text-red-700 px-1 rounded">error</span> — resource is invalid, cannot be processed</div>
            <div><span className="font-mono text-xs bg-amber-100 text-amber-700 px-1 rounded">warning</span> — resource is usable but has issues worth noting</div>
            <div><span className="font-mono text-xs bg-blue-100 text-blue-700 px-1 rounded">information</span> — informational message, no action required</div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Validation tools</h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li><span className="font-semibold">HAPI FHIR</span> — validates on write by default, $validate operation available</li>
            <li><span className="font-semibold">HL7 FHIR Validator</span> — official CLI tool, supports all profiles and IGs</li>
            <li><span className="font-semibold">Inferno</span> — test suite for profile conformance, used in EHDS certification</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>
          <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link>
          <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link>
        </div>
      </div>
    </article>
  );
}
