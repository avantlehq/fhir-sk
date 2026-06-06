import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is an OperationOutcome? — Reference",
  description: "OperationOutcome is the FHIR resource for returning error details, warnings, and informational messages from operations.",
};

export default function OperationOutcomeReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Resource</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is an OperationOutcome?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          An <strong>OperationOutcome</strong> is the standard FHIR way to communicate the result of an operation — especially errors, warnings, and hints. A server returns an OperationOutcome when a request fails, when <Link href="/reference/validation" className="text-teal-600 hover:underline">validation</Link> finds issues, or when a <code className="font-mono text-sm bg-slate-100 px-1 rounded">$operation</code> produces no resource result.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">OperationOutcome — validation error</p>
          <pre className="text-sm text-slate-100 font-mono overflow-x-auto">{`{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "severity": "error",
      "code": "required",
      "diagnostics": "Patient.identifier: minimum 1 required",
      "expression": ["Patient.identifier"]
    },
    {
      "severity": "warning",
      "code": "best-practice",
      "diagnostics": "dom-6: A resource should have narrative",
      "expression": ["Patient"]
    }
  ]
}`}</pre>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Severity levels</h2>
          <div className="overflow-x-auto">
            <table className="text-sm text-slate-600 w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase">
                  <th className="pb-2 pr-4">Severity</th>
                  <th className="pb-2 pr-4">HTTP status</th>
                  <th className="pb-2">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-2 pr-4"><span className="text-red-700 font-semibold">fatal</span></td><td className="py-2 pr-4">4xx/5xx</td><td className="py-2">Processing stopped completely</td></tr>
                <tr><td className="py-2 pr-4"><span className="text-red-600 font-semibold">error</span></td><td className="py-2 pr-4">4xx</td><td className="py-2">Request failed, resource rejected</td></tr>
                <tr><td className="py-2 pr-4"><span className="text-amber-600 font-semibold">warning</span></td><td className="py-2 pr-4">200/201</td><td className="py-2">Request succeeded but there are concerns</td></tr>
                <tr><td className="py-2 pr-4"><span className="text-blue-600 font-semibold">information</span></td><td className="py-2 pr-4">200/201</td><td className="py-2">Advisory — no action required</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Common issue codes</h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">required</code> — required element missing</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">value</code> — element value is invalid</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">not-found</code> — referenced resource does not exist</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">too-many</code> — cardinality exceeded</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">best-practice</code> — best-practice recommendation not followed (always a warning)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">code-invalid</code> — code not found in required value set</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/validation" className="text-teal-600 hover:underline">Validation</Link>
          <Link href="/reference/rest-api" className="text-teal-600 hover:underline">REST API</Link>
          <Link href="/lab/validator" className="text-teal-600 hover:underline">Validator Lab</Link>
        </div>
      </div>
    </article>
  );
}
