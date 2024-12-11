import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/app/lib/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ArticleImageCarousel from "@/components/news-article/ArticleImageCarousel";
import Image from "next/image";
import { SportNewsResult, TypeSportsNews } from "@/types/contentful/types";

interface SportsArticleViewerProps {
  newsData: TypeSportsNews<"WITHOUT_UNRESOLVABLE_LINKS", "en-US">;
}

const SportsArticleViewer = (props: SportsArticleViewerProps) => {
  return (
    <div className="pb-8 pt-8 font-open_sans">
      <div className="text-6xl font-bold">
        {props.newsData.fields.newsTitle}
      </div>
      <div className="flex items-center gap-4 py-2">
        <Avatar className="size-12">
          <AvatarImage
            src={`https:${props.newsData.fields.author?.fields.avatar?.fields.file?.url}`}
          />
          <AvatarFallback className="bg-gray-300 font-bold">
            {getInitials(props.newsData.fields.author?.fields.name || "")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm font-bold">
            {props.newsData.fields.author?.fields.name || ""}
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
      <div className="prose max-w-none pt-4">
        {documentToReactComponents(props.newsData.fields.body, {
          preserveWhitespace: true,
        })}
      </div>
      <br />
      <p className="text-sm italic text-gray-400">
        {props.newsData.fields.footnote}
      </p>
      {/* Results */}
      <div className="">
        {Array.isArray(props.newsData.fields.results) &&
          props.newsData.fields.results.map((item: SportNewsResult, index) => {
            return (
              <div key={index} className="mt-12 pt-8">
                {/* Header */}
                <div className="flex gap-16">
                  <div className="size-40">
                    <Image
                      className="rounded-sm"
                      src={
                        (props.newsData.fields.images &&
                          props.newsData.fields.images[0] &&
                          `https:${props.newsData.fields.images[0]?.fields.file?.url}`) ||
                        ""
                      }
                      height={
                        (props.newsData.fields.images &&
                          props.newsData.fields.images[0] &&
                          props.newsData.fields.images[0]?.fields.file?.details
                            .image?.height) ||
                        400
                      }
                      width={
                        (props.newsData.fields.images &&
                          props.newsData.fields.images[0] &&
                          props.newsData.fields.images[0]?.fields.file?.details
                            .image?.height) ||
                        400
                      }
                      alt={
                        (props.newsData.fields.images &&
                          props.newsData.fields.images[0] &&
                          props.newsData.fields.images[0]?.fields.title) ||
                        ""
                      }
                    />
                  </div>
                  <div className="items-center justify-center">
                    <div className="font-open_sans text-3xl font-bold">
                      {item.title}
                    </div>
                    <div className="mt-5 flex justify-between border-2 border-guardianBlue pl-3">
                      <div className="items-center justify-center text-center">
                        <div className="font-bold">Judges</div>
                        <div>{item.score.judges}</div>
                      </div>
                      <div className="items-center justify-center text-center">
                        <div className="font-bold">Public</div>
                        <div>{item.score.judges}</div>
                      </div>
                      <div className="items-center justify-center bg-guardianBlue px-8 text-center text-white">
                        <div className="font-bold">Total</div>
                        <div>{item.score.judges + item.score.public}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-black" />
                {/* Body/Remarks */}
                <div className="mt-2">
                  <p className="text-lg font-bold text-gray-700">
                    Scoring by judges
                  </p>

                  <div>
                    {item.remarks.map((innerItem, index: number) => {
                      return (
                        <div key={index}>
                          <div className="mt-2 text-lg font-bold text-gray-700">
                            {innerItem.judge}
                          </div>
                          <div className="text-sm text-gray-600">
                            {innerItem.scores}
                          </div>
                          <div className="mt-2 text-sm font-thin italic">
                            {innerItem.content
                              ? `"${innerItem.content}"`
                              : "No Comments was given."}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SportsArticleViewer;
