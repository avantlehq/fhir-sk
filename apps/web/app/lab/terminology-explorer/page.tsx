import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { TerminologyExplorerClient } from "./TerminologyExplorerClient";
import { CODE_SYSTEMS, VALUE_SETS } from "@/lib/fhir-terminology";

export const metadata: Metadata = {
  title: "Terminology Explorer — FHIR.sk Lab",
  description: "Explore CodeSystem and ValueSet resources. Browse LOINC vital signs, SNOMED condition statuses, administrative gender, and custom FHIR.sk terminology.",
};

export default function TerminologyExplorerPage() {
  const totalCodes = VALUE_SETS.reduce(
    (n, vs) => n + vs.includes.reduce((m, inc) => m + inc.concepts.length, 0),
    0,
  );

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/lab" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Lab
        </Link>
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl font-bold text-slate-900 font-mono">Terminology Explorer</h1>
          <StatusBadge status="In Progress" />
        </div>
        <p className="text-slate-500 leading-relaxed mb-2">
          Browse bundled ValueSets and CodeSystems. Static data — no live terminology server.
        </p>
        <div className="flex gap-4 text-sm text-slate-400 mb-10">
          <span>{VALUE_SETS.length} ValueSets</span>
          <span>·</span>
          <span>{CODE_SYSTEMS.length} CodeSystems</span>
          <span>·</span>
          <span>{totalCodes} codes across all ValueSets</span>
        </div>

        <TerminologyExplorerClient />

        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Sources</h2>
          <ul className="text-xs text-slate-500 space-y-1">
            <li><span className="font-semibold text-slate-600">HL7 FHIR R4 spec</span> — administrative-gender, observation-category</li>
            <li><span className="font-semibold text-slate-600">HL7 Terminology (THO)</span> — condition-clinical</li>
            <li><span className="font-semibold text-slate-600">LOINC 2.77</span> — vital signs codes (loinc.org)</li>
            <li><span className="font-semibold text-slate-600">fhir.sk custom</span> — FhirSkIdentifierType (synthetic lab CodeSystem)</li>
          </ul>
          <p className="text-xs text-slate-400 mt-3">
            This is a static excerpt for learning purposes. Full CodeSystems are available at{" "}
            <span className="font-mono">loinc.org</span>, <span className="font-mono">snomed.info</span>, and{" "}
            <span className="font-mono">terminology.hl7.org</span>.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">Related:</span>
          <Link href="/reference/value-set" className="text-teal-600 hover:underline">ValueSet Reference</Link>
          <Link href="/reference/code-system" className="text-teal-600 hover:underline">CodeSystem Reference</Link>
          <Link href="/learn/terminology" className="text-teal-600 hover:underline">Learn: Terminology</Link>
        </div>
      </div>
    </div>
  );
}
