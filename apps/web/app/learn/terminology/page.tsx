import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terminology — Learn — FHIR.sk",
  description: "Learn how FHIR uses structured vocabularies — CodeSystem, ValueSet, LOINC, SNOMED CT, and binding strengths.",
};

const articles = [
  {
    href: "/learn/terminology/why-terminologies-matter",
    title: "Why Terminologies Matter",
    summary: "The problem of semantic interoperability. How CodeSystems and ValueSets ensure that two systems mean the same thing when they exchange data.",
    time: "8 min",
  },
];

export default function TerminologyLearnPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Learn</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Track 3</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Terminology</h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-10">
          FHIR uses structured vocabularies to ensure that clinical concepts mean the same thing across systems. This track covers CodeSystem, ValueSet, binding, and the major terminologies used in healthcare.
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
            {["CodeSystem", "ValueSet", "Binding strengths", "LOINC", "SNOMED CT", "ICD-10", "ATC / UCUM", "ConceptMap"].map((t) => (
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
