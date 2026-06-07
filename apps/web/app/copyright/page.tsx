import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Copyright — FHIR.sk",
  description: "Third-party terminology and standards copyright notices for FHIR.sk.",
  alternates: { canonical: "https://fhir.sk/copyright" },
};

export default function CopyrightPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block"
        >
          ← Back to home
        </Link>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">Copyright</h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-10">
          FHIR.sk references several third-party standards and terminology systems.
          Each has its own intellectual property terms. This page acknowledges those terms.
        </p>

        <div className="space-y-8">

          {/* HL7 FHIR */}
          <section className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-900 font-mono mb-1">HL7 FHIR R4</h2>
            <p className="text-xs text-slate-400 mb-3">Health Level Seven International</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              HL7 FHIR R4 is a standard developed and maintained by Health Level Seven International (HL7).
              The FHIR specification and associated HL7 Terminology (THO) resources are published under
              the Creative Commons No Rights Reserved licence (CC0) — they may be used freely without restriction.
            </p>
            <p className="text-xs text-slate-400">
              © 1989+ Health Level Seven International.{" "}
              <a
                href="https://www.hl7.org/implement/standards/fhir.cfm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                hl7.org ↗
              </a>
              {" · "}
              <a
                href="https://terminology.hl7.org/license.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                THO licence ↗
              </a>
            </p>
          </section>

          {/* SNOMED CT */}
          <section className="border border-amber-200 bg-amber-50 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-900 font-mono mb-1">SNOMED CT</h2>
            <p className="text-xs text-slate-500 mb-3">SNOMED International</p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              SNOMED Clinical Terms (SNOMED CT) is a registered trademark of SNOMED International.
              Use of SNOMED CT codes, descriptions, and relationships requires an affiliate licence.
              This includes educational and non-commercial use.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              Slovakia is not a current SNOMED International member country. SNOMED CT codes
              referenced on this site appear solely in synthetic, non-production examples for
              educational purposes. No licence to use SNOMED CT in a production system is granted
              or implied by this site.
            </p>
            <p className="text-xs text-slate-500">
              © SNOMED International.{" "}
              <a
                href="https://www.snomed.org/get-snomed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                Licensing information ↗
              </a>
            </p>
          </section>

          {/* LOINC */}
          <section className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-900 font-mono mb-1">LOINC</h2>
            <p className="text-xs text-slate-400 mb-3">Regenstrief Institute, Inc.</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              LOINC (Logical Observation Identifiers Names and Codes) is developed and maintained
              by the Regenstrief Institute. It is freely available for use, including commercial use,
              under the LOINC licence. Attribution is required.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              LOINC codes are used on this site in Observation examples (vital signs, laboratory results)
              and in the Terminology Explorer.
            </p>
            <p className="text-xs text-slate-400">
              © 1995+ Regenstrief Institute, Inc.{" "}
              <a
                href="https://loinc.org/license/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                LOINC licence ↗
              </a>
            </p>
          </section>

          {/* ICD-10 / ATC */}
          <section className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-900 font-mono mb-1">ICD-10 · ATC</h2>
            <p className="text-xs text-slate-400 mb-3">World Health Organization</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              ICD-10 (International Statistical Classification of Diseases and Related Health Problems)
              and the ATC (Anatomical Therapeutic Chemical) classification system are published by the
              World Health Organization. Both are freely available for non-commercial use with attribution.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              ICD-10 codes appear in Condition examples and Learn articles. ATC codes appear in
              MedicationRequest examples and the Terminology Explorer.
            </p>
            <p className="text-xs text-slate-400">
              © World Health Organization.{" "}
              <a
                href="https://www.who.int/standards/classifications/classification-of-diseases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                WHO ICD ↗
              </a>
              {" · "}
              <a
                href="https://www.whocc.no/atc_ddd_index/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                WHO ATC ↗
              </a>
            </p>
          </section>

          {/* UCUM */}
          <section className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-900 font-mono mb-1">UCUM</h2>
            <p className="text-xs text-slate-400 mb-3">Regenstrief Institute, Inc.</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              The Unified Code for Units of Measure (UCUM) is copyright Regenstrief Institute, Inc.
              and the UCUM Organisation. It is freely available for use with attribution.
              UCUM unit codes appear in Observation examples (kg, mmHg, %, /min).
            </p>
            <p className="text-xs text-slate-400">
              © 1999–2009 Regenstrief Institute, Inc.{" "}
              <a
                href="https://ucum.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                ucum.org ↗
              </a>
            </p>
          </section>

        </div>

        {/* Footer note */}
        <div className="mt-10 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-400 leading-relaxed">
            All data on this site is synthetic and fictional. No real patient data is used or processed.
            FHIR.sk is not affiliated with any of the organisations listed above.{" "}
            <Link href="/disclaimer" className="text-teal-600 hover:text-teal-700">
              Read full disclaimer.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
