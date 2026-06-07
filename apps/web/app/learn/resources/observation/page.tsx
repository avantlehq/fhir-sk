import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/ArticleNav";

export const metadata: Metadata = {
  title: "Observation — Core Resources",
  description: "How FHIR Observation works: vital signs, lab results, blood pressure components, LOINC coding, and status lifecycle.",
  alternates: { canonical: "https://fhir.sk/learn/resources/observation" },
};

export default function ObservationLearnPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/learn/resources" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Core Resources
        </Link>

        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 1 — FHIR Fundamentals</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Observation</h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Observation is the most frequently used FHIR resource. Anything measured or asserted about a patient — a blood glucose reading, a blood pressure, a body weight, a lab result — is an Observation.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">What Observation represents</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            An Observation captures a single measurement or finding at a point in time. It answers: <em>what was measured, on whom, when, and what was the result?</em>
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The resource covers a wide range of use cases. Vital signs (blood pressure, temperature, weight), laboratory results (glucose, haemoglobin), clinical scores (Glasgow Coma Scale), social history (smoking status), and imaging findings are all modelled as Observations in FHIR R4.
          </p>
          <p className="text-slate-700 leading-relaxed">
            One Observation = one measurement. Blood pressure is the classic exception — it uses two components (systolic and diastolic) within a single Observation, because the two values are always taken together and interpreted together.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Minimal Observation (JSON)</h2>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`{
  "resourceType": "Observation",
  "id": "obs-glucose-001",
  "status": "final",
  "category": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/observation-category",
      "code": "laboratory"
    }]
  }],
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "2339-0",
      "display": "Glucose [Mass/volume] in Blood"
    }]
  },
  "subject": { "reference": "Patient/patient-001" },
  "effectiveDateTime": "2026-06-06T08:30:00Z",
  "valueQuantity": {
    "value": 7.8,
    "unit": "mmol/L",
    "system": "http://unitsofmeasure.org",
    "code": "mmol/L"
  }
}`}</pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Key elements</h2>
          <div className="space-y-4">
            {[
              {
                name: "status",
                detail: "Lifecycle of the observation. Most observations are final. Common values: registered → preliminary → final → amended. Cancelled if the test was ordered but not performed."
              },
              {
                name: "category",
                detail: "Classifies the type of observation. Standard categories: vital-signs, laboratory, imaging, social-history, survey, exam. Used for filtering — e.g. GET /Observation?category=vital-signs."
              },
              {
                name: "code",
                detail: "What was measured. Coded with LOINC (preferred for labs and vitals), SNOMED CT, or local codes. The code determines how the observation is interpreted — without it, a result number has no meaning."
              },
              {
                name: "subject",
                detail: "Who was observed — almost always a reference to a Patient. Can also be Group, Device, or Location for non-clinical observations."
              },
              {
                name: "effective[x]",
                detail: "When the observation was made. Polymorphic: effectiveDateTime (single point), effectivePeriod (interval), effectiveTiming, effectiveInstant. Most lab results use effectiveDateTime."
              },
              {
                name: "value[x]",
                detail: "The result. Polymorphic: valueQuantity (number + unit), valueCodeableConcept (coded result like 'positive'), valueString (free text), valueBoolean, valueRange (min–max). Blood pressure uses component[] instead of value[x]."
              },
              {
                name: "component",
                detail: "Sub-measurements within a single observation. Used for blood pressure: systolic (LOINC 8480-6) and diastolic (LOINC 8462-4) are both components of a blood pressure panel (LOINC 55284-4)."
              },
            ].map((el) => (
              <div key={el.name} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-semibold text-slate-900 font-mono text-sm mb-2">{el.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{el.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Blood pressure with component[]</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Blood pressure is measured as two values simultaneously. FHIR models this as one Observation with two components — not two separate Observations. The parent code is the blood pressure panel; each component has its own LOINC code and value.
          </p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`{
  "resourceType": "Observation",
  "status": "final",
  "category": [{ "coding": [{ "code": "vital-signs" }] }],
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "55284-4",
      "display": "Blood pressure systolic and diastolic"
    }]
  },
  "subject": { "reference": "Patient/patient-001" },
  "effectiveDateTime": "2026-06-06T09:00:00Z",
  "component": [
    {
      "code": {
        "coding": [{ "system": "http://loinc.org", "code": "8480-6", "display": "Systolic" }]
      },
      "valueQuantity": { "value": 138, "unit": "mm[Hg]", "system": "http://unitsofmeasure.org" }
    },
    {
      "code": {
        "coding": [{ "system": "http://loinc.org", "code": "8462-4", "display": "Diastolic" }]
      },
      "valueQuantity": { "value": 88, "unit": "mm[Hg]", "system": "http://unitsofmeasure.org" }
    }
  ]
}`}</pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">LOINC codes in practice</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            LOINC (Logical Observation Identifiers Names and Codes) is the standard coding system for laboratory and clinical observations. Every lab test and vital sign has a LOINC code. FHIR requires the LOINC system URI: <code className="font-mono text-xs bg-slate-100 px-1 rounded">http://loinc.org</code>.
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3">LOINC</th>
                  <th className="text-left px-4 py-3">Name</th>
                  <th className="text-left px-4 py-3">Unit</th>
                  <th className="text-left px-4 py-3">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr><td className="px-4 py-3">29463-7</td><td className="px-4 py-3 font-sans">Body weight</td><td className="px-4 py-3">kg</td><td className="px-4 py-3 font-sans">vital-signs</td></tr>
                <tr><td className="px-4 py-3">8310-5</td><td className="px-4 py-3 font-sans">Body temperature</td><td className="px-4 py-3">Cel</td><td className="px-4 py-3 font-sans">vital-signs</td></tr>
                <tr><td className="px-4 py-3">55284-4</td><td className="px-4 py-3 font-sans">Blood pressure panel</td><td className="px-4 py-3">—</td><td className="px-4 py-3 font-sans">vital-signs</td></tr>
                <tr><td className="px-4 py-3">8480-6</td><td className="px-4 py-3 font-sans">Systolic BP</td><td className="px-4 py-3">mm[Hg]</td><td className="px-4 py-3 font-sans">vital-signs</td></tr>
                <tr><td className="px-4 py-3">8462-4</td><td className="px-4 py-3 font-sans">Diastolic BP</td><td className="px-4 py-3">mm[Hg]</td><td className="px-4 py-3 font-sans">vital-signs</td></tr>
                <tr><td className="px-4 py-3">2339-0</td><td className="px-4 py-3 font-sans">Blood glucose</td><td className="px-4 py-3">mmol/L</td><td className="px-4 py-3 font-sans">laboratory</td></tr>
                <tr><td className="px-4 py-3">718-7</td><td className="px-4 py-3 font-sans">Haemoglobin</td><td className="px-4 py-3">g/dL</td><td className="px-4 py-3 font-sans">laboratory</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">See also</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/reference/observation" className="text-teal-600 hover:underline">Reference: Observation</Link>
            <Link href="/learn/resources/condition" className="text-teal-600 hover:underline">Learn: Condition</Link>
            <Link href="/learn/resources/bundle" className="text-teal-600 hover:underline">Learn: Bundle</Link>
          </div>
        </section>
        <ArticleNav />
      </div>
    </article>
  );
}
