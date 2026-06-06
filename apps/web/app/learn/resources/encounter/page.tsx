import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Encounter — Core Resources",
  description: "How FHIR Encounter models a patient interaction with healthcare: status, class (AMB/EMER), period, reason, and participant.",
  alternates: { canonical: "https://fhir.sk/learn/resources/encounter" },
};

export default function EncounterLearnPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/learn/resources" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Core Resources
        </Link>

        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 1 — FHIR Fundamentals</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Encounter</h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            An Encounter is a patient interaction with a healthcare provider. A GP visit, an emergency room admission, a video consultation, a home visit — each is an Encounter. It is the context in which clinical decisions are made and clinical data is recorded.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Why Encounter matters</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most clinical resources — Conditions, Observations, MedicationRequests, DiagnosticReports — are recorded in the context of an Encounter. The Encounter binds them together: these results were produced during this visit, by this practitioner, at this location.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Without Encounter, clinical data floats disconnected. With it, you can reconstruct what happened during any given visit: why the patient came in, what was found, what was prescribed, when they left.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Example: Ambulatory check-up (JSON)</h2>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`{
  "resourceType": "Encounter",
  "id": "encounter-checkup-001",
  "status": "finished",
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "AMB",
    "display": "ambulatory"
  },
  "type": [{
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "185349003",
      "display": "Encounter for check up"
    }]
  }],
  "subject": { "reference": "Patient/patient-001" },
  "participant": [{
    "type": [{
      "coding": [{
        "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        "code": "ATND"
      }]
    }],
    "individual": { "reference": "Practitioner/dr-novak-001" }
  }],
  "period": {
    "start": "2026-06-06T09:00:00Z",
    "end": "2026-06-06T09:30:00Z"
  },
  "reasonCode": [{
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "44054006",
      "display": "Diabetes mellitus type 2"
    }]
  }]
}`}</pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Status lifecycle</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            An Encounter moves through a lifecycle from planning to completion. The status field reflects where in that lifecycle the encounter currently sits.
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3">Status</th>
                  <th className="text-left px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr><td className="px-4 py-3">planned</td><td className="px-4 py-3 font-sans text-slate-600">Scheduled but not started</td></tr>
                <tr><td className="px-4 py-3">arrived</td><td className="px-4 py-3 font-sans text-slate-600">Patient arrived, encounter not yet started clinically</td></tr>
                <tr><td className="px-4 py-3">triaged</td><td className="px-4 py-3 font-sans text-slate-600">Patient assessed (used in emergency settings)</td></tr>
                <tr><td className="px-4 py-3">in-progress</td><td className="px-4 py-3 font-sans text-slate-600">Currently happening</td></tr>
                <tr><td className="px-4 py-3">onleave</td><td className="px-4 py-3 font-sans text-slate-600">Temporarily absent (e.g. patient left for tests)</td></tr>
                <tr className="bg-teal-50"><td className="px-4 py-3 text-teal-800 font-bold">finished</td><td className="px-4 py-3 font-sans text-teal-700">Completed — the normal end state</td></tr>
                <tr><td className="px-4 py-3">cancelled</td><td className="px-4 py-3 font-sans text-slate-600">Did not happen</td></tr>
                <tr><td className="px-4 py-3">entered-in-error</td><td className="px-4 py-3 font-sans text-slate-600">Recorded by mistake</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">class — type of care setting</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            <code className="font-mono text-xs bg-slate-100 px-1 rounded">class</code> is a required field that describes the broad setting of the encounter. It is coded from the HL7 v3 ActCode system.
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3">Code</th>
                  <th className="text-left px-4 py-3">Setting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr><td className="px-4 py-3 text-teal-700 font-bold">AMB</td><td className="px-4 py-3 font-sans text-slate-600">Ambulatory — outpatient visit, GP consultation, clinic</td></tr>
                <tr><td className="px-4 py-3">EMER</td><td className="px-4 py-3 font-sans text-slate-600">Emergency — unplanned, urgent care</td></tr>
                <tr><td className="px-4 py-3">IMP</td><td className="px-4 py-3 font-sans text-slate-600">Inpatient — hospital admission</td></tr>
                <tr><td className="px-4 py-3">SS</td><td className="px-4 py-3 font-sans text-slate-600">Short Stay — day surgery, observation unit</td></tr>
                <tr><td className="px-4 py-3">HH</td><td className="px-4 py-3 font-sans text-slate-600">Home Health — care delivered at patient&apos;s home</td></tr>
                <tr><td className="px-4 py-3">VR</td><td className="px-4 py-3 font-sans text-slate-600">Virtual — telemedicine, video consultation</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Key elements reference</h2>
          <div className="space-y-3">
            {[
              { name: "subject", detail: "Reference to the Patient. Required." },
              { name: "participant", detail: "Who was present: attending practitioner (ATND), consultant (CON), admitter (ADM). Array — multiple participants per encounter." },
              { name: "period", detail: "Start and end date-time of the encounter. Used to filter by date in search queries." },
              { name: "reasonCode", detail: "Why the patient came in — coded with SNOMED CT. Can also use reasonReference to point to a Condition resource." },
              { name: "diagnosis", detail: "Diagnoses made during this encounter, ranked by role (chief complaint, comorbidity, billing)." },
              { name: "serviceProvider", detail: "Reference to the Organization that managed the encounter." },
              { name: "location", detail: "Where the encounter took place. Array — patient can move between locations during a single encounter." },
            ].map((el) => (
              <div key={el.name} className="border border-slate-200 rounded-lg p-4 text-sm">
                <span className="font-mono text-xs bg-slate-100 px-1 rounded mr-2">{el.name}</span>
                <span className="text-slate-600">{el.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">See also</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/learn/resources/condition" className="text-teal-600 hover:underline">Learn: Condition</Link>
            <Link href="/learn/resources/observation" className="text-teal-600 hover:underline">Learn: Observation</Link>
            <Link href="/reference/resource" className="text-teal-600 hover:underline">Reference: Resource</Link>
          </div>
        </section>
      </div>
    </article>
  );
}
