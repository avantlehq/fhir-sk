import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Mock Server — FHIR.sk Lab",
  description: "Static FHIR R4 REST API for learning and testing. Synthetic data only.",
};

const BASE = "https://fhir.sk/api/fhir";

const endpoints = [
  {
    method: "GET",
    path: "/api/fhir/metadata",
    description: "CapabilityStatement — what this server supports",
    curl: `curl -H "Accept: application/fhir+json" ${BASE}/metadata`,
  },
  {
    method: "GET",
    path: "/api/fhir/Patient",
    description: "Search all Patients — returns searchset Bundle",
    curl: `curl -H "Accept: application/fhir+json" ${BASE}/Patient`,
  },
  {
    method: "GET",
    path: "/api/fhir/Patient/patient-horvath-001",
    description: "Read Patient by ID — Jana Horváth (synthetic)",
    curl: `curl -H "Accept: application/fhir+json" ${BASE}/Patient/patient-horvath-001`,
  },
  {
    method: "POST",
    path: "/api/fhir/Patient",
    description: "Create Patient — simulated 201 Created response",
    curl: `curl -X POST -H "Content-Type: application/fhir+json" -d '{"resourceType":"Patient","name":[{"family":"Test"}]}' ${BASE}/Patient`,
  },
  {
    method: "GET",
    path: "/api/fhir/Condition",
    description: "Search Conditions — Diabetes mellitus type 2 (SNOMED + ICD-10)",
    curl: `curl -H "Accept: application/fhir+json" ${BASE}/Condition`,
  },
  {
    method: "GET",
    path: "/api/fhir/Encounter",
    description: "Search Encounters — ambulatory check-up",
    curl: `curl -H "Accept: application/fhir+json" ${BASE}/Encounter`,
  },
  {
    method: "GET",
    path: "/api/fhir/MedicationRequest",
    description: "Search MedicationRequests — Metformin 500mg",
    curl: `curl -H "Accept: application/fhir+json" ${BASE}/MedicationRequest`,
  },
  {
    method: "GET",
    path: "/api/fhir/Observation",
    description: "Search Observations — glucose, blood pressure, body weight",
    curl: `curl -H "Accept: application/fhir+json" ${BASE}/Observation`,
  },
];

const methodColor: Record<string, string> = {
  GET: "bg-teal-100 text-teal-800",
  POST: "bg-blue-100 text-blue-800",
};

export default function MockServerPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/lab" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Lab
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-slate-900 font-mono">Mock Server</h1>
          <StatusBadge status="In Progress" />
        </div>

        <p className="text-lg text-slate-500 leading-relaxed mb-3">
          Static FHIR R4 REST API — real endpoints, synthetic data. Use it to learn FHIR request/response
          patterns without running a local server.
        </p>

        <div className="flex items-center gap-2 mb-10 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Base URL</span>
          <code className="text-sm font-mono text-teal-700 ml-2">{BASE}</code>
          <span className="ml-auto text-xs text-slate-400">FHIR R4 · Synthetic data only</span>
        </div>

        {/* Disclaimer */}
        <div className="mb-8 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
          All responses contain synthetic data. Not affiliated with any healthcare institution. No real patient data.
        </div>

        {/* Endpoints */}
        <div className="space-y-4">
          {endpoints.map((ep) => (
            <div key={ep.path} className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="flex items-start gap-3 p-4 bg-white">
                <span className={`text-xs font-bold px-2 py-1 rounded font-mono flex-shrink-0 mt-0.5 ${methodColor[ep.method]}`}>
                  {ep.method}
                </span>
                <div className="min-w-0">
                  <code className="text-sm font-mono text-slate-800 break-all">{ep.path}</code>
                  <p className="text-sm text-slate-500 mt-1">{ep.description}</p>
                </div>
              </div>
              <div className="bg-slate-800 px-4 py-3">
                <p className="text-xs text-slate-400 mb-1 font-mono">curl</p>
                <code className="text-xs text-slate-200 font-mono break-all leading-relaxed">{ep.curl}</code>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
          <h2 className="text-sm font-semibold text-slate-700">Notes</h2>
          <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
            <li>All GET endpoints return <code className="font-mono text-xs bg-slate-100 px-1 rounded">application/fhir+json</code></li>
            <li>POST /Patient returns 201 with a simulated ID — no data is stored</li>
            <li>Searchset Bundles contain one synthetic patient (Jana Horváth) and her clinical records</li>
            <li>For a full FHIR server, run HAPI FHIR locally: <code className="font-mono text-xs bg-slate-100 px-1 rounded">cd infra/hapi && docker compose up -d</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
