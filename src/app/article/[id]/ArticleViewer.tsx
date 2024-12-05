import { newsDataDetailedType } from "@/types/contentful";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ArticleImageCarousel from "@/components/news-article/ArticleImageCarousel";

interface ArticleViewerProps {
  newsData: newsDataDetailedType;
}

const ArticleViewer = (props: ArticleViewerProps) => {
  return (
    <div className="flex pt-4 font-open_sans">
      <div className="flex-1 basis-4/6">
        <div className="text-6xl font-bold">
          {props.newsData.fields.newsTitle}
        </div>
        <div className="flex items-center gap-4 py-2">
          <Avatar className="size-12">
            <AvatarImage src={props.newsData.fields.author.fields.avatar.url} />
            <AvatarFallback className="bg-gray-300 font-bold">
              {getInitials(props.newsData.fields.author.fields.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-bold">
              {props.newsData.fields.author.fields.name}
            </div>
            <div className="text-sm text-gray-500">
              {props.newsData.fields.date}
            </div>
          </div>
        </div>
        {props.newsData.fields.images && (
          <ArticleImageCarousel imageData={props.newsData.fields.images} />
        )}
        <div></div>
        <div className="prose  max-w-none pt-4">
          {documentToReactComponents(props.newsData.fields.body, {preserveWhitespace: true})}
          
        </div>
      </div>
      <div className="flex-1 basis-2/6 bg-gray-200">Right side container</div>
    </div>
  );
};

export default ArticleViewer;
