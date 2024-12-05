import { formatDate } from "@/lib/utils";
import { newsDataType } from "@/types/contentful";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface VerticalArticleCardProps {
  newsData: newsDataType;
}

const VerticalArticleCard = (props: VerticalArticleCardProps) => {
  return (
    <Link href={`/article/${props.newsData.id}`}>
      <div className="p-2">
        {props.newsData.fields.images ? (
          <Image
            className="h-80 w-full object-cover"
            src={props.newsData.fields.images.fields.url}
            height={props.newsData.fields.images.fields.height}
            width={props.newsData.fields.images.fields.height}
            alt={props.newsData.fields.images.fields.title}
            placeholder={"blur"}
            blurDataURL="/ogat_guardian_img.png"
          />
        ) : (
          <Image
            className="h-80 w-full object-cover"
            src={"/ogat_guardian_img.png"}
            height={400}
            width={400}
            alt={"placeholder image"}
          />
        )}
        <div className="flex items-center space-x-2 pt-4">
          <p className="font-open_sans text-xs italic text-gray-600">by</p>
          <p className="font-open_sans text-sm font-bold text-gray-800">
            {props.newsData.fields.author.fields.name}
          </p>
          <p className="font-open_sans text-sm text-gray-500">
            {formatDate(props.newsData.fields.date)}
          </p>
        </div>
        <p className="pt-3 font-open_sans text-[20px] font-bold">
          {props.newsData.fields.newsTitle}
        </p>
        <p className="line-clamp-3 pt-3 font-open_sans text-sm">
          {" "}
          {props.newsData.fields.summary}
        </p>
      </div>
    </Link>
  );
};

export default VerticalArticleCard;
