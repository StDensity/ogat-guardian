import React from "react";
import Headlines from "./Headlines";
import { getMinimalNormalNews } from "@/lib/dataFetcher";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { newsDataType } from "@/types/contentful";
import { sortedDateLatestFirst } from "@/lib/utils";
import SubHeadlines from "./SubHeadlines";
import OgatHeadlines from "./OgatHeadlines";
import SportsHeadlines from "./SportsHeadlines";

const FrontPage = async () => {
  const data = await getMinimalNormalNews();

  const latestFirstData = sortedDateLatestFirst(data);
  console.log(latestFirstData.slice(13, 19))
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
