"use client";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-bold text-slate-900 font-mono">
              FHIR.sk
            </span>
            <span className="hidden sm:inline-block text-xs font-semibold bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
              Phase 1
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://github.com/avantlehq/fhir-sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:border-teal-600 hover:text-teal-700 transition-colors"
            >
              GitHub
            </Link>
          </div>
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-slate-700 hover:text-teal-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://github.com/avantlehq/fhir-sk"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-sm font-semibold text-slate-600"
              onClick={() => setOpen(false)}
            >
              GitHub ↗
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
