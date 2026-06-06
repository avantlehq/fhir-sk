import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is HL7 v2? — Reference",
  description: "HL7 version 2 is a pipe-delimited message standard from 1987. It remains the dominant protocol inside hospitals for ADT, lab results, and orders.",
};

export default function Hl7V2ReferencePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/reference" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← Reference</Link>
        <span className="inline-block text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Standards</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">What is HL7 v2?</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          <strong>HL7 version 2</strong> (HL7 v2.x) is a pipe-delimited message standard created in 1987. Despite being 35+ years old, it is still the most widely deployed health IT standard in the world — the backbone of hospital ADT feeds, lab results, and order messages in the vast majority of existing healthcare systems.
        </p>

        <div className="bg-slate-800 rounded-xl p-5 mb-8">
          <p className="text-xs text-slate-400 mb-2 font-mono">ADT^A01 — Admit Patient (HL7 v2 message)</p>
          <pre className="text-xs text-slate-100 font-mono overflow-x-auto whitespace-pre">{`MSH|^~\\&|HIS|FNSP|LAB|FNSP|20240315120000||ADT^A01|MSG001|P|2.5
EVN|A01|20240315120000
PID|1||987654321^^^2.16.840.1.113883.2.9.4.3.2^ISO||Horváth^Jana||19850315|F|||Mlynská 12^^Bratislava^^81105^SK`}</pre>
        </div>

        <div className="border border-slate-200 rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Message structure</h2>
          <div className="overflow-x-auto">
            <table className="text-sm text-slate-600 w-full">
              <thead>
                <tr className="text-left border-b border-slate-200 text-slate-700 text-xs font-semibold uppercase">
                  <th className="pb-2 pr-4">Concept</th>
                  <th className="pb-2">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="py-2 pr-4 font-mono text-xs">MSH</td><td className="py-2">Message header — encoding, sender, receiver, timestamp, message type</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">PID</td><td className="py-2">Patient identification — name, DOB, gender, address, identifiers</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">EVN</td><td className="py-2">Event type — the trigger (A01 = admit, A08 = update, A18 = merge)</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">OBX</td><td className="py-2">Observation — a single result, used in lab messages (ORU^R01)</td></tr>
                <tr><td className="py-2 pr-4 font-mono text-xs">ORC/OBR</td><td className="py-2">Order and order detail — used in ORM (order) messages</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-slate-700 mb-2">HL7 v2 vs FHIR</h2>
          <ul className="text-sm text-slate-600 space-y-1">
            <li><span className="font-semibold">Format:</span> pipe-delimited text vs JSON/XML</li>
            <li><span className="font-semibold">Transport:</span> MLLP (raw TCP) vs HTTP/REST</li>
            <li><span className="font-semibold">Query:</span> no standard REST — messages are push-only</li>
            <li><span className="font-semibold">Status:</span> dominant in internal hospital systems, being replaced at integration boundaries by FHIR</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">See also:</span>
          <Link href="/reference/cda" className="text-teal-600 hover:underline">CDA</Link>
          <Link href="/reference/fhir" className="text-teal-600 hover:underline">FHIR</Link>
        </div>
      </div>
    </article>
  );
}
