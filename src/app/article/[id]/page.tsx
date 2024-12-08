import { getNormalNewsById, getSportsNewsById } from "@/app/lib/dataFetcher";
import React from "react";
import NormalArticleViewer from "./NormalArticleViewer";
import SportsArticleViewer from "./SportsArticleViewer";

const ArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const newsData = await getNormalNewsById(id);
  const sportsNewsData =
    newsData.fields.category[0]?.fields.slug === "sports"
      ? await getSportsNewsById(id)
      : null; // or a default value

  return (
    <section className="container mx-auto min-h-[70vh]">
      {sportsNewsData ? (
        <SportsArticleViewer newsData={sportsNewsData} />
      ) : (
        <NormalArticleViewer newsData={newsData} />
      )}
    </section>
  );
};

export default ArticlePage;
