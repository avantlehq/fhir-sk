import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is FHIR Search? — Reference",
  description: "FHIR Search is the query mechanism for finding resources using URL parameters. Returns a searchset Bundle.",
};

export default function SearchReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is FHIR Search?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>FHIR Search</strong> is the mechanism for querying resources on a FHIR server using URL parameters. A search request returns a <Link href="/reference/bundle" className="text-teal-600 hover:underline">Bundle</Link> of type <code className="font-mono text-sm bg-slate-100 px-1 rounded">searchset</code> containing all matching resources.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">Basic search examples</p>
          <div className="space-y-2 font-mono text-sm text-slate-100">
            <div><span className="text-teal-400">GET</span> /Patient?name=Horváth</div>
            <div><span className="text-teal-400">GET</span> /Patient?gender=female&birthdate=1979-03-12</div>
            <div><span className="text-teal-400">GET</span> /Observation?patient=1005&code=29463-7</div>
            <div><span className="text-teal-400">GET</span> /Condition?patient=1005&clinical-status=active</div>
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Search parameter types</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">string</span> — partial match by default: <code className="font-mono text-xs bg-slate-100 px-1 rounded">name=Ján</code> matches "Ján", "Jánošík"</li>
            <li><span className="font-semibold text-slate-800">token</span> — exact match on code + system: <code className="font-mono text-xs bg-slate-100 px-1 rounded">identifier=system|value</code></li>
            <li><span className="font-semibold text-slate-800">date</span> — supports prefixes: <code className="font-mono text-xs bg-slate-100 px-1 rounded">birthdate=ge1979</code> (ge, le, gt, lt, eq)</li>
            <li><span className="font-semibold text-slate-800">reference</span> — search by reference: <code className="font-mono text-xs bg-slate-100 px-1 rounded">patient=Patient/1005</code></li>
            <li><span className="font-semibold text-slate-800">number</span> — numeric search with prefixes</li>
            <li><span className="font-semibold text-slate-800">quantity</span> — value + unit: <code className="font-mono text-xs bg-slate-100 px-1 rounded">value-quantity=80|kg</code></li>
          </ul>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Common modifiers</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">:exact</code> — exact string match: <code className="font-mono text-xs bg-slate-100 px-1 rounded">name:exact=Jana</code></li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">:contains</code> — substring match: <code className="font-mono text-xs bg-slate-100 px-1 rounded">name:contains=orv</code></li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">:missing</code> — resources where field is absent: <code className="font-mono text-xs bg-slate-100 px-1 rounded">birthdate:missing=true</code></li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">_count</code> — limit results: <code className="font-mono text-xs bg-slate-100 px-1 rounded">_count=10</code></li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">_sort</code> — sort results: <code className="font-mono text-xs bg-slate-100 px-1 rounded">_sort=-date</code> (descending)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">_include</code> — include referenced resources in result: <code className="font-mono text-xs bg-slate-100 px-1 rounded">_include=Observation:patient</code></li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/bundle" className="text-teal-600 hover:underline">Bundle</Link>
          <Link href="/reference/rest-api" className="text-teal-600 hover:underline">REST API</Link>
          <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link>
        </div>
      </div>
    </article>
  );
}
