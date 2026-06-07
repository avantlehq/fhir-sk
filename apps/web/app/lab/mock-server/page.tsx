"use client";

import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { useState } from "react";

export default function MockServerPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [usecase, setUsecase] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/contact-mock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, usecase }),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      const data = await res.json();
      setErrorMsg(data.error ?? "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/lab" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">
          ← Back to Lab
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-slate-900 font-mono">Mock Server</h1>
          <StatusBadge status="Live" />
        </div>

        <p className="text-lg text-slate-500 leading-relaxed mb-6">
          A static FHIR R4 REST API for learning and testing — real endpoints, synthetic data only.
          Use it to explore FHIR request/response patterns without running a local server.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">What it includes</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
            {[
              "Patient (synthetic)",
              "Condition — SNOMED + ICD-10",
              "Encounter — ambulatory",
              "MedicationRequest — ATC",
              "Observation — lab + vitals",
              "AllergyIntolerance",
              "IPS Document Bundle",
              "CapabilityStatement",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {status === "success" ? (
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
            <div className="text-3xl mb-3">✓</div>
            <h2 className="text-lg font-semibold text-slate-800 mb-1">Request received</h2>
            <p className="text-slate-500 text-sm">We&apos;ll be in touch shortly.</p>
          </div>
        ) : (
          <div className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-slate-900 mb-1">Request access</h2>
            <p className="text-sm text-slate-500 mb-6">
              API access is available on request. Fill in the form and we&apos;ll send you the details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">What are you building or testing?</label>
                <textarea
                  required
                  value={usecase}
                  onChange={(e) => setUsecase(e.target.value)}
                  rows={3}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="Brief description of your use case"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-teal-600 text-white font-semibold py-2.5 rounded-lg hover:bg-teal-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {status === "loading" ? "Sending…" : "Request access →"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
