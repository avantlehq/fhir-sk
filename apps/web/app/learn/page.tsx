import type { Metadata } from "next";
import { LearningCard } from "@/components/LearningCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Learn",
  description: "Roadmap, guides and explanations for HL7 FHIR, profiles, terminology, EHDS and European healthcare interoperability.",
  alternates: { canonical: "https://fhir.sk/learn" },
};

const learningAreas = [
  {
    title: "Roadmap",
    description: "8-phase learning path from FHIR basics to EHDS, terminology, integration architecture and advanced experiments.",
    href: "/learn/roadmap",
    topics: ["Phase 1–8", "Goals", "Deliverables", "Related Lab Modules"],
  },
  {
    title: "FHIR Foundations",
    description: "What is HL7 FHIR, why it was created, core concepts, REST API, Bundles and CapabilityStatement.",
    href: "/learn/fhir-foundations",
    topics: ["Resources", "REST API", "JSON/XML", "Bundles", "CapabilityStatement"],
  },
  {
    title: "Core Resources",
    description: "The clinical resources that form the backbone of any healthcare record.",
    href: "/learn/resources",
    topics: ["Patient", "Observation", "Condition", "Encounter", "MedicationRequest"],
  },
  {
    title: "Profiling and Validation",
    description: "FHIR profiles constrain base resources for specific use cases. Learn to create, publish and validate profiles.",
    href: "/learn/profiling",
    topics: ["StructureDefinition", "Profiles", "Extensions", "Must Support", "ImplementationGuide"],
  },
  {
    title: "Terminology",
    description: "FHIR uses structured vocabularies. Learn to work with CodeSystem, ValueSet, ConceptMap and key terminologies.",
    href: "/learn/terminology",
    topics: ["LOINC", "SNOMED CT", "ICD-10", "ATC", "ValueSet", "ConceptMap"],
  },
  {
    title: "EHDS and EHRxF",
    description: "European Health Data Space and the FHIR-based exchange format. Patient Summary, ePrescription and cross-border data.",
    href: "/learn/ehds",
    topics: ["EHDS", "EHRxF", "Patient Summary", "ePrescription", "Provenance", "Consent"],
  },
];

export default function LearnPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Learn"
          title="Knowledge and Guides"
          description="Roadmap, guides and explanations for HL7 FHIR, profiles, terminology and European healthcare interoperability."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningAreas.map((area) => (
            <LearningCard key={area.title} {...area} />
          ))}
        </div>
      </div>
    </div>
  );
}
