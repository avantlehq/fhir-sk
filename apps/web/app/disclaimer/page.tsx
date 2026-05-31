import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "FHIR.sk disclaimer — synthetic data only, not affiliated with any healthcare institution, educational purposes only.",
};

export default function DisclaimerPage() {
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
            Disclaimer
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Please read before using any content, code, or resources from
            FHIR.sk.
          </p>
        </div>

        <div className="space-y-10">
          {/* Synthetic data */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Synthetic Data Only
            </h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              All patient data, clinical records, observations, conditions,
              medications, and any other health-related information used in this
              project is entirely synthetic — computer-generated, fictional data
              created solely for technical testing and learning purposes.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              No real patient data is used, processed, stored, or transmitted by
              this project at any point. Any resemblance between synthetic
              records and real persons is entirely coincidental and
              unintentional.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-amber-800">
                Synthetic data rule: absolute
              </p>
              <p className="text-sm text-amber-700 mt-1">
                This rule is non-negotiable and permanent. Real patient data
                will never be used in this project under any circumstances.
              </p>
            </div>
          </section>

          {/* No affiliation */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              No Institutional Affiliation
            </h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              FHIR.sk is a personal learning project. It is not affiliated with,
              endorsed by, or connected to any of the following:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "NCZI — Národné centrum zdravotníckych informácií (National Health Information Centre of Slovakia)",
                "HL7 Slovakia — the Slovak national HL7 affiliate",
                "HL7 International",
                "Slovak Ministry of Health (Ministerstvo zdravotníctva SR)",
                "Any Slovak or European hospital, clinic, or healthcare provider",
                "Any national or regional health information system",
                "European Commission or any EU body related to EHDS",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-slate-300 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 leading-relaxed">
              References to these organizations in educational content are for
              informational context only. They do not imply any relationship,
              partnership, or endorsement.
            </p>
          </section>

          {/* Educational purposes */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Educational Purposes Only
            </h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              This platform exists for personal learning and technical
              experimentation with HL7 FHIR R4 standards. It is not intended as
              a reference implementation, a production template, or authoritative
              guidance on FHIR implementation.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Always consult the official HL7 FHIR specification at{" "}
              <Link
                href="https://hl7.org/fhir/R4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                hl7.org/fhir/R4
              </Link>{" "}
              for authoritative FHIR guidance. For production healthcare
              systems, engage qualified health informaticists and comply with
              applicable regulations.
            </p>
          </section>

          {/* Not a production system */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Not a Production System
            </h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              FHIR.sk is explicitly not a production system. It should not be
              used to store, process, or transmit actual health records. The HAPI
              FHIR server instances associated with this project are development
              and testing environments only.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Do not submit real personal health information to any endpoint
              associated with this project. Any real personal data submitted
              would be a misuse of this platform.
            </p>
          </section>

          {/* Legal */}
          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Legal Notice
            </h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              This project is provided &quot;as is&quot; without warranty of any kind,
              express or implied. The author makes no representations about the
              accuracy, completeness, or suitability of any information or
              resources on this site for any purpose.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              FHIR&reg; is the registered trademark of Health Level Seven
              International, approved by HL7. Use of the FHIR name does not
              imply endorsement by HL7.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This project complies with GDPR as no personal data is collected,
              processed, or stored. This site does not use cookies for tracking
              or analytics.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
