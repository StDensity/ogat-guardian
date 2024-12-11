import {
  getAllNewsCategories,
  getAllNormalNews,
  getAllSportNews,
} from "@/app/lib/dataFetcher";
import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}): Promise<Metadata> => {
  const { categoryName } = await params;
  const categoryData = await getAllNewsCategories();
  const currentCategory = categoryData.find(
    (category) => category.fields.slug == categoryName,
  );
  return {
    title: `${currentCategory?.fields.name}`,
    description: "Your page description",
    openGraph: {
      title: `Category - ${currentCategory?.fields.name}`,
      description: "OGAT News Service Sports Category",
      images: [
        {
          url: "/ogat_guardian_img.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};
const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = await params;

  const data =
    categoryName == "sports"
      ? await getAllSportNews()
      : await getAllNormalNews();

  const categoryNews = data.filter(
    (item) => item.fields.category[0]?.fields.slug == categoryName,
  );

  return (
    <section className="container mx-auto min-h-[70vh]">
      <FirstRow categoryNews={categoryNews.slice(0, 3)} />
      <SecondRow categoryNews={categoryNews.slice(3)} />
    </section>
  );
};

export default CategoryPage;
