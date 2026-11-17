import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["firstName", "email", "phone"];
    for (const key of required) if (!body?.[key]) return NextResponse.json({ ok:false, error:`Missing ${key}` }, { status:400 });

    const webhook = process.env.CRM_WEBHOOK_URL;
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, source: "Mastery Nexus website", submittedAt: new Date().toISOString() })
      });
      if (!response.ok) return NextResponse.json({ ok:false, error:"CRM webhook failed" }, { status:502 });
    } else {
      console.log("Mastery Nexus lead (preview mode):", { ...body, submittedAt: new Date().toISOString() });
    }

    return NextResponse.json({ ok:true });
  } catch {
    return NextResponse.json({ ok:false, error:"Invalid request" }, { status:400 });
  }
}
