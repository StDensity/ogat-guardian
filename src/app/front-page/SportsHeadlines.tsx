import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { newsDataType } from "@/types/contentful";
import React from "react";

interface SportsHeadlinesProps {
  newsData: newsDataType[];
}

const SportsHeadlines = (props: SportsHeadlinesProps) => {
  return (
    <section className="flex border-t-2 pt-2">
      <div className="flex-1 basis-3/12 hidden xl:flex">SPORTS</div>
      <div className="flex-2 basis-5/12">
        <VerticalArticleCard newsData={props.newsData[0]} />
      </div>

      <div className="flex-1 basis-1/12 flex-row">
        <p className="[writing-mode:vertical-lr]">Horizontal Advert</p>
        {/* <HorizontalArticleCard newsData={props.newsData[1]} />
        <HorizontalArticleCard newsData={props.newsData[2]} />
        <HorizontalArticleCard newsData={props.newsData[3]} /> */}
      </div>
      <div className="flex-1 basis-3/12">
        <VerticalArticleCard newsData={props.newsData[1]} />
      </div>
    </section>
  );
};

export default SportsHeadlines;
