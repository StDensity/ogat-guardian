import { getNormalNewsById, getSportsNewsById } from "@/app/lib/dataFetcher";
import React from "react";
import NormalArticleViewer from "./NormalArticleViewer";
import SportsArticleViewer from "./SportsArticleViewer";
import Recommendations from "./Recommendations";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const { id: paramId } = await params;
    const newsData = await getNormalNewsById(paramId);

    if (!newsData) {
      return {
        title: "Article Not Found - The OGAT Guardian",
        description: "The requested article could not be found",
      };
    }

    const fields = newsData.fields;
    const category = fields.category[0]?.fields.name || "News";
    const imageUrl = fields.images?.[0]?.fields.file?.url
      ? `https://${fields.images[0].fields.file.url}`
      : "/ogat_guardian_img.png";
    const authorName = fields.author?.fields.name || "OGAT Guardian Editorial";
    const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/article/${paramId}`;

    return {
      title: `${fields.newsTitle} | The OGAT Guardian`,
      description:
        fields.summary ||
        `Read the full article about ${fields.newsTitle} on The OGAT Guardian`,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: fields.newsTitle,
        description:
          fields.summary || `Read the full story on The OGAT Guardian`,
        type: "article",
        publishedTime: fields.date,
        authors: [authorName],
        tags: fields.category.join(",") || [],
        section: category,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: fields.images?.[0]?.fields.file?.fileName || fields.newsTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: fields.newsTitle,
        description:
          fields.summary || `Read the full story on The OGAT Guardian`,
        images: [imageUrl],
        creator: "@OGATGuardian",
      },
      keywords: fields.category?.join(", ") || category,
    };
  } catch  {
    return {
      title: "Article Error - The OGAT Guardian",
      description: "There was an error loading this article",
    };
  }
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
