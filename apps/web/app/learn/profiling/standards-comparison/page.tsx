import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/ArticleNav";

export const metadata: Metadata = {
  title: "HL7 v2, CDA, and FHIR — Profiling and Validation",
  description: "Three generations of healthcare data standards: HL7 v2 (pipe-delimited messages), CDA (XML documents), and FHIR (REST + JSON). What each solved and where each still lives.",
  alternates: { canonical: "https://fhir.sk/learn/profiling/standards-comparison" },
};

export default function StandardsComparisonPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/learn/profiling" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Profiling and Validation
        </Link>

        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-violet-700 bg-violet-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 2 — Health Data Standards</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">HL7 v2, CDA, and FHIR</h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Healthcare has produced three major data exchange standards over 40 years. Each generation solved a real problem. Each brought new problems. Understanding all three explains why FHIR is the way it is.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">HL7 v2 — the pipe standard (1987)</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            HL7 version 2 was designed when network bandwidth was expensive, computers were slow, and JSON did not exist. It encodes messages as pipe-delimited text — a compact format that could be transmitted efficiently over serial connections.
          </p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
            <div className="text-slate-400 text-xs mb-2">HL7 v2.x ADT^A01 message (patient admission)</div>
            <pre className="text-xs">{`MSH|^~\\&|HISSYS|HOSPITAL|LABSYS|LAB|202606061200||ADT^A01|MSG001|P|2.5
EVN|A01|202606061200
PID|1||HORVATH001^^^HOSPITAL^MR||Horváth^Jana^||19790312|F|||Bratislava
PV1|1|O|CARDIO^101^1^HOSPITAL||||DR^Novák^Ján`}</pre>
          </div>
          <div className="space-y-2 text-sm text-slate-600">
            <p><span className="font-semibold text-slate-800">Strengths:</span> Compact. Fast. Implemented everywhere — virtually every hospital system in the world sends and receives HL7 v2.</p>
            <p><span className="font-semibold text-slate-800">Problems:</span> No formal schema. The &quot;standard&quot; has hundreds of regional variants. Segment Z (custom extensions) proliferated — every vendor has their own flavour. Parsing requires specialized knowledge. No standard for querying — only event-driven push messages.</p>
            <p><span className="font-semibold text-slate-800">Still used today:</span> Hospital ADT feeds, lab result delivery, radiology worklists. The integration engine market (Mirth, Rhapsody, Infor Cloverleaf) exists almost entirely to translate between HL7 v2 variants.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">CDA — Clinical Document Architecture (2005)</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            CDA was designed to represent clinical documents — discharge summaries, referral letters, lab reports — in a structured, signed, human-readable format. It is XML-based and defines a document model with a mandatory human-readable section and an optional machine-readable body.
          </p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-4">
            <div className="text-slate-400 mb-2">CDA R2 document header (abbreviated)</div>
            <pre>{`<ClinicalDocument xmlns="urn:hl7-org:v3">
  <typeId root="2.16.840.1.113883.1.3" extension="POCD_HD000040"/>
  <id root="2.16.840.1.113883.3.933" extension="DOC-2026-001"/>
  <code code="34133-9" displayName="Summarization of Episode Note"
        codeSystem="2.16.840.1.113883.6.1"/>
  <title>Patient Summary</title>
  <effectiveTime value="20260606120000+0100"/>
  <recordTarget>
    <patientRole>
      <id extension="HORVATH001" root="2.16.840.1.113883.2.9.4.3.2"/>
      <patient>
        <name><family>Horváth</family><given>Jana</given></name>
        <administrativeGenderCode code="F"/>
        <birthTime value="19790312"/>
      </patient>
    </patientRole>
  </recordTarget>
</ClinicalDocument>`}</pre>
          </div>
          <div className="space-y-2 text-sm text-slate-600">
            <p><span className="font-semibold text-slate-800">Strengths:</span> Structured clinical document with legal validity. Human-readable narrative always present — a doctor can read it without a system. Supports digital signatures.</p>
            <p><span className="font-semibold text-slate-800">Problems:</span> Verbose XML — a full CDA document can be hundreds of kilobytes. No standard REST API — CDA documents are sent, not queried. Implementation is complex and specialist. CDA templates (C-CDA, HL7 CDA R2 IGs) are difficult to create and validate.</p>
            <p><span className="font-semibold text-slate-800">Still used today:</span> Patient summaries in many European countries (especially Germany, Austria). Cross-border exchange in some EU eHealth services. Legacy hospital portals.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">FHIR — Fast Healthcare Interoperability Resources (2019)</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            FHIR was designed by people who had worked with HL7 v2 and CDA and knew exactly what was wrong with both. The design principles: use existing web standards (HTTP, REST, JSON, OAuth2), make it implementable by any developer in a few days, and make the spec machine-readable with formal schemas.
          </p>
          <div className="space-y-2 text-sm text-slate-600 mb-4">
            <p><span className="font-semibold text-slate-800">Strengths:</span> REST API — queryable, not just push. JSON by default — any developer can read it. Formal StructureDefinitions — machine-validatable profiles. SMART on FHIR for OAuth2 authorization. Growing ecosystem of tools.</p>
            <p><span className="font-semibold text-slate-800">Problems:</span> Base spec is too loose without profiles. Profiling ecosystem is fragmented — many IGs, regional variations. Terminology bindings require external services (SNOMED CT, LOINC). R4 → R5 migration pressure starting.</p>
            <p><span className="font-semibold text-slate-800">Dominant use today:</span> US ONC mandate (all payers must expose FHIR APIs). EHDS mandate (all EU member states must implement FHIR for cross-border exchange). New EHR implementations globally.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Comparison</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3">Property</th>
                  <th className="text-left px-4 py-3">HL7 v2</th>
                  <th className="text-left px-4 py-3">CDA</th>
                  <th className="text-left px-4 py-3">FHIR R4</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-4 py-3 font-semibold text-slate-700">Format</td><td className="px-4 py-3">Pipe-delimited text</td><td className="px-4 py-3">XML</td><td className="px-4 py-3">JSON / XML</td></tr>
                <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold text-slate-700">Transport</td><td className="px-4 py-3">MLLP, file drop</td><td className="px-4 py-3">XDS, IHE</td><td className="px-4 py-3">HTTP REST</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-slate-700">Query support</td><td className="px-4 py-3">None</td><td className="px-4 py-3">Limited (XDS)</td><td className="px-4 py-3">Full REST + Search</td></tr>
                <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold text-slate-700">Schema</td><td className="px-4 py-3">Informal</td><td className="px-4 py-3">XML Schema</td><td className="px-4 py-3">StructureDefinition</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-slate-700">Granularity</td><td className="px-4 py-3">Events (ADT, ORM)</td><td className="px-4 py-3">Documents</td><td className="px-4 py-3">Individual resources</td></tr>
                <tr className="bg-slate-50"><td className="px-4 py-3 font-semibold text-slate-700">Developer onboarding</td><td className="px-4 py-3">Weeks–months</td><td className="px-4 py-3">Weeks–months</td><td className="px-4 py-3">Days</td></tr>
                <tr><td className="px-4 py-3 font-semibold text-slate-700">Adoption</td><td className="px-4 py-3">Universal legacy</td><td className="px-4 py-3">EU, some US</td><td className="px-4 py-3">Dominant new standard</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">They coexist</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            HL7 v2, CDA, and FHIR are not in a winner-takes-all competition. They coexist in every large healthcare environment:
          </p>
          <ul className="space-y-2 text-sm text-slate-600 list-none">
            <li className="flex gap-2"><span className="text-slate-400 mt-0.5">—</span> The lab system sends results to the EHR via HL7 v2 ADT/ORM messages (1990s integration, working fine, not worth replacing).</li>
            <li className="flex gap-2"><span className="text-slate-400 mt-0.5">—</span> The EHR produces CDA discharge summaries that go to the national patient portal.</li>
            <li className="flex gap-2"><span className="text-slate-400 mt-0.5">—</span> The patient-facing app queries the FHIR API to show the patient their own data.</li>
            <li className="flex gap-2"><span className="text-slate-400 mt-0.5">—</span> The cross-border exchange (MyHealth@EU) uses FHIR IPS Patient Summary.</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mt-4">
            The integration engine translates between all three. FHIR is not replacing v2 overnight — it is the standard for new interfaces and the mandatory standard for regulatory compliance (EHDS, US ONC).
          </p>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">See also</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/reference/fhir" className="text-teal-600 hover:underline">Reference: FHIR</Link>
            <Link href="/learn/fhir-foundations" className="text-teal-600 hover:underline">Learn: FHIR Foundations</Link>
            <Link href="/learn/profiling/profile" className="text-teal-600 hover:underline">Learn: What is a Profile</Link>
          </div>
        </section>
        <ArticleNav />
      </div>
    </article>
  );
}
