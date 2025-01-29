// import {
//   getAllNewsCategories,
//   getAllNormalNews,
//   getAllSportNews,
// } from "@/app/lib/dataFetcher";
// import React from "react";
// import FirstRow from "./FirstRow";
// import SecondRow from "./SecondRow";
// import { Metadata } from "next";

// export const generateMetadata = async ({
//   params,
// }: {
//   params: Promise<{ categoryName: string }>;
// }): Promise<Metadata> => {
//   const { categoryName } = await params;
//   const categoryData = await getAllNewsCategories();
//   const currentCategory = categoryData.find(
//     (category) => category.fields.slug == categoryName,
//   );
//   return {
//     title: `${currentCategory?.fields.name}`,
//     description: "Your page description",
//     openGraph: {
//       title: `Category - ${currentCategory?.fields.name}`,
//       description: `OGAT News Service ${currentCategory} Category`,
//       images: [
//         {
//           url: "/ogat_guardian_img.png",
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//   };
// };
// const CategoryPage = async ({
//   params,
// }: {
//   params: Promise<{ categoryName: string }>;
// }) => {
//   const { categoryName } = await params;

//   const data =
//     categoryName == "sports"
//       ? await getAllSportNews()
//       : await getAllNormalNews();

//   const categoryNews = data.filter(
//     (item) => item.fields.category[0]?.fields.slug == categoryName,
//   );

//   return (
//     <section className="container mx-auto min-h-[70vh]">
//       <FirstRow categoryNews={categoryNews.slice(0, 3)} />
//       <SecondRow categoryNews={categoryNews.slice(3)} />
//     </section>
//   );
// };

// export default CategoryPage;

import {
  getAllNewsCategories,
  getAllNormalNews,
  getAllSportNews,
} from "@/app/lib/dataFetcher";
import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params:  Promise<{ categoryName: string }>;
}): Promise<Metadata> => {
  const categoryData = await getAllNewsCategories();
  const { categoryName } = await params;
  const currentCategory = categoryData.find(
    (category) => category.fields.slug === categoryName,
  );

  if (!currentCategory) {
    return {
      title: "Category Not Found",
      description: "The requested news category does not exist",
    };
  }

  const title = `${currentCategory.fields.name} News - OGAT Guardian`;
  const description = `Latest ${currentCategory.fields.name} news and updates from OGAT Guardian. Stay informed with our comprehensive coverage.`;

  return {
    title,
    description,
    keywords: [
      `${currentCategory.fields.name}`,
      "news",
      "OGAT Guardian",
      "updates",
      "coverage",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "OGAT Guardian",
      locale: "en_US",
      images: [
        {
          url: "/ogat_guardian_img.png",
          width: 1200,
          height: 630,
          alt: `${currentCategory.fields.name} News Coverage`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/ogat_guardian_img.png"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/categories/${categoryName}`,
    },
  };
};

const CategoryPage = async ({
  params,
}: {
  params:  Promise<{ categoryName: string }>;
}) => {
  const categoryData = await getAllNewsCategories();
  const { categoryName } = await params;

  const currentCategory = categoryData.find(
    (category) => category.fields.slug === categoryName,
  );

  if (!currentCategory) {
    notFound();
  }

  const data =
    categoryName === "sports"
      ? await getAllSportNews()
      : await getAllNormalNews();

  const categoryNews = data.filter(
    (item) => item.fields.category[0]?.fields.slug === categoryName,
  );

  return (
    <main className="container mx-auto min-h-[70vh] py-8">
      <h1 className="mb-4 text-2xl font-bold">{currentCategory.fields.name}</h1>
      <FirstRow categoryNews={categoryNews.slice(0, 3)} />
      <SecondRow categoryNews={categoryNews.slice(3)} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: `${currentCategory.fields.name} News`,
            description: `Latest ${currentCategory.fields.name} news from OGAT Guardian`,
            url: `/categories/${categoryName}`,
            publisher: {
              "@type": "Organization",
              name: "OGAT Guardian",
              logo: {
                "@type": "ImageObject",
                url: "/ogat_guardian_img.png",
              },
            },
            mainEntityOfPage: categoryNews.map((article) => ({
              "@type": "NewsArticle",
              headline: article.fields.newsTitle,
              datePublished: article.fields.date,
              articleSection: currentCategory.fields.name,
            })),
          }),
        }}
      />
    </main>
  );
};

export default CategoryPage;
