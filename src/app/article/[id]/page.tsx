import { getNormalNewsById, getSportsNewsById } from "@/app/lib/dataFetcher";
import React from "react";
import NormalArticleViewer from "./NormalArticleViewer";
import SportsArticleViewer from "./SportsArticleViewer";
import Recommendations from "./Recommendations";
import { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }): Promise<Metadata> {
//   const { id } = await params;
//   const newsData = await getNormalNewsById(id);

//   return {
//     title: newsData.fields.newsTitle,
//     description: newsData.fields.summary,
//     openGraph: {
//       title: newsData.fields.newsTitle,
//       description:
//         newsData.fields.summary || "Open the website to read the full article.",
//       type: "article", // Specifies content type
//       authors: [newsData.fields.author?.fields.name || ""], // Array of authors
//       section: newsData.fields.category[0]?.fields.name || "News", // News category/section
//       images: [
//         {
//           url: newsData.fields.images
//             ? `https://${newsData.fields.images[0]?.fields.file?.url}`
//             : "/ogat_guardian_img.png",
//         },
//       ],
//     },
//   };
// }

// const ArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = await params;
//   const newsData = await getNormalNewsById(id);
//   const sportsNewsData =
//     newsData.fields.category[0]?.fields.slug === "sports"
//       ? await getSportsNewsById(id)
//       : null; // or a default value

//   return (
//     <section className="mx-6 min-h-[70vh] gap-10 md:container md:mx-auto lg:flex">
//       <div className="lg:flex-1 lg:basis-4/6">
//         {sportsNewsData ? (
//           <SportsArticleViewer newsData={sportsNewsData} />
//         ) : (
//           <NormalArticleViewer newsData={newsData} />
//         )}
//       </div>
//       <div className="flex-1 border-t lg:basis-2/6 lg:border-none">
//         <Recommendations numberOfRecommendations={6} />
//       </div>
//     </section>
//   );
// };

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const { id: paramId } = await params;
    const newsData = await getNormalNewsById(paramId);

    if (!newsData) {
      return {
        title: "Article Not Found - The OGAT Guardian",
        description: "The requested article could not be found",
      };
    }

    const fields = newsData.fields;
    const category = fields.category[0]?.fields.name || "News";
    const imageUrl = fields.images?.[0]?.fields.file?.url
      ? `https://${fields.images[0].fields.file.url}`
      : "/ogat_guardian_img.png";
    const authorName = fields.author?.fields.name || "OGAT Guardian Editorial";
    const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/article/${paramId}`;

    return {
      title: `${fields.newsTitle} | The OGAT Guardian`,
      description:
        fields.summary ||
        `Read the full article about ${fields.newsTitle} on The OGAT Guardian`,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: fields.newsTitle,
        description:
          fields.summary || `Read the full story on The OGAT Guardian`,
        type: "article",
        publishedTime: fields.date,
        authors: [authorName],
        tags: fields.category.join(",") || [],
        section: category,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: fields.images?.[0]?.fields.file?.fileName || fields.newsTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: fields.newsTitle,
        description:
          fields.summary || `Read the full story on The OGAT Guardian`,
        images: [imageUrl],
        creator: "@OGATGuardian",
      },
      keywords: fields.category?.join(", ") || category,
    };
  } catch (error) {
    return {
      title: "Article Error - The OGAT Guardian",
      description: "There was an error loading this article",
    };
  }
}

// Add structured data component
const ArticleStructuredData = ({ newsData }: { newsData: any }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: newsData.fields.newsTitle,
    image: newsData.fields.images?.map(
      (img: any) => `https:${img.fields.file.url}`,
    ),
    datePublished: newsData.fields.publicationDate,
    dateModified: newsData.fields.updateDate || newsData.fields.publicationDate,
    author: {
      "@type": "Person",
      name: newsData.fields.author?.fields.name || "OGAT Guardian Editorial",
    },
    publisher: {
      "@type": "Organization",
      name: "The OGAT Guardian",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/ogat_guardian_img.png`,
      },
    },
    description: newsData.fields.summary,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/article/${newsData.sys.id}`,
    },
  };

  return (
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  );
};

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  let newsData, sportsNewsData;
  const { id: paramId } = await params;
  newsData = await getNormalNewsById(paramId);
  sportsNewsData =
    newsData.fields.category[0]?.fields.slug === "sports"
      ? await getSportsNewsById(paramId)
      : null;

  return (
    <section className="mx-6 min-h-[70vh] gap-10 md:container md:mx-auto lg:flex">
      <ArticleStructuredData newsData={newsData} />

      <article className="lg:flex-1 lg:basis-4/6">
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">
            {newsData.fields.newsTitle}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>
              By {newsData.fields.author?.fields.name || "OGAT Guardian Staff"}
            </span>
            <time dateTime={newsData.fields.date}>
              {new Date(newsData.fields.date).toLocaleDateString()}
            </time>
            {newsData.fields.date && (
              <span className="italic">
                Updated: {new Date(newsData.fields.date).toLocaleDateString()}
              </span>
            )}
          </div>
        </header>

        {sportsNewsData ? (
          <SportsArticleViewer newsData={sportsNewsData} />
        ) : (
          <NormalArticleViewer newsData={newsData} />
        )}
      </article>

      <aside
        className="flex-1 border-t lg:basis-2/6 lg:border-none"
        aria-label="Recommended articles"
      >
        <Recommendations numberOfRecommendations={6} />
      </aside>
    </section>
  );
};

export default ArticlePage;
