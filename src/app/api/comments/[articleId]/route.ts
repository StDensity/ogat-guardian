// app/api/comments/[articleId]/route.ts
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(
  request: Request,
  { params }: { params: { articleId: string } },
) {
  const { articleId } = params;

  if (!articleId) {
    return NextResponse.json(
      { error: "articleId is required" },
      { status: 400 },
    );
  }

  try {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("article_id", articleId)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}


// Adding comments

export async function POST(
  request: Request,
  { params }: { params: { articleId: string } },
) {
  const { articleId } = params;

  if (!articleId) {
    return NextResponse.json(
      { error: "articleId is required" },
      { status: 400 },
    );
  }

  try {
    // Parse the request body
    const { content, client_hash } = await request.json();

    if (!content || !client_hash) {
      return NextResponse.json(
        { error: "content and clientHash are required" },
        { status: 400 },
      );
    }

    // Insert the new comment into the database
    const { error } = await supabase.from("comments").insert({
      article_id: articleId,
      content: content.trim(),
      client_hash: client_hash,

    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Return a success response
    return NextResponse.json(
      { message: "Comment added successfully" },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
