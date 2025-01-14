import AdBadge from "@/components/AdBadge";
import HorizontalArticleCard from "@/components/news-cards/HorizontalArticleCard";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import WeatherWidget from "@/components/WeatherWidget";
import { TypeNormalNews, TypeSportsNews } from "@/types/contentful/types";
import Image from "next/image";
import React from "react";

interface SubHeadlinesProps {
  newsData:
    | TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[]
    | TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[];
}

const SubHeadlines = (props: SubHeadlinesProps) => {
  return (
    <section className="flex border-t-2 pt-2">
      <div className="hidden flex-1 xl:flex">
        <WeatherWidget />
      </div>
      <div className="flex-1">
        <VerticalArticleCard newsData={props.newsData[0]} />
      </div>
      <div className="flex-1 flex-row">
        <HorizontalArticleCard newsData={props.newsData[1]} />
        <HorizontalArticleCard newsData={props.newsData[2]} />
        <HorizontalArticleCard newsData={props.newsData[3]} />
      </div>
      <div className="flex-1">
        {/* <VerticalArticleCard newsData={props.newsData[4]} /> */}
        <AdBadge >
          <Image className='mt-2' src="/ads/packers.webp" width={600} height={600} alt="ads" />
        </AdBadge>
      </div>
    </section>
  );
};

export default SubHeadlines;
