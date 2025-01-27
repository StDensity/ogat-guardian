"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useClientHash } from "@/hooks/useClientHash";
import { FileHeart, Heart, HeartPulse } from "lucide-react";

export default function LikeButton({ articleId }: { articleId: string }) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const clientHash = useClientHash();

  useEffect(() => {
    const checkLikes = async () => {
      const { count } = await supabase
        .from("likes")
        .select("*", { count: "exact" })
        .eq("article_id", articleId);

      setLikes(count || 0);

      if (clientHash) {
        const { data } = await supabase
          .from("likes")
          .select()
          .eq("article_id", articleId)
          .eq("client_hash", clientHash);

        setHasLiked(!!data?.length);
      }
    };

    checkLikes();
  }, [articleId, clientHash]);

  const handleLike = async () => {
    if (!clientHash) return;
    else if (hasLiked) {
      const { error } = await supabase
        .from("likes")
        .delete()
        .eq("article_id", articleId)
        .eq("client_hash", clientHash)
        console.log(error, "dellete")

      if (!error) {
        setLikes((prev) => prev - 1);
        setHasLiked(false);
      }
    } else {
      const { error } = await supabase.from("likes").insert({
        article_id: articleId,
        client_hash: clientHash,
      });

      if (!error) {
        setLikes((prev) => prev + 1);
        setHasLiked(true);
      }
    }
  };

  return (
    <div className="flex gap-2" onClick={handleLike}>
      {/* <button
        onClick={handleLike}
        className={`px-4 py-2 ${hasLiked ? "bg-gray-400" : "bg-red-500"} text-white`}
        disabled={hasLiked}
      >
        👍 {likes}
      </button> */}
      <Heart className={`${hasLiked && "fill-red-400"}`} />
      <div className="text-gray-600">{likes}</div>
    </div>
  );
}
