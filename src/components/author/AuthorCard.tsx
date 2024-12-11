import { getInitials } from "@/app/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypeAuthor } from "@/types/contentful/types";
import Link from "next/link";

interface AuthorCardProps {
  authorDetails: TypeAuthor<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
  authorNormalNewsArticleCount: Record<string, number>;
  authorSportsNewsArticleCount: Record<string, number>;
  showLink?: boolean;
}

const AuthorCard = ({
  authorDetails,
  authorNormalNewsArticleCount,
  authorSportsNewsArticleCount,
  showLink = true,
}: AuthorCardProps) => {
  return (
    <Card key={authorDetails.sys.id} className="w-64 p-4 shadow-md">
      <div className="flex self-center font-bold text-guardianBlue">
        #{authorDetails.fields.id}
      </div>

      <CardHeader className="flex items-center space-y-2">
        <Avatar className="h-24 w-24">
          <AvatarImage
            src={`https:${authorDetails.fields.avatar?.fields.file?.url}`}
            alt={`${authorDetails.fields.name}'s avatar`}
            className="object-cover"
          />
          <AvatarFallback className="bg-gray-300 text-2xl font-bold text-white">
            {getInitials(authorDetails.fields.name)}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="mt-2 text-center">
          {authorDetails.fields.name}
        </CardTitle>
        <div className="text-nowrap text-gray-400">
          {authorDetails.fields.role || "Journalist"}
        </div>
      </CardHeader>

      <CardContent className="text-center">
        <p className="text-center text-sm text-gray-600">
          {(authorNormalNewsArticleCount[authorDetails.sys.id] || 0) +
            (authorSportsNewsArticleCount[authorDetails.sys.id] || 0) ||
            '"I take photos...Cheese..."'}
        </p>
      </CardContent>

      <CardFooter>
        {showLink && (
          <Link
            href={`/authors/${authorDetails.sys.id}`}
            className="flex w-full justify-center rounded-md bg-guardianBlue p-2 font-bold text-white hover:bg-guardianBlue hover:text-white hover:brightness-105"
          >
            See All Articles
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default AuthorCard;
