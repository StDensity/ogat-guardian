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
    <section className=" flex container mx-auto min-h-[70vh]">
      <div className="flex-1 basis-4/6">
        {sportsNewsData ? (
          <SportsArticleViewer newsData={sportsNewsData} />
        ) : (
          <NormalArticleViewer newsData={newsData} />
        )}
      </div>
        <div className="flex-1 basis-2/6 bg-gray-200">Right side container</div>
    </section>
  );
};

export default ArticlePage;
