# Phase 1 — FHIR Foundations

Last updated: 2026-06-06

---

## Learning Objectives

- Understand what FHIR is and why it was created
- Deploy HAPI FHIR server locally
- Perform CRUD operations on Patient resource
- Understand CapabilityStatement
- Create first FHIR Bundle
- Understand difference between transaction and batch Bundles

---

## Setup — HAPI FHIR Local

**Stack:** `hapiproject/hapi:latest` + `postgres:15-alpine` via Docker Compose

**Known issue:** `hapiproject/hapi:latest` (Spring Boot 3.5.9) bundles a Flyway version
that can't identify PostgreSQL 16.x and 15.18 minor versions.
**Fix:** `spring.flyway.enabled: false` in `infra/hapi/application.yaml` — Hibernate
handles schema via `ddl-auto: update`.

**Start:**
```bash
cd infra/hapi && docker compose up -d
```

**Endpoint:** `http://localhost:8080/fhir`

**Verify:**
```bash
curl -s http://localhost:8080/fhir/metadata | python -c "import sys,json; d=json.load(sys.stdin); print(d.get('fhirVersion'), d.get('status'))"
# → 4.0.1 active
```

---

## CapabilityStatement

```bash
curl -s -H "Accept: application/fhir+json" http://localhost:8080/fhir/metadata
```

- Endpoint: `GET /fhir/metadata`
- Returns a `CapabilityStatement` resource (not a plain JSON object)
- `fhirVersion: 4.0.1` — confirmed R4
- `status: active`
- Describes every supported resource type, interaction (read/write/search/delete), and search parameter

**Why it matters:** In real systems, you read the CapabilityStatement before writing any code
against an unknown FHIR server. It tells you what the server can actually do — not all servers
support all resource types or interactions.

---

## Patient CRUD

All operations tested against `http://localhost:8080/fhir`.

### CREATE — POST

```bash
curl -s -X POST http://localhost:8080/fhir/Patient \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Patient","name":[{"family":"Doe","given":["John"]}],"gender":"male","birthDate":"1980-01-15"}'
```

- HTTP method: `POST`
- URL: `/fhir/Patient` (resource type endpoint)
- Server **ignores** client-provided `id` on POST — assigns its own (`1000`)
- Returns `201 Created` with `meta.versionId: 1`
- To use a client-provided ID, use `PUT` instead

### READ — GET

```bash
curl -s http://localhost:8080/fhir/Patient/1000
```

- URL pattern: `/fhir/[ResourceType]/[id]`
- Returns `200 OK` with full resource JSON
- Returns `404 Not Found` if ID never existed
- Returns `410 Gone` if resource was deleted (important — not 404)

### UPDATE — PUT

```bash
curl -s -X PUT http://localhost:8080/fhir/Patient/1000 \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Patient","id":"1000",...}'
```

- The `id` in the body must match the `id` in the URL
- PUT is a **full replacement** — the entire resource is overwritten
- `meta.versionId` increments: `1 → 2`
- FHIR automatically creates a new version entry in history

### DELETE

```bash
curl -s -X DELETE http://localhost:8080/fhir/Patient/1000
```

- Returns `200 OK` with `OperationOutcome` (SUCCESSFUL_DELETE)
- FHIR DELETE is a **soft delete** — data is not removed from the database
- After delete, GET returns `410 Gone` (not 404)
- History is still accessible: `GET /fhir/Patient/1000/_history`

### HISTORY

```bash
curl -s http://localhost:8080/fhir/Patient/1000/_history
```

- Returns a `Bundle` of type `history`
- Contains all versions of the resource (including deleted state)
- Each entry has `meta.versionId` and `meta.lastUpdated`
- Specific version: `GET /fhir/Patient/1000/_history/1`

**Observed:**
```
total versions: 2
  v1: city=Bratislava, given=['John']
  v2: city=Kosice, given=['John', 'Michael']
```

---

## Transaction Bundle

A Bundle groups multiple resource operations into a single HTTP request.

```bash
curl -s -X POST http://localhost:8080/fhir \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Bundle","type":"transaction","entry":[...]}'
```

**Key points:**

