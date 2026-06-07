export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface ReferenceEntry {
  slug: string;
  title: string;
  summary: string;
  difficulty: Difficulty;
  dateAdded: string;
  seeAlso?: string[];
}

export interface ReferenceGroup {
  id: string;
  title: string;
  borderColor: string;
  entries: ReferenceEntry[];
}

export const referenceGroups: ReferenceGroup[] = [
  {
    id: "core-concepts",
    title: "Core Concepts",
    borderColor: "border-l-teal-500",
    entries: [
      {
        slug: "fhir",
        title: "FHIR",
        summary: "HL7 standard for exchanging healthcare information over REST APIs.",
        difficulty: "Beginner",
        dateAdded: "2026-06-06",
        seeAlso: ["resource", "rest-api"],
      },
      {
        slug: "resource",
        title: "Resource",
        summary: "The fundamental unit of FHIR — a structured JSON document with a defined schema.",
        difficulty: "Beginner",
        dateAdded: "2026-06-06",
        seeAlso: ["fhir", "bundle"],
      },
      {
        slug: "rest-api",
        title: "REST API",
        summary: "The HTTP interface for interacting with FHIR resources using standard verbs and URL patterns.",
        difficulty: "Beginner",
        dateAdded: "2026-06-06",
        seeAlso: ["fhir", "search"],
      },
      {
        slug: "search",
        title: "Search",
        summary: "The FHIR query mechanism for finding resources using URL parameters.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-06",
        seeAlso: ["rest-api", "bundle"],
      },
      {
        slug: "bundle",
        title: "Bundle",
        summary: "A container for multiple FHIR resources — used for transactions, search results, and documents.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-06",
        seeAlso: ["resource", "search"],
      },
      {
        slug: "capability-statement",
        title: "CapabilityStatement",
        summary: "A machine-readable description of what a FHIR server supports.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-07",
        seeAlso: ["rest-api", "profile"],
      },
      {
        slug: "operation-outcome",
        title: "OperationOutcome",
        summary: "The standard FHIR resource for returning errors, warnings, and informational messages.",
        difficulty: "Beginner",
        dateAdded: "2026-06-07",
        seeAlso: ["validation", "rest-api"],
      },
      {
        slug: "fhirpath",
        title: "FHIRPath",
        summary: "A path-based expression language for navigating FHIR resources, used in profiles and search.",
        difficulty: "Advanced",
        dateAdded: "2026-06-07",
        seeAlso: ["profile", "slicing"],
      },
    ],
  },
  {
    id: "clinical-resources",
    title: "Clinical Resources",
    borderColor: "border-l-blue-500",
    entries: [
      {
        slug: "patient",
        title: "Patient",
        summary: "Demographic and administrative information about a person receiving care.",
        difficulty: "Beginner",
        dateAdded: "2026-06-06",
        seeAlso: ["observation", "encounter"],
      },
      {
        slug: "observation",
        title: "Observation",
        summary: "A measurement or assertion about a patient — vital signs, lab results, clinical findings.",
        difficulty: "Beginner",
        dateAdded: "2026-06-06",
        seeAlso: ["patient", "condition"],
      },
      {
        slug: "condition",
        title: "Condition",
        summary: "A clinical finding, diagnosis, or complaint assessed by a clinician.",
        difficulty: "Beginner",
        dateAdded: "2026-06-07",
        seeAlso: ["patient", "encounter"],
      },
      {
        slug: "encounter",
        title: "Encounter",
        summary: "An interaction between a patient and healthcare provider — a visit, admission, or telehealth call.",
        difficulty: "Beginner",
        dateAdded: "2026-06-07",
        seeAlso: ["patient", "condition"],
      },
      {
        slug: "medication-request",
        title: "MedicationRequest",
        summary: "A prescription or order for a medication — drug, dose, route, frequency.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-07",
        seeAlso: ["patient", "encounter"],
      },
    ],
  },
  {
    id: "profiling-conformance",
    title: "Profiling & Conformance",
    borderColor: "border-l-violet-500",
    entries: [
      {
        slug: "profile",
        title: "Profile",
        summary: "A StructureDefinition that constrains a base resource for a specific use case.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-06",
        seeAlso: ["structure-definition", "validation"],
      },
      {
        slug: "structure-definition",
        title: "StructureDefinition",
        summary: "The FHIR resource that defines the structure of other resources, profiles, and extensions.",
        difficulty: "Advanced",
        dateAdded: "2026-06-07",
        seeAlso: ["profile", "extension"],
      },
      {
        slug: "extension",
        title: "Extension",
        summary: "Adds a data element to a resource that is not part of the base FHIR specification.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-07",
        seeAlso: ["structure-definition", "profile"],
      },
      {
        slug: "must-support",
        title: "Must-Support",
        summary: "A profile flag requiring systems to store and return an element if present.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-07",
        seeAlso: ["profile", "implementation-guide"],
      },
      {
        slug: "slicing",
        title: "Slicing",
        summary: "Splits a repeating element into named sub-types with their own cardinality and constraints.",
        difficulty: "Advanced",
        dateAdded: "2026-06-07",
        seeAlso: ["profile", "extension"],
      },
      {
        slug: "implementation-guide",
        title: "Implementation Guide",
        summary: "A publishable specification bundling profiles, value sets, examples, and conformance rules.",
        difficulty: "Advanced",
        dateAdded: "2026-06-07",
        seeAlso: ["profile", "value-set"],
      },
      {
        slug: "validation",
        title: "Validation",
        summary: "Checking that a resource conforms to the FHIR specification or a profile.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-06",
        seeAlso: ["profile", "operation-outcome"],
      },
    ],
  },
  {
    id: "terminology",
    title: "Terminology",
    borderColor: "border-l-amber-500",
    entries: [
      {
        slug: "value-set",
        title: "ValueSet",
        summary: "A curated collection of codes selected from one or more CodeSystems.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-07",
        seeAlso: ["code-system", "profile"],
      },
      {
        slug: "code-system",
        title: "CodeSystem",
        summary: "Defines a set of codes and their meanings — SNOMED CT, LOINC, ICD-10, ATC.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-07",
        seeAlso: ["value-set"],
      },
    ],
  },
  {
    id: "related-standards",
    title: "Related Standards",
    borderColor: "border-l-slate-400",
    entries: [
      {
        slug: "hl7-v2",
        title: "HL7 v2",
        summary: "Pipe-delimited message standard from 1987 — still dominant inside hospitals for ADT and lab results.",
        difficulty: "Beginner",
        dateAdded: "2026-06-07",
        seeAlso: ["cda", "fhir"],
      },
      {
        slug: "cda",
        title: "CDA",
        summary: "HL7 Clinical Document Architecture — XML standard for discharge summaries, referrals, patient summaries.",
        difficulty: "Intermediate",
        dateAdded: "2026-06-07",
        seeAlso: ["hl7-v2", "fhir"],
      },
      {
        slug: "smart-on-fhir",
        title: "SMART on FHIR",
        summary: "OAuth2-based authorization framework for connecting apps to FHIR servers.",
        difficulty: "Advanced",
        dateAdded: "2026-06-07",
        seeAlso: ["capability-statement"],
      },
    ],
  },
];

export const titleBySlug: Record<string, string> = Object.fromEntries(
  referenceGroups.flatMap((g) => g.entries.map((e) => [e.slug, e.title]))
);

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

export function isNew(dateAdded: string): boolean {
  return Date.now() - new Date(dateAdded).getTime() < THIRTY_DAYS_MS;
}
