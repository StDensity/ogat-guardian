import { getMinimalNormalNews, getMinimalSportsNews } from "@/lib/dataFetcher";
import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = await params;

  const data =
    categoryName == "sports"
      ? await getMinimalSportsNews()
      : await getMinimalNormalNews();

  console.log(data);
  const categoryNews = data.filter(
    (item) => item.fields.category[0].fields.slug == categoryName,
  );

  return (
    <section className="container mx-auto min-h-[70vh]">
      <FirstRow categoryNews={categoryNews.slice(0, 3)} />
      <SecondRow categoryNews={categoryNews.slice(3)} />
    </section>
  );
};

export default CategoryPage;
