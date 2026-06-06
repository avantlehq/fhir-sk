import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a FHIR Resource? — Reference",
  description: "A FHIR Resource is the fundamental unit of data in FHIR — a structured JSON or XML document with a defined schema.",
};

export default function ResourceReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is a Resource?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          A <strong>Resource</strong> is the fundamental unit of data in <Link href="/reference/fhir" className="text-teal-600 hover:underline">FHIR</Link>. Everything is a Resource: <Link href="/reference/patient" className="text-teal-600 hover:underline">Patient</Link>, <Link href="/reference/observation" className="text-teal-600 hover:underline">Observation</Link>, Condition, Encounter, MedicationRequest, DiagnosticReport. Each Resource is a structured JSON (or XML) document with a schema defined by HL7.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">Minimal Patient resource (JSON)</p>
          <pre className="text-sm text-slate-100 font-mono overflow-x-auto">{`{
  "resourceType": "Patient",
  "id": "patient-001",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2026-06-06T10:00:00Z"
  },
  "name": [{ "family": "Horváth", "given": ["Jana"] }],
  "gender": "female",
  "birthDate": "1979-03-12"
}`}</pre>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Common elements (all resources)</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">resourceType</code> — identifies which type of resource this is (always present)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">id</code> — the logical identifier assigned by the server</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">meta</code> — versionId, lastUpdated, profile, tags, security labels</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">text</code> — human-readable narrative (optional but recommended)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">extension</code> — adds data not in the base spec</li>
          </ul>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Resource categories</h2>
          <div className="space-y-2 text-sm text-slate-600">
            <div><span className="font-semibold text-slate-800">Clinical:</span> Patient, Observation, Condition, Encounter, MedicationRequest, DiagnosticReport, Procedure</div>
            <div><span className="font-semibold text-slate-800">Administrative:</span> Organization, Practitioner, Location, Coverage, Claim</div>
            <div><span className="font-semibold text-slate-800">Infrastructure:</span> Bundle, CapabilityStatement, OperationOutcome, ValueSet, StructureDefinition</div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/patient" className="text-teal-600 hover:underline">Patient</Link>
          <Link href="/reference/observation" className="text-teal-600 hover:underline">Observation</Link>
          <Link href="/reference/bundle" className="text-teal-600 hover:underline">Bundle</Link>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile</Link>
        </div>
      </div>
    </article>
  );
}
