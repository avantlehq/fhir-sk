import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "About FHIR.sk — FHIR Interoperability Lab focused on HL7 FHIR, healthcare interoperability, and EHDS. Not affiliated with any healthcare institution.",
};

const notList = [
  "A production healthcare system",
  "An Electronic Health Record (EHR) platform",
  "A national or regional health information platform",
  "Affiliated with NCZI (Národné centrum zdravotníckych informácií)",
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
            FHIR Interoperability Lab focused on HL7 FHIR, healthcare
            interoperability, and EHDS. Built to explore standards and share
            practical knowledge through hands-on work.
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

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Contact</h2>
          <ContactForm />
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
