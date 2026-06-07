import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/ArticleNav";

export const metadata: Metadata = {
  title: "Bundle — Core Resources",
  description: "How FHIR Bundle works: transaction atomicity, searchset results, batch operations, urn:uuid references, and entry structure.",
  alternates: { canonical: "https://fhir.sk/learn/resources/bundle" },
};

export default function BundleLearnPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/learn/resources" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Core Resources
        </Link>

        <div className="mb-12">
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 1 — FHIR Fundamentals</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Bundle</h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            A Bundle is a container for multiple FHIR resources. It groups resources into a single HTTP request or response. The Bundle type determines what the server does with it — and what it means.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Bundle types</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            The <code className="font-mono text-xs bg-slate-100 px-1 rounded">type</code> field is the most important field in a Bundle. It dictates the processing semantics. Two Bundles with identical content but different types are processed completely differently.
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3">Type</th>
                  <th className="text-left px-4 py-3">Direction</th>
                  <th className="text-left px-4 py-3">Semantics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-teal-50">
                  <td className="px-4 py-3 font-mono text-xs font-bold text-teal-800">transaction</td>
                  <td className="px-4 py-3 text-sm">Request</td>
                  <td className="px-4 py-3 text-sm">Atomic — all entries succeed or all fail together</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">batch</td>
                  <td className="px-4 py-3 text-sm">Request</td>
                  <td className="px-4 py-3 text-sm">Each entry processed independently, partial success allowed</td>
                </tr>
                <tr className="bg-teal-50">
                  <td className="px-4 py-3 font-mono text-xs font-bold text-teal-800">searchset</td>
                  <td className="px-4 py-3 text-sm">Response</td>
                  <td className="px-4 py-3 text-sm">Search results — returned by GET /Patient?name=...</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">history</td>
                  <td className="px-4 py-3 text-sm">Response</td>
                  <td className="px-4 py-3 text-sm">Version history — returned by GET /Patient/1/_history</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">document</td>
                  <td className="px-4 py-3 text-sm">Both</td>
                  <td className="px-4 py-3 text-sm">Clinical document — first entry must be Composition</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">collection</td>
                  <td className="px-4 py-3 text-sm">Both</td>
                  <td className="px-4 py-3 text-sm">Grouping resources — no processing semantics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Transaction Bundle: creating multiple resources atomically</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A transaction Bundle is sent to the base URL (<code className="font-mono text-xs bg-slate-100 px-1 rounded">POST /fhir/</code>). The server processes all entries as a single atomic operation. If any entry fails validation or conflicts, the entire transaction rolls back — no partial saves.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            The key challenge in transactions: resources often reference each other. A Condition references a Patient. If both are created in the same transaction, the Patient doesn&apos;t have a server-assigned ID yet. The solution is <strong>urn:uuid references</strong>.
          </p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`POST http://localhost:8080/fhir/

{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:a1b2c3d4-0001-0000-0000-000000000001",
      "resource": {
        "resourceType": "Patient",
        "name": [{ "family": "Horváth", "given": ["Jana"] }],
        "gender": "female",
        "birthDate": "1979-03-12"
      },
      "request": { "method": "POST", "url": "Patient" }
    },
    {
      "fullUrl": "urn:uuid:a1b2c3d4-0002-0000-0000-000000000002",
      "resource": {
        "resourceType": "Condition",
        "clinicalStatus": {
          "coding": [{ "code": "active" }]
        },
        "code": {
          "coding": [{ "system": "http://snomed.info/sct", "code": "44054006" }]
        },
        "subject": {
          "reference": "urn:uuid:a1b2c3d4-0001-0000-0000-000000000001"
        }
      },
      "request": { "method": "POST", "url": "Condition" }
    }
  ]
}`}</pre>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4 text-sm text-slate-700">
            The Condition references the Patient using its <code className="font-mono text-xs bg-slate-100 px-1 rounded">urn:uuid:...</code> fullUrl. The server resolves all internal references after assigning real IDs, then writes everything in a single database transaction.
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Transaction entry structure</h2>
          <div className="space-y-3">
            {[
              {
                name: "fullUrl",
                detail: "Temporary identifier for this entry within the Bundle. For new resources: urn:uuid:... For updates: the existing resource URL. Used to build internal cross-references."
              },
              {
                name: "resource",
                detail: "The FHIR resource to create, update, or delete. Must be a complete, valid resource."
              },
              {
                name: "request.method",
                detail: "HTTP method: POST (create), PUT (update or create with known ID), DELETE (delete), GET (read — valid only in batch, not transaction)."
              },
              {
                name: "request.url",
                detail: "The relative URL for the operation. For POST: resource type (Patient). For PUT: resource type + ID (Patient/123). For conditional create: Patient?identifier=system|value."
              },
              {
                name: "request.ifNoneExist",
                detail: "Conditional create. If a resource matching this search string already exists, skip this entry instead of creating a duplicate. e.g. identifier=http://example.sk/pid|7903121234"
              },
            ].map((el) => (
              <div key={el.name} className="border border-slate-200 rounded-lg p-4 text-sm">
                <span className="font-mono text-xs bg-slate-100 px-1 rounded mr-2">{el.name}</span>
                <span className="text-slate-600">{el.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">transaction vs batch — when to use which</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-2 border-teal-200 rounded-xl p-5">
              <div className="text-sm font-bold text-teal-800 mb-2">transaction</div>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Creating linked resources together</li>
                <li>Data must be consistent as a set</li>
                <li>Partial failure is not acceptable</li>
                <li className="text-slate-400 text-xs pt-2">Example: Patient + Condition + MedicationRequest for the same patient — if the Patient fails, the rest should not be saved.</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <div className="text-sm font-bold text-slate-700 mb-2">batch</div>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Independent operations in one round-trip</li>
                <li>Some may succeed even if others fail</li>
                <li>Loading historical data from a CSV</li>
                <li className="text-slate-400 text-xs pt-2">Example: importing 100 Patient records — a validation error on record 47 should not block the other 99.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">See also</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/reference/bundle" className="text-teal-600 hover:underline">Reference: Bundle</Link>
            <Link href="/learn/resources/search" className="text-teal-600 hover:underline">Learn: Search</Link>
            <Link href="/reference/rest-api" className="text-teal-600 hover:underline">Reference: REST API</Link>
          </div>
        </section>
        <ArticleNav />
      </div>
    </article>
  );
}
