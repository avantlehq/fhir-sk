"use client";

import { useState } from "react";

const SAMPLES: Record<string, { valid: string; invalid: string }> = {
  "fhirsk-patient": {
    valid: JSON.stringify({
      resourceType: "Patient",
      identifier: [{ system: "urn:oid:2.16.840.1.113883.2.9.4.3.2", value: "SYNTHETIC-HORVATH-001" }],
      name: [{ use: "official", family: "Horváth", given: ["Jana"] }],
      gender: "female",
      birthDate: "1979-03-12",
      address: [{ city: "Bratislava", postalCode: "82104", country: "SK" }],
    }, null, 2),
    invalid: JSON.stringify({
      resourceType: "Patient",
      name: [{ family: "Test" }],
    }, null, 2),
  },
  "fhirsk-allergy": {
    valid: JSON.stringify({
      resourceType: "AllergyIntolerance",
      clinicalStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical", code: "active" }] },
      verificationStatus: { coding: [{ system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification", code: "confirmed" }] },
      type: "allergy",
      category: ["medication"],
      criticality: "high",
      code: { coding: [{ system: "http://snomed.info/sct", code: "372687004", display: "Amoxicillin" }] },
      patient: { reference: "Patient/patient-horvath-001" },
      reaction: [{ manifestation: [{ coding: [{ system: "http://snomed.info/sct", code: "271807003", display: "Skin rash" }] }], severity: "moderate" }],
    }, null, 2),
    invalid: JSON.stringify({
      resourceType: "AllergyIntolerance",
      code: { coding: [{ system: "http://snomed.info/sct", code: "372687004", display: "Amoxicillin" }] },
    }, null, 2),
  },
  base: {
    valid: JSON.stringify({ resourceType: "Observation", id: "obs-001", status: "final", code: { coding: [{ system: "http://loinc.org", code: "2339-0" }] } }, null, 2),
    invalid: JSON.stringify({ name: "missing resourceType" }, null, 2),
  },
};

type Issue = {
  severity: string;
  code: string;
  diagnostics?: string;
  expression?: string[];
};

type OutcomeResult = {
  resourceType: string;
  issue: Issue[];
};

const severityConfig: Record<string, { bg: string; border: string; text: string; dot: string; label: string }> = {
  error:       { bg: "bg-red-50",   border: "border-red-200",   text: "text-red-700",   dot: "bg-red-500",   label: "error" },
  warning:     { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-400", label: "warning" },
  information: { bg: "bg-blue-50",  border: "border-blue-200",  text: "text-blue-700",  dot: "bg-blue-400",  label: "information" },
  fatal:       { bg: "bg-red-50",   border: "border-red-200",   text: "text-red-700",   dot: "bg-red-600",   label: "fatal" },
};

export function ValidatorClient() {
  const [profile, setProfile] = useState("fhirsk-patient");
  const [json, setJson] = useState(SAMPLES["fhirsk-patient"].valid);
  const [result, setResult] = useState<OutcomeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function validate() {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ json, profile }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError(`Request failed: ${(e as Error).message}`);
    } finally {
      setLoading(false);
    }
  }

  const errors = result?.issue.filter((i) => i.severity === "error" || i.severity === "fatal") ?? [];
  const warnings = result?.issue.filter((i) => i.severity === "warning") ?? [];
  const isValid = result && errors.length === 0;

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="flex-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">Profile</label>
          <select
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            className="w-full sm:w-64 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="base">Base FHIR R4</option>
            <option value="fhirsk-patient">FhirSkPatient (fhirsk-patient|0.2.0)</option>
            <option value="fhirsk-allergy">AllergyIntolerance (fhirsk-allergy)</option>
          </select>
        </div>
        <div className="flex gap-2 pt-5">
          <button
            onClick={() => setJson(SAMPLES[profile]?.valid ?? SAMPLES.base.valid)}
            className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Load valid
          </button>
          <button
            onClick={() => setJson(SAMPLES[profile]?.invalid ?? SAMPLES.base.invalid)}
            className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Load invalid
          </button>
        </div>
      </div>

      {/* Textarea */}
      <div>
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">FHIR JSON</label>
        <textarea
          value={json}
          onChange={(e) => setJson(e.target.value)}
          rows={16}
          spellCheck={false}
          className="w-full font-mono text-sm border border-slate-200 rounded-xl p-4 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y"
          placeholder='{ "resourceType": "Patient", ... }'
        />
      </div>

      {/* Validate button */}
      <button
        onClick={validate}
        disabled={loading || !json.trim()}
        className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm"
      >
        {loading ? "Validating…" : "Validate"}
      </button>

      {/* Error */}
      {error && (
        <div className="border border-red-200 bg-red-50 rounded-xl p-4 text-red-700 text-sm">{error}</div>
      )}

      {/* Result */}
      {result && (
        <div className="space-y-4">
          {/* Summary */}
          <div className={`rounded-xl p-4 border flex items-center gap-3 ${isValid ? "bg-teal-50 border-teal-200" : "bg-red-50 border-red-200"}`}>
            <span className={`text-lg font-bold ${isValid ? "text-teal-700" : "text-red-700"}`}>
              {isValid ? "✓ Valid" : "✗ Invalid"}
            </span>
            <span className={`text-sm ${isValid ? "text-teal-600" : "text-red-600"}`}>
              {errors.length} error{errors.length !== 1 ? "s" : ""},
              {" "}{warnings.length} warning{warnings.length !== 1 ? "s" : ""}
              {profile === "fhirsk-patient" ? " — FhirSkPatient profile" : profile === "fhirsk-allergy" ? " — AllergyIntolerance profile" : " — Base FHIR R4"}
            </span>
          </div>

          {/* Issues */}
          <div className="space-y-2">
            {result.issue.map((issue, i) => {
              const cfg = severityConfig[issue.severity] ?? severityConfig.information;
              return (
                <div key={i} className={`border rounded-xl p-4 ${cfg.bg} ${cfg.border}`}>
                  <div className="flex items-start gap-3">
                    <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold uppercase tracking-wide ${cfg.text}`}>{cfg.label}</span>
                        {issue.expression && (
                          <code className="text-xs bg-white/60 px-1.5 py-0.5 rounded font-mono text-slate-600">
                            {issue.expression[0]}
                          </code>
                        )}
                      </div>
                      <p className={`text-sm leading-relaxed ${cfg.text}`}>{issue.diagnostics}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Raw OperationOutcome */}
          <details className="border border-slate-200 rounded-xl overflow-hidden">
            <summary className="px-4 py-3 text-sm text-slate-600 cursor-pointer hover:bg-slate-50 font-mono">
              OperationOutcome (raw JSON)
            </summary>
            <pre className="bg-slate-800 text-slate-100 text-xs font-mono p-4 overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
