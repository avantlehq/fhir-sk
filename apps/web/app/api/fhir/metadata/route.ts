import { NextResponse } from "next/server";
import { CAPABILITY_STATEMENT } from "@/lib/fhir-mock";

export async function GET() {
  return NextResponse.json(CAPABILITY_STATEMENT, {
    headers: { "Content-Type": "application/fhir+json" },
  });
}
