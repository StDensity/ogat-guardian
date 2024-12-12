import {
  getAllNormalNews,
  getAllSportNews,
  getAuthorById,
} from "@/app/lib/dataFetcher";
import { getTotalArticleCount } from "@/app/lib/utils";
import AuthorCard from "@/components/author/AuthorCard";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ authorId: string }>;
}): Promise<Metadata> => {
  const { authorId } = await params;
  const authorDetails = await getAuthorById(authorId);

  return {
    title: `${authorDetails.fields.name}`,
    description: "Your page description",
    openGraph: {
      title: `Author - ${authorDetails.fields.name} `,
      description: `${authorDetails.fields.role}`,
      images: [
        {
          url: `https://${authorDetails.fields.avatar?.fields.file?.url}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

const AuthorPage = async ({
  params,
}: {
  params: Promise<{ authorId: string }>;
}) => {
  const { authorId } = await params;
  const normalNews = await getAllNormalNews();
  const sportsNews = await getAllSportNews();
  const allNewsData = [...normalNews, ...sportsNews];
  const newsByAuthor = allNewsData.filter(
    (item) => item.fields.author?.sys.id === authorId,
  );
  const authorNormalNewsArticleCount = getTotalArticleCount(normalNews);
  const authorSportsNewsArticleCount = getTotalArticleCount(sportsNews);
  const authorDetails = await getAuthorById(authorId);

  return (
    <section className="m-2 min-h-[70vh]">
      <div className="flex justify-center">
        {/* <AuthorCard
          authorDetails={authorDetails}
          authorNormalNewsArticleCount={authorNormalNewsArticleCount}
          authorSportsNewsArticleCount={authorSportsNewsArticleCount}
          showLink={false}
        /> */}
      </div>
      <div className="grid grid-cols-4">
        <div className="flex items-center justify-center">
          <AuthorCard
            authorDetails={authorDetails}
            authorNormalNewsArticleCount={authorNormalNewsArticleCount}
            authorSportsNewsArticleCount={authorSportsNewsArticleCount}
            showLink={false}
          />
        </div>
        {newsByAuthor.map((news) => (
          <VerticalArticleCard key={news.sys.id} newsData={news} />
        ))}
      </div>
    </section>
  );
};

export default AuthorPage;
