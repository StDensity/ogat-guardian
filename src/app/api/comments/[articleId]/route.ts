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
  const { articleId } = await params;

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
      .eq("is_hidden", false)
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
  const { articleId } = await params;

  if (!articleId) {
    return NextResponse.json(
      { error: "articleId is required" },
      { status: 400 },
    );
  }

  try {
    // Parse the request body
    const { content, client_hash, captchaToken, articleTitle } =
      await request.json();

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

    // Sends message to discord
    try {
      const webhookUrl = process.env.DISCORD_CHANNEL_WEBHOOK!;
      const embed = {
        title: articleTitle,
        url: "https://ogatguardian.vercel.app/article/" + articleId,
        description: `**New comment added**`,
        color: 0x00ff00, // Green color (hexadecimal)
        fields: [
          {
            name: "Comment",
            value: content,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "A #MOGA Initiative by The Guardian News.",
        },
      };

      // Message payload with embed
      const message = {
        embeds: [embed],
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    } catch {}

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
  const { articleId: commentId } = await params;

  const { content, articleId, articleTitle } = await request.json();
  console.log(content, articleId, articleTitle);
  try {
    if (!commentId) {
      return NextResponse.json(
        { error: "Comment id is required" },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from("comments")
      .update({ is_hidden: true })
      .eq("id", commentId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    try {
      console.log("sending messge");
      const webhookUrl = process.env.DISCORD_CHANNEL_WEBHOOK!;
      const embed = {
        title: articleTitle,
        url: "https://ogatguardian.vercel.app/article/" + articleId,
        description: `**Comment removed by a mod**`,
        color: 0x00ff00, // Green color (hexadecimal)
        fields: [
          {
            name: "Comment",
            value: content,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "A #MOGA Initiative by The Guardian News.",
        },
      };
      console.log("sending messge");

      // Message payload with embed
      const message = {
        embeds: [embed],
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      console.log("response: ", content);
    } catch {}

    return NextResponse.json({ message: "Comment hidden successfully" });
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
