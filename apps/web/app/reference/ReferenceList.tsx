"use client";

import Link from "next/link";
import { useState } from "react";
import { referenceGroups, titleBySlug, isNew, type Difficulty } from "@/lib/reference-data";

const DIFFICULTY_OPTIONS = ["All", "Beginner", "Intermediate", "Advanced"] as const;
type DifficultyFilter = (typeof DIFFICULTY_OPTIONS)[number];

const difficultyBadge: Record<Difficulty, string> = {
  Beginner: "bg-emerald-50 text-emerald-700",
  Intermediate: "bg-sky-50 text-sky-700",
  Advanced: "bg-orange-50 text-orange-700",
};

export function ReferenceList() {
  const [query, setQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>("All");

  const q = query.toLowerCase();

  const filteredGroups = referenceGroups
    .map((group) => ({
      ...group,
      entries: group.entries.filter((e) => {
        const matchesText =
          q === "" ||
          e.title.toLowerCase().includes(q) ||
          e.summary.toLowerCase().includes(q);
        const matchesDifficulty =
          difficultyFilter === "All" || e.difficulty === difficultyFilter;
        return matchesText && matchesDifficulty;
      }),
    }))
    .filter((g) => g.entries.length > 0);

  const totalVisible = filteredGroups.reduce((sum, g) => sum + g.entries.length, 0);

  return (
    <>
      {/* Search + filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <input
          type="search"
          placeholder="Search entries…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        />
        <div className="flex gap-1.5 flex-wrap">
          {DIFFICULTY_OPTIONS.map((d) => (
            <button
              key={d}
              onClick={() => setDifficultyFilter(d)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                difficultyFilter === d
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* No results */}
      {totalVisible === 0 && (
        <div className="py-16 text-center text-slate-400 text-sm">
          No entries match <strong className="text-slate-600">&ldquo;{query}&rdquo;</strong>
          {difficultyFilter !== "All" && (
            <> in <strong className="text-slate-600">{difficultyFilter}</strong></>
          )}
          .
        </div>
      )}

      {/* Groups */}
      <div className="space-y-12">
        {filteredGroups.map((group) => (
          <section key={group.id} id={group.id}>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4 pb-2 border-b border-slate-100">
              <a href={`#${group.id}`} className="hover:text-slate-600 transition-colors">
                {group.title}
              </a>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.entries.map((e) => {
                const fresh = isNew(e.dateAdded);
                return (
                  <Link
                    key={e.slug}
                    href={`/reference/${e.slug}`}
                    className={`flex flex-col justify-between border border-slate-200 border-l-4 ${group.borderColor} rounded-xl p-5 hover:border-teal-300 hover:bg-slate-50 transition-colors group`}
                  >
                    <div>
                      {/* Title row */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-sm font-bold text-slate-900 font-mono group-hover:text-teal-700 transition-colors">
                          {e.title}
                        </h3>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {fresh && (
                            <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">
                              New
                            </span>
                          )}
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full ${difficultyBadge[e.difficulty]}`}
                          >
                            {e.difficulty}
                          </span>
                        </div>
                      </div>
                      {/* Summary */}
                      <p className="text-slate-500 text-sm leading-relaxed">{e.summary}</p>
                    </div>

                    {/* See also */}
                    {e.seeAlso && e.seeAlso.length > 0 && (
                      <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100">
                        See also:{" "}
                        {e.seeAlso.map((slug, i) => (
                          <span key={slug}>
                            {i > 0 && ", "}
                            <span className="text-teal-600 font-medium">
                              {titleBySlug[slug] ?? slug}
                            </span>
                          </span>
                        ))}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
