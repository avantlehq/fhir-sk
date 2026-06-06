import { NextResponse } from "next/server";
import { PATIENT } from "@/lib/fhir-mock";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id !== PATIENT.id) {
    return NextResponse.json(
      { resourceType: "OperationOutcome", issue: [{ severity: "error", code: "not-found", diagnostics: `Patient/${id} not found` }] },
      { status: 404, headers: { "Content-Type": "application/fhir+json" } }
    );
  }
  return NextResponse.json(PATIENT, {
    headers: { "Content-Type": "application/fhir+json" },
  });
}
