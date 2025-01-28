"use client";

import { EllipsisVertical, Trash } from "lucide-react";
import React, { useState } from "react";

interface CommentOptionsProps {
  commentId: string;
  handleDelete(commentId: string): void;
}

const CommentOptions = (props: CommentOptionsProps) => {
  const [isOptionOpened, setIsOptionOpened] = useState(false);
  const toggleOption = () => {
    setIsOptionOpened(!isOptionOpened);
  };

  return (
    <span onClick={toggleOption} className="">
      <EllipsisVertical className="relative hover:text-gray-300" />
      {isOptionOpened && (
        <div className="absolute bg-gray-300">
          <div>
            <Trash
              onClick={() => props.handleDelete(props.commentId)}
              className="hover:text-red-400"
            />
          </div>
        </div>
      )}
    </span>
  );
};

export default CommentOptions;
