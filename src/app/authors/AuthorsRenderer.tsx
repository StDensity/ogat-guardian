import { getInitials, getTotalArticleCount } from "@/app/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllNormalNews, getAllSportNews } from "@/app/lib/dataFetcher";
import { TypeAuthor } from "@/types/contentful/types";
import Link from "next/link";
import AuthorCard from "@/components/author/AuthorCard";

interface AuthorsRendererProps {
  authorsData: TypeAuthor<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[];
}

const AuthorsRenderer = async (props: AuthorsRendererProps) => {
  const normalNews = await getAllNormalNews();
  const sportsNews = await getAllSportNews();
  const authorNormalNewsArticleCount = getTotalArticleCount(normalNews);
  const authorSportsNewsArticleCount = getTotalArticleCount(sportsNews);
  props.authorsData.sort((a, b) => a.fields.id - b.fields.id);

  const renderAuthors = () => {
    return (
      <div className="my-4 flex flex-wrap justify-center gap-4">
        {props.authorsData.map((author) => {
          return (
            <AuthorCard
              key={author.sys.id}
              authorDetails={author}
              authorNormalNewsArticleCount={authorNormalNewsArticleCount}
              authorSportsNewsArticleCount={authorSportsNewsArticleCount}
            />
          );
        })}
      </div>
    );
  };
  return <div>{renderAuthors()}</div>;
};

export default AuthorsRenderer;
