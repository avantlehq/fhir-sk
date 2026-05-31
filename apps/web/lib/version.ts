export const VERSION = "0.2.0";
export const VERSION_NAME = "Lab Architecture";

export const CHANGELOG: { version: string; date: string; changes: string[] }[] = [
  {
    version: "0.2.0",
    date: "2026-06-01",
    changes: [
      "Information architecture refactor: Lab / Learn / About navigation",
      "New /lab index with 6 module cards (Resource Builder, Validator, Mock Server, Synthetic Data, Terminology Explorer, Profile Explorer)",
      "New /learn index with 5 learning path cards",
      "Roadmap moved to /learn/roadmap (redirect from /roadmap)",
      "FHIR Foundations moved to /learn/fhir-foundations (redirect from /fhir)",
      "New stub pages: /learn/resources, /learn/profiling, /learn/terminology, /learn/ehds",
      "New lab stub pages for all 6 modules",
      "Reusable components: StatusBadge, ModuleCard, LearningCard, SectionHeader",
      "Homepage refactored: hero + 2-area overview + lab module preview + disclaimer",
      "Sitemap updated with all new routes",
    ],
  },
  {
    version: "0.1.0",
    date: "2026-06-01",
    changes: [
      "Initial project setup",
      "Web: homepage, /fhir, /roadmap, /about, /disclaimer",
      "HAPI FHIR R4 Docker Compose configuration",
      "Synthetic FHIR R4 examples: Patient, Observation, Bundle",
      "Postman collection: Patient CRUD, Bundles",
      "Phase 1 learning notes",
    ],
  },
];
