import { NextResponse } from "next/server";
import { ENCOUNTER, searchsetBundle } from "@/lib/fhir-mock";

export async function GET() {
  return NextResponse.json(searchsetBundle([ENCOUNTER], "Encounter"), {
    headers: { "Content-Type": "application/fhir+json" },
  });
}
