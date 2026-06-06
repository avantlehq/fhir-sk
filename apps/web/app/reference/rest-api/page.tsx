import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is the FHIR REST API? — Reference",
  description: "The FHIR REST API defines how to interact with FHIR resources over HTTP using standard methods and URL patterns.",
};

export default function RestApiReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is the FHIR REST API?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          The <strong>FHIR REST API</strong> defines how clients interact with a FHIR server using standard HTTP methods and a predictable URL pattern. Every <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link> type has its own endpoint, and operations map directly to HTTP verbs.
        </p>

        <div className="border border-slate-200 rounded-xl overflow-hidden mb-8">
          <table className="w-full text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-3">HTTP</th>
                <th className="text-left px-4 py-3">URL</th>
                <th className="text-left px-4 py-3">FHIR operation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs">
              <tr><td className="px-4 py-3 text-teal-700 font-bold">GET</td><td className="px-4 py-3">/Patient/123</td><td className="px-4 py-3 font-sans text-slate-600">read — fetch a specific resource</td></tr>
              <tr><td className="px-4 py-3 text-teal-700 font-bold">GET</td><td className="px-4 py-3">/Patient?name=Doe</td><td className="px-4 py-3 font-sans text-slate-600">search — returns searchset Bundle</td></tr>
              <tr><td className="px-4 py-3 text-teal-700 font-bold">GET</td><td className="px-4 py-3">/Patient/123/_history</td><td className="px-4 py-3 font-sans text-slate-600">history — all versions of a resource</td></tr>
              <tr><td className="px-4 py-3 text-blue-700 font-bold">POST</td><td className="px-4 py-3">/Patient</td><td className="px-4 py-3 font-sans text-slate-600">create — server assigns the ID</td></tr>
              <tr><td className="px-4 py-3 text-blue-700 font-bold">POST</td><td className="px-4 py-3">/</td><td className="px-4 py-3 font-sans text-slate-600">transaction/batch Bundle</td></tr>
              <tr><td className="px-4 py-3 text-amber-700 font-bold">PUT</td><td className="px-4 py-3">/Patient/123</td><td className="px-4 py-3 font-sans text-slate-600">update — full replace, client provides ID</td></tr>
              <tr><td className="px-4 py-3 text-red-700 font-bold">DELETE</td><td className="px-4 py-3">/Patient/123</td><td className="px-4 py-3 font-sans text-slate-600">delete — soft delete, 410 Gone after</td></tr>
              <tr><td className="px-4 py-3 text-teal-700 font-bold">GET</td><td className="px-4 py-3">/metadata</td><td className="px-4 py-3 font-sans text-slate-600"><Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link></td></tr>
            </tbody>
          </table>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">HTTP status codes</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">200 OK</code> — successful read, update, or delete</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">201 Created</code> — resource successfully created (POST)</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">400 Bad Request</code> — malformed resource or request</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">404 Not Found</code> — resource ID never existed</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">410 Gone</code> — resource existed but was deleted</li>
            <li><code className="font-mono text-xs bg-slate-100 px-1 rounded">422 Unprocessable Entity</code> — resource fails validation</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">Content type</h2>
          <p className="text-sm text-slate-600">All FHIR requests and responses use <code className="font-mono text-xs bg-slate-100 px-1 rounded">application/fhir+json</code> (or <code className="font-mono text-xs bg-slate-100 px-1 rounded">application/fhir+xml</code>). Error responses return an <code className="font-mono text-xs bg-slate-100 px-1 rounded">OperationOutcome</code> resource.</p>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/search" className="text-teal-600 hover:underline">Search</Link>
          <Link href="/reference/bundle" className="text-teal-600 hover:underline">Bundle</Link>
          <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link>
        </div>
      </div>
    </article>
  );
}
