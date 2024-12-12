import { formatDate } from "@/app/lib/utils";
import { TypeNormalNews, TypeSportsNews } from "@/types/contentful/types";
import Link from "next/link";
import React from "react";

interface HorizontalArticleCardProps {
  newsData: TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US"> | TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">
}

const HorizontalArticleCard = (params: HorizontalArticleCardProps) => {
  return (
    <Link
      href={`/article/${params.newsData.sys.id}`}
      className="p-2"
      prefetch={true}
    >
      {/* <Image
        className="h-80 w-full object-cover"
        src={params.newsData.fields.images.fields.url}
        height={params.newsData.fields.images.fields.height}
        width={params.newsData.fields.images.fields.height}
        alt={params.newsData.fields.images.fields.title}
      /> */}
      <div className="flex items-center space-x-2 pt-4">
        <p className="font-open_sans text-xs italic text-gray-600">by</p>
        <p className="font-open_sans text-sm font-bold text-gray-800">
          {params.newsData.fields.author?.fields.name}
        </p>
        <p className="font-open_sans text-sm text-gray-500">
          {formatDate(params.newsData.fields.date)}
        </p>
      </div>

      <p className="pt-3 font-open_sans text-[18px] font-bold">
        {params.newsData.fields.newsTitle}
      </p>
      <p className="line-clamp-3 pt-3 font-open_sans text-sm">
        {params.newsData.fields.summary}
      </p>
    </Link>
  );
};

export default HorizontalArticleCard;
