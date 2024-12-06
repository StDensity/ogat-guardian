import { getAllAuthors } from "@/app/lib/dataFetcher";
import React from "react";
import AuthorsRenderer from "./AuthorsRenderer";

const page = async () => {
  const authorsData = await getAllAuthors();
  return (
    <section className="container mx-auto min-h-[70vh]">
      <AuthorsRenderer authorsData={authorsData} />
    </section>
  );
};

export default page;
