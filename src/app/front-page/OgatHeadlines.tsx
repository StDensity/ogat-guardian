import AdBadge from "@/components/AdBadge";
import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { TypeNormalNews, TypeSportsNews } from "@/types/contentful/types";
import Image from "next/image";
import React from "react";

interface OgatHeadlinesProps {
  newsData: TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[] | TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">[]
}

const OgatHeadlines = (props: OgatHeadlinesProps) => {
  return (
    <section className="flex border-t-2 pt-2">
      <div className="hidden flex-1 xl:flex">OGAT</div>
      <div className="flex-1">
        <VerticalArticleCard newsData={props.newsData[0]} />
      </div>
      <div className="flex-1 flex-row">
        <AdBadge >
          <Image className='mt-2' src="/ads/zongyi.webp" width={600} height={600} alt="ads" />
        </AdBadge>
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
