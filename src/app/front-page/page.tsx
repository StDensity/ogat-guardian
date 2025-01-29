import React from "react";
import Headlines from "./Headlines";
import { getAllNormalNews, getAllSportNews } from "@/app/lib/dataFetcher";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { sortedDateLatestFirst } from "@/app/lib/utils";
import SubHeadlines from "./SubHeadlines";
import OgatHeadlines from "./OgatHeadlines";
import SportsHeadlines from "./SportsHeadlines";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  try {
    const newsData = await getAllNormalNews();
    const sortedNews = sortedDateLatestFirst(newsData);

    if (!sortedNews.length) {
      return {
        title: "Latest News Updates | Your Site Name",
        description:
          "Stay informed with the latest news updates from Your Site Name",
      };
    }

    const latestNews = sortedNews[0]?.fields;
    const imageUrl = latestNews.images?.[0]?.fields.file?.url
      ? `https:${latestNews.images[0].fields.file.url}`
      : "/ogat_guardian_img.png";

    return {
      title: `${latestNews.newsTitle} | Your Site Name`,
      description:
        latestNews.summary || "Latest news update from Your Site Name",
      keywords:
        latestNews.category?.join(", ") || "news, updates, current affairs",
      alternates: {
        canonical: `https://ogatguardian.vercel.app/article/${sortedNews[0].sys.id}`,
      },
      openGraph: {
        title: latestNews.newsTitle,
        description:
          latestNews.summary || "Latest news update from Your Site Name",
        url: `https://ogatguardian.vercel.app/article/${sortedNews[0].sys.id}`,
        type: "article",
        publishedTime: latestNews.date,
        authors: [latestNews.author?.fields.name || "Editorial Team"],
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt:
              latestNews.images?.[0]?.fields.file?.fileName ||
              latestNews.newsTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: latestNews.newsTitle,
        description:
          latestNews.summary || "Latest news update from Your Site Name",
        images: [imageUrl],
      },
    };
  } catch (error) {
    return {
      title: "Latest News | Your Site Name",
      description: "Stay updated with the latest news and current affairs",
    };
  }
};

const FrontPage = async () => {
  const NormalNews = await getAllNormalNews();
  const SportsNews = await getAllSportNews();

  const latestFirstNormalNews = sortedDateLatestFirst(NormalNews);
  const latestFirstSportsNews = sortedDateLatestFirst(SportsNews);
  return (
    <section className="container mx-auto min-h-[80vh]">
      <div className="md:hidden">
        <h1 className="text-center text-xl font-bold">Headlines</h1>
        <VerticalArticleCard newsData={latestFirstNormalNews[0]} />
        <VerticalArticleCard newsData={latestFirstNormalNews[1]} />
        <VerticalArticleCard newsData={latestFirstNormalNews[2]} />
        <VerticalArticleCard newsData={latestFirstNormalNews[3]} />
        <VerticalArticleCard newsData={latestFirstNormalNews[4]} />
        <VerticalArticleCard newsData={latestFirstNormalNews[5]} />
        <p className="text-center text-xl font-bold">OGAT</p>
        <VerticalArticleCard newsData={latestFirstNormalNews[6]} />
        {/* add */}
        <VerticalArticleCard newsData={latestFirstNormalNews[7]} />
        <VerticalArticleCard newsData={latestFirstNormalNews[8]} />

        {/* sports */}
        <p className="text-center text-xl font-bold">Sports</p>

        <VerticalArticleCard newsData={latestFirstSportsNews[0]} />
        <VerticalArticleCard newsData={latestFirstSportsNews[1]} />
      </div>

      <div className="hidden md:block">
        {/* Headlines */}
        <Headlines
          aria-label={"Headlines"}
          newsData={latestFirstNormalNews.slice(0, 2)}
        />

        {/* SubHeadlines */}
        <SubHeadlines
          aria-label={"Sub Headlines"}
          newsData={latestFirstNormalNews.slice(2, 7)}
        />

        {/* OgatHeadlines */}
        <OgatHeadlines
          aria-label={"OGAT Headlines"}
          newsData={latestFirstNormalNews.slice(7, 9)}
        />

        {/* SportsHeadlines */}
        <SportsHeadlines
          aria-label={"Sports Headlines"}
          newsData={latestFirstSportsNews.slice(0, 2)}
        />
      </div>
    </section>
  );
};

export default FrontPage;
