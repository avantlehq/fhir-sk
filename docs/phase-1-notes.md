# Phase 1 — FHIR Foundations

## Learning Objectives

- Understand what FHIR is and why it was created
- Deploy HAPI FHIR server locally
- Perform CRUD operations on Patient resource
- Understand CapabilityStatement
- Create first FHIR Bundle
- Understand difference between transaction and batch Bundles

## Key Concepts

### Resource
The basic unit of FHIR. Everything is a Resource. Patient, Observation, Condition, Encounter — all Resources.

### CapabilityStatement
The FHIR server's "menu". GET /metadata returns what the server supports.

### Bundle
A container for multiple Resources. Types: transaction, batch, collection, document.

### transaction vs batch
- transaction: all-or-nothing. If one entry fails, all fail.
- batch: each entry processed independently.

## Review Questions

1. What is HL7 FHIR and why was it created?
2. What is a FHIR Resource?
3. What HTTP methods does FHIR REST API use?
4. What is a CapabilityStatement?
5. What is the difference between a transaction Bundle and a batch Bundle?
6. What is a LOINC code? Why is it used in Observation?
7. What does CRUD stand for in FHIR context?

## Phase 1 Success Criteria

- [ ] HAPI FHIR server running locally via Docker Compose
- [ ] Postman collection — all requests return expected responses
- [ ] Synthetic Patient created, read, updated, deleted
- [ ] Transaction Bundle processed successfully
- [ ] All 7 review questions answered confidently
