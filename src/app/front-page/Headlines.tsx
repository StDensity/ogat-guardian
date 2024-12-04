import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { formatDate } from "@/lib/utils";
import { newsDataType } from "@/types/contentful";
import Image from "next/image";
import React from "react";

interface HeadlinesProps {
  newsData: newsDataType[];
}

const Headlines = (props: HeadlinesProps) => {
  return (
    <section className="mt-7 flex justify-between border-t-2 pt-1">
      <div className="hidden flex-1 basis-1/4 xl:flex">Headlines</div>
      <div className="flex-2 basis-1/2">
        <VerticalArticleCard newsData={props.newsData[0]} />
      </div>
      <div className="flex-1 basis-1/4">
        <VerticalArticleCard newsData={props.newsData[1]} />
      </div>
    </section>
  );
};

export default Headlines;
