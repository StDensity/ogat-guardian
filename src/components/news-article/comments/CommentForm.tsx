"use client";

import { useState } from "react";
import { useClientHash } from "@/hooks/useClientHash";
import Turnstile from "react-turnstile";

export const CommentForm = ({ articleId }: { articleId: string }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

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
      const response = await fetch(`/api/comments/${articleId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          client_hash: clientHash,
          captchaToken,
        }),
      });

      if (!response.ok) {
        setError(`Submission failed`);
      } else {
        // Reset form on success
        setContent("");
        window.location.reload();
      }
    } catch {
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
      {/* Turnstile */}
      <Turnstile
        sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onVerify={(token) => {
          setCaptchaValid(true);
          setCaptchaToken(token);
        }}
        onError={() => {
          setCaptchaValid(false);
          setCaptchaToken("");
        }}
        onExpire={() => {
          setCaptchaValid(false);
          setCaptchaToken("");
        }}
        className="mx-auto"
      />

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-red-600">{error}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !content.trim() || !captchaValid}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
};
