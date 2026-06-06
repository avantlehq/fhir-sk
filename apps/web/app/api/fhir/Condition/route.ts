import { NextResponse } from "next/server";
import { CONDITION, searchsetBundle } from "@/lib/fhir-mock";

export async function GET() {
  return NextResponse.json(searchsetBundle([CONDITION], "Condition"), {
    headers: { "Content-Type": "application/fhir+json" },
  });
}
