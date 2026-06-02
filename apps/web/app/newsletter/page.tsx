import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Stay updated on HL7 FHIR, EHDS and healthcare interoperability. Subscribe to FHIR.sk updates.",
};

const topics = [
  "HL7 FHIR R4 concepts and implementation notes",
  "EHDS regulation updates and EHRxF progress",
  "HAPI FHIR server tips and configurations",
  "New lab modules and documentation",
  "Slovak eHealth context and NCZI updates",
];

export default function NewsletterPage() {
  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block"
          >
            ← Back to home
          </Link>
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Newsletter
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Stay updated on FHIR and EHDS
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Practical notes on HL7 FHIR, healthcare interoperability, and EHDS.
            No spam. Sent when there is something worth sharing.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-widest mb-4">
            What you will receive
          </h2>
          <ul className="space-y-2">
            {topics.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />
                <span className="text-sm text-slate-600">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-slate-200 rounded-xl p-8 bg-slate-50">
          <p className="text-sm font-semibold text-slate-700 mb-1">
            Subscription coming soon
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Email subscription is being set up. In the meantime, follow progress
            on{" "}
            <a
              href="https://github.com/avantlehq/fhir-sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              GitHub ↗
            </a>{" "}
            or reach out via{" "}
            <a
              href="mailto:mitasik@avantle.com"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              email
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
