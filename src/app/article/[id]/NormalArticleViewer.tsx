import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/app/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ArticleImageCarousel from "@/components/news-article/ArticleImageCarousel";
import { TypeNormalNews } from "@/types/contentful/types";

interface NormalArticleViewerProps {
  newsData: TypeNormalNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
}

const NormalArticleViewer = (props: NormalArticleViewerProps) => {
  return (
    <div className="pb-8 pt-8 font-open_sans">
      <div className="text-6xl font-bold">
        {props.newsData.fields.newsTitle}
      </div>
      <div className="flex items-center gap-4 py-2">
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
      </div>
      {<ArticleImageCarousel imageData={props.newsData.fields.images} />}
      <div></div>
      <div className="prose max-w-none pt-4">
        {documentToReactComponents(props.newsData.fields.body, {
          preserveWhitespace: true,
        })}
      </div>
    </div>
  );
};

export default NormalArticleViewer;
