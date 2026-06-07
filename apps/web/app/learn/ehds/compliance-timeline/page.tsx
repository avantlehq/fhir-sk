import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/ArticleNav";

export const metadata: Metadata = {
  title: "EHDS Compliance Timeline for Slovak Healthcare — Learn — FHIR.sk",
  description: "Legislative obligations driving FHIR adoption in Slovakia: EHDS 2025/327 Phase 1 (2027) and Phase 2 (2029), GDPR health data requirements, and what each mandate means technically.",
};

export default function ComplianceTimelinePage() {
  return (
    <article className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/learn/ehds" className="text-sm text-slate-500 hover:text-teal-600 transition-colors mb-6 inline-block">← EHDS and EHRxF</Link>
        <span className="inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-widest mb-4">Track 4 · 12 min</span>
        <h1 className="text-3xl font-bold text-slate-900 mb-6">EHDS Compliance Timeline for Slovak Healthcare</h1>

        <p className="text-slate-600 leading-relaxed mb-6">
          FHIR adoption in Slovakia is not optional — it is driven by specific pieces of legislation with hard deadlines. This article maps each legislative obligation to the concrete FHIR work it requires and the date by which it must be in place. It is written for CTOs, IT architects, and decision-makers at Slovak healthcare organisations, not for legal counsel.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Not legal advice.</strong> This is a technical interpretation of published EU and Slovak legislation for the purpose of planning FHIR implementation work. Consult legal counsel for compliance assessments specific to your organisation.
          </p>
        </div>

        {/* Overview table */}
        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Overview</h2>
        <div className="overflow-x-auto mb-10">
          <table className="text-sm w-full border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-50 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">
                <th className="px-4 py-3 border-b border-slate-200">Legislation</th>
                <th className="px-4 py-3 border-b border-slate-200">Deadline</th>
                <th className="px-4 py-3 border-b border-slate-200">Core requirement</th>
                <th className="px-4 py-3 border-b border-slate-200">Primary FHIR work</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="px-4 py-3 font-semibold">GDPR 2016/679</td>
                <td className="px-4 py-3"><span className="text-xs font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">In force</span></td>
                <td className="px-4 py-3">Health data as special category — consent, audit, erasure</td>
                <td className="px-4 py-3 text-slate-500">Consent, AuditEvent, Provenance</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">EHDS 2025/327 — Phase 1</td>
                <td className="px-4 py-3"><span className="text-xs font-bold bg-teal-600 text-white px-2 py-0.5 rounded">2027</span></td>
                <td className="px-4 py-3">Expose Patient Summary, Lab results, ePrescription, Discharge report as FHIR</td>
                <td className="px-4 py-3 text-slate-500">IPS Bundle, DiagnosticReport, MedicationRequest, Composition</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">EHDS 2025/327 — Phase 2</td>
                <td className="px-4 py-3"><span className="text-xs font-bold bg-slate-400 text-white px-2 py-0.5 rounded">2029</span></td>
                <td className="px-4 py-3">Medical imaging, genomics, rare disease data</td>
                <td className="px-4 py-3 text-slate-500">ImagingStudy, DiagnosticReport (imaging), Observation (genomic)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Zákon č. 153/2013 Z. z.</td>
                <td className="px-4 py-3"><span className="text-xs font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">In force</span></td>
                <td className="px-4 py-3">Povinné pripojenie PZS k NZIS / eZdraviu</td>
                <td className="px-4 py-3 text-slate-500">Závisí od implementácie NCZI</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GDPR */}
        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">GDPR — zdravotné dáta ako osobitná kategória</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          GDPR (Nariadenie 2016/679) platí od mája 2018. Zdravotné dáta sú podľa <strong>článku 9</strong> osobitnou kategóriou osobných údajov — ich spracovanie je zakázané bez explicitného právneho základu. Pre väčšinu PZS je právnym základom buď explicitný súhlas pacienta, alebo spracovanie v rámci zdravotnej starostlivosti (čl. 9 ods. 2 písm. h).
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Ďalšie relevantné ustanovenia pre zdravotné IT systémy:
        </p>

        <div className="border border-slate-200 rounded-xl overflow-hidden mb-8">
          <table className="text-sm w-full">
            <thead>
              <tr className="bg-slate-50 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">
                <th className="px-4 py-3 border-b border-slate-200">Článok GDPR</th>
                <th className="px-4 py-3 border-b border-slate-200">Požiadavka</th>
                <th className="px-4 py-3 border-b border-slate-200">FHIR implementácia</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Čl. 9</td>
                <td className="px-4 py-3">Osobitná kategória dát — zdravotné záznamy vyžadujú právny základ</td>
                <td className="px-4 py-3"><code className="text-xs bg-slate-100 px-1 rounded">Consent</code> resource — záznam právneho základu a rozsahu</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Čl. 17</td>
                <td className="px-4 py-3">Právo na výmaz — &quot;právo byť zabudnutý&quot;</td>
                <td className="px-4 py-3">Logické mazanie záznamov + <code className="text-xs bg-slate-100 px-1 rounded">AuditEvent</code> pre výmaz</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Čl. 20</td>
                <td className="px-4 py-3">Prenosnosť dát — pacient má právo dostať dáta v štruktúrovanom formáte</td>
                <td className="px-4 py-3">FHIR Bulk Data <code className="text-xs bg-slate-100 px-1 rounded">$export</code> — NDJSON výstup</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Čl. 25</td>
                <td className="px-4 py-3">Privacy by Design and by Default</td>
                <td className="px-4 py-3">Minimalizácia dát v FHIR profiloch, pseudonymizácia identifikátorov</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Čl. 30</td>
                <td className="px-4 py-3">Záznamy o spracovateľských činnostiach</td>
                <td className="px-4 py-3"><code className="text-xs bg-slate-100 px-1 rounded">AuditEvent</code> + <code className="text-xs bg-slate-100 px-1 rounded">Provenance</code> — audit trail prístupu</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 leading-relaxed mb-8">
          FHIR poskytuje natívne zdroje pre všetky tieto požiadavky — <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">Consent</code>, <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">AuditEvent</code> a <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">Provenance</code> nie sú voliteľné doplnky, ale stavebné kamene GDPR-compliant architektúry. Systém ktorý zaznamenáva zdravotné dáta bez audit trail neobstojí pri GDPR kontrole.
        </p>

        {/* EHDS Phase 1 */}
        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">EHDS Nariadenie 2025/327 — Phase 1 (2027)</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Nariadenie bolo prijaté v marci 2025. Phase 1 deadlines sú pre členské štáty záväzné od <strong>marca 2027</strong>. Požiadavka nie je adresovaná priamo na PZS — je adresovaná na členský štát, teda na Slovensku na NCZI ako prevádzkovateľa NCPeH (National Contact Point for eHealth). Napriek tomu každý PZS, ktorý má povinnosť poskytovať dáta do eZdravia, bude nepriamo dotknutý.
        </p>

        <div className="border border-slate-200 rounded-xl overflow-hidden mb-6">
          <div className="bg-teal-600 px-4 py-2">
            <span className="text-xs font-bold text-white uppercase tracking-wide">Phase 1 — Povinné datasety od 2027</span>
          </div>
          <table className="text-sm w-full">
            <thead>
              <tr className="bg-slate-50 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide border-b border-slate-200">
                <th className="px-4 py-3">Dataset</th>
                <th className="px-4 py-3">FHIR resources</th>
                <th className="px-4 py-3">Poznámka</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Patient Summary</td>
                <td className="px-4 py-3"><code className="text-xs bg-slate-100 px-1 rounded">Bundle</code> (document), <code className="text-xs bg-slate-100 px-1 rounded">Composition</code>, <code className="text-xs bg-slate-100 px-1 rounded">Patient</code>, <code className="text-xs bg-slate-100 px-1 rounded">Condition</code>, <code className="text-xs bg-slate-100 px-1 rounded">AllergyIntolerance</code>, <code className="text-xs bg-slate-100 px-1 rounded">MedicationRequest</code></td>
                <td className="px-4 py-3">Postavené na IPS — International Patient Summary (HL7 IG)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Laboratórne výsledky</td>
                <td className="px-4 py-3"><code className="text-xs bg-slate-100 px-1 rounded">DiagnosticReport</code>, <code className="text-xs bg-slate-100 px-1 rounded">Observation</code>, <code className="text-xs bg-slate-100 px-1 rounded">ServiceRequest</code></td>
                <td className="px-4 py-3">Priame prepojenie na eZdravie eLab v3 — základ Phase 8 mapovania</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">ePrescription</td>
                <td className="px-4 py-3"><code className="text-xs bg-slate-100 px-1 rounded">MedicationRequest</code>, <code className="text-xs bg-slate-100 px-1 rounded">Patient</code>, <code className="text-xs bg-slate-100 px-1 rounded">Practitioner</code>, <code className="text-xs bg-slate-100 px-1 rounded">Organization</code></td>
                <td className="px-4 py-3">eRecept modul eZdravia — samostatná oblasť mapovania</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Prepúšťacia správa</td>
                <td className="px-4 py-3"><code className="text-xs bg-slate-100 px-1 rounded">Bundle</code> (document), <code className="text-xs bg-slate-100 px-1 rounded">Composition</code>, <code className="text-xs bg-slate-100 px-1 rounded">Encounter</code>, <code className="text-xs bg-slate-100 px-1 rounded">Condition</code>, <code className="text-xs bg-slate-100 px-1 rounded">Procedure</code></td>
                <td className="px-4 py-3">Vzor podobný eVyšetreniu — Phase 7–8 analýza</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 leading-relaxed mb-8">
          Pre každý dataset platí rovnaký princíp: dáta musia byť dostupné cez FHIR REST API, autentifikovaný cez <strong>SMART on FHIR</strong>, a prístupné pre pacienta aj pre cezhraničnú výmenu cez MyHealth@EU gateway. Samotné formáty sú špecifikované v EHRxF Implementation Guides — niektoré ešte finalizujú, ale základ (IPS, FHIR R4) je stabilný.
        </p>

        {/* EHDS Phase 2 */}
        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">EHDS — Phase 2 (2029)</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Phase 2 rozširuje povinné datasety o klinicky náročnejšie oblasti. Technické špecifikácie ešte nie sú finalizované, ale rozsah je definovaný v nariadení.
        </p>

        <div className="border border-slate-200 rounded-xl overflow-hidden mb-8">
          <div className="bg-slate-500 px-4 py-2">
            <span className="text-xs font-bold text-white uppercase tracking-wide">Phase 2 — Rozšírené datasety od 2029</span>
          </div>
          <table className="text-sm w-full">
            <thead>
              <tr className="bg-slate-50 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide border-b border-slate-200">
                <th className="px-4 py-3">Dataset</th>
                <th className="px-4 py-3">Relevantné FHIR resources</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Medicínske zobrazenia</td>
                <td className="px-4 py-3"><code className="text-xs bg-slate-100 px-1 rounded">ImagingStudy</code>, <code className="text-xs bg-slate-100 px-1 rounded">DiagnosticReport</code> (imaging)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Genomické dáta</td>
                <td className="px-4 py-3"><code className="text-xs bg-slate-100 px-1 rounded">Observation</code> (genomic profile), <code className="text-xs bg-slate-100 px-1 rounded">MolecularSequence</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-800">Vzácne ochorenia</td>
                <td className="px-4 py-3"><code className="text-xs bg-slate-100 px-1 rounded">Condition</code> (Orphanet kódy), <code className="text-xs bg-slate-100 px-1 rounded">EpisodeOfCare</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Slovak national law */}
        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">Slovenská legislatíva — eZdravie a NZIS</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Na národnej úrovni upravuje zdravotné IT primárne <strong>zákon č. 153/2013 Z. z. o národnom zdravotníckom informačnom systéme</strong> (NZIS). Zákon zaväzuje PZS k povinnej elektronickej komunikácii so zdravotníckymi informačnými systémami — v praxi k pripojeniu na eZdravie. Prevádzkovateľom NZIS je NCZI.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Relevantné zákonné normy</h3>
          <div className="space-y-3 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-800">Zákon č. 153/2013 Z. z. — NZIS</span>
              <p className="mt-0.5">Zakladá NZIS, definuje povinnosť PZS poskytovania dát, určuje NCZI ako správcu. Základ pre povinné pripojenie na eZdravie.</p>
            </div>
            <div>
              <span className="font-semibold text-slate-800">Zákon č. 576/2004 Z. z. — zdravotná starostlivosť</span>
              <p className="mt-0.5">Definuje kategórie zdravotnej dokumentácie, povinnosti zdravotníckych pracovníkov, práva pacienta vrátane prístupu k záznamom.</p>
            </div>
            <div>
              <span className="font-semibold text-slate-800">Zákon č. 18/2018 Z. z. — ochrana osobných údajov (implementácia GDPR)</span>
              <p className="mt-0.5">Slovenská implementácia GDPR. Uplatňuje čl. 9 na zdravotné dáta, definuje úlohu Úradu na ochranu osobných údajov SR ako dozorného orgánu.</p>
            </div>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed mb-8">
          Vzťah medzi slovenskou legislatívou a EHDS je hierarchický: EHDS ako nariadenie EÚ má prednosť pred národným zákonom. NCZI bude musieť aktualizovať technické špecifikácie eZdravia tak, aby boli v súlade s EHRxF profilmi. PZS, ktoré dnes posielajú dáta do eZdravia, budú nepriamo vystavené EHDS požiadavkám cez zmeny NCZI integrácií.
        </p>

        {/* What it means technically */}
        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4">Čo to znamená pre technickú implementáciu</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Pre PZS alebo dodávateľa zdravotníckeho softvéru v SR sa legislatívny rámec premietne do konkrétnych technických rozhodnutí. Najdôležitejšie z nich sú architektonické.
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-slate-900 mb-2">1. Architektonická voľba: Facade, Hybrid, alebo FHIR-native</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Organizácia ktorá už prevádzkuje legacy systém (SOAP/XML, HL7 v2, proprietárne API) si musí zvoliť prístup k splneniu EHDS 2027: postaviť FHIR Facade pred existujúci systém, postaviť hybridnú architektúru, alebo prejsť na FHIR-native systém. Toto rozhodnutie určuje celkovú cenu a riziko projektu.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-slate-900 mb-2">2. Terminologické mapovanie</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              EHDS vyžaduje medzinárodné terminológie — LOINC pre laboratórne výsledky, SNOMED CT pre diagnózy, ICD-10 pre EHRxF kódovanie. Slovenské číselníky (eLab, MKCH-10-SK) musia byť namapované na medzinárodné ekvivalenty pomocou ConceptMap. Bez tohto mapovania nie je možná cezhraničná výmena.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-slate-900 mb-2">3. SMART on FHIR autentifikácia</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Všetky EHDS API musia byť chránené cez SMART on FHIR (OAuth2 + OpenID Connect). Systémy bez autentifikačnej vrstvy kompatibilnej so SMART nie sú EHDS-compliant bez ohľadu na kvalitu FHIR profilov.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-slate-900 mb-2">4. Audit trail a súhlas</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              GDPR čl. 30 a EHDS spoločne vyžadujú zaznamenávanie každého prístupu k zdravotným dátam. FHIR <code className="text-xs bg-slate-100 px-1 rounded">AuditEvent</code> a <code className="text-xs bg-slate-100 px-1 rounded">Provenance</code> nie sú odporúčané — sú povinné pre každý systém spracúvajúci zdravotné dáta.
            </p>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
          <h3 className="text-sm font-semibold text-amber-800 mb-3">Kontrolný zoznam — čo mať do 2027</h3>
          <ul className="text-sm text-amber-700 space-y-2">
            {[
              "Patient Summary dostupný ako IPS-kompatibilný FHIR Document Bundle",
              "Laboratórne výsledky dostupné ako FHIR DiagnosticReport + Observation (LOINC kódy)",
              "Prepúšťacie správy dostupné ako FHIR Document Bundle",
              "SMART on FHIR autentifikačná vrstva nasadená",
              "AuditEvent pre každý prístup k zdravotným dátam",
              "ConceptMap: slovenské číselníky → LOINC / SNOMED CT / ICD-10",
              "GDPR Consent resource implementovaný pre spracovanie na základe súhlasu",
              "NCPeH konektor (záväzok NCZI, nie PZS priamo)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="font-mono mt-0.5 flex-shrink-0">[ ]</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-amber-600 mt-3">Kontrolný zoznam pre orientáciu pri plánovaní. Nie je officiálnym compliance auditom.</p>
        </div>

        {/* See also */}
        <div className="border-t border-slate-100 pt-6 flex flex-wrap gap-3 text-sm">
          <span className="text-slate-500">Súvisiace:</span>
          <Link href="/learn/ehds/fhir-and-ehds" className="text-teal-600 hover:underline">FHIR and EHDS</Link>
          <Link href="/learn/ehds/international-patient-summary" className="text-teal-600 hover:underline">International Patient Summary</Link>
          <Link href="/learn/privacy" className="text-teal-600 hover:underline">Data Privacy in FHIR</Link>
          <Link href="/reference/smart-on-fhir" className="text-teal-600 hover:underline">SMART on FHIR</Link>
        </div>
        <ArticleNav />
      </div>
    </article>
  );
}
