import Link from "next/link";
import { VERSION } from "@/lib/version";

const navCol = [
  { href: "/lab",   label: "Lab"   },
  { href: "/learn", label: "Learn" },
  { href: "/about", label: "About" },
];

const connectCol = [
  { href: "/newsletter", label: "Newsletter" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/copyright",  label: "Copyright" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-white font-bold font-mono text-lg">FHIR.sk</span>
            <p className="mt-3 text-sm leading-relaxed">
              FHIR Interoperability Lab focused on HL7 FHIR, healthcare
              interoperability, and EHDS. Built to explore standards and share
              practical knowledge through hands-on work.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Explore</p>
            <ul className="space-y-2">
              {navCol.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Connect</p>
            <ul className="space-y-2">
              {connectCol.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} FHIR.sk{" "}
            <span className="text-slate-600">v{VERSION}</span>
          </p>
          <p className="text-xs">
            No real patient data. Synthetic data only.{" "}
            <Link href="/copyright" className="hover:text-slate-300 transition-colors">
              Third-party terminology: SNOMED CT, LOINC, ICD-10, ATC.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
