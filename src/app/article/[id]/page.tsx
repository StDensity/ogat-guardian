import { getNormalNewsById, getSportsNewsById } from "@/app/lib/dataFetcher";
import React from "react";
import NormalArticleViewer from "./NormalArticleViewer";
import SportsArticleViewer from "./SportsArticleViewer";
import Recommendations from "./Recommendations";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const newsData = await getNormalNewsById(id);

  return {
    title: newsData.fields.newsTitle,
    description: newsData.fields.summary,
    openGraph: {
      title: newsData.fields.newsTitle,
      description:
        newsData.fields.summary || "Open the website to read the full article.",
      type: "article", // Specifies content type
      authors: [newsData.fields.author?.fields.name || ""], // Array of authors
      section: newsData.fields.category[0]?.fields.name || "News", // News category/section
      images: [
        {
          url: newsData.fields.images
            ? `https://${newsData.fields.images[0]?.fields.file?.url}`
            : "/ogat_guardian_img.png",
        },
      ],
    },
  };
}

const ArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const newsData = await getNormalNewsById(id);
  const sportsNewsData =
    newsData.fields.category[0]?.fields.slug === "sports"
      ? await getSportsNewsById(id)
      : null; // or a default value

  return (
    <section className="mx-6 min-h-[70vh] gap-10 md:container md:mx-auto lg:flex">
      <div className="lg:flex-1 lg:basis-4/6">
        {sportsNewsData ? (
          <SportsArticleViewer newsData={sportsNewsData} />
        ) : (
          <NormalArticleViewer newsData={newsData} />
        )}
      </div>
      <div className="flex-1 border-t lg:basis-2/6 lg:border-none">
        <Recommendations numberOfRecommendations={6} />
      </div>
    </section>
  );
};

export default ArticlePage;
