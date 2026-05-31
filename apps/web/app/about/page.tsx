import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About FHIR.sk — a personal learning platform for HL7 FHIR R4, healthcare interoperability, and EHDS. Not affiliated with any healthcare institution.",
};

const philosophy = [
  {
    principle: "Learn By Implementation",
    explanation:
      "Build before discussing theory. A working HAPI FHIR server teaches more about FHIR than three hours of reading the specification. Theory follows practice.",
  },
  {
    principle: "Architecture Before Coding",
    explanation:
      "Always explain the WHY before the HOW. Every component should have a clear reason for existing. No accidental complexity.",
  },
  {
    principle: "Simplicity First",
    explanation:
      "Docker Compose, not Kubernetes. A single HAPI FHIR server, not a microservices cluster. The simplest thing that works is the right starting point.",
  },
  {
    principle: "FHIR First",
    explanation:
      "Everything is built on FHIR. Not a proprietary data model that maps to FHIR later. FHIR resources are the primary data model from day one.",
  },
  {
    principle: "AI Last",
    explanation:
      "AI tools come after mastering FHIR foundations. You cannot use AI effectively in a domain you do not understand. Understand FHIR first. Use AI to accelerate after.",
  },
];

const notList = [
  "A production healthcare system",
  "An Electronic Health Record (EHR) platform",
  "A national or regional health information platform",
  "Affiliated with NCZI (Národné centrum zdravotníckych informácií)",
  "Affiliated with HL7 Slovakia",
  "Affiliated with the Slovak Ministry of Health",
  "Affiliated with any hospital, clinic, or healthcare provider",
  "A system that processes real patient data — EVER",
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block"
          >
            ← Back to home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            About FHIR.sk
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            A personal FHIR interoperability lab. The purpose is simple: become
            a practical expert in HL7 FHIR, healthcare interoperability, and
            EHDS through hands-on implementation.
          </p>
        </div>

        {/* What it is */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            What FHIR.sk Is
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            FHIR.sk is a FHIR Interoperability Lab — a controlled, personal
            environment for experimenting with HL7 FHIR R4 standards, tools,
            and integration patterns. It runs a real HAPI FHIR server, uses
            real FHIR resources, and follows the actual FHIR specification.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The learning objective is concrete: achieve practical expertise in
            FHIR sufficient to architect and implement FHIR-based systems in
            production — including systems compliant with the European Health
            Data Space (EHDS) regulation.
          </p>
          <p className="text-slate-700 leading-relaxed">
            All data in this lab is synthetic. Fictional patient names,
            fictional identifiers, fictional clinical records. No real patient
            data is used, stored, or processed at any point.
          </p>
        </section>

        {/* Core Philosophy */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Core Philosophy
          </h2>
          <div className="space-y-4">
            {philosophy.map((item, i) => (
              <div key={item.principle} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.principle}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Tech Stack</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-slate-700 mb-1">Frontend</p>
                <p className="text-slate-500">
                  Next.js 15, App Router, TypeScript, Tailwind CSS v3
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">
                  FHIR Server
                </p>
                <p className="text-slate-500">
                  HAPI FHIR R4 (v7-tomcat), PostgreSQL 16
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">
                  Local Infra
                </p>
                <p className="text-slate-500">Docker Compose</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">
                  Cloud Deploy
                </p>
                <p className="text-slate-500">Vercel (web), Railway (FHIR)</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">
                  FHIR Version
                </p>
                <p className="text-slate-500">R4 (primary), R4B noted</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">Source</p>
                <p className="text-slate-500">
                  <Link
                    href="https://github.com/avantlehq/fhir-sk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700"
                  >
                    github.com/avantlehq/fhir-sk ↗
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What it is NOT */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            What FHIR.sk Is NOT
          </h2>
          <ul className="space-y-2">
            {notList.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-sm text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Disclaimer link */}
        <div className="border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            For the full legal disclaimer, see the{" "}
            <Link
              href="/disclaimer"
              className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              Disclaimer page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
