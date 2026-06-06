# FHIR.sk — Information Architecture

Last validated: 2026-06-06

---

## Navigation

```
Lab | Learn | Reference | About
```

**Note:** Current implementation uses `Lab | Learn | About` (3 items). `Reference` section planned — do not add to nav until Reference has real content.

### Rules

- Roadmap lives under Learn, not top-level nav
- Do not add: Contact, Academy, Marketplace, Jobs, Certifications, Forum, Community
- Nav reflects actual structure, not aspirations

---

## Site Map

```
fhir.sk/
├── /                                  ← Homepage
├── /lab/                              ← Lab index
│   ├── /lab/mock-server               ← In Progress
│   ├── /lab/validator                 ← Planned
│   ├── /lab/synthetic-data            ← Planned
│   ├── /lab/terminology-explorer      ← Stub (future area)
│   ├── /lab/profile-explorer          ← Stub (future area)
│   └── /lab/resource-builder          ← Stub (future area)
├── /learn/                            ← Learn index
│   ├── /learn/roadmap                 ← 8-phase roadmap
│   ├── /learn/fhir-foundations        ← Full article (live)
│   ├── /learn/resources               ← Stub
│   ├── /learn/profiling               ← Stub
│   ├── /learn/terminology             ← Stub
│   └── /learn/ehds                    ← Stub
├── /reference/                        ← Planned (not yet implemented)
│   ├── /reference/ehds
│   ├── /reference/standards
│   ├── /reference/terminologies
│   ├── /reference/governance
│   ├── /reference/architecture
│   └── /reference/security
├── /about/
├── /disclaimer/
├── /newsletter/
├── /sitemap.xml                       ← Auto-generated
└── /robots.txt                        ← Auto-generated
```

## Redirects (permanent 308)

| From | To |
|------|----|
| `/roadmap` | `/learn/roadmap` |
| `/fhir` | `/learn/fhir-foundations` |

Defined in `apps/web/next.config.mjs`.

---

## Lab

**Purpose:** Practical experimentation and interoperability tooling.

**Rule:** Lab implies interactivity. Do not present stub pages as tools. Stubs must clearly communicate "coming soon" without implying functionality exists.

### Modules

| Module | Status | Purpose |
|--------|--------|---------|
| Mock Server | In Progress | FHIR API testing, resource experimentation |
| Validator | Planned | Resource, profile, bundle validation |
| Synthetic Data | Planned | Synthetic patient generation, test/analytics datasets |
| Terminology Explorer | Future Area | SNOMED CT, LOINC, ValueSet/CodeSystem lookup |
| Profile Explorer | Future Area | StructureDefinition explorer, profile comparison |
| Resource Builder | Future Area | Create/edit FHIR R4 resources |

**Homepage display rule:** Show only 3 current modules (Mock Server, Validator, Synthetic Data). Future areas belong on `/lab`, not on homepage.

---

## Learn

**Purpose:** Practical guides, examples and implementation knowledge.

**Core question:** How do I do this?

Learn is not a course platform. Learn is not an academy.

### Tracks

| Track | Topics |
|-------|--------|
| Track 1 — FHIR Fundamentals | Resources, REST, Search, Bundles, Profiles, HAPI FHIR |
| Track 2 — Health Data Standards | HL7 v2, CDA, FHIR, openEHR, OMOP |
| Track 3 — Terminologies | SNOMED CT, LOINC, ICD-10/11, ValueSet, CodeSystem |
| Track 4 — EHDS and EHRxF | EHDS, EHRxF, IPS, ePrescription, MyHealth@EU |
| Track 5 — Governance and Conformance | Consent, Provenance, Audit, Conformance, IGs |
| Track 6 — Analytics and Secondary Use | FHIR to SQL, OMOP, Power BI, Secondary Use, AI |

---

## Reference

**Purpose:** Reference knowledge base.

**Core question:** What is this?

Not tutorials. Not implementation guides. Not lessons.

**Name rationale:** Called "Reference", not "EHDS Wiki" — covers FHIR, SMART on FHIR, OMOP, MPI and other topics beyond EHDS. "EHDS Wiki" would be misleading.

### Categories

| Category | Topics |
|----------|--------|
| EHDS | EHDS, EHRxF, Patient Summary, ePrescription, MyHealth@EU, Secondary Use |
| Standards | HL7 FHIR, HL7 v2, CDA, openEHR, OMOP |
| Terminologies | SNOMED CT, LOINC, ICD-10, ICD-11, ValueSet, CodeSystem |
| Governance | Clinical Governance, Conformance, Certification, Consent, Provenance, AuditEvent, IG |
| Architecture | Healthcare Interoperability, Syntactic/Semantic Interoperability, MPI, MDM, Terminology Service, API Gateway, Data Quality, Secondary Use |
| Security | SMART on FHIR, OAuth2, OpenID Connect, Access Control, Audit Logging |

**Implementation rule:** Do not create Reference pages until there is real written content. Empty stubs degrade the project's credibility.

---

## Homepage Structure

Max 4 sections in current phase (Phase 1). Expand only when content exists.

| # | Section | Notes |
|---|---------|-------|
| 1 | Hero | Title + subtitle + 2 CTAs |
| 2 | Lab Modules | 3 current modules only, no future areas |
| 3 | Learn Tracks | 6 track cards |
| 4 | Newsletter | Subscription only |

Remove or defer: "What Can You Explore?", "Why Interoperability Matters", "EHDS Wiki" section — add when content exists.

---

## Learn / Reference Separation

| User question | Goes to |
|--------------|---------|
| How do I create a Patient resource? | Learn |
| What is a Patient resource? | Reference |
| How do I use SNOMED CT in FHIR? | Learn |
| What is SNOMED CT? | Reference |
| How do I validate a Bundle? | Learn |
| What is a Bundle? | Reference |

If a topic overlaps, Learn links to the Reference entry for definitions. Reference does not link to Learn how-tos.

---

## Vercel Configuration

- Root directory: `apps/web` (set in Vercel project settings)
- Domain: fhir.sk (DNS: Websupport.sk → ns1/ns2.vercel-dns.com, DNSSEC disabled)
- Preview: fhir-sk.vercel.app
