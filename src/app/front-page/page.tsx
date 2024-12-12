import React from "react";
import Headlines from "./Headlines";
import { getAllNormalNews, getAllSportNews } from "@/app/lib/dataFetcher";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { sortedDateLatestFirst } from "@/app/lib/utils";
import SubHeadlines from "./SubHeadlines";
import OgatHeadlines from "./OgatHeadlines";
import SportsHeadlines from "./SportsHeadlines";
import { assert } from "console";

const FrontPage = async () => {
  const NormalNews = await getAllNormalNews();
  const SportsNews = await getAllSportNews();

  const latestFirstNormalNews = sortedDateLatestFirst(NormalNews);
  const latestFirstSportsNews = sortedDateLatestFirst(SportsNews);
  return (
    <section className="container mx-auto min-h-[80vh]">
      <div className="md:hidden">
        <p className="text-center text-xl font-bold">Headlines</p>
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
        <p className="font-bold text-xl text-center">Sports</p>

        <VerticalArticleCard newsData={latestFirstSportsNews[0]} />
        <VerticalArticleCard newsData={latestFirstSportsNews[1]} />
      </div>

      <div className="hidden md:block">
        {/* Headlines */}
        <Headlines newsData={latestFirstNormalNews.slice(0, 2)} />

        {/* SubHeadlines */}
        <SubHeadlines newsData={latestFirstNormalNews.slice(2, 7)} />

        {/* OgatHeadlines */}
        <OgatHeadlines newsData={latestFirstNormalNews.slice(7, 9)} />

        {/* SportsHeadlines */}
        <SportsHeadlines newsData={latestFirstSportsNews.slice(0, 2)} />
      </div>
    </section>
  );
};

export default FrontPage;
