import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a Patient resource? — Reference",
  description: "The FHIR Patient resource holds demographic and administrative information about a person receiving care.",
};

export default function PatientReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is a Patient?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          The <strong>Patient</strong> resource holds demographic and administrative information about a person receiving care. It does <em>not</em> contain clinical data — that belongs in <Link href="/reference/observation" className="text-teal-600 hover:underline">Observation</Link>, Condition, Encounter, and similar resources that reference the Patient.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key elements</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">identifier</code> — business identifiers: national ID, hospital number, passport (system + value pairs)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">name</code> — array of HumanName: family, given, prefix, suffix, use (official/nickname)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">gender</code> — administrative gender: male, female, other, unknown</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">birthDate</code> — date of birth (YYYY-MM-DD)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">address</code> — home, work, or billing address</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">telecom</code> — phone, email, fax</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">active</code> — whether this patient record is in use</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">communication</code> — preferred language(s)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">generalPractitioner</code> — reference to Practitioner or Organization</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">id vs identifier</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            <code className="font-mono text-xs bg-slate-100 px-1 rounded">id</code> is the FHIR server&apos;s internal identifier — used in URLs (<code className="font-mono text-xs bg-slate-100 px-1 rounded">/Patient/1005</code>). It changes if the resource is copied to another server.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            <code className="font-mono text-xs bg-slate-100 px-1 rounded">identifier</code> is a business identifier from the real world — a national ID, hospital number, or insurance number. It follows the patient across systems.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/observation" className="text-teal-600 hover:underline">Observation</Link>
          <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link>
          <Link href="/reference/search" className="text-teal-600 hover:underline">Search</Link>
        </div>
      </div>
    </article>
  );
}
