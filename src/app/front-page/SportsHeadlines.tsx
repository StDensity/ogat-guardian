import AdBadge from "@/components/AdBadge";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { TypeNormalNews, TypeSportsNews } from "@/types/contentful/types";
import Image from "next/image";
import React from "react";

interface SportsHeadlinesProps {
  newsData: TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[] | TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[]
}

const SportsHeadlines = (props: SportsHeadlinesProps) => {
  return (
    <section className="flex border-t-2 pt-2">
      <div className="hidden flex-1 basis-3/12 xl:flex">SPORTS</div>
      <div className="flex-2 basis-5/12">
        <VerticalArticleCard newsData={props.newsData[0]} />
      </div>

      <div className="flex-1 basis-1/12 flex-row">
        <div className="">
        <AdBadge >
          <Image className='mt-2' src="/ads/hunter.webp" width={300} height={300} alt="ads" />
        </AdBadge>
          </div>
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
