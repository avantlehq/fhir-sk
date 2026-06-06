import { NextResponse } from "next/server";
import { ALLERGY_INTOLERANCE, searchsetBundle } from "@/lib/fhir-mock";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const patient = searchParams.get("patient");

  const results = patient
    ? [ALLERGY_INTOLERANCE].filter((a) =>
        (a.patient as { reference: string }).reference === `Patient/${patient}`
      )
    : [ALLERGY_INTOLERANCE];

  return NextResponse.json(searchsetBundle(results, "AllergyIntolerance"), {
    headers: { "Content-Type": "application/fhir+json" },
  });
}
