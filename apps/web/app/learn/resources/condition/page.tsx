import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Condition — Core Resources",
  description: "How FHIR Condition models diagnoses and problems: clinical status, verification status, SNOMED CT and ICD-10 coding.",
  alternates: { canonical: "https://fhir.sk/learn/resources/condition" },
};

export default function ConditionLearnPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/learn/resources" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Core Resources
        </Link>

        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 1 — FHIR Fundamentals</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Condition</h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Condition represents a clinical diagnosis, problem, or finding that is significant enough to be tracked over time. Diabetes type 2, hypertension, a broken leg — all are Conditions in FHIR.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">What Condition represents</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A Condition is a clinical statement about a patient&apos;s health state. It covers diagnoses (confirmed diseases), problems (patient-reported issues), and health concerns. The same underlying concept — a patient has Type 2 diabetes — can have different states: suspected, confirmed, active, in remission, resolved.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Condition is not the same as a symptom or a finding at a single point in time. Those are <Link href="/learn/resources/observation" className="text-teal-600 hover:underline">Observations</Link>. A Condition persists: it has an onset, it may evolve, and it closes when resolved or when the patient dies.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The distinction matters for data modelling. A blood glucose measurement = Observation. The diagnosis of diabetes that motivated that measurement = Condition.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Example: Type 2 Diabetes (JSON)</h2>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`{
  "resourceType": "Condition",
  "id": "condition-diabetes-001",
  "clinicalStatus": {
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
      "code": "active"
    }]
  },
  "verificationStatus": {
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
      "code": "confirmed"
    }]
  },
  "category": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/condition-category",
      "code": "encounter-diagnosis"
    }]
  }],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "44054006",
        "display": "Diabetes mellitus type 2"
      },
      {
        "system": "http://hl7.org/fhir/sid/icd-10",
        "code": "E11",
        "display": "Type 2 diabetes mellitus"
      }
    ]
  },
  "subject": { "reference": "Patient/patient-001" },
  "onsetDateTime": "2018-03-15"
}`}</pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">The two status fields</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Condition has two separate status fields. Both are required. They answer different questions.
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 font-mono text-sm mb-3">clinicalStatus — is the condition currently affecting the patient?</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-600">
                  <thead className="text-left text-slate-500 border-b border-slate-100">
                    <tr><th className="pb-2 pr-6">Code</th><th className="pb-2">Meaning</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 font-mono text-xs">
                    <tr><td className="py-2 pr-6 text-teal-700">active</td><td className="py-2 font-sans text-slate-600">Currently affecting the patient</td></tr>
                    <tr><td className="py-2 pr-6">recurrence</td><td className="py-2 font-sans text-slate-600">Has returned after being resolved</td></tr>
                    <tr><td className="py-2 pr-6">relapse</td><td className="py-2 font-sans text-slate-600">Has worsened after improvement</td></tr>
                    <tr><td className="py-2 pr-6">inactive</td><td className="py-2 font-sans text-slate-600">No longer active, not fully resolved</td></tr>
                    <tr><td className="py-2 pr-6">remission</td><td className="py-2 font-sans text-slate-600">Clinically controlled</td></tr>
                    <tr><td className="py-2 pr-6">resolved</td><td className="py-2 font-sans text-slate-600">Gone, no longer present</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 font-mono text-sm mb-3">verificationStatus — how certain is this diagnosis?</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-600">
                  <thead className="text-left text-slate-500 border-b border-slate-100">
                    <tr><th className="pb-2 pr-6">Code</th><th className="pb-2">Meaning</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 font-mono text-xs">
                    <tr><td className="py-2 pr-6">unconfirmed</td><td className="py-2 font-sans text-slate-600">Not yet confirmed</td></tr>
                    <tr><td className="py-2 pr-6">provisional</td><td className="py-2 font-sans text-slate-600">Working hypothesis, differential</td></tr>
                    <tr><td className="py-2 pr-6">differential</td><td className="py-2 font-sans text-slate-600">One of several possible diagnoses</td></tr>
                    <tr><td className="py-2 pr-6 text-teal-700">confirmed</td><td className="py-2 font-sans text-slate-600">Confirmed by appropriate criteria</td></tr>
                    <tr><td className="py-2 pr-6">refuted</td><td className="py-2 font-sans text-slate-600">Ruled out</td></tr>
                    <tr><td className="py-2 pr-6">entered-in-error</td><td className="py-2 font-sans text-slate-600">Recorded by mistake</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Coding: SNOMED CT and ICD-10</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The <code className="font-mono text-xs bg-slate-100 px-1 rounded">code</code> element specifies what the condition is. FHIR allows multiple codings — the same condition coded in both SNOMED CT (for clinical precision) and ICD-10 (for billing and reporting) in parallel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">SNOMED CT</div>
              <div className="text-sm text-slate-700 mb-1">System: <code className="font-mono text-xs">http://snomed.info/sct</code></div>
              <div className="text-sm text-slate-700 mb-1">Code: <code className="font-mono text-xs">44054006</code></div>
              <div className="text-sm text-slate-700">Purpose: clinical precision, concept hierarchy</div>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">ICD-10</div>
              <div className="text-sm text-slate-700 mb-1">System: <code className="font-mono text-xs">http://hl7.org/fhir/sid/icd-10</code></div>
              <div className="text-sm text-slate-700 mb-1">Code: <code className="font-mono text-xs">E11</code></div>
              <div className="text-sm text-slate-700">Purpose: billing, epidemiology, reporting</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Onset and abatement</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Condition tracks the lifecycle of a diagnosis over time. Both fields are polymorphic — they can be a date, a date-time, a period, or a descriptive string.
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-4 text-sm">
              <span className="font-mono text-xs bg-slate-100 px-1 rounded mr-2">onset[x]</span>
              <span className="text-slate-600">When the condition started. onsetDateTime, onsetAge, onsetPeriod, onsetRange, onsetString.</span>
            </div>
            <div className="border border-slate-200 rounded-lg p-4 text-sm">
              <span className="font-mono text-xs bg-slate-100 px-1 rounded mr-2">abatement[x]</span>
              <span className="text-slate-600">When the condition ended or resolved. Only present if clinicalStatus is inactive/remission/resolved.</span>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">See also</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/reference/resource" className="text-teal-600 hover:underline">Reference: Resource</Link>
            <Link href="/learn/resources/observation" className="text-teal-600 hover:underline">Learn: Observation</Link>
            <Link href="/learn/resources/encounter" className="text-teal-600 hover:underline">Learn: Encounter</Link>
          </div>
        </section>
      </div>
    </article>
  );
}
