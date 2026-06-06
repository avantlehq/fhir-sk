import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Conformance? — Learn — FHIR.sk",
  description: "Conformance in FHIR: CapabilityStatement, profiles, validation, and how servers and clients declare and verify what they support.",
};

export default function ConformancePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn/profiling" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Profiling</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 5 · 7 min</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-6">What is Conformance?</h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>Conformance</strong> in FHIR is the formal process of declaring and verifying what a system supports. A FHIR server declares its capabilities in a <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link>. Profiles declare constraints on resources. Validation checks that resources meet those constraints. Together, these form the FHIR conformance framework.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Conformance vs validation vs compliance</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          These three terms are related but distinct:
        </p>
        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-xs font-semibold text-slate-700 uppercase">
                  <th className="pb-2 pr-4">Term</th>
                  <th className="pb-2">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr><td className="py-2 pr-4 font-semibold text-slate-800">Conformance</td><td className="py-2">A system&apos;s ability to support a defined set of FHIR capabilities — declared via CapabilityStatement and verified by testing.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-slate-800">Validation</td><td className="py-2">Checking that a specific resource instance conforms to the base spec or a profile. Returns an OperationOutcome.</td></tr>
                <tr><td className="py-2 pr-4 font-semibold text-slate-800">Compliance</td><td className="py-2">A system meets the requirements of a specific regulation or IG (e.g. EHDS, US Core). Requires conformance + testing + certification.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">CapabilityStatement — what a server declares</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Every FHIR server exposes a CapabilityStatement at <code className="font-mono text-xs bg-slate-100 px-1 rounded">GET [base]/metadata</code>. It declares:
        </p>
        <ul className="space-y-2 text-slate-600 mb-4 ml-4">
          <li><span className="font-semibold text-slate-800">Resources supported:</span> which resource types the server can store and return</li>
          <li><span className="font-semibold text-slate-800">Interactions:</span> read, search-type, create, update, delete — per resource type</li>
          <li><span className="font-semibold text-slate-800">Search parameters:</span> which parameters are supported and with which modifiers</li>
          <li><span className="font-semibold text-slate-800">Operations:</span> which <code className="font-mono text-xs bg-slate-100 px-1 rounded">$operations</code> are available (e.g. <code className="font-mono text-xs bg-slate-100 px-1 rounded">$validate</code>, <code className="font-mono text-xs bg-slate-100 px-1 rounded">$export</code>)</li>
          <li><span className="font-semibold text-slate-800">Profiles supported:</span> which StructureDefinitions the server validates against</li>
          <li><span className="font-semibold text-slate-800">Security:</span> whether SMART on FHIR authentication is required</li>
        </ul>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">HAPI FHIR — check CapabilityStatement locally</p>
          <pre className="text-xs text-slate-100 font-mono overflow-x-auto">{`curl http://localhost:8080/fhir/metadata | jq '.rest[0].resource[] | {type, interaction: [.interaction[].code]}'`}</pre>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Conformance resources</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          FHIR defines a set of resources whose purpose is to describe other resources and system behaviour — collectively called <em>conformance resources</em>:
        </p>
        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-xs font-semibold text-slate-700 uppercase">
                  <th className="pb-2 pr-4">Resource</th>
                  <th className="pb-2">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr><td className="py-2 pr-4 font-mono text-xs font-semibold">CapabilityStatement</td><td className="py-2">Declares what a server or client supports — the system contract</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs font-semibold">StructureDefinition</td><td className="py-2">Defines the structure of resources, profiles, extensions, data types</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs font-semibold">ValueSet</td><td className="py-2">Selects codes valid in a specific context</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs font-semibold">CodeSystem</td><td className="py-2">Defines codes and their meanings</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs font-semibold">SearchParameter</td><td className="py-2">Defines a search parameter — what element it searches, what type</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs font-semibold">OperationDefinition</td><td className="py-2">Defines a custom operation ($validate, $export, $expand)</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs font-semibold">ImplementationGuide</td><td className="py-2">Bundles all conformance resources for a specific use case into a publishable specification</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Testing conformance</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Declaring conformance in a CapabilityStatement is only a claim. Verification requires testing. FHIR defines a <strong>TestScript</strong> resource to write machine-executable test scenarios, and tools like the Touchstone platform run them against live servers.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          For our lab, conformance testing is done through:
        </p>
        <ul className="space-y-1 text-slate-600 mb-8 ml-4">
          <li><span className="font-semibold">Postman collection:</span> manual verification of each endpoint and search parameter</li>
          <li><span className="font-semibold">$validate operation:</span> per-resource validation against HAPI FHIR (Phase 3)</li>
          <li><span className="font-semibold">Validator Lab:</span> structural validation against our profiles in the browser</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">Governance resources and conformance</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Three resource types support clinical governance and GDPR compliance — not strictly part of conformance, but part of a production FHIR system:
        </p>
        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <div>
            <p className="font-semibold text-slate-800 text-sm">Consent</p>
            <p className="text-sm text-slate-600 leading-relaxed">Records patient consent decisions — who can access what data, for what purpose, for how long. Structured as a provision tree: root permit/deny with nested overrides. GDPR requires explicit consent for health data processing in most contexts.</p>
          </div>
          <div className="border-t border-slate-100 pt-3">
            <p className="font-semibold text-slate-800 text-sm">AuditEvent</p>
            <p className="text-sm text-slate-600 leading-relaxed">Records who accessed or modified which resource, when, from where, and for what purpose. Maps to the DICOM/IHE audit event vocabulary. GDPR Article 30 (records of processing) and Article 32 (security) require audit trails for health data systems.</p>
          </div>
          <div className="border-t border-slate-100 pt-3">
            <p className="font-semibold text-slate-800 text-sm">Provenance</p>
            <p className="text-sm text-slate-600 leading-relaxed">Records where a resource came from — who authored it, who assembled it, what source data it was derived from. Supports data lineage and trust — particularly important for IPS documents that aggregate data from multiple sources.</p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link>
          <Link href="/reference/validation" className="text-teal-600 hover:underline">Validation</Link>
          <Link href="/reference/implementation-guide" className="text-teal-600 hover:underline">Implementation Guide</Link>
          <Link href="/lab/validator" className="text-teal-600 hover:underline">Validator Lab</Link>
        </div>
      </div>
    </article>
  );
}
