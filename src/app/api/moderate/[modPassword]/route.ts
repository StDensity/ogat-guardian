import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import SHA256 from "crypto-js/sha256";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

export async function GET(
  request: Request,
  { params }: { params: { modPassword: string } },
) {
  try {
    const { modPassword } = await params;
    //  Verify password
    const serverHash = process.env.MOD_PASSWORD_HASH!;
    const inputHash = SHA256(modPassword).toString();

    if (inputHash !== serverHash) {
      return NextResponse.json(
        { error: "Invalid mod password" },
        { status: 401 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
