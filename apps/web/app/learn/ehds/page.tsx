import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EHDS and EHRxF",
  description: "European Health Data Space and the FHIR-based exchange format. Patient Summary, ePrescription and cross-border data.",
};

const topics = [
  "EHDS Regulation",
  "EHRxF",
  "Patient Summary",
  "ePrescription",
  "eDispensation",
  "Consent",
  "Provenance",
  "Audit",
  "Secondary Use",
];

export default function EhdsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Learn
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">EHDS and EHRxF</h1>
        <p className="text-lg text-slate-500 mb-10">
          European Health Data Space and the FHIR-based exchange format. Patient Summary, ePrescription and cross-border data.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-slate-700 mb-3">Topics covered</h2>
          <ul className="grid grid-cols-2 gap-2">
            {topics.map((t) => (
              <li key={t} className="text-sm text-slate-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-blue-700 font-semibold mb-1">Content coming in Phase 6</p>
          <p className="text-blue-600 text-sm">
            Follow the <Link href="/learn/roadmap" className="underline">roadmap</Link> to track progress.
          </p>
        </div>
      </div>
    </div>
  );
}
