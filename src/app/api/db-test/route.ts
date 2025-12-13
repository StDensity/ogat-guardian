// app/api/db-test/route.ts
import { NextResponse } from "next/server";
import { sql } from "@/app/lib/db";

export async function GET() {
  const result = await sql`SELECT 1 AS ok`;
  return NextResponse.json(result);
}
