import { getAllAuthors } from "@/app/lib/dataFetcher";
import React from "react";
import AuthorsRenderer from "./AuthorsRenderer";
import { Metadata } from "next";

// export const generateMetadata = (): Metadata => {
//   return {
//     title: `Authors Page`,
//     description: "Shows the author details",
//     openGraph: {
//       title: `Authors Page`,
//       description: `Open to view the contributors`,
//       images: [
//         {
//           url: "/images/authors.png",
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//   };
// };

// const page = async () => {
//   const authorsData = await getAllAuthors();
//   return (
//     <section className="container mx-auto min-h-[70vh]">
//       <AuthorsRenderer authorsData={authorsData} />
//     </section>
//   );
// };


export const generateMetadata = (): Metadata => {
  const pageTitle = "Meet Our Authors & Contributors | The OGAT Guardian";
  const pageDescription =
    "Discover the talented journalists, editors, and contributors behind The OGAT Guardian's trusted news coverage.";

  return {
    title: pageTitle,
    description: pageDescription,
    keywords:
      "news authors, journalists, contributors, editorial team, OGAT reporters",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/authors`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/authors`,
      type: "website",
      siteName: "The OGAT Guardian",
      images: [
        {
          url: "/images/authors.png",
          width: 1200,
          height: 630,
          alt: "OGAT Guardian Editorial Team",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/images/authors.png"],
      creator: "@OGATGuardian",
    },
  };
};

const page = async () => {
  let authorsData;
  authorsData = await getAllAuthors();

  return (
    <main className="container mx-auto min-h-[70vh] px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Editorial Team</h1>
        <p className="text-xl text-muted-foreground">
          Meet the dedicated professionals bringing you trusted news coverage
        </p>
      </header>

      <section aria-labelledby="authors-list-heading">
        <h2 id="authors-list-heading" className="sr-only">
          List of Authors and Contributors
        </h2>
        <AuthorsRenderer authorsData={authorsData} />
      </section>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: authorsData.map((author: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Person",
              name: author.fields.name,
              description: author.fields.bio,
              image: author.fields.profilePhoto?.fields.file?.url
                ? `https://${author.fields.profilePhoto.fields.file.url}`
                : "/images/authors.png",
              url: `https://yourdomain.com/authors/${author.sys.id}`,
              worksFor: {
                "@type": "NewsMediaOrganization",
                name: "The OGAT Guardian",
              },
            },
          })),
        })}
      </script>
    </main>
  );
};


export default page;
