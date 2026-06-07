import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/ArticleNav";

export const metadata: Metadata = {
  title: "International Patient Summary — Learn — FHIR.sk",
  description: "IPS specification: Composition resource, required sections (Allergies, Medications, Problems), Document Bundle structure, and LOINC section codes.",
};

export default function InternationalPatientSummaryPage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn/ehds" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← EHDS and EHRxF</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 4 · 8 min</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-6">International Patient Summary</h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          The <strong>International Patient Summary</strong> (IPS) is an HL7 Implementation Guide that defines a minimal, specialty-agnostic patient summary for cross-border use. It is the technical basis for the EHDS Patient Summary dataset mandated from 2027.
        </p>

        {/* Document type */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Document Bundle — a new Bundle type</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          An IPS is not a transaction or searchset Bundle — it is a <strong>document Bundle</strong> (<code className="font-mono text-xs bg-slate-100 px-1 rounded">type: &quot;document&quot;</code>). Document Bundles have two rules that transaction Bundles do not:
        </p>
        <ul className="space-y-2 text-slate-600 mb-4 ml-4">
          <li><span className="font-semibold text-slate-800">First entry must be Composition:</span> the Composition is the document header — it defines sections, author, date, and subject.</li>
          <li><span className="font-semibold text-slate-800">All referenced resources must be in the Bundle:</span> a document is self-contained. You cannot reference a Patient that lives on a separate server.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-6">
          References inside a document Bundle use <code className="font-mono text-xs bg-slate-100 px-1 rounded">urn:uuid:</code> identifiers — the same pattern as transaction Bundles.
        </p>

        {/* Composition */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The Composition resource</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Composition is the document header. It carries the document type code, the subject (Patient), author (Practitioner), date, and a list of sections. Each section has a LOINC code identifying the clinical category, narrative text, and entries (references to clinical resources).
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">Composition — IPS document header (excerpt)</p>
          <pre className="text-xs text-slate-100 font-mono overflow-x-auto">{`{
  "resourceType": "Composition",
  "status": "final",
  "type": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "60591-5",
      "display": "Patient summary Document"
    }]
  },
  "subject": { "reference": "urn:uuid:patient-001" },
  "date": "2024-03-15T10:30:00+01:00",
  "author": [{ "reference": "urn:uuid:practitioner-001" }],
  "title": "Patient Summary — Jana Horváth",
  "section": [
    {
      "title": "Allergies and Intolerances",
      "code": { "coding": [{ "system": "http://loinc.org", "code": "48765-2" }] },
      "entry": [{ "reference": "urn:uuid:allergy-001" }]
    },
    ...
  ]
}`}</pre>
        </div>

        {/* Required sections */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Required sections</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          IPS defines three required sections and several recommended ones. Required sections must be present even if they are empty — in that case they use an <code className="font-mono text-xs bg-slate-100 px-1 rounded">emptyReason</code>.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-xs font-semibold text-slate-700 uppercase">
                  <th className="pb-2 pr-4">Section</th>
                  <th className="pb-2 pr-4">LOINC code</th>
                  <th className="pb-2 pr-4">Status</th>
                  <th className="pb-2">Resource type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">Allergies and Intolerances</td>
                  <td className="py-2 pr-4 font-mono text-xs">48765-2</td>
                  <td className="py-2 pr-4"><span className="text-red-700 font-semibold">Required</span></td>
                  <td className="py-2">AllergyIntolerance</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">Medication Summary</td>
                  <td className="py-2 pr-4 font-mono text-xs">10160-0</td>
                  <td className="py-2 pr-4"><span className="text-red-700 font-semibold">Required</span></td>
                  <td className="py-2">MedicationRequest / MedicationStatement</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">Problem List</td>
                  <td className="py-2 pr-4 font-mono text-xs">11450-4</td>
                  <td className="py-2 pr-4"><span className="text-red-700 font-semibold">Required</span></td>
                  <td className="py-2">Condition</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">Results</td>
                  <td className="py-2 pr-4 font-mono text-xs">30954-2</td>
                  <td className="py-2 pr-4"><span className="text-amber-700 font-semibold">Recommended</span></td>
                  <td className="py-2">Observation, DiagnosticReport</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">Vital Signs</td>
                  <td className="py-2 pr-4 font-mono text-xs">8716-3</td>
                  <td className="py-2 pr-4"><span className="text-amber-700 font-semibold">Recommended</span></td>
                  <td className="py-2">Observation (vital-signs category)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">Immunizations</td>
                  <td className="py-2 pr-4 font-mono text-xs">11369-6</td>
                  <td className="py-2 pr-4"><span className="text-amber-700 font-semibold">Recommended</span></td>
                  <td className="py-2">Immunization</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">History of Procedures</td>
                  <td className="py-2 pr-4 font-mono text-xs">47519-4</td>
                  <td className="py-2 pr-4"><span className="text-slate-500">Optional</span></td>
                  <td className="py-2">Procedure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Narrative */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Narrative text in sections</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Each section in an IPS Composition must have a narrative <code className="font-mono text-xs bg-slate-100 px-1 rounded">text</code> block — an XHTML summary of the section for human display. This is the IPS requirement that triggers the dom-6 best-practice warning in HAPI when you validate documents: resources in a document Bundle should have narrative text.
        </p>
        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">Section narrative</p>
          <pre className="text-xs text-slate-100 font-mono overflow-x-auto">{`"text": {
  "status": "generated",
  "div": "<div xmlns=\\"http://www.w3.org/1999/xhtml\\">
    High-criticality allergy to amoxicillin — skin rash (confirmed, active).
  </div>"
}`}</pre>
        </div>

        {/* Our IPS example */}
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-8">
          <h3 className="text-sm font-semibold text-teal-800 mb-2">Synthetic IPS for Jana Horváth</h3>
          <p className="text-sm text-teal-700 leading-relaxed mb-2">
            We built a complete IPS Document Bundle for our synthetic patient at <code className="font-mono text-xs bg-teal-100 px-1 rounded">examples/bundles/ips-patient-summary.json</code>. It includes:
          </p>
          <ul className="text-sm text-teal-700 space-y-1">
            <li>→ Composition with 4 sections (Allergies, Medication, Problem List, Results)</li>
            <li>→ Patient, Practitioner, Organization resources</li>
            <li>→ AllergyIntolerance: amoxicillin allergy (high criticality)</li>
            <li>→ MedicationRequest: metformin 500 mg twice daily</li>
            <li>→ Condition: Diabetes type 2 (SNOMED + ICD-10)</li>
            <li>→ Observations: blood glucose (7.2 mmol/L, high), blood pressure (128/82 mmHg)</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/learn/ehds/fhir-and-ehds" className="text-teal-600 hover:underline">FHIR and EHDS</Link>
          <Link href="/reference/bundle" className="text-teal-600 hover:underline">Bundle Reference</Link>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile Reference</Link>
        </div>
        <ArticleNav />
      </div>
    </article>
  );
}
