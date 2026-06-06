import { NextResponse } from "next/server";
import { PATIENT, searchsetBundle } from "@/lib/fhir-mock";

export async function GET() {
  return NextResponse.json(searchsetBundle([PATIENT], "Patient"), {
    headers: { "Content-Type": "application/fhir+json" },
  });
}

export async function POST() {
  return NextResponse.json(
    { resourceType: "Patient", id: "patient-new-001", meta: { versionId: "1" } },
    {
      status: 201,
      headers: {
        "Content-Type": "application/fhir+json",
        "Location": "/api/fhir/Patient/patient-new-001/_history/1",
      },
    }
  );
}
