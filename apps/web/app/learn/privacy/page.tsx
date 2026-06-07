import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Privacy in FHIR — Learn — FHIR.sk",
  description: "GDPR and health data, Consent resource, AuditEvent, Provenance and Privacy by Design in FHIR systems.",
};

const topics = [
  {
    title: "GDPR and Health Data",
    description: "Health data is special category data under GDPR Article 9. Processing requires explicit consent or another legal basis. FHIR provides the technical primitives to implement these requirements at the data layer.",
  },
  {
    title: "Consent Resource",
    description: "The FHIR Consent resource models patient permissions — what data can be accessed, by whom, and for what purpose. It supports granular provision trees for treatment, research and marketing use cases.",
  },
  {
    title: "AuditEvent",
    description: "Every access to patient data should be logged. AuditEvent records who accessed what, when, from where, and why — using the DICOM audit trail model. Required for GDPR accountability and EHDS access logs.",
  },
  {
    title: "Provenance",
    description: "Provenance tracks the origin and custody chain of a resource — who created it, who modified it, which system transmitted it. Essential for data integrity and regulatory accountability.",
  },
  {
    title: "Privacy by Design",
    description: "GDPR Article 25 requires data protection by design and by default. In FHIR this means minimum necessary data in resources, purpose-limited scopes in SMART on FHIR, and Consent checked before data is returned.",
  },
  {
    title: "EHDS and Patient Rights",
    description: "The European Health Data Space grants patients the right to access their own data via MyHealth@EU. FHIR is the technical layer. Patient Summary, ePrescription and Lab Results must be accessible cross-border by 2027.",
  },
];

export default function PrivacyLearnPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Learn</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Track 6</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Data Privacy in FHIR</h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-10">
          Health data is among the most sensitive personal data that exists. GDPR classifies it as special category data. FHIR provides concrete resources — Consent, AuditEvent, Provenance — to implement privacy requirements at the technical layer. This track covers what that means in practice.
        </p>

        <div className="space-y-4 mb-12">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="border border-slate-200 rounded-xl p-5"
            >
              <h2 className="text-base font-bold text-slate-900 mb-1">{topic.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Topics in this track</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
            {[
              "GDPR Article 9 — health data",
              "Legal basis for processing",
              "Consent resource",
              "AuditEvent (DICOM model)",
              "Provenance and custody chain",
              "Privacy by Design (Art. 25)",
              "SMART scopes and data minimization",
              "EHDS patient access rights",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
