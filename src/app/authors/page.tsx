import { getAllAuthors } from "@/app/lib/dataFetcher";
import React from "react";
import AuthorsRenderer from "./AuthorsRenderer";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Authors Page`,
    description: "Shows the author details",
    openGraph: {
      title: `Authors Page`,
      description: `Open to view the contributors`,
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

const page = async () => {
  const authorsData = await getAllAuthors();
  return (
    <section className="container mx-auto min-h-[70vh]">
      <AuthorsRenderer authorsData={authorsData} />
    </section>
  );
};

export default page;