- POST goes to **root endpoint** `/fhir` — not to a specific resource type
- `type: transaction` — atomic: if any entry fails, all entries are rolled back
- `type: batch` — each entry processed independently, partial success possible
- Each entry has `request.method` (POST/PUT/GET/DELETE) and `request.url`

**Internal references with `urn:uuid`:**

```json
{
  "fullUrl": "urn:uuid:patient-bundle-002",
  "resource": {"resourceType": "Patient", ...},
  "request": {"method": "POST", "url": "Patient"}
},
{
  "resource": {
    "resourceType": "Observation",
    "subject": {"reference": "urn:uuid:patient-bundle-002"}
  }
}
```

- `fullUrl: urn:uuid:...` is a **temporary ID** used only within the bundle
- The server resolves it to the real assigned ID after processing
- Result: `Observation.subject.reference = "Patient/1003"` (resolved automatically)

**Conditional creation with `ifNoneExist`:**

```json
"request": {
  "method": "POST",
  "url": "Patient",
  "ifNoneExist": "name=Novak&birthdate=1992-06-15"
}
```

- If a Patient matching the search already exists, skip the create
- Prevents duplicate resources on re-run

**Response:**

Server returns a `transaction-response` Bundle with one entry per input entry:
```
[1] status: 201 Created  location: Patient/1003/_history/1
[2] status: 201 Created  location: Observation/1004/_history/1
```

---

## Review Questions — Answers

**1. What is HL7 FHIR and why was it created?**

FHIR (Fast Healthcare Interoperability Resources) is a standard for exchanging healthcare
information electronically, developed by HL7. It was created to replace older, harder-to-use
standards (HL7 v2, CDA) with a modern REST API approach using JSON/XML. The goal is to make
healthcare data portable and interoperable across different systems and countries.

**2. What is a FHIR Resource?**

The basic unit of FHIR. A Resource is a structured piece of clinical or administrative data
(Patient, Observation, Condition, Encounter, etc.). Every resource has a `resourceType` field,
an `id`, and a `meta` block. Resources are exchanged over HTTP as JSON or XML.

**3. What HTTP methods does FHIR REST API use?**

| HTTP | FHIR operation |
|------|---------------|
| GET | read, search, history |
| POST | create, transaction/batch bundle, search with body |
| PUT | update (full replace) |
| PATCH | partial update |
| DELETE | soft delete |

**4. What is a CapabilityStatement?**

A machine-readable description of what a FHIR server supports. Retrieved via
`GET /fhir/metadata`. Contains: supported FHIR version, resource types, interactions
(read/write/delete/search), search parameters, and extensions. It is the first thing to
read when integrating with an unknown FHIR server.

**5. What is the difference between a transaction Bundle and a batch Bundle?**

- `transaction`: all entries succeed or all fail (atomic). One entry failing causes a full rollback.
- `batch`: each entry processed independently. Some can succeed, others fail. Returns a
  `batch-response` with individual status per entry.

Use transaction when consistency matters (creating a patient + their observations together).
Use batch when entries are independent and partial success is acceptable.

**6. What is a LOINC code? Why is it used in Observation?**

LOINC (Logical Observation Identifiers Names and Codes) is a universal standard for identifying
medical tests, observations and measurements. It ensures that "body weight" means the same thing
in every system. Example: `29463-7` = Body weight, `8310-5` = Body temperature.

In FHIR Observation, the `code` element uses LOINC to specify what was measured. Without a
standard code, two systems cannot automatically understand that they are talking about the
same measurement.

**7. What does CRUD stand for in FHIR context?**

Create (POST), Read (GET), Update (PUT), Delete (DELETE). These map directly to the four basic
FHIR interactions. FHIR adds History (GET `_history`) and Search (GET with query params) on top.

---

## Phase 1 Success Criteria

- [x] HAPI FHIR server running locally via Docker Compose
- [x] CapabilityStatement read — fhirVersion 4.0.1, status active
- [x] Synthetic Patient: CREATE, READ, UPDATE, DELETE confirmed
- [x] Version history verified (versionId increments, soft-delete returns 410)
- [x] Transaction Bundle processed — Patient + Observation, internal urn:uuid resolved
- [x] All 7 review questions answered
- [x] fhir.sk DNS resolves — www.fhir.sk primary, fhir.sk → www redirect (Vercel)
