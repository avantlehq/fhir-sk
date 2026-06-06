import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is FHIR? — Reference",
  description: "FHIR (Fast Healthcare Interoperability Resources) is the HL7 standard for exchanging healthcare information electronically.",
};

export default function FhirReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is FHIR?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>FHIR</strong> (Fast Healthcare Interoperability Resources) is an HL7 standard for exchanging healthcare information electronically. It defines a set of <Link href="/reference/resource" className="text-teal-600 hover:underline">Resources</Link> — structured data objects representing clinical and administrative concepts — and a <Link href="/reference/rest-api" className="text-teal-600 hover:underline">REST API</Link> for creating, reading, updating, and deleting them over HTTP.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8">
          FHIR was created to replace older, harder-to-implement standards (HL7 v2, CDA) with a modern approach using JSON, XML, HTTP, and OAuth. The goal is to make healthcare data portable and interoperable across systems, institutions, and countries.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key facts</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><span className="font-semibold text-slate-800">Maintained by:</span> HL7 International</li>
            <li><span className="font-semibold text-slate-800">Current production version:</span> R4 (4.0.1) — released 2019</li>
            <li><span className="font-semibold text-slate-800">Latest version:</span> R5 — released 2023, adoption in progress</li>
            <li><span className="font-semibold text-slate-800">Formats:</span> JSON (default), XML, Turtle (RDF)</li>
            <li><span className="font-semibold text-slate-800">Transport:</span> REST over HTTPS</li>
            <li><span className="font-semibold text-slate-800">Security:</span> SMART on FHIR (OAuth2 + OpenID Connect)</li>
          </ul>
        </div>

        <div className="space-y-3 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Version history</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-600 border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50 text-slate-700 font-semibold">
                <tr>
                  <th className="text-left px-4 py-2">Version</th>
                  <th className="text-left px-4 py-2">Status</th>
                  <th className="text-left px-4 py-2">Released</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="px-4 py-2 font-mono">DSTU2</td><td className="px-4 py-2">Deprecated</td><td className="px-4 py-2">2015</td></tr>
                <tr><td className="px-4 py-2 font-mono">STU3</td><td className="px-4 py-2">Deprecated</td><td className="px-4 py-2">2017</td></tr>
                <tr className="bg-teal-50"><td className="px-4 py-2 font-mono font-bold text-teal-800">R4</td><td className="px-4 py-2 text-teal-700 font-semibold">Production standard</td><td className="px-4 py-2">2019</td></tr>
                <tr><td className="px-4 py-2 font-mono">R4B</td><td className="px-4 py-2">Limited updates</td><td className="px-4 py-2">2022</td></tr>
                <tr><td className="px-4 py-2 font-mono">R5</td><td className="px-4 py-2">Normative, adoption in progress</td><td className="px-4 py-2">2023</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/resource" className="text-teal-600 hover:underline">Resource</Link>
          <Link href="/reference/rest-api" className="text-teal-600 hover:underline">REST API</Link>
          <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link>
        </div>
      </div>
    </article>
  );
}
