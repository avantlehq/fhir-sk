import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a Condition? — Reference",
  description: "The FHIR Condition resource represents a clinical finding, diagnosis, or complaint that has been assessed by a clinician.",
};

export default function ConditionReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Resource</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is a Condition?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          A <strong>Condition</strong> resource represents a clinical finding — a diagnosis, complaint, or clinical problem that is relevant to a patient. It is used for problem lists, hospital diagnoses, and risk factors.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">Diabetes type 2 — Condition</p>
          <pre className="text-sm text-slate-100 font-mono overflow-x-auto">{`{
  "resourceType": "Condition",
  "id": "condition-diabetes",
  "clinicalStatus": {
    "coding": [{ "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                 "code": "active" }]
  },
  "verificationStatus": {
    "coding": [{ "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                 "code": "confirmed" }]
  },
  "code": {
    "coding": [
      { "system": "http://snomed.info/sct", "code": "44054006",
        "display": "Diabetes mellitus type 2" },
      { "system": "http://hl7.org/fhir/sid/icd-10", "code": "E11",
        "display": "Type 2 diabetes mellitus" }
    ]
  },
  "subject": { "reference": "Patient/patient-001" },
  "onsetDateTime": "2020-03-15"
}`}</pre>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Key elements</h2>
          <div className="overflow-x-auto">
            <table className="text-sm text-slate-600 w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase">
                  <th className="pb-2 pr-4">Element</th>
                  <th className="pb-2">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-2 pr-4 font-mono text-xs">clinicalStatus</td><td className="py-2">active | recurrence | relapse | inactive | remission | resolved</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">verificationStatus</td><td className="py-2">unconfirmed | provisional | differential | confirmed | refuted | entered-in-error</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">code</td><td className="py-2">CodeableConcept — SNOMED CT, ICD-10, or local coding</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">subject</td><td className="py-2">Reference to Patient (required)</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">onset[x]</td><td className="py-2">onset date, datetime, period, age, or range</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">abatement[x]</td><td className="py-2">when condition resolved</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">severity</td><td className="py-2">mild | moderate | severe (SNOMED-coded)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link>
          <Link href="/reference/encounter" className="text-teal-600 hover:underline">Encounter</Link>
          <Link href="/reference/observation" className="text-teal-600 hover:underline">Observation</Link>
        </div>
      </div>
    </article>
  );
}
