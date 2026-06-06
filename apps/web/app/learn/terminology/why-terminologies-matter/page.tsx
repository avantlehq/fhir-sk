import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Terminologies Matter — Learn — FHIR.sk",
  description: "How CodeSystems and ValueSets solve the semantic interoperability problem in healthcare data exchange.",
};

export default function WhyTerminologiesMatterPage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn/terminology" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Terminology</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 3 · 8 min</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Why Terminologies Matter</h1>

        {/* The problem */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">The semantic interoperability problem</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Two hospitals exchange a Condition resource for a patient with diabetes. Hospital A codes it as <code className="font-mono text-xs bg-slate-100 px-1 rounded">44054006</code> from SNOMED CT. Hospital B codes it as <code className="font-mono text-xs bg-slate-100 px-1 rounded">E11</code> from ICD-10. A third system uses a local code <code className="font-mono text-xs bg-slate-100 px-1 rounded">DM2</code> with no system specified.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          All three mean the same clinical thing, but a system receiving these resources cannot automatically know that without additional knowledge. This is the semantic interoperability problem — getting data across systems is the easy part; ensuring both sides mean the same thing is hard.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          FHIR solves this through a structured terminology framework: <strong>CodeSystems</strong> define what codes mean, <strong>ValueSets</strong> select which codes are valid in a context, and <strong>bindings</strong> connect ValueSets to specific resource elements.
        </p>

        {/* CodeSystem */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">CodeSystem — the source of codes</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          A <Link href="/reference/code-system" className="text-teal-600 hover:underline">CodeSystem</Link> defines a set of codes and their meanings. Every code used in FHIR must belong to a CodeSystem, identified by a URI. The URI is the system, the code is the value — together they are unambiguous.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-6">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Major CodeSystems in FHIR</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-xs font-semibold text-slate-700 uppercase">
                  <th className="pb-2 pr-4">CodeSystem</th>
                  <th className="pb-2 pr-4">Used for</th>
                  <th className="pb-2">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">SNOMED CT</td>
                  <td className="py-2 pr-4">Diagnoses, findings, procedures, anatomy</td>
                  <td className="py-2 font-mono text-xs">44054006 — Diabetes type 2</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">LOINC</td>
                  <td className="py-2 pr-4">Lab tests, observations, panels, vitals</td>
                  <td className="py-2 font-mono text-xs">2339-0 — Blood glucose</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">ICD-10</td>
                  <td className="py-2 pr-4">Diagnoses for billing and epidemiology</td>
                  <td className="py-2 font-mono text-xs">E11 — Type 2 diabetes</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">ATC</td>
                  <td className="py-2 pr-4">Medications by anatomical/therapeutic class</td>
                  <td className="py-2 font-mono text-xs">A10BA02 — Metformin</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-800">UCUM</td>
                  <td className="py-2 pr-4">Units of measure</td>
                  <td className="py-2 font-mono text-xs">mg/dL, mmol/L, kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">
          Notice that Condition uses <strong>both</strong> SNOMED CT and ICD-10 in the same <code className="font-mono text-xs bg-slate-100 px-1 rounded">code.coding[]</code> array. FHIR allows — and encourages — multiple codings for the same concept from different systems. The systems using the data can consume the coding they understand.
        </p>

        {/* ValueSet */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">ValueSet — selecting codes for a context</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          A <Link href="/reference/value-set" className="text-teal-600 hover:underline">ValueSet</Link> does not define codes — it selects a subset of codes from one or more CodeSystems for use in a specific context. The distinction matters: SNOMED CT has ~350,000 concepts. A ValueSet for &quot;condition clinical status&quot; selects exactly 6 of them.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-6">
          <p className="text-xs text-slate-400 mb-2 font-mono">Condition.clinicalStatus binding (required)</p>
          <pre className="text-sm text-slate-100 font-mono overflow-x-auto">{`"clinicalStatus": {
  "coding": [{
    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
    "code": "active",
    "display": "Active"
  }]
}

// Must use one of: active | recurrence | relapse | inactive | remission | resolved
// Defined in ValueSet: http://terminology.hl7.org/ValueSet/condition-clinical
// Binding strength: required — any other code is a validation error`}</pre>
        </div>

        {/* Binding */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Binding — connecting ValueSets to elements</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          A binding in a profile (or in the base spec) connects a ValueSet to a specific element. The <strong>binding strength</strong> defines how strictly the ValueSet must be followed:
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-6">
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-xs font-semibold text-slate-700 uppercase">
                  <th className="pb-2 pr-4">Strength</th>
                  <th className="pb-2 pr-4">Rule</th>
                  <th className="pb-2">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="py-2 pr-4 font-semibold text-red-700">required</td>
                  <td className="py-2 pr-4">Must use a code from this ValueSet. Validation fails if not.</td>
                  <td className="py-2">Patient.gender, Condition.clinicalStatus</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-amber-700">extensible</td>
                  <td className="py-2 pr-4">Prefer codes from this ValueSet. May use other codes if needed and documented.</td>
                  <td className="py-2">Observation.code (vital signs)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-blue-700">preferred</td>
                  <td className="py-2 pr-4">Use codes from this ValueSet if possible. Not enforced by validators.</td>
                  <td className="py-2">Condition.code (SNOMED CT preferred)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-slate-600">example</td>
                  <td className="py-2 pr-4">Illustrative only. No constraint enforced.</td>
                  <td className="py-2">Observation.bodySite</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SNOMED vs LOINC */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">SNOMED CT vs LOINC — what each is for</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The most common confusion in clinical terminology is when to use SNOMED CT and when to use LOINC. They are not interchangeable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-slate-200 rounded-xl p-4">
            <h3 className="font-bold text-slate-800 mb-2">SNOMED CT</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-2">
              <strong>What:</strong> clinical concepts — conditions, procedures, anatomy, organisms, substances.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-2">
              <strong>Use in FHIR:</strong> Condition.code, Procedure.code, AllergyIntolerance.code, body sites, clinical findings.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Example:</strong> <code className="font-mono text-xs bg-slate-100 px-1 rounded">44054006</code> — Diabetes mellitus type 2
            </p>
          </div>
          <div className="border border-slate-200 rounded-xl p-4">
            <h3 className="font-bold text-slate-800 mb-2">LOINC</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-2">
              <strong>What:</strong> observable entities — laboratory tests, vital sign measurements, clinical assessments, document types.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-2">
              <strong>Use in FHIR:</strong> Observation.code, Observation.component.code, DiagnosticReport.code.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Example:</strong> <code className="font-mono text-xs bg-slate-100 px-1 rounded">2339-0</code> — Glucose [Mass/volume] in Blood
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h3 className="text-sm font-semibold text-amber-800 mb-2">Practical rule</h3>
          <p className="text-sm text-amber-700 leading-relaxed">
            Use LOINC to identify <em>what was measured or observed</em>. Use SNOMED CT to identify <em>what the finding or condition is</em>. A blood glucose test is LOINC 2339-0. The resulting diagnosis (diabetes) is SNOMED CT 44054006.
          </p>
        </div>

        {/* Custom CodeSystems */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">When to create a custom CodeSystem</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Sometimes no standard CodeSystem covers the concept you need — a country-specific identifier type, an institutional ward code, a local classification. In that case you define a custom CodeSystem under your domain URL and publish it as a FHIR resource.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          In FHIR.sk, the <code className="font-mono text-xs bg-slate-100 px-1 rounded">FhirSkIdentifierType</code> CodeSystem (<code className="font-mono text-xs bg-slate-100 px-1 rounded">https://fhir.sk/fhir/CodeSystem/identifier-type</code>) defines three custom identifier types: nationalId, hospitalNumber, insuranceId. This is a synthetic example — the pattern is the same in real IGs.
        </p>

        {/* Explorer CTA */}
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-8">
          <h3 className="text-sm font-semibold text-teal-800 mb-2">Try it in the Terminology Explorer</h3>
          <p className="text-sm text-teal-700 leading-relaxed mb-3">
            Browse the bundled ValueSets and CodeSystems referenced in this article, including the LOINC vital signs ValueSet and custom FHIR.sk CodeSystem.
          </p>
          <a href="/lab/terminology-explorer" className="inline-block text-sm font-semibold text-teal-700 border border-teal-300 rounded-lg px-4 py-2 hover:bg-teal-100 transition-colors">
            Open Terminology Explorer →
          </a>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/code-system" className="text-teal-600 hover:underline">CodeSystem Reference</Link>
          <Link href="/reference/value-set" className="text-teal-600 hover:underline">ValueSet Reference</Link>
          <Link href="/reference/profile" className="text-teal-600 hover:underline">Profile Reference</Link>
        </div>
      </div>
    </article>
  );
}
