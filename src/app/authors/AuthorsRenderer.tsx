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
import {
  getAllNormalNews,
  getAllSportNews,
} from "@/app/lib/dataFetcher";
import { TypeAuthor } from "@/types/contentful/types";

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
            <Card key={author.sys.id} className="w-64 p-4 shadow-md">
              <div className="flex self-center font-bold text-guardianBlue">
                #{author.fields.id}
              </div>

              <CardHeader className="flex items-center space-y-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={`https:${author.fields.avatar?.fields.file?.url}`}
                    alt={`${author.fields.name}'s avatar`}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gray-300 text-2xl font-bold text-white">
                    {getInitials(author.fields.name)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="mt-2 text-center">
                  {author.fields.name}
                </CardTitle>
                <div className="text-nowrap text-gray-400">
                  {author.fields.role || "Journalist"}
                </div>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-center text-sm text-gray-600">
                  {(authorNormalNewsArticleCount[author.sys.id] || 0) +
                    (authorSportsNewsArticleCount[author.sys.id] || 0) ||
                    '"I take photos...Cheese..."'}
                </p>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-guardianBlue font-bold text-white hover:bg-guardianBlue hover:text-white hover:brightness-105"
                  variant="outline"
                >
                  See All Articles
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    );
  };
  return <div>{renderAuthors()}</div>;
};

export default AuthorsRenderer;
