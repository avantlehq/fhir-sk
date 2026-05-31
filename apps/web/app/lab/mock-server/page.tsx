import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Mock Server",
  description: "Simulated FHIR REST API for testing CRUD operations, transactions, search and integration scenarios.",
};

export default function MockServerPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/lab" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Lab
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-slate-900 font-mono">Mock Server</h1>
          <StatusBadge status="In Progress" />
        </div>
        <p className="text-lg text-slate-500 leading-relaxed mb-10">
          Simulated FHIR REST API for testing CRUD operations, transactions, search and integration scenarios.
          Based on HAPI FHIR R4 with Docker Compose.
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
          <div className="text-4xl mb-4">🔬</div>
          <h2 className="text-lg font-semibold text-slate-700 mb-2">Coming in a future phase</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            This module is on the roadmap. Follow the{" "}
            <Link href="/learn/roadmap" className="text-teal-600 hover:underline">learning roadmap</Link>{" "}
            to track progress.
          </p>
        </div>
        <div className="mt-6 bg-teal-50 border border-teal-200 rounded-xl p-6">
          <h3 className="font-semibold text-teal-800 mb-2">Local setup available now</h3>
          <p className="text-sm text-teal-700 leading-relaxed mb-3">
            HAPI FHIR R4 server is available locally via Docker Compose.
            See <code className="font-mono bg-teal-100 px-1 rounded">infra/hapi/</code> in the repository.
          </p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-sm">
            <div className="text-slate-400 mb-1"># Start local FHIR server</div>
            <div>cd infra/hapi</div>
            <div>docker compose up -d</div>
            <div className="text-slate-400 mt-2 mb-1"># FHIR endpoint</div>
            <div><span className="text-teal-400">http://localhost:8080/fhir</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
