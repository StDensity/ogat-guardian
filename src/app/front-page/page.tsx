import React from "react";
import Headlines from "./Headlines";
import { getAllNormalNews } from "@/app/lib/dataFetcher";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { sortedDateLatestFirst } from "@/app/lib/utils";
import SubHeadlines from "./SubHeadlines";
import OgatHeadlines from "./OgatHeadlines";
import SportsHeadlines from "./SportsHeadlines";

const FrontPage = async () => {
  const data = await getAllNormalNews();
  

  const latestFirstData = sortedDateLatestFirst(data);
  return (
    <section className="container mx-auto min-h-[80vh]">
      <div className="md:hidden">
        <VerticalArticleCard newsData={latestFirstData[0]} />
        <VerticalArticleCard newsData={latestFirstData[1]} />
        <VerticalArticleCard newsData={latestFirstData[2]} />
        <VerticalArticleCard newsData={latestFirstData[3]} />
        <VerticalArticleCard newsData={latestFirstData[4]} />
      </div>

      <div className="hidden md:block">
        {/* Headlines */}
        <Headlines newsData={latestFirstData.slice(0, 2)} />

        {/* SubHeadlines */}
        <SubHeadlines newsData={latestFirstData.slice(2, 7)} />

        {/* OgatHeadlines */}
        <OgatHeadlines newsData={latestFirstData.slice(7, 9)} />

        {/* SportsHeadlines */}
        <SportsHeadlines newsData={latestFirstData.slice(13, 19)} />
      </div>
    </section>
  );
};

export default FrontPage;
