import { getDetailedNormalNewsById } from "@/lib/dataFetcher";
import React from "react";
import ArticleViewer from "./ArticleViewer";

const ArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const newsData = await getDetailedNormalNewsById(id);
  
  return (
    <section className="container mx-auto min-h-[70vh]">
      <ArticleViewer newsData={newsData} />
    </section>
  );
};

export default ArticlePage;
