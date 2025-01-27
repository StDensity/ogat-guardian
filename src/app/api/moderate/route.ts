import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import SHA256 from "crypto-js/sha256";

export async function GET(request: Request) {
  try {
    const { commentId, password } = await request.json();

    // Verify password
    const serverHash = process.env.MOD_PASSWORD_HASH!;
    const inputHash = SHA256(password).toString();

    if (inputHash !== serverHash) {
      return NextResponse.json(
        { error: "Invalid mod password" },
        { status: 401 },
      );
    }

    // Update comment
    const { error } = await supabase
      .from("comments")
      .update({ is_hidden: true })
      .eq("id", commentId);

    if (error) {
      return NextResponse.json(
        { error: "Database error", details: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 },
    );
  }
}
