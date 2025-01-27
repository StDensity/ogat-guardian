import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { token } = await request.json();
  // const origin = request.headers.get("origin");
  //   if (!origin?.includes("your-domain.com")) {
  //     return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  //   }
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      },
    );

    const data = await res.json();
    if (!data.success) throw new Error("Verification failed");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "CAPTCHA verification failed" },
      { status: 400 },
    );
  }
}



