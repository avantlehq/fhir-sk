export const VERSION = "0.1.0";
export const VERSION_NAME = "Foundation";

export const CHANGELOG: { version: string; date: string; changes: string[] }[] = [
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
