import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a CapabilityStatement? — Reference",
  description: "A CapabilityStatement is a machine-readable description of what a FHIR server supports. Retrieved via GET /metadata.",
};

export default function CapabilityStatementReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is a CapabilityStatement?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          A <strong>CapabilityStatement</strong> is a machine-readable document that describes what a FHIR server supports. It lists every supported <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link> type, interaction (read, write, search, delete), search parameter, and operation. It is the first thing to read when integrating with an unknown FHIR server.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">Retrieve a CapabilityStatement</p>
          <div className="font-mono text-sm text-slate-100">
            <span className="text-teal-400">GET</span> /fhir/metadata
          </div>
          <div className="text-slate-400 text-xs mt-2">Returns: CapabilityStatement resource (JSON or XML)</div>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key fields</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">fhirVersion</code> — FHIR version the server implements (e.g. <code className="font-mono text-xs bg-slate-100 px-1 rounded">4.0.1</code>)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">format</code> — supported MIME types (<code className="font-mono text-xs bg-slate-100 px-1 rounded">application/fhir+json</code>, <code className="font-mono text-xs bg-slate-100 px-1 rounded">application/fhir+xml</code>)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">rest[].resource[]</code> — list of supported resource types</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">rest[].resource[].interaction[]</code> — what operations are supported per resource (read, create, update, delete, search-type)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">rest[].resource[].searchParam[]</code> — supported search parameters per resource</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">rest[].operation[]</code> — named operations (e.g. $validate, $everything)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">implementationGuide[]</code> — IGs the server claims conformance to</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">kind values</h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">instance</code> — describes an actual running server</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">capability</code> — describes what a product can do (not yet deployed)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">requirements</code> — describes what a client needs from a server</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/fhir" className="text-teal-600 hover:underline">FHIR</Link>
          <Link href="/reference/rest-api" className="text-teal-600 hover:underline">REST API</Link>
          <Link href="/reference/validation" className="text-teal-600 hover:underline">Validation</Link>
        </div>
      </div>
    </article>
  );
}
