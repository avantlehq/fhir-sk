import { NextResponse } from "next/server";
import { IPS_BUNDLE } from "@/lib/fhir-mock";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (id !== IPS_BUNDLE.id) {
    return NextResponse.json(
      { resourceType: "OperationOutcome", issue: [{ severity: "error", code: "not-found", diagnostics: `Bundle/${id} not found` }] },
      { status: 404, headers: { "Content-Type": "application/fhir+json" } }
    );
  }
  return NextResponse.json(IPS_BUNDLE, {
    headers: { "Content-Type": "application/fhir+json" },
  });
}
