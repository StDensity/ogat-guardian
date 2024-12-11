import { getNormalNewsById, getSportsNewsById } from "@/app/lib/dataFetcher";
import React from "react";
import NormalArticleViewer from "./NormalArticleViewer";
import SportsArticleViewer from "./SportsArticleViewer";
import Recommendations from "./Recommendations";

const ArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const newsData = await getNormalNewsById(id);
  const sportsNewsData =
    newsData.fields.category[0]?.fields.slug === "sports"
      ? await getSportsNewsById(id)
      : null; // or a default value

  return (
    <section className="md:container mx-6 min-h-[70vh] md:mx-auto lg:flex gap-10">
      <div className="lg:flex-1 lg:basis-4/6">
        {sportsNewsData ? (
          <SportsArticleViewer newsData={sportsNewsData} />
        ) : (
          <NormalArticleViewer newsData={newsData} />
        )}
      </div>
      <div className="flex-1 lg:basis-2/6 border-t lg:border-none">
        <Recommendations numberOfRecommendations={6} />
      </div>
    </section>
  );
};

export default ArticlePage;
