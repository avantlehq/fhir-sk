# HAPI FHIR — Local Setup

FHIR R4 server using HAPI FHIR with PostgreSQL.

## Prerequisites

- Docker Desktop installed and running
- 2GB+ free RAM

## Start

```bash
docker compose up -d
```

FHIR server: http://localhost:8080/fhir
FHIR metadata: http://localhost:8080/fhir/metadata

## Stop

```bash
docker compose down
```

## Reset (delete all data)

```bash
docker compose down -v
docker compose up -d
```

## First Steps

1. Check server is running: GET http://localhost:8080/fhir/metadata
2. Import Postman collection from /postman/
3. Create your first Patient resource
