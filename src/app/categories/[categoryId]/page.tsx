import { getMinimalNormalNews } from "@/lib/dataFetcher";
import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

const CategoryIdPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const data = await getMinimalNormalNews();
  const { categoryId } = await params;

  const categoryNews = data.filter(
    (item) => item.fields.category[0].fields.slug == categoryId,
  );

  return (
    <section className="container mx-auto min-h-[70vh]">
      <FirstRow categoryNews={categoryNews.slice(0, 3)}/>
      <SecondRow categoryNews={categoryNews.slice(3)}/>
    </section>
  );
};

export default CategoryIdPage;
