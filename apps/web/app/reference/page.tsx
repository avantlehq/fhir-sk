import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ReferenceList } from "./ReferenceList";

export const metadata: Metadata = {
  title: "Reference — FHIR.sk",
  description: "FHIR and healthcare interoperability reference. Concise definitions of core concepts.",
  alternates: { canonical: `${siteConfig.url}/reference` },
};

export default function ReferencePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-3">Reference</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Reference</h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-2xl">
            Concise definitions of FHIR and healthcare interoperability concepts.
            Reference answers <em>what is this</em> — for <em>how to use it</em>, see{" "}
            <Link href="/learn" className="text-teal-600 hover:underline">Learn</Link>.
          </p>
        </div>
        <ReferenceList />
      </div>
    </div>
  );
}
