import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Core Resources — Learn",
  description: "Practical guides to the FHIR resources that form the backbone of any healthcare record: Observation, Condition, Encounter, Bundle, Search.",
  alternates: { canonical: "https://fhir.sk/learn/resources" },
};

const articles = [
  {
    href: "/learn/resources/observation",
    title: "Observation",
    summary: "Measurements and findings: vital signs, lab results, blood pressure with components, LOINC coding.",
    tags: ["LOINC", "vital-signs", "laboratory", "component"],
  },
  {
    href: "/learn/resources/condition",
    title: "Condition",
    summary: "Diagnoses, problems, and clinical findings. Clinical status lifecycle, SNOMED CT and ICD-10 coding.",
    tags: ["SNOMED CT", "ICD-10", "clinicalStatus", "verificationStatus"],
  },
  {
    href: "/learn/resources/encounter",
    title: "Encounter",
    summary: "A patient interaction with a healthcare provider. Status, class (AMB/EMER), period, reason, and participant.",
    tags: ["AMB", "EMER", "status", "period"],
  },
  {
    href: "/learn/resources/search",
    title: "Search",
    summary: "How to query FHIR servers using URL parameters. Parameter types, modifiers, and searchset Bundles.",
    tags: ["token", "string", "date", "reference", "_count"],
  },
  {
    href: "/learn/resources/bundle",
    title: "Bundle",
    summary: "Container for multiple resources. Transaction atomicity, searchset results, urn:uuid internal references.",
    tags: ["transaction", "searchset", "batch", "urn:uuid"],
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Learn
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Core Resources</h1>
        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
          The clinical resources that form the backbone of any FHIR implementation. How each resource is structured, what it contains, and how it is used in practice.
        </p>

        <div className="space-y-4">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="block border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-sm transition-all group"
            >
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                {a.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{a.summary}</p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
