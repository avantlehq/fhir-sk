# FHIR.sk — Vision

## What is FHIR.sk

FHIR.sk is an independent interoperability lab focused on healthcare data exchange, standards, terminologies, validation, conformance, analytics and secondary use.

Primary objective: become a practical expert in HL7 FHIR, healthcare interoperability and EHDS through hands-on implementation.

## Primary Positioning

**FHIR Interoperability Lab**

How interoperable health data is exchanged, validated, transformed and reused.

## Secondary Positioning

Healthcare interoperability, FHIR APIs, synthetic health data, terminologies, EHDS concepts and health data analytics.

## Core Narrative

FHIR is not the end goal. FHIR is one layer of a larger interoperability ecosystem.

```
FHIR Resource
↓
FHIR Server
↓
Database
↓
Analytics
↓
Secondary Use
↓
EHDS
↓
AI
```

Most FHIR tutorials stop at `GET /Patient/123`. FHIR.sk continues further — demonstrating how interoperable data creates value through analytics, secondary use and AI-ready structured health data.

Interoperability requires multiple layers working together:

- Data Standards
- Terminologies
- Validation
- Conformance
- Governance
- Analytics
- Secondary Use
- AI

## What FHIR.sk IS

- FHIR Interoperability Lab
- Personal learning and experimentation environment
- Practical knowledge platform (guides, examples, how-to)
- Synthetic healthcare dataset platform
- EHDS and EHRxF concept exploration environment
- Reference knowledge base for healthcare interoperability

## What FHIR.sk IS NOT

- Production healthcare system
- EHR or hospital information system
- National healthcare platform
- Affiliated with NCZI, HL7 Slovakia, Ministry of Health, or any institution
- Course platform or certification platform
- Generic learning portal or documentation mirror
- Job board, marketplace, forum, or social network
- Consulting website
- Generic BI or Power BI training

## Topics in Scope

- HL7 FHIR (R4 primary)
- Healthcare interoperability
- Synthetic health data
- Terminologies (SNOMED CT, LOINC, ICD-10, ICD-11)
- EHDS and EHRxF
- Validation and conformance
- Governance (consent, provenance, audit)
- Health data analytics
- Secondary use
- AI over structured health data

## Topics Out of Scope

- Medical device standards
- Broad digital health not related to interoperability
- Generic healthcare IT content
- Real patient data (never, under any circumstances)

## Technical Direction

Primary reference stack (open source, reproducible, low cost):

```
FHIR Resource → HAPI FHIR → Docker → PostgreSQL
```

Cloud direction (Azure preferred for Power BI and enterprise reporting ecosystem):

```
FHIR → HAPI FHIR → Container → Azure → PostgreSQL → Power BI
```

## Navigation Principles

Keep intentionally simple. Nav reflects actual structure, not aspirations.

Target navigation: `Lab | Learn | Reference | About`

Do not add: Contact, Academy, Marketplace, Jobs, Certifications, Forum, Community, Roadmap (Roadmap lives under Learn).

## Content Principles

1. Synthetic data only. Never use real patient data.
2. FHIR R4 first.
3. English content. Slovak i18n planned for later.
4. Architecture before coding — explain WHY before HOW.
5. AI features come only after Phase 5+.
6. Analytics must remain a consequence of interoperability, not a standalone BI module.
