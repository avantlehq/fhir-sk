import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EHDS and EHRxF — Learn — FHIR.sk",
  description: "European Health Data Space regulation, EHRxF exchange format, International Patient Summary, and what it means for healthcare interoperability.",
};

const articles = [
  {
    href: "/learn/ehds/fhir-and-ehds",
    title: "FHIR and EHDS",
    summary: "What is the European Health Data Space regulation, what does it mandate, and how FHIR is the technical basis for cross-border health data exchange.",
    time: "10 min",
  },
  {
    href: "/learn/ehds/international-patient-summary",
    title: "International Patient Summary",
    summary: "The IPS specification: Composition, required sections (Allergies, Medications, Problems), Document Bundle structure, and why IPS is the basis for EHDS Patient Summary.",
    time: "8 min",
  },
];

export default function EhdsLearnPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Learn</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Track 4</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">EHDS and EHRxF</h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-10">
          The European Health Data Space (EHDS) is the EU regulation mandating cross-border access to health data. FHIR is the technical foundation. This track covers the regulation, the exchange format, and how Patient Summary is defined.
        </p>

        <div className="space-y-4 mb-12">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex items-start justify-between gap-4 border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:bg-slate-50 transition-colors group"
            >
              <div>
                <h2 className="text-base font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">{a.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{a.summary}</p>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <span className="text-xs text-slate-400">{a.time}</span>
                <span className="text-teal-600 font-bold text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Topics in this track</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
            {["EHDS Regulation 2025/327", "EHRxF exchange format", "International Patient Summary", "ePrescription", "MyHealth@EU", "IPS Composition", "Document Bundle", "Cross-border access"].map((t) => (
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
