import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { newsDataType } from "@/types/contentful";
import React from "react";

interface OgatHeadlinesProps {
  newsData: newsDataType[];
}

const OgatHeadlines = (props: OgatHeadlinesProps) => {
  return (
    <section className="flex border-t-2 pt-2">
      <div className="flex-1 hidden xl:flex">
        OGAT
      </div>
      <div className="flex-1">
        <VerticalArticleCard newsData={props.newsData[0]} />
      </div>
      <div className="flex-1 flex-row">
        Ads
        {/* <HorizontalArticleCard newsData={props.newsData[2]} />
        <HorizontalArticleCard newsData={props.newsData[3]} />
        <HorizontalArticleCard newsData={props.newsData[4]} /> */}
      </div>
      <div className="flex-1">
        <VerticalArticleCard newsData={props.newsData[1]} />
      </div>
    </section>
  );
};

export default OgatHeadlines;
