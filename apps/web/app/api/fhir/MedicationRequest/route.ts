import { NextResponse } from "next/server";
import { MEDICATION_REQUEST, searchsetBundle } from "@/lib/fhir-mock";

export async function GET() {
  return NextResponse.json(searchsetBundle([MEDICATION_REQUEST], "MedicationRequest"), {
    headers: { "Content-Type": "application/fhir+json" },
  });
}
