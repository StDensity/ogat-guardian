import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  const title = "Work with us - The Guardian News";
  const description =
    "We are always looking for engaging and creative individuals to join our team at The Guardian News. Apply today!";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!

  return {
    title,
    description,
    keywords: [
      "satire news",
      "comedy news",
      "humor",
      "parody news",
      "ogat",
      "ogat news",
      "the guardian news",
    ],
    authors: [{ name: "The Guardian News" }],
    creator: "The Guardian News",
    publisher: "The Guardian News",
    robots: "index, follow",
    alternates: {
      canonical: `${baseUrl}/work-with-us`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${baseUrl}/work-with-us`,
      siteName: "The Guardian News",
      title,
      description,
      images: [
        {
          url: "/ogat_guardian_img.png",
          width: 1200,
          height: 630,
          alt: "The Guardian News",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/ogat_guardian_img.png"],
      creator: "@GuardianNews",
    },
  };
};

const WorkWithUsPage = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center font-open_sans">
      <article className="max-w-2xl px-4">
        <h1 className="text-4xl font-bold">Work with us</h1>
        <section className="mt-6 space-y-4">
          <p className="text-lg">
            We are always hiring new reporters, photographers, and proofreaders.
            Join our team at <strong>The Guardian News</strong> and help us
            create entertaining content.
          </p>

          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <ul className="space-y-3">
              <li>
                <strong>DOJEGAN</strong>
                <br />
                Discord: <em className="font-medium">dojegan</em>
              </li>
              <li>
                <strong>The Guardian News</strong>
                <br />
                Discord: <em className="font-medium">theguardiannews</em>
              </li>
            </ul>
          </div>

          {/* Add structured data for news website */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "The Guardian News",
                url: process.env.NEXT_PUBLIC_BASE_URL,
                description:
                  "A satire news website providing humorous takes on current events",
                genre: "Satire",
                sameAs: ["https://discord.com/theguardiannews"],
                publisher: {
                  "@type": "Organization",
                  name: "The Guardian News",
                  description: "Publishers of satirical news content",
                },
              }),
            }}
          />
        </section>
      </article>
    </main>
  );
};

export default WorkWithUsPage;
