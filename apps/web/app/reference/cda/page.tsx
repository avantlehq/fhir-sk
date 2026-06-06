import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is CDA? — Reference",
  description: "Clinical Document Architecture (CDA) is an HL7 XML standard for clinical documents like discharge summaries, referrals, and patient summaries.",
};

export default function CdaReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is CDA?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>Clinical Document Architecture</strong> (HL7 CDA R2) is an XML-based document standard for clinical documents — discharge summaries, referrals, operative notes, and patient summaries. It separates a human-readable narrative from machine-readable structured entries.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8">
          CDA is still widely deployed in Slovak and EU eHealth systems, particularly for patient summaries sent via NCZI infrastructure. EHDS is migrating these to FHIR-based formats.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">CDA document header (abbreviated)</p>
          <pre className="text-xs text-slate-100 font-mono overflow-x-auto">{`<ClinicalDocument xmlns="urn:hl7-org:v3">
  <typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040"/>
  <id root="2.16.840.1.113883.19.4" extension="c266"/>
  <code code="34133-9" codeSystem="2.16.840.1.113883.6.1"
        displayName="Summary of episode note"/>
  <title>Patient Summary</title>
  <effectiveTime value="20240315120000"/>
  <recordTarget>
    <patientRole>
      <id root="2.16.840.1.113883.2.9.4.3.2" extension="987654321"/>
      <patient>
        <name><given>Jana</given><family>Horváth</family></name>
        <administrativeGenderCode code="F"/>
        <birthTime value="19850315"/>
      </patient>
    </patientRole>
  </recordTarget>
</ClinicalDocument>`}</pre>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">CDA structure</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">Header:</span> document metadata — id, type, date, author, patient, custodian</li>
            <li><span className="font-semibold text-slate-800">Body — narrative (level 1):</span> human-readable text in <code className="font-mono text-xs bg-slate-100 px-1 rounded">&lt;section&gt;&lt;text&gt;</code> — sufficient for legal validity</li>
            <li><span className="font-semibold text-slate-800">Body — coded entries (level 3):</span> machine-readable <code className="font-mono text-xs bg-slate-100 px-1 rounded">&lt;entry&gt;</code> elements with SNOMED/LOINC codes — required for interoperability</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/hl7-v2" className="text-teal-600 hover:underline">HL7 v2</Link>
          <Link href="/reference/fhir" className="text-teal-600 hover:underline">FHIR</Link>
        </div>
      </div>
    </article>
  );
}
