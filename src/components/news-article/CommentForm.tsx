"use client";

import { useState } from "react";
import supabase from "@/app/lib/supabase";
import { getClientHash } from "@/app/lib/utils";
import { useClientHash } from "@/hooks/useClientHash";

export const CommentForm = ({ articleId }: { articleId: string }) => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateInputs = () => {
    if (!content.trim()) {
      setError("Field is required");
      return false;
    }
    if (content.trim().length < 5 || content.trim().length > 500) {
      setError("Comment must be 5-500 characters");
      return false;
    }

    // No error
    setError("");
    return true;
  };
  const clientHash = useClientHash();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("comments").insert({
        article_id: articleId,
        content: content.trim(),
        client_hash: clientHash,
      });

      if (error) {
        if (error.code === "23514") {
          setError("Invalid input format - please check lengths");
        } else {
          setError(`Submission failed: ${error.message}`);
        }
      } else {
        // Reset form on success
        setUsername("");
        setContent("");
        window.location.reload();
      }
    } catch (err) {
      setError("Network error - please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <textarea
            placeholder="Write your comment (5-500 characters)"
            value={content}
            onChange={(e) => setContent(e.target.value.slice(0, 500))}
            className="h-32 w-full resize-none rounded-lg border p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
          <span className="absolute bottom-3 right-3 text-sm text-gray-400">
            {content.length}/500
          </span>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-red-600">{error}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !content.trim()}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
};
