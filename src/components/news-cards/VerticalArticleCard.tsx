import { formatDate } from "@/app/lib/utils";
import { TypeNormalNews, TypeSportsNews } from "@/types/contentful/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface VerticalArticleCardProps {
  newsData:
    | TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">
    | TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
}

const VerticalArticleCard = (props: VerticalArticleCardProps) => {
  return (
    <Link href={`/article/${props.newsData.sys.id}`} prefetch={true}>
      <div className="p-2">
        {props.newsData.fields.images &&
        props.newsData.fields.images.length > 0 ? (
          <Image
            className="h-80 w-full object-cover"
            src={`https:${props.newsData.fields.images[0]?.fields.file?.url}`}
            height={
              props.newsData.fields.images[0]?.fields.file?.details.image
                ?.height
            }
            width={
              props.newsData.fields.images[0]?.fields.file?.details.image?.width
            }
            alt={props.newsData.fields.images[0]?.fields.title || ""}
            placeholder="blur"
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
          <Link href={`/authors/${props.newsData.fields.author?.sys.id}` } className="flex space-x-2">
            <p className="font-open_sans text-xs italic text-gray-600">by</p>
            <p className="font-open_sans text-sm font-bold text-gray-800">
              {props.newsData.fields.author?.fields.name}
            </p>
          </Link>
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
