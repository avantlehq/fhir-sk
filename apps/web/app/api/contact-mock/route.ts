import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, usecase } = await req.json();

  if (!name || !email || !email.includes("@") || !usecase) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "fhir.sk <noreply@fhir.sk>",
    to: "rastislav.mitasik@gmail.com",
    subject: "Mock Server access request — fhir.sk",
    text: `New Mock Server access request\n\nName: ${name}\nEmail: ${email}\n\nUse case:\n${usecase}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
