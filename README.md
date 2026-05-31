# FHIR.sk — FHIR Interoperability Lab

Testing environment for HL7 FHIR R4, synthetic healthcare data and EHDS concepts.

**Not affiliated with NCZI, HL7 Slovakia, Ministry of Health, or any healthcare institution.**
**Uses synthetic data only. No real patient data.**

## Structure

```
/
├── apps/web/        ← Next.js website
├── infra/hapi/      ← HAPI FHIR Docker Compose
├── examples/        ← Synthetic FHIR R4 resources
├── postman/         ← Postman collections
└── docs/            ← Architecture notes
```

## Quick Start

### Web
```bash
cd apps/web
npm install
npm run dev
```

### HAPI FHIR Server (local)
```bash
cd infra/hapi
docker compose up -d
# Server available at http://localhost:8080/fhir
```

## Phase 1 Status: In Progress
