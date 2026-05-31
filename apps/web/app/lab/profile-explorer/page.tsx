import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";

export const metadata: Metadata = {
  title: "Profile Explorer",
  description: "Inspect FHIR profiles, StructureDefinitions, constraints, cardinalities, extensions, Must Support elements and example resources.",
};

export default function ProfileExplorerPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/lab" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Lab
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-slate-900 font-mono">Profile Explorer</h1>
          <StatusBadge status="Planned" />
        </div>
        <p className="text-lg text-slate-500 leading-relaxed mb-10">
          Inspect FHIR profiles, StructureDefinitions, constraints, cardinalities, extensions,
          Must Support elements and example resources.
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
      </div>
    </div>
  );
}
