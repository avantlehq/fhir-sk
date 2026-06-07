import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Slovak Interoperability — Learn",
  description: "Slovak eHealth context, NCZI integration landscape, legislative obligations and the FHIR path to EHDS compliance.",
  alternates: { canonical: "https://fhir.sk/learn/slovak" },
};

const articles = [
  {
    href: "/learn/ehds/compliance-timeline",
    title: "EHDS Compliance Timeline for Slovak Healthcare",
    summary: "GDPR health data obligations, EHDS Phase 1 (2027) and Phase 2 (2029) deadlines, Slovak national laws (153/2013, 576/2004, 18/2018), and the FHIR resources required at each stage.",
    tags: ["GDPR Art. 9", "EHDS 2027", "EHDS 2029", "153/2013", "18/2018"],
    time: "12 min",
    status: "live" as const,
  },
];

const upcoming = [
  {
    title: "How eZdravie Works Today",
    summary: "Architecture of the Slovak national health information system. SOAP/XML interfaces, NCZI Integration Manual, and the modules that constitute eZdravie.",
    tags: ["NCZI", "SOAP", "XML", "eLab", "eVyšetrenie"],
    phase: "Phase 7",
  },
  {
    title: "From eZdravie to FHIR: Mapping Guide",
    summary: "Element-level mapping between Slovak eHealth data models and FHIR R4 resources. JRUZ identifiers, diagnostic codes, lab results, and Slovak administrative codes.",
    tags: ["eLab v3", "Observation", "LOINC", "JRUZ", "ConceptMap"],
    phase: "Phase 8",
  },
];

export default function SlovakInteroperabilityPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Learn
        </Link>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">Slovak Interoperability</h1>
        <p className="text-lg text-slate-500 mb-4 leading-relaxed">
          Slovakia&apos;s national eHealth system (eZdravie) is built on SOAP/XML interfaces developed before FHIR existed.
          The EHDS regulation mandates FHIR-based cross-border exchange by 2027. This track maps the gap between where
          Slovakia is and where it needs to be.
        </p>
        <p className="text-sm text-slate-400 mb-10 leading-relaxed">
          Content here mirrors the Phase 7–8 lab work: Slovak eHealth analysis and FHIR mapping. Articles are added as
          phase work is completed.
        </p>

        {/* Live articles */}
        <div className="space-y-4 mb-12">
          {articles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="block border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {a.title}
                </h2>
                <span className="text-xs text-slate-400 flex-shrink-0 mt-1">{a.time} read</span>
              </div>
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

        {/* Upcoming */}
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Upcoming — Phase 7–8
          </h2>
          <div className="space-y-4">
            {upcoming.map((a) => (
              <div
                key={a.title}
                className="border border-dashed border-slate-200 rounded-xl p-6 opacity-60"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-base font-semibold text-slate-700">{a.title}</h2>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded flex-shrink-0">
                    {a.phase}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{a.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono bg-slate-50 text-slate-400 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Context note */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong className="font-semibold">Disclaimer:</strong> Analysis on this page is based on publicly available
            information and personal learning work. Not affiliated with NCZI, Ministry of Health, or any Slovak
            healthcare institution. Nothing here is legal or compliance advice.{" "}
            <Link href="/disclaimer" className="underline hover:no-underline">Read full disclaimer.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
