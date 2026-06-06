import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profiling and Validation — Learn",
  description: "FHIR profiles, StructureDefinition, validation, and healthcare standards comparison (HL7 v2, CDA, FHIR).",
  alternates: { canonical: "https://fhir.sk/learn/profiling" },
};

const articles = [
  {
    href: "/learn/profiling/profile",
    title: "What is a Profile",
    summary: "StructureDefinition, differential vs snapshot, cardinality constraints, mustSupport, slicing, and real-world profiles (IPS, US Core, EHDS).",
    tags: ["StructureDefinition", "differential", "slicing", "mustSupport"],
  },
  {
    href: "/learn/profiling/validation",
    title: "Validation",
    summary: "Types of FHIR validation: structural, cardinality, terminology, profile. OperationOutcome severity levels. The $validate operation.",
    tags: ["OperationOutcome", "$validate", "error", "warning"],
  },
  {
    href: "/learn/profiling/standards-comparison",
    title: "HL7 v2, CDA, and FHIR",
    summary: "Three generations of healthcare data standards. What each solved, where each is still used, and why FHIR became the dominant modern standard.",
    tags: ["HL7 v2", "CDA", "FHIR R4", "interoperability"],
  },
];

export default function ProfilingPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Learn
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Profiling and Validation</h1>
        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
          How FHIR profiles constrain base resources for specific use cases — and how validation enforces those constraints.
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
