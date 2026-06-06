import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a MedicationRequest? — Reference",
  description: "MedicationRequest represents a prescription or order for a medication — what drug, what dose, what frequency, for which patient.",
};

export default function MedicationRequestReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Resource</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is a MedicationRequest?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          A <strong>MedicationRequest</strong> represents a prescription or an order for a medication to be given to a patient — the drug, dose, route, frequency, and quantity. It is equivalent to a written prescription or a computerized physician order entry (CPOE) record.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">Metformin prescription — MedicationRequest</p>
          <pre className="text-sm text-slate-100 font-mono overflow-x-auto">{`{
  "resourceType": "MedicationRequest",
  "id": "rx-metformin-001",
  "status": "active",
  "intent": "order",
  "medicationCodeableConcept": {
    "coding": [{
      "system": "http://www.whocc.no/atc",
      "code": "A10BA02",
      "display": "Metformin"
    }]
  },
  "subject": { "reference": "Patient/patient-001" },
  "authoredOn": "2024-03-15",
  "dosageInstruction": [{
    "text": "500 mg twice daily with food",
    "timing": { "repeat": { "frequency": 2, "period": 1, "periodUnit": "d" } },
    "doseAndRate": [{
      "doseQuantity": { "value": 500, "unit": "mg",
        "system": "http://unitsofmeasure.org", "code": "mg" }
    }]
  }]
}`}</pre>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key elements</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">status</code> — active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">intent</code> — proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">medication[x]</code> — CodeableConcept (ATC, SNOMED, RxNorm) or Reference to Medication resource</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">subject</code> — reference to Patient (required)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">dosageInstruction</code> — dose, route, timing — can be complex</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">dispenseRequest</code> — number of repeats, quantity to dispense</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">reasonReference</code> — link to Condition for which drug is prescribed</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/condition" className="text-teal-600 hover:underline">Condition</Link>
          <Link href="/reference/encounter" className="text-teal-600 hover:underline">Encounter</Link>
          <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link>
        </div>
      </div>
    </article>
  );
}
