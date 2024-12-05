import HorizontalArticleCard from "@/components/news-cards/HorizontalArticleCard";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { newsDataType } from "@/types/contentful";
import React from "react";

interface SubHeadlinesProps {
  newsData: newsDataType[];
}

const SubHeadlines = (props: SubHeadlinesProps) => {

  return (
    <section className="flex border-t-2 pt-2">
      <div className="hidden flex-1 xl:flex">Weather Area</div>
      <div className="flex-1">
        <VerticalArticleCard newsData={props.newsData[0]} />
      </div>
      <div className="flex-1 flex-row">
        <HorizontalArticleCard newsData={props.newsData[1]} />
        <HorizontalArticleCard newsData={props.newsData[2]} />
        <HorizontalArticleCard newsData={props.newsData[3]} />
      </div>
      <div className="flex-1">
        <VerticalArticleCard newsData={props.newsData[4]} />
      </div>
    </section>
  );
};

export default SubHeadlines;
