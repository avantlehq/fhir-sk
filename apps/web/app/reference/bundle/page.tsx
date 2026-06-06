import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a Bundle? — Reference",
  description: "A FHIR Bundle is a container for multiple resources — used for transactions, search results, documents, and messages.",
};

export default function BundleReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is a Bundle?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          A <strong>Bundle</strong> is a container for multiple <Link href="/reference/resource" className="text-teal-600 hover:underline">Resources</Link>. It groups them into a single HTTP request or response. The <code className="font-mono text-xs bg-slate-100 px-1 rounded">type</code> field determines how the server processes the Bundle and what it means.
        </p>

        <div className="border border-slate-200 rounded-xl overflow-hidden mb-8">
          <table className="w-full text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-3">Type</th>
                <th className="text-left px-4 py-3">Used for</th>
                <th className="text-left px-4 py-3">Behaviour</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="bg-teal-50">
                <td className="px-4 py-3 font-mono text-xs font-bold text-teal-800">transaction</td>
                <td className="px-4 py-3">Creating/updating multiple resources</td>
                <td className="px-4 py-3">Atomic — all succeed or all fail</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">batch</td>
                <td className="px-4 py-3">Independent operations in one request</td>
                <td className="px-4 py-3">Each entry processed independently</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">searchset</td>
                <td className="px-4 py-3">Search results</td>
                <td className="px-4 py-3">Returned by GET /Patient?name=...</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">history</td>
                <td className="px-4 py-3">Version history of a resource</td>
                <td className="px-4 py-3">Returned by GET /Patient/1/_history</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">document</td>
                <td className="px-4 py-3">Clinical document (e.g. Patient Summary)</td>
                <td className="px-4 py-3">First entry must be Composition</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">collection</td>
                <td className="px-4 py-3">Grouping resources without operations</td>
                <td className="px-4 py-3">No processing semantics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Transaction entry structure</h2>
          <p className="text-sm text-slate-600">Each entry in a transaction Bundle has:</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">fullUrl</code> — temporary ID (<code className="font-mono text-xs bg-slate-100 px-1 rounded">urn:uuid:...</code>) or permanent URL, used for internal references</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">resource</code> — the FHIR resource to create/update</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">request.method</code> — POST, PUT, GET, DELETE</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">request.url</code> — relative URL (e.g. <code className="font-mono text-xs bg-slate-100 px-1 rounded">Patient</code>)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">request.ifNoneExist</code> — conditional create: skip if matching resource exists</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link>
          <Link href="/reference/rest-api" className="text-teal-600 hover:underline">REST API</Link>
          <Link href="/reference/search" className="text-teal-600 hover:underline">Search</Link>
        </div>
      </div>
    </article>
  );
}
