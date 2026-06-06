import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is an Observation? — Reference",
  description: "The FHIR Observation resource represents a measurement or assertion about a patient — vital signs, lab results, clinical findings.",
};

export default function ObservationReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is an Observation?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          The <strong>Observation</strong> resource represents a measurement or assertion about a patient — vital signs, laboratory results, imaging findings, clinical scores, or social history. It is one of the most commonly used FHIR resources.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key elements</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">status</code> — registered, preliminary, <strong>final</strong>, amended, corrected, cancelled</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">category</code> — vital-signs, laboratory, imaging, social-history, survey, exam</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">code</code> — what was observed, coded with LOINC (preferred), SNOMED CT, or local codes</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">subject</code> — reference to the Patient (or Group, Device, Location)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">effective[x]</code> — when the observation was made (dateTime, Period, Timing, instant)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">value[x]</code> — the result: Quantity, CodeableConcept, string, boolean, Range, Ratio</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">component</code> — for multi-part observations (blood pressure: systolic + diastolic)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">referenceRange</code> — normal range for interpretation</li>
          </ul>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">LOINC codes used in practice</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-600">
              <thead className="text-left text-slate-500 border-b border-slate-200">
                <tr><th className="pb-2 pr-4">LOINC</th><th className="pb-2 pr-4">Description</th><th className="pb-2">Unit</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-2 pr-4 font-mono text-xs">29463-7</td><td className="py-2 pr-4">Body weight</td><td className="py-2">kg</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">8310-5</td><td className="py-2 pr-4">Body temperature</td><td className="py-2">Cel</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">55284-4</td><td className="py-2 pr-4">Blood pressure (panel)</td><td className="py-2">—</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">8480-6</td><td className="py-2 pr-4">Systolic blood pressure</td><td className="py-2">mm[Hg]</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">8462-4</td><td className="py-2 pr-4">Diastolic blood pressure</td><td className="py-2">mm[Hg]</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">2339-0</td><td className="py-2 pr-4">Blood glucose</td><td className="py-2">mmol/L</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/patient" className="text-teal-600 hover:underline">Patient</Link>
          <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link>
          <Link href="/reference/validation" className="text-teal-600 hover:underline">Validation</Link>
        </div>
      </div>
    </article>
  );
}
