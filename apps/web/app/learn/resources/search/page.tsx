import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/ArticleNav";

export const metadata: Metadata = {
  title: "Search — Core Resources",
  description: "How FHIR Search works: URL parameters, parameter types (string, token, date, reference), modifiers, and searchset Bundle format.",
  alternates: { canonical: "https://fhir.sk/learn/resources/search" },
};

export default function SearchLearnPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/learn/resources" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Core Resources
        </Link>

        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 1 — FHIR Fundamentals</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Search</h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            FHIR Search is how you retrieve multiple resources from a server. You construct a query using URL parameters. The server returns a Bundle of type searchset containing every matching resource.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">How search works</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A FHIR search is a GET request to a resource type endpoint with query parameters. Every resource type exposes a defined set of search parameters — Patient supports <code className="font-mono text-xs bg-slate-100 px-1 rounded">name</code>, <code className="font-mono text-xs bg-slate-100 px-1 rounded">birthdate</code>, <code className="font-mono text-xs bg-slate-100 px-1 rounded">gender</code>, <code className="font-mono text-xs bg-slate-100 px-1 rounded">identifier</code>. Observation supports <code className="font-mono text-xs bg-slate-100 px-1 rounded">patient</code>, <code className="font-mono text-xs bg-slate-100 px-1 rounded">code</code>, <code className="font-mono text-xs bg-slate-100 px-1 rounded">date</code>, <code className="font-mono text-xs bg-slate-100 px-1 rounded">category</code>.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The server&apos;s <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link> lists which search parameters it supports. Search parameters not listed in the CapabilityStatement are not guaranteed to work.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Search examples</h2>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto space-y-4">
            <div>
              <div className="text-slate-400 text-xs mb-1"># All patients named Horváth</div>
              <div><span className="text-teal-400">GET</span> /fhir/Patient?name=Horváth</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1"># Female patients born after 1980</div>
              <div><span className="text-teal-400">GET</span> /fhir/Patient?gender=female&birthdate=ge1980</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1"># Patient by national identifier</div>
              <div><span className="text-teal-400">GET</span> /fhir/Patient?identifier=http://example.sk/pid|7903121234</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1"># Blood glucose results for one patient</div>
              <div><span className="text-teal-400">GET</span> /fhir/Observation?patient=patient-001&code=http://loinc.org|2339-0</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1"># All vital signs for one patient, newest first</div>
              <div><span className="text-teal-400">GET</span> /fhir/Observation?patient=patient-001&category=vital-signs&_sort=-date</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs mb-1"># Active conditions for one patient</div>
              <div><span className="text-teal-400">GET</span> /fhir/Condition?patient=patient-001&clinical-status=active</div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Parameter types</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Each search parameter has a type that determines how it is matched. The type is defined in the CapabilityStatement.
          </p>
          <div className="space-y-4">
            {[
              {
                type: "string",
                example: "name=Horváth",
                detail: "Partial match by default: matches at the beginning of any name part. name=Jan matches 'Jana', 'Ján', 'Jánošík'. Add :exact for exact match, :contains for substring."
              },
              {
                type: "token",
                example: "code=http://loinc.org|2339-0",
                detail: "Exact match on code value, optionally scoped to a system. Format: system|code. If system is omitted, any system is accepted. Used for coded values: gender, status, code, category, identifier."
              },
              {
                type: "date",
                example: "birthdate=ge1979-01-01",
                detail: "Date comparison with optional prefix: eq (equal), ne (not equal), lt (less than), gt (greater than), le (less than or equal), ge (greater than or equal). Can match year, year-month, or full date."
              },
              {
                type: "reference",
                example: "patient=Patient/patient-001",
                detail: "Search by resource reference. Can be a relative reference (Patient/123), absolute URL, or just the id (123). Used in Observation, Condition, Encounter to link back to a Patient."
              },
              {
                type: "quantity",
                example: "value-quantity=7.8||mmol/L",
                detail: "Numeric value with optional comparator and unit. Format: prefix|value|system|code. Used for Observation value-quantity search."
              },
            ].map((p) => (
              <div key={p.type} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded font-semibold">{p.type}</span>
                  <code className="font-mono text-xs text-slate-500">{p.example}</code>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Common control parameters</h2>
          <div className="space-y-3">
            {[
              { name: "_count", example: "_count=20", detail: "Maximum results per page. Server may return fewer." },
              { name: "_sort", example: "_sort=-date", detail: "Sort by field. Prefix - for descending." },
              { name: "_include", example: "_include=Observation:patient", detail: "Include referenced resources in the result. Returns matching Observations AND the referenced Patients." },
              { name: "_summary", example: "_summary=true", detail: "Return only summary elements — reduces payload for list views." },
              { name: "_total", example: "_total=accurate", detail: "Ask the server to include total count in the searchset Bundle." },
            ].map((p) => (
              <div key={p.name} className="border border-slate-200 rounded-lg p-4 text-sm">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs bg-slate-100 px-1 rounded">{p.name}</span>
                  <code className="font-mono text-xs text-slate-400">{p.example}</code>
                </div>
                <p className="text-slate-600">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The searchset Bundle</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A search response is always a <Link href="/learn/resources/bundle" className="text-teal-600 hover:underline">Bundle</Link> of type <code className="font-mono text-xs bg-slate-100 px-1 rounded">searchset</code>. It contains the matching resources in <code className="font-mono text-xs bg-slate-100 px-1 rounded">entry[]</code> and metadata in the Bundle header.
          </p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 1,
  "link": [
    { "relation": "self", "url": "http://localhost:8080/fhir/Patient?name=Horváth" }
  ],
  "entry": [
    {
      "fullUrl": "http://localhost:8080/fhir/Patient/1005",
      "resource": {
        "resourceType": "Patient",
        "id": "1005",
        ...
      },
      "search": { "mode": "match" }
    }
  ]
}`}</pre>
          </div>
          <p className="text-slate-700 leading-relaxed mt-4 text-sm">
            <code className="font-mono text-xs bg-slate-100 px-1 rounded">search.mode</code> can be <code className="font-mono text-xs bg-slate-100 px-1 rounded">match</code> (matched the query), <code className="font-mono text-xs bg-slate-100 px-1 rounded">include</code> (included via _include), or <code className="font-mono text-xs bg-slate-100 px-1 rounded">outcome</code> (OperationOutcome for a warning).
          </p>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">See also</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/reference/search" className="text-teal-600 hover:underline">Reference: Search</Link>
            <Link href="/learn/resources/bundle" className="text-teal-600 hover:underline">Learn: Bundle</Link>
            <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">Reference: CapabilityStatement</Link>
          </div>
        </section>
        <ArticleNav />
      </div>
    </article>
  );
}
