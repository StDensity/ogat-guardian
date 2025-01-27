"use client";

import supabase from "@/app/lib/supabase";
import { formatDateTime } from "@/app/lib/utils";
import { Comment } from "@/types/database";
import { useEffect, useState } from "react";

interface CommentsViewProps {
  articleId: string;
}

const CommentsView = (props: CommentsViewProps) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("article_id", props.articleId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setComments(data || []);
      }
    };

    fetchComments();
  }, [props.articleId]);
  console.log(comments, "comments");

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="border-b border-gray-200 py-4">
            <div className="mb-2 flex items-center justify-between">
              {/* <span className="font-poppins font-semibold text-guardianBlue">
                {comment.username}
              </span> */}
              <span className="font-open-sans text-sm text-gray-500">
                {formatDateTime(comment.created_at)}
              </span>
            </div>
            <p className="font-noto_serif text-gray-700">{comment.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsView;
