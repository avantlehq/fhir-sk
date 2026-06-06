import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Validation — Profiling and Validation",
  description: "Types of FHIR validation: structural, cardinality, terminology, profile conformance. OperationOutcome severity levels. The $validate operation.",
  alternates: { canonical: "https://fhir.sk/learn/profiling/validation" },
};

export default function ValidationLearnPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/learn/profiling" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Profiling and Validation
        </Link>

        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 1 — FHIR Fundamentals</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Validation</h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Validation checks that a FHIR resource conforms to the specification, a profile, or both. The result is always an <code className="font-mono text-sm bg-slate-100 px-1 rounded">OperationOutcome</code> — a structured list of issues with severity, code, and location.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Types of validation</h2>
          <div className="space-y-4">
            {[
              {
                type: "Structural",
                detail: "Is the JSON (or XML) syntactically valid? Does it have a resourceType? Are all required fields present as defined by the base FHIR spec? Is the data type correct — is a date field actually a date?",
                when: "Always the first check. If structure is broken, further validation stops."
              },
              {
                type: "Cardinality",
                detail: "Do elements appear the correct number of times? If a profile says identifier must have at least 1 entry (1..*), does the resource provide at least one?",
                when: "Applied against base spec + any active profiles."
              },
              {
                type: "Terminology",
                detail: "Are coded values from the correct CodeSystem? If gender must be from AdministrativeGender, is the value one of male/female/other/unknown? Does a LOINC code exist in the LOINC CodeSystem?",
                when: "Requires access to terminology services. May be skipped in lightweight validators."
              },
              {
                type: "Profile conformance",
                detail: "Does the resource meet all constraints defined in a StructureDefinition — cardinality, mustSupport, fixedValues, slicing rules, and invariants?",
                when: "Only when a profile is specified, either via meta.profile[] or via the ?profile= query parameter."
              },
              {
                type: "Business rules (invariants)",
                detail: "FHIRPath expressions defined in the spec that enforce cross-field logic. Example: Observation must have either value[x] or dataAbsentReason — not neither. dom-6: resources should have narrative text.",
                when: "Applied against base spec invariants always. Profile invariants when profiling is active."
              },
            ].map((t) => (
              <div key={t.type} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-semibold text-slate-900 text-sm mb-2">{t.type}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">{t.detail}</p>
                <p className="text-xs text-slate-400 italic">{t.when}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">OperationOutcome</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Every FHIR validation result is an <code className="font-mono text-xs bg-slate-100 px-1 rounded">OperationOutcome</code> resource — a list of issues. Each issue has a severity, a code, a human-readable diagnostics message, and optionally an expression path pointing to the exact element that caused the issue.
          </p>

          <div className="space-y-3 mb-6">
            {[
              { sev: "error", bg: "bg-red-50", border: "border-red-200", dot: "bg-red-500", text: "text-red-700", detail: "Resource is invalid. Cannot be saved to a FHIR server. Must be fixed before the operation can proceed." },
              { sev: "warning", bg: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-400", text: "text-amber-700", detail: "Resource is usable but has a problem worth noting. Servers typically accept it but flag the issue." },
              { sev: "information", bg: "bg-blue-50", border: "border-blue-200", dot: "bg-blue-400", text: "text-blue-700", detail: "Informational note — no action required. Often a best-practice recommendation (like dom-6 narrative)." },
              { sev: "fatal", bg: "bg-red-50", border: "border-red-200", dot: "bg-red-700", text: "text-red-800", detail: "Validation could not proceed at all — e.g. JSON is unparseable. Even more severe than error." },
            ].map((s) => (
              <div key={s.sev} className={`border rounded-lg p-4 ${s.bg} ${s.border} flex items-start gap-3`}>
                <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
                <div>
                  <span className={`font-mono text-xs font-bold ${s.text} mr-2`}>{s.sev}</span>
                  <span className={`text-sm ${s.text}`}>{s.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-slate-400 text-xs mb-2">OperationOutcome example</div>
            <pre>{`{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "error",
      "code": "required",
      "diagnostics": "Patient.gender: minimum required = 1, but only found 0",
      "expression": ["Patient.gender"]
    },
    {
      "severity": "warning",
      "code": "best-practice",
      "diagnostics": "dom-6: A resource should have narrative for robust management"
    }
  ]
}`}</pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The $validate operation</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            FHIR servers expose a <code className="font-mono text-xs bg-slate-100 px-1 rounded">$validate</code> operation that validates a resource without storing it. You POST the resource and get back an OperationOutcome.
          </p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto space-y-4">
            <div>
              <div className="text-slate-400 text-xs mb-1"># Validate against base FHIR R4</div>
              <div><span className="text-blue-400">POST</span> /fhir/Patient/$validate</div>
              <div className="text-slate-400 text-xs mt-1">Body: the Patient resource</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1"># Validate against a specific profile</div>
              <div><span className="text-blue-400">POST</span> /fhir/Patient/$validate?profile=https://fhir.sk/fhir/StructureDefinition/fhirsk-patient</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1"># Declare profile in resource meta (validated on write)</div>
              <div className="text-slate-300 text-xs">{`"meta": { "profile": ["https://fhir.sk/fhir/StructureDefinition/fhirsk-patient"] }`}</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our validation results</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We validated Jana Horváth (<code className="font-mono text-xs bg-slate-100 px-1 rounded">examples/patients/jana-horvath.json</code>) against the <code className="font-mono text-xs bg-slate-100 px-1 rounded">FhirSkPatient</code> profile using HAPI FHIR:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="border-2 border-teal-200 bg-teal-50 rounded-xl p-4">
              <div className="font-semibold text-teal-800 mb-2 text-sm">Jana Horváth — passes ✓</div>
              <p className="text-teal-700 text-xs">1 warning only: dom-6 (no narrative text). All cardinality constraints satisfied. Profile compliant.</p>
            </div>
            <div className="border-2 border-red-200 bg-red-50 rounded-xl p-4">
              <div className="font-semibold text-red-800 mb-2 text-sm">{`{ "resourceType": "Patient", "name": [{ "family": "Test" }] }`} — fails ✗</div>
              <p className="text-red-700 text-xs">4 errors: identifier missing, gender missing, birthDate missing, name.given missing.</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            Try both in the <Link href="/lab/validator" className="text-teal-600 hover:underline">Validator</Link> — use "Load valid" and "Load invalid" buttons.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Validation tools</h2>
          <div className="space-y-3">
            {[
              { name: "HAPI FHIR", detail: "Validates on write by default. Exposes $validate for explicit checks. Supports loading StructureDefinitions from the server." },
              { name: "HL7 FHIR Validator (validator_cli.jar)", detail: "Official CLI tool from HL7. Validates against base spec, any profile, and any IG. The reference implementation — most accurate but slowest." },
              { name: "Inferno", detail: "Test suite for Implementation Guide conformance. Used in US ONC certification and EHDS conformance testing." },
              { name: "FHIR.sk Validator", detail: "Our structural validator at /lab/validator. Checks JSON syntax, resourceType, and FhirSkPatient cardinality constraints. Not a full FHIR validator." },
            ].map((t) => (
              <div key={t.name} className="border border-slate-200 rounded-lg p-4 text-sm">
                <span className="font-semibold text-slate-800">{t.name} — </span>
                <span className="text-slate-600">{t.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">See also</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/learn/profiling/profile" className="text-teal-600 hover:underline">Learn: What is a Profile</Link>
            <Link href="/reference/validation" className="text-teal-600 hover:underline">Reference: Validation</Link>
            <Link href="/lab/validator" className="text-teal-600 hover:underline">Lab: Validator</Link>
          </div>
        </section>
      </div>
    </article>
  );
}
