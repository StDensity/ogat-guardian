import { getAllNormalNews, getAllSportNews } from "@/app/lib/dataFetcher";
import { formatDate, getRandomNumbers } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RecommendationsProps {
    numberOfRecommendations: number
}

const Recommendations = async (props: RecommendationsProps) => {
  const normalNewsData = await getAllNormalNews();
  const sportsNewsData = await getAllSportNews();
  const allNewsData = [...normalNewsData, ...sportsNewsData];

  const getRandomArticle = () => {
    let i = 0;
    let k;
    const articles = [];
    while (i < props.numberOfRecommendations) {
      k = getRandomNumbers(allNewsData.length);
      articles.push(allNewsData[k]);
      i++;
    }
    return articles;
  };

  const renderRecommendArticle = () => {
    const recommendedArticle = getRandomArticle();
    return (
      <div>
        {recommendedArticle.map((item, index) => {
          return (
            <Link href={`/article/${item.sys.id}`} key={index} className="my-8 flex">
              <Image
                className="h-28 w-32 min-w-40"
                src={
                  item.fields.images
                    ? `https:${item.fields.images[0]?.fields.file?.url}`
                    : "https://static.wixstatic.com/media/47779c_ff396809ab1c45898fbb52cdbd0b8dd0~mv2.jpg/v1/fill/w_100,h_100,al_c,q_80,usm_4.00_1.00_0.00,enc_avif,quality_auto/47779c_ff396809ab1c45898fbb52cdbd0b8dd0~mv2.jpg"
                }
                height={400}
                width={400}
                alt="alt"
                // placeholder=""
              />
              <div className="flex-row pl-2">
                <div className="text-sm">
                  <span className="italic">by</span>{" "}
                  <span className="font-bold">
                    {item.fields.author?.fields.name}
                  </span>{" "}
                  <span>{formatDate(item.fields.date)}</span>{" "}
                </div>
                <div className="font-bold">{item.fields.newsTitle}</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  return <div>{renderRecommendArticle()}</div>;
};

export default Recommendations;
