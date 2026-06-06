import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is an Encounter? — Reference",
  description: "The FHIR Encounter resource represents an interaction between a patient and healthcare provider — a visit, admission, or telehealth consultation.",
};

export default function EncounterReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Resource</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is an Encounter?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          An <strong>Encounter</strong> resource represents a specific interaction between a patient and a healthcare provider — an outpatient visit, an inpatient admission, an emergency visit, or a telehealth call. Most clinical resources (Observation, Condition, MedicationRequest) reference the Encounter that produced them.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Status lifecycle</h2>
          <div className="overflow-x-auto">
            <table className="text-sm text-slate-600 w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase">
                  <th className="pb-2 pr-4">Status</th>
                  <th className="pb-2">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-2 pr-4 font-mono text-xs">planned</td><td className="py-2">Appointment scheduled, not started</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">arrived</td><td className="py-2">Patient has arrived at the facility</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">triaged</td><td className="py-2">Patient assessed — used in ED workflows</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">in-progress</td><td className="py-2">Encounter is active</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">finished</td><td className="py-2">Encounter completed</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">cancelled</td><td className="py-2">Never started; appointment cancelled</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key elements</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">class</code> — AMB (ambulatory), IMP (inpatient), EMER (emergency), VR (virtual)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">subject</code> — reference to Patient (required)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">period</code> — start and end datetime of encounter</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">participant</code> — clinicians involved, with individual roles</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">reasonCode</code> — reason for the encounter (SNOMED, ICD-10)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">diagnosis</code> — diagnoses made during encounter, linked to Condition</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">hospitalization</code> — admission and discharge details for inpatient</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link>
          <Link href="/reference/condition" className="text-teal-600 hover:underline">Condition</Link>
          <Link href="/reference/observation" className="text-teal-600 hover:underline">Observation</Link>
        </div>
      </div>
    </article>
  );
}
