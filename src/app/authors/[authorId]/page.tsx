import {
  getAllNormalNews,
  getAllSportNews,
  getAuthorById,
} from "@/app/lib/dataFetcher";
import { getTotalArticleCount } from "@/app/lib/utils";
import AuthorCard from "@/components/author/AuthorCard";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import React from "react";

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
      <div className="flex justify-center items-center">
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
