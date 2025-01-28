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
  } catch {
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
    const { content, client_hash, captchaToken } = await request.json();

    if (!content || !client_hash) {
      return NextResponse.json(
        { error: "content, clientHash and captcha token are required" },
        { status: 400 },
      );
    }

    // Verifying captcha validity
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: captchaToken,
        }),
      },
    );

    const data = await res.json();

    if (!data.success) {
      throw new Error("Captcha Verification failed");
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
  } catch {
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
  const { articleId: commentId } = params;

  try {
    if (!commentId) {
      return NextResponse.json(
        { error: "Comment id is required" },
        { status: 400 },
      );
    }

    const { error } = await supabase
    .from('comments') // Replace with your table name
    .update({ is_hidden: true }) // Set is_hidden to true
    .eq('id', commentId); // Match the commentid", comment);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Comment hidden successfully" });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
