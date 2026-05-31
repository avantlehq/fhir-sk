import Link from "next/link";
import { navLinks } from "@/lib/site";
import { VERSION } from "@/lib/version";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-white font-bold font-mono text-lg">
              FHIR.sk
            </span>
            <p className="mt-2 text-sm leading-relaxed">
              FHIR Interoperability Lab. Testing environment for HL7 FHIR R4,
              synthetic healthcare data and EHDS concepts.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Important</p>
            <p className="text-sm leading-relaxed">
              This is a personal learning project. Not affiliated with NCZI, HL7
              Slovakia, or any healthcare institution. Uses synthetic data only.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} FHIR.sk — Personal learning project{" "}
            <span className="text-slate-600">v{VERSION}</span>
          </p>
          <p className="text-xs">No real patient data. Synthetic data only.</p>
        </div>
      </div>
    </footer>
  );
}
