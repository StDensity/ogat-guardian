"use client";

import { useEffect, useState } from "react";
import { useClientHash } from "@/hooks/useClientHash";
import { Heart } from "lucide-react";

import { Like } from "@/types/database";

export default function LikeButton({ articleId }: { articleId: string }) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const clientHash = useClientHash();

  useEffect(() => {
    const checkLikes = async () => {
      // Get like count and data
      const response = await fetch(`/api/likes/${articleId}`);

      if (!response) {
        setLikes(0);
        return;
      }

      const { count, data } = await response.json();
      setLikes(count);

      // Checks if client has already liked it
      if (clientHash) {
        setHasLiked(data.some((item: Like) => item.client_hash === clientHash));
      }
    };

    checkLikes();
  }, [articleId, clientHash]);

  const handleLike = async () => {
    // Return if unable to generate client hash
    if (!clientHash) return;
    // If already liked removing like
    else if (hasLiked) {
      const response = await fetch("/api/likes/${articleId}`", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ client_hash: clientHash }),
      });
      if (!response.ok) return;
      setLikes((prev) => prev - 1);
      setHasLiked(false);
      return;
    }

    // Adding new like
    const response = await fetch("/api/likes/${articleId}`", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ client_hash: clientHash }),
    });
    if (!response.ok) return;
    setHasLiked(true);
    setLikes((prev) => prev + 1);
    return;
  };

  return (
    <div className="flex gap-2" onClick={handleLike}>
      <Heart className={`${hasLiked && "fill-red-400"} cursor-pointer`} />
      <div className="text-gray-600">{likes}</div>
    </div>
  );
}
