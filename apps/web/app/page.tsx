import Link from "next/link";

const cards = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-teal-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Interoperability Lab",
    description:
      "A hands-on environment for experimenting with HL7 FHIR R4 standards. Deploy a real HAPI FHIR server, perform CRUD operations, and explore the full FHIR REST API.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-teal-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Learning Platform",
    description:
      "Learn by building, not by reading. Each phase introduces new FHIR concepts through practical implementation — from basic Resources to complex EHDS integration patterns.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-teal-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Synthetic Data Only",
    description:
      "All resources use clearly fictional patient data. No real personal health information is ever used, processed, or stored. Safe to experiment with, impossible to misuse.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-teal-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "EHDS Context",
    description:
      "Built with the European Health Data Space in mind. Phase 6 focuses specifically on EHRxF — the FHIR-based exchange format mandated by EHDS for cross-border health data sharing.",
  },
];

const phase1Goals = [
  "Deploy HAPI FHIR R4 server locally via Docker Compose",
  "Understand FHIR Resources — the basic unit of all FHIR data",
  "Perform CRUD operations on Patient resource via REST API",
  "Read and interpret a CapabilityStatement",
  "Create and POST a transaction Bundle",
  "Understand the difference between transaction and batch Bundles",
  "Work with LOINC codes in Observation resources",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-600/20 border border-teal-600/30 text-teal-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
              Phase 1 — In Progress
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              FHIR Interoperability
              <br />
              <span className="text-teal-400">Lab</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Testing environment for{" "}
              <span className="text-white font-semibold">HL7 FHIR R4</span>,
              synthetic healthcare data, and{" "}
              <span className="text-white font-semibold">EHDS</span> concepts.
              Personal learning and experimentation platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/roadmap"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors"
              >
                Explore Roadmap
              </Link>
              <Link
                href="https://github.com/avantlehq/fhir-sk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
              >
                View on GitHub ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is FHIR.sk */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              What is FHIR.sk?
            </h2>
            <p className="mt-3 text-slate-500 text-lg max-w-2xl">
              A practical FHIR laboratory built for learning healthcare
              interoperability from first principles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="p-6 bg-slate-50 border border-slate-200 rounded-xl"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Phase */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                In Progress
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Phase 1 — FHIR Foundations
            </h2>
            <p className="mt-3 text-slate-500 text-lg">
              The foundation phase. Understanding what FHIR is, deploying a real
              FHIR server, and performing hands-on operations with core
              resources.
            </p>
            <ul className="mt-8 space-y-3">
              {phase1Goals.map((goal) => (
                <li key={goal} className="flex items-start gap-3">
                  <span className="mt-1 w-4 h-4 flex-shrink-0 border-2 border-teal-500 rounded-sm" />
                  <span className="text-slate-700 text-sm">{goal}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/roadmap"
                className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                View all 8 phases →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Notice */}
      <section className="py-8 bg-amber-50 border-t border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold text-amber-800">
                Synthetic data only — not a production system
              </p>
              <p className="text-sm text-amber-700 mt-0.5">
                This project uses synthetic data only. Not affiliated with NCZI,
                HL7 Slovakia, Ministry of Health, or any healthcare institution.
                No real patient data is used, processed, or stored.{" "}
                <Link
                  href="/disclaimer"
                  className="underline hover:no-underline"
                >
                  Read full disclaimer →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
