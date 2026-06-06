import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { ValidatorClient } from "./ValidatorClient";

export const metadata: Metadata = {
  title: "Validator — Lab",
  description: "Validate FHIR R4 JSON against base rules or the FhirSk Patient profile. Returns an OperationOutcome with errors, warnings, and informational messages.",
  alternates: { canonical: "https://fhir.sk/lab/validator" },
};

export default function ValidatorPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/lab" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Lab
        </Link>

        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl font-bold text-slate-900 font-mono">Validator</h1>
          <StatusBadge status="In Progress" />
        </div>
        <p className="text-slate-500 leading-relaxed mb-2">
          Paste FHIR R4 JSON. Select a profile. Hit Validate.
        </p>
        <p className="text-slate-400 text-sm mb-10">
          Structural validation only — checks JSON syntax, resourceType, and profile cardinality constraints. Not a full HAPI FHIR validator.
        </p>

        <ValidatorClient />

        <div className="mt-12 border-t border-slate-100 pt-8 space-y-2 text-sm text-slate-500">
          <p className="font-semibold text-slate-700">Available profiles</p>
          <ul className="space-y-1">
            <li>
              <span className="font-mono text-xs bg-slate-100 px-1 rounded mr-2">base</span>
              Base FHIR R4 — structural checks only (resourceType, JSON syntax)
            </li>
            <li>
              <span className="font-mono text-xs bg-slate-100 px-1 rounded mr-2">fhirsk-patient</span>
              <Link href="/reference/profile" className="text-teal-600 hover:underline">FhirSk Patient</Link>
              {" "}— requires identifier, name.family, name.given, gender, birthDate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
