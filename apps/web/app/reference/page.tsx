import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reference — FHIR.sk",
  description: "FHIR and healthcare interoperability reference. Concise definitions of core concepts.",
  alternates: { canonical: `${siteConfig.url}/reference` },
};

const entries = [
  { slug: "fhir", title: "FHIR", summary: "HL7 standard for exchanging healthcare information over REST APIs." },
  { slug: "resource", title: "Resource", summary: "The fundamental unit of FHIR — a structured JSON document with a defined schema." },
  { slug: "patient", title: "Patient", summary: "Demographic and administrative information about a person receiving care." },
  { slug: "observation", title: "Observation", summary: "A measurement or assertion about a patient — vital signs, lab results, clinical findings." },
  { slug: "bundle", title: "Bundle", summary: "A container for multiple FHIR resources — used for transactions, search results, and documents." },
  { slug: "profile", title: "Profile", summary: "A StructureDefinition that constrains a base resource for a specific use case." },
  { slug: "rest-api", title: "REST API", summary: "The HTTP interface for interacting with FHIR resources using standard verbs and URL patterns." },
  { slug: "search", title: "Search", summary: "The FHIR query mechanism for finding resources using URL parameters." },
  { slug: "validation", title: "Validation", summary: "Checking that a resource conforms to the FHIR specification or a profile." },
  { slug: "capability-statement", title: "CapabilityStatement", summary: "A machine-readable description of what a FHIR server supports." },
];

export default function ReferencePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Reference</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Reference</h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-2xl">
            Concise definitions of FHIR and healthcare interoperability concepts.
            Reference answers <em>what is this</em> — for <em>how to use it</em>, see{" "}
            <Link href="/learn" className="text-teal-600 hover:underline">Learn</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {entries.map((e) => (
            <Link
              key={e.slug}
              href={`/reference/${e.slug}`}
              className="flex items-start justify-between gap-4 border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:bg-slate-50 transition-colors group"
            >
              <div>
                <h2 className="text-sm font-bold text-slate-900 mb-1 font-mono">{e.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{e.summary}</p>
              </div>
              <span className="text-teal-600 font-bold text-lg flex-shrink-0 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
