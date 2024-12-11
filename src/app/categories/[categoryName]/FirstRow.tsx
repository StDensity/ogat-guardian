import VerticalArticleCard from "@/components/news-cards/VerticalArticleCard";
import { TypeNormalNews, TypeSportsNews } from "@/types/contentful/types";
import React from "react";

interface FirstRowProps {
  categoryNews: (
    | TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">
    | TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">
  )[];
}

const FirstRow = (props: FirstRowProps) => {
  return (
    <section className="mt-7 lg:flex grid grid-cols-1 justify-between border-t-2 pt-1">
      <div className="md:flex-2  md:basis-2/4">
        {props.categoryNews.length >= 1 && (
          <VerticalArticleCard newsData={props.categoryNews[0]} />
        )}
      </div>
      <div className="md:flex-1  md:basis-1/4">
        {props.categoryNews.length >= 2 && (
          <VerticalArticleCard newsData={props.categoryNews[1]} />
        )}
      </div>
      <div className="md:flex-1  md:basis-1/4">
        {props.categoryNews.length >= 3 && (
          <VerticalArticleCard newsData={props.categoryNews[2]} />
        )}
      </div>
    </section>
  );
};

export default FirstRow;
