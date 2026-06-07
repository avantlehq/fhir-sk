import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/ArticleNav";

export const metadata: Metadata = {
  title: "FHIR and EHDS — Learn — FHIR.sk",
  description: "What is the European Health Data Space, what does Regulation 2025/327 mandate, and how FHIR is the technical basis for cross-border health data exchange.",
};

export default function FhirAndEhdsPage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn/ehds" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← EHDS and EHRxF</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 4 · 10 min</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-6">FHIR and EHDS</h1>

        {/* What is EHDS */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">What is EHDS?</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The <strong>European Health Data Space</strong> (EHDS) is an EU regulation (2025/327) adopted in March 2025. It creates a framework for two types of health data use across the EU:
        </p>
        <ul className="space-y-2 text-slate-600 mb-4 ml-4">
          <li><span className="font-semibold text-slate-800">Primary use:</span> patients accessing their own health data and sharing it across borders — a doctor in Slovakia can see your medical records when you are treated in Germany.</li>
          <li><span className="font-semibold text-slate-800">Secondary use:</span> anonymised health data used for research, public health, and AI training — governed by a separate access framework.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-6">
          EHDS does not build a central EU health database. It mandates that national health systems expose standardised APIs so that authorised parties can access data using agreed formats. FHIR R4 is the mandated technical standard.
        </p>

        {/* Timeline */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Timeline and mandatory datasets</h2>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-white bg-teal-600 px-2 py-0.5 rounded">2027</span>
                <span className="font-semibold text-slate-800">Phase 1 — EHRxF mandatory</span>
              </div>
              <ul className="text-sm text-slate-600 space-y-1 ml-2">
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span> Patient Summary (based on IPS)</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span> ePrescription and eDispensation</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span> Laboratory results</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-0.5">→</span> Hospital discharge reports</li>
              </ul>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-white bg-slate-500 px-2 py-0.5 rounded">2029</span>
                <span className="font-semibold text-slate-800">Phase 2 — Extended datasets</span>
              </div>
              <ul className="text-sm text-slate-600 space-y-1 ml-2">
                <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">→</span> Medical images and imaging reports</li>
                <li className="flex items-start gap-2"><span className="text-slate-400 mt-0.5">→</span> Genomic data</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EHRxF */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">EHRxF — the exchange format</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          <strong>EHRxF</strong> (Electronic Health Record Exchange Format) is the technical specification layer of EHDS. It defines FHIR profiles, ValueSets, and Implementation Guides for each mandatory dataset. EHRxF is still being developed — as of mid-2025, the Patient Summary and ePrescription specifications are the most advanced.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          EHRxF Patient Summary is built on the <strong>International Patient Summary (IPS)</strong> — an existing HL7 IG that defines a minimal cross-border patient summary. EHDS extends IPS with EU-specific constraints and national profile layers.
        </p>

        {/* MyHealth@EU */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">MyHealth@EU — the infrastructure</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          <strong>MyHealth@EU</strong> is the EU digital infrastructure that connects national health systems. It was originally built for the eHN (eHealth Network) pilot — a pre-EHDS initiative for cross-border patient summaries and ePrescriptions that has been running since 2019 in several EU countries.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Under EHDS, MyHealth@EU becomes the mandatory backbone. Each member state must connect a National Contact Point for eHealth (NCPeH) to MyHealth@EU. In Slovakia, this is managed by NCZI (Národné centrum zdravotníckych informácií).
        </p>

        {/* FHIR as the mandate */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Why FHIR is mandated</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          EHDS does not mandate &quot;REST&quot; or &quot;JSON&quot; in the abstract — it mandates <strong>HL7 FHIR R4</strong> specifically. The regulation follows the same path as the US (21st Century Cures Act, also mandating FHIR R4) and Australia (FHIR-based national standards). FHIR became the de facto global standard for health data APIs.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">FHIR resources used in EHDS datasets</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-xs font-semibold text-slate-700 uppercase">
                  <th className="pb-2 pr-4">Dataset</th>
                  <th className="pb-2">Primary FHIR resources</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr><td className="py-2 pr-4 font-semibold text-slate-800">Patient Summary</td><td className="py-2">Bundle (document), Composition, Patient, Condition, AllergyIntolerance, MedicationRequest, Observation</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-slate-800">ePrescription</td><td className="py-2">MedicationRequest, Patient, Practitioner, Organization</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-slate-800">eDispensation</td><td className="py-2">MedicationDispense, MedicationRequest (reference)</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-slate-800">Laboratory results</td><td className="py-2">DiagnosticReport, Observation, ServiceRequest</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-slate-800">Discharge report</td><td className="py-2">Bundle (document), Composition, Encounter, Condition, Procedure</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Slovak context */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Slovak context</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Slovakia&apos;s national health IT system is <strong>eZdravie</strong>, operated by NCZI. As of 2025, eZdravie uses a mix of HL7 v2, CDA documents, and proprietary interfaces internally. The EHDS mandate requires Slovakia to expose FHIR APIs by 2027 for Phase 1 datasets.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          This creates a significant migration challenge: existing CDA-based patient summaries (used in eHN since 2019) must be mapped to FHIR-based IPS format. NCZI is responsible for implementing the national NCPeH connector.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <h3 className="text-sm font-semibold text-amber-800 mb-2">EHDS compliance checklist — Phase 1 (2027)</h3>
          <ul className="text-sm text-amber-700 space-y-1">
            <li className="flex items-start gap-2"><span className="font-mono">[ ]</span> Patient Summary exposed as IPS-compliant FHIR Document Bundle</li>
            <li className="flex items-start gap-2"><span className="font-mono">[ ]</span> ePrescription available as FHIR MedicationRequest</li>
            <li className="flex items-start gap-2"><span className="font-mono">[ ]</span> Lab results available as FHIR DiagnosticReport + Observation</li>
            <li className="flex items-start gap-2"><span className="font-mono">[ ]</span> Discharge reports available as FHIR Document Bundle</li>
            <li className="flex items-start gap-2"><span className="font-mono">[ ]</span> SMART on FHIR authentication layer in place</li>
            <li className="flex items-start gap-2"><span className="font-mono">[ ]</span> NCPeH connected to MyHealth@EU</li>
          </ul>
          <p className="text-xs text-amber-600 mt-3">This is a learning checklist based on EHDS Phase 1 requirements. Not an official compliance assessment.</p>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/learn/ehds/international-patient-summary" className="text-teal-600 hover:underline">International Patient Summary</Link>
          <Link href="/reference/implementation-guide" className="text-teal-600 hover:underline">Implementation Guide</Link>
          <Link href="/reference/smart-on-fhir" className="text-teal-600 hover:underline">SMART on FHIR</Link>
        </div>
        <ArticleNav />
      </div>
    </article>
  );
}
