import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/app/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ArticleImageCarousel from "@/components/news-article/ArticleImageCarousel";
import { TypeNormalNews } from "@/types/contentful/types";
import Link from "next/link";
import { CommentForm } from "@/components/news-article/CommentForm";
import TestConnection from "@/components/TestConnection";
import LikeButton from "@/components/news-article/LikeButton";

interface NormalArticleViewerProps {
  newsData: TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
}

const NormalArticleViewer = (props: NormalArticleViewerProps) => {
  return (
    <div className="pb-8 pt-8 font-open_sans">
      <div className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-6xl">
        {props.newsData.fields.newsTitle}
      </div>
      <div>
        <LikeButton articleId="testing"/>
      </div>
      <div className="flex gap-4 py-2">
        <Link
          href={`/authors/${props.newsData.fields.author?.sys.id}`}
          className="flex items-center space-x-2"
        >
          <Avatar className="size-12">
            <AvatarImage
              src={
                `${props.newsData.fields.author?.fields.avatar?.fields.file?.url}` ||
                ""
              }
            />
            <AvatarFallback className="bg-gray-300 font-bold">
              {getInitials(props.newsData.fields.author?.fields.name || "")}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-bold">
              {props.newsData.fields.author?.fields.name}
            </div>
            <div className="text-sm text-gray-500">
              {props.newsData.fields.date}
            </div>
          </div>
        </Link>
      </div>
      <div>
        {<ArticleImageCarousel imageData={props.newsData.fields.images} />}
      </div>
      <div className="prose max-w-none pt-4">
        {" "}
        {documentToReactComponents(props.newsData.fields.body, {
          preserveWhitespace: true,
        })}
      </div>
      <br />
      <p className="text-sm italic text-gray-400">
        {props.newsData.fields.footnote}
      </p>
      <TestConnection />

      <CommentForm articleId="test-article-1" />
    </div>
  );
};

export default NormalArticleViewer;
