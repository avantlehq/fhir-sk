import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const topicId = process.env.RESEND_TOPIC_ID!;
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const { error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    topics: [{ id: topicId, subscription: "opt_in" }],
  });

  if (error) {
    return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
