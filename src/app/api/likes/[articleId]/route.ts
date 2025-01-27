import { createClient } from "@supabase/supabase-js";
import { count } from "console";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(
  request: Request,
  { params }: { params: { articleId: string } },
) {
  const { articleId } = await params;

  if (!articleId) {
    return NextResponse.json(
      { error: "articleId is required" },
      { status: 400 },
    );
  }

  try {
    const { count, data, error } = await supabase
      .from("likes")
      .select("*", { count: "exact" })
      .eq("article_id", articleId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ count, data });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: { articleId: string } },
) {
  const { articleId } = await params;

  if (!articleId) {
    return NextResponse.json(
      { error: "articleId is required" },
      { status: 400 },
    );
  }

  try {
    // Parse the request body
    const { client_hash } = await request.json();

    // Validate required fields
    if (!client_hash) {
      return NextResponse.json(
        { error: "client_hash is required" },
        { status: 400 },
      );
    }

    // Insert the new like into the `likes` table
    const { data, error } = await supabase
      .from("likes")
      .insert([
        {
          article_id: articleId,
          client_hash,
        },
      ])
      .select(); // Return the inserted row

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Return the inserted like data
    return NextResponse.json({ data }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { articleId: string } },
) {
  const { articleId } = await params;

  if (!articleId) {
    return NextResponse.json(
      { error: "articleId is required" },
      { status: 400 },
    );
  }

  try {
    // Parse the request body
    const { client_hash } = await request.json();

    // Validate required fields
    if (!client_hash) {
      return NextResponse.json(
        { error: "client_hash is required" },
        { status: 400 },
      );
    }

    // Insert the new like into the `likes` table
    const { data, error } = await supabase
      .from("likes")
      .delete()
      .eq("article_id", articleId)
      .eq("client_hash", client_hash)
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Return the inserted like data
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
