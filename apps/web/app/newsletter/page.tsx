"use client";

import Link from "next/link";
import { useState } from "react";

const topics = [
  "HL7 FHIR R4 concepts and implementation notes",
  "EHDS regulation updates and EHRxF progress",
  "HAPI FHIR server tips and configurations",
  "New lab modules and documentation",
  "Slovak eHealth context and NCZI updates",
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus("error");
      setErrorMsg(data.error ?? "Something went wrong.");
    } else {
      setStatus("success");
      setEmail("");
    }
  }

  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block"
          >
            ← Back to home
          </Link>
          <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Newsletter
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Stay updated on FHIR and EHDS
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Practical notes on HL7 FHIR, healthcare interoperability, and EHDS.
            No spam. Sent when there is something worth sharing.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-widest mb-4">
            What you will receive
          </h2>
          <ul className="space-y-2">
            {topics.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-600 mt-2" />
                <span className="text-sm text-slate-600">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-slate-200 rounded-xl p-8 bg-slate-50">
          {status === "success" ? (
            <div>
              <p className="font-semibold text-slate-900 mb-1">You are subscribed.</p>
              <p className="text-sm text-slate-500">
                You will receive updates on HL7 FHIR, EHDS, and interoperability.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 text-sm border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-500 transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
          )}
        </div>
      </div>
    </div>
  );
}
