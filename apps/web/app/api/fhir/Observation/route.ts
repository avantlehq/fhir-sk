import { NextResponse } from "next/server";
import { OBS_GLUCOSE, OBS_BLOOD_PRESSURE, OBS_WEIGHT, searchsetBundle } from "@/lib/fhir-mock";

export async function GET() {
  return NextResponse.json(
    searchsetBundle([OBS_GLUCOSE, OBS_BLOOD_PRESSURE, OBS_WEIGHT], "Observation"),
    { headers: { "Content-Type": "application/fhir+json" } }
  );
}
