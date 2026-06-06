import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is SMART on FHIR? — Reference",
  description: "SMART on FHIR is an OAuth2-based authorization framework that defines how apps connect to FHIR servers on behalf of patients or clinicians.",
};

export default function SmartOnFhirReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Security</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is SMART on FHIR?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>SMART on FHIR</strong> (Substitutable Medical Applications, Reusable Technologies) is an authorization framework that defines how apps connect to FHIR servers on behalf of patients or clinicians. It combines <strong>OAuth 2.0</strong> for authorization and <strong>OpenID Connect</strong> for authentication, with FHIR-specific extensions.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8">
          SMART is how the Apple Health app reads your medical records from hospital EHRs. In the US, it is mandated by the 21st Century Cures Act. In Europe, it is specified in the EHDS framework for patient-facing access to health data.
        </p>

        <div className="border border-slate-200 rounded-xl p-6 mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">SMART launch types</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <span className="font-semibold text-slate-800">EHR Launch:</span> The app is launched from within the EHR (embedded in the clinical workflow). The EHR passes context (patient ID, encounter ID) to the app at launch.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Standalone Launch:</span> The app launches independently and connects to a FHIR server using standard OAuth2. Used for patient-facing apps and mobile apps.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Backend Services:</span> Server-to-server authorization using JWT client credentials — no user interaction. Used for data pipelines, analytics, bulk data access.
            </li>
          </ul>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">SMART scopes</h2>
          <div className="overflow-x-auto">
            <table className="text-sm text-slate-600 w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase">
                  <th className="pb-2 pr-4">Scope</th>
                  <th className="pb-2">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-2 pr-4 font-mono text-xs">patient/Patient.read</td><td className="py-2">Read Patient resources in the patient context</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">patient/*.read</td><td className="py-2">Read all resource types in the patient context</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">user/Observation.read</td><td className="py-2">Read Observations the clinician can access</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">system/*.read</td><td className="py-2">Backend service — all resources, no user</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">launch/patient</td><td className="py-2">Request that EHR provides patient context at launch</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">openid profile</td><td className="py-2">OpenID Connect — user identity</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">SMART discovery</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            A FHIR server advertises SMART support via its <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link> and a well-known endpoint at <code className="font-mono text-xs bg-slate-100 px-1 rounded">[base]/.well-known/smart-configuration</code>. This tells apps where the authorization server is, what scopes it supports, and what PKCE requirements apply.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/capability-statement" className="text-teal-600 hover:underline">CapabilityStatement</Link>
          <Link href="/reference/rest-api" className="text-teal-600 hover:underline">REST API</Link>
          <Link href="/reference/implementation-guide" className="text-teal-600 hover:underline">Implementation Guide</Link>
        </div>
      </div>
    </article>
  );
}
