import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FHIR Foundations",
  description: "An introduction to HL7 FHIR R4 — what it is, why it was created, and how it works.",
  alternates: { canonical: "https://fhir.sk/learn/fhir-foundations" },
};

const concepts = [
  {
    term: "Resource",
    definition:
      "The fundamental unit of FHIR. Everything is a Resource: Patient, Observation, Condition, Encounter, Medication, DiagnosticReport. Each Resource is a structured JSON or XML document with a defined schema.",
  },
  {
    term: "REST API",
    definition:
      "FHIR exposes a RESTful HTTP API. You interact with FHIR servers using standard HTTP methods: GET (read/search), POST (create), PUT (update), DELETE (delete). The base URL pattern is: [base]/[ResourceType]/[id].",
  },
  {
    term: "JSON / XML",
    definition:
      "FHIR resources can be serialized as JSON or XML. JSON is the default in modern implementations. A Patient resource in JSON is a standard JSON object with a resourceType field set to 'Patient'.",
  },
  {
    term: "Bundle",
    definition:
      "A container for multiple FHIR resources. Used for grouping, transporting, and processing resources together. Bundle types: transaction (all-or-nothing), batch (independent entries), collection, and document.",
  },
  {
    term: "CapabilityStatement",
    definition:
      "The FHIR server's declaration of what it supports. GET [base]/metadata returns the CapabilityStatement — a machine-readable document listing supported resources, operations, search parameters, and FHIR version.",
  },
  {
    term: "Identifier",
    definition:
      "A business identifier for a resource — for example, a patient's national ID number or hospital patient number. Not the same as the FHIR resource id. Resources can have multiple identifiers from different systems.",
  },
];

export default function FhirFoundationsPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/learn"
            className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block"
          >
            ← Back to Learn
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            What is HL7 FHIR?
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            FHIR (Fast Healthcare Interoperability Resources) is the modern
            standard for exchanging healthcare information between systems. This
            is the foundation of everything built in this lab.
          </p>
        </div>

        {/* What is FHIR */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            The Interoperability Problem
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed mb-4">
              Healthcare systems do not talk to each other. A hospital in
              Bratislava runs one EHR system. A general practitioner uses
              another. A pharmacy uses a third. Each has its own data format,
              its own identifiers, its own way of representing a patient or a
              diagnosis. When a patient moves between systems, data gets lost,
              re-entered manually, or not transferred at all.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              This is the interoperability problem. It causes medical errors,
              duplicate testing, inefficiency, and in the worst cases, patient
              harm. The problem has existed for decades. Multiple standards
              attempted to solve it — HL7 v2, HL7 v3, CDA — with limited
              success.
            </p>
            <p className="text-slate-700 leading-relaxed">
              FHIR was designed to finally solve this. It combines modern web
              technologies (REST, JSON, HTTP) with healthcare domain expertise.
              The result: a standard that developers can actually implement
              without a decade of specialized knowledge.
            </p>
          </div>
        </section>

        {/* What FHIR is */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            HL7 FHIR — The Standard
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            HL7 FHIR stands for Health Level Seven Fast Healthcare
            Interoperability Resources. It is developed and maintained by HL7
            International — the standards development organization responsible
            for most healthcare data standards globally.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            FHIR was first published in 2014 as a draft standard and reached
            normative status (stable, production-ready) with R4 in 2019. R4 is
            the current primary version used in production systems worldwide.
            R4B was a minor update in 2022. R5 is the latest full version
            (2023), but R4 remains dominant in production deployments.
          </p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-slate-400 mb-2"># FHIR versions</div>
            <div>
              <span className="text-teal-400">DSTU1</span> (2014) — Draft
            </div>
            <div>
              <span className="text-teal-400">DSTU2</span> (2015) — Draft
            </div>
            <div>
              <span className="text-teal-400">STU3</span> (2017) — Trial Use
            </div>
            <div>
              <span className="text-teal-400">R4</span> (2019) — Normative{" "}
              <span className="text-amber-400">← Current standard</span>
            </div>
            <div>
              <span className="text-teal-400">R4B</span> (2022) — Minor update
            </div>
            <div>
              <span className="text-teal-400">R5</span> (2023) — Latest
            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Core Concepts
          </h2>
          <div className="space-y-4">
            {concepts.map((concept) => (
              <div
                key={concept.term}
                className="border border-slate-200 rounded-lg p-5"
              >
                <h3 className="font-semibold text-slate-900 font-mono text-sm mb-2">
                  {concept.term}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {concept.definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FHIR REST API */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            FHIR REST API — How It Works
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            FHIR uses standard HTTP. If you know REST APIs, you already
            understand the fundamentals. The URL structure is consistent:
          </p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto space-y-2">
            <div className="text-slate-400"># Read a specific Patient</div>
            <div>
              <span className="text-teal-400">GET</span>{" "}
              http://localhost:8080/fhir/Patient/patient-001
            </div>
            <div className="text-slate-400 mt-3"># Search Patients by name</div>
            <div>
              <span className="text-teal-400">GET</span>{" "}
              http://localhost:8080/fhir/Patient?name=Doe
            </div>
            <div className="text-slate-400 mt-3"># Create a new Patient</div>
            <div>
              <span className="text-amber-400">POST</span>{" "}
              http://localhost:8080/fhir/Patient
            </div>
            <div className="text-slate-400 mt-3"># Update a Patient</div>
            <div>
              <span className="text-blue-400">PUT</span>{" "}
              http://localhost:8080/fhir/Patient/patient-001
            </div>
            <div className="text-slate-400 mt-3"># Delete a Patient</div>
            <div>
              <span className="text-red-400">DELETE</span>{" "}
              http://localhost:8080/fhir/Patient/patient-001
            </div>
            <div className="text-slate-400 mt-3">
              # Get server capabilities
            </div>
            <div>
              <span className="text-teal-400">GET</span>{" "}
              http://localhost:8080/fhir/metadata
            </div>
          </div>
        </section>

        {/* FHIR in Slovakia and EHDS */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            FHIR in Slovakia and the European Health Data Space
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The European Health Data Space (EHDS) is EU legislation that
            mandates cross-border health data sharing across all EU member
            states. The EHDS regulation was formally adopted in 2024. It
            designates FHIR as the primary technical standard for data exchange
            through the European Health Record Exchange Format (EHRxF).
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            In Slovakia, the national health information system is managed by
            NCZI (Národné centrum zdravotníckych informácií — National Health
            Information Centre). Slovakia must comply with EHDS requirements,
            which means Slovak healthcare systems will need to implement FHIR
            interfaces for cross-border data sharing.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This lab (FHIR.sk) is a personal learning project exploring these
            concepts. It is not affiliated with NCZI, HL7 Slovakia, or any
            official body.
          </p>
        </section>

        {/* Official Links */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Official Resources
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://hl7.org/fhir/R4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
              >
                HL7 FHIR R4 Specification ↗
              </Link>
            </li>
            <li>
              <Link
                href="https://hapifhir.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
              >
                HAPI FHIR — Open Source FHIR Server ↗
              </Link>
            </li>
            <li>
              <Link
                href="https://www.hl7.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
              >
                HL7 International ↗
              </Link>
            </li>
            <li>
              <Link
                href="https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
              >
                European Health Data Space (EHDS) — European Commission ↗
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
