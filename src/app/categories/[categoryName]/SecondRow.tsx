import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { TypeNormalNews, TypeSportsNews } from "@/types/contentful/types";
import React from "react";

interface SecondRowProps {
  categoryNews: (
    | TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">
    | TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">
  )[];
}

const SecondRow = (props: SecondRowProps) => {
  return (
    <div className="mt-7 grid justify-between border-t-2 pt-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {props.categoryNews.map((item) => {
        return (
          <div key={item.sys.id}>
            <VerticalArticleCard newsData={item} />
          </div>
        );
      })}
    </div>
  );
};

export default SecondRow;
