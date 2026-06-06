"use client";

import { useState } from "react";
import { CODE_SYSTEMS, VALUE_SETS } from "@/lib/fhir-terminology";
import type { CodeSystemEntry, ValueSetEntry } from "@/lib/fhir-terminology";

type Tab = "valuesets" | "codesystems";

function CodeSystemDetail({ cs }: { cs: CodeSystemEntry }) {
  return (
    <div>
      <div className="mb-4">
        <p className="text-xs font-mono text-slate-400 break-all mb-1">{cs.url}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{cs.description}</p>
      </div>
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-2 text-xs font-semibold text-slate-600 uppercase tracking-wide">Code</th>
              <th className="text-left px-4 py-2 text-xs font-semibold text-slate-600 uppercase tracking-wide">Display</th>
              <th className="text-left px-4 py-2 text-xs font-semibold text-slate-600 uppercase tracking-wide hidden md:table-cell">Definition</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {cs.concepts.map((c) => (
              <tr key={c.code} className="hover:bg-slate-50">
                <td className="px-4 py-2.5 font-mono text-xs text-teal-700 font-semibold whitespace-nowrap">{c.code}</td>
                <td className="px-4 py-2.5 text-slate-700 font-medium">{c.display}</td>
                <td className="px-4 py-2.5 text-slate-500 text-xs leading-relaxed hidden md:table-cell">{c.definition ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-400 mt-2">{cs.concepts.length} concepts</p>
    </div>
  );
}

function ValueSetDetail({ vs }: { vs: ValueSetEntry }) {
  return (
    <div>
      <div className="mb-4">
        <p className="text-xs font-mono text-slate-400 break-all mb-1">{vs.url}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{vs.description}</p>
      </div>
      {vs.includes.map((inc, i) => (
        <div key={i} className="mb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            From: <span className="font-mono normal-case text-slate-600">{inc.system}</span>
          </p>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-2 text-xs font-semibold text-slate-600 uppercase tracking-wide">Code</th>
                  <th className="text-left px-4 py-2 text-xs font-semibold text-slate-600 uppercase tracking-wide">Display</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inc.concepts.map((c) => (
                  <tr key={c.code} className="hover:bg-slate-50">
                    <td className="px-4 py-2.5 font-mono text-xs text-teal-700 font-semibold">{c.code}</td>
                    <td className="px-4 py-2.5 text-slate-700">{c.display}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-1">{inc.concepts.length} codes</p>
        </div>
      ))}
    </div>
  );
}

export function TerminologyExplorerClient() {
  const [tab, setTab] = useState<Tab>("valuesets");
  const [selectedVS, setSelectedVS] = useState<string>(VALUE_SETS[0].id);
  const [selectedCS, setSelectedCS] = useState<string>(CODE_SYSTEMS[0].id);

  const activeVS = VALUE_SETS.find((v) => v.id === selectedVS) ?? VALUE_SETS[0];
  const activeCS = CODE_SYSTEMS.find((c) => c.id === selectedCS) ?? CODE_SYSTEMS[0];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1 border border-slate-200 rounded-lg p-1 mb-6 w-fit">
        {(["valuesets", "codesystems"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              tab === t
                ? "bg-teal-600 text-white"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {t === "valuesets" ? `ValueSets (${VALUE_SETS.length})` : `CodeSystems (${CODE_SYSTEMS.length})`}
          </button>
        ))}
      </div>

      {/* ValueSets */}
      {tab === "valuesets" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              {VALUE_SETS.map((vs) => (
                <button
                  key={vs.id}
                  onClick={() => setSelectedVS(vs.id)}
                  className={`w-full text-left px-4 py-3 border-b border-slate-100 last:border-0 transition-colors ${
                    selectedVS === vs.id
                      ? "bg-teal-50 border-l-2 border-l-teal-500"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <p className={`text-sm font-semibold ${selectedVS === vs.id ? "text-teal-700" : "text-slate-800"}`}>
                    {vs.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {vs.includes.reduce((n, inc) => n + inc.concepts.length, 0)} codes
                  </p>
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="border border-slate-200 rounded-xl p-5">
              <h2 className="text-base font-bold text-slate-900 mb-3">{activeVS.title}</h2>
              <ValueSetDetail vs={activeVS} />
            </div>
          </div>
        </div>
      )}

      {/* CodeSystems */}
      {tab === "codesystems" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              {CODE_SYSTEMS.map((cs) => (
                <button
                  key={cs.id}
                  onClick={() => setSelectedCS(cs.id)}
                  className={`w-full text-left px-4 py-3 border-b border-slate-100 last:border-0 transition-colors ${
                    selectedCS === cs.id
                      ? "bg-teal-50 border-l-2 border-l-teal-500"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <p className={`text-sm font-semibold ${selectedCS === cs.id ? "text-teal-700" : "text-slate-800"}`}>
                    {cs.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{cs.concepts.length} concepts</p>
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="border border-slate-200 rounded-xl p-5">
              <h2 className="text-base font-bold text-slate-900 mb-3">{activeCS.title}</h2>
              <CodeSystemDetail cs={activeCS} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
