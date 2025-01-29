import CommunityCard from "@/components/community/CommunityCard";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OGAT Community Hub | Podcast, Hacks & Developer Projects",
  description:
    "Explore OGAT's vibrant community resources - featuring the official OGATCHAT podcast, OGATHAX strategy hub, and exclusive insights into Project Ball's development. Connect with creators like LickTheTaint, Stevie, and Cominu.",
  keywords: [
    "OGAT community",
    "OGATHAX tips",
    "Project Ball development",
    "OGAT podcast",
    "Of Guards and Thieves resources",
    "LickTheTaint",
    "Cominu",
    "OGAT hacking community",
  ],
  openGraph: {
    title: "OGAT Community Hub | Podcast, Hacks & Developer Projects",
    description:
      "Dive into OGAT's underground - from Stevie's OGATHAX strategies to Cominu's Project Ball teasers and the chaotic OGATCHAT podcast",
    url: "/community",
    type: "website",
    siteName: "OGAT Community",
    locale: "en_US",
    images: [
      {
        url: "/community/community-metadata-img.png",
        width: 1200,
        height: 630,
        alt: "OGAT community collage showing podcast art, hack site interface, and Project Ball preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGAT Underground - Community Resources Hub",
    description:
      "Where hackers, podcasters, and rogue developers collide - explore OGATHAX, OGATCHAT, and Project Ball secrets",
    images: ["/community/community-metadata-img.png"],
    creator: "@OGATCommunity",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/community`,
  },
};

const CommunityPage = () => {
  const communityResources = [
    {
      title: "Project Ball",
      description:
        '"Forget OGAT 2, the devs are busy redefining gaming\'—are they really nailing it? Lets find out what they are up to!"',
      author: "Cominu",
      src: "/community/bg-image-fallback.png",
      redirectSrc: "/community/project-ball",
      isAffiliated: true,
    },
    {
      title: "OGATHAX.org",
      description:
        '"The best place to find tips, tricks, and cheats for Of Guards and Thieves!"',
      author: "Stevie",
      src: "/community/ogathax-frontpage-full.png",
      redirectSrc: "https://www.ogathax.org",
    },
    {
      title: "OGAT Chat",
      description:
        '"Dive into 15+ episodes of chaotic OGAT coverage. Hosted by Ty (Lick_the_Taint) and Kyle (CallofKyle) - from serious game updates to snack tier lists. Features the legendary Bug of the Week segment and special guests!"',
      author: "LickTheTaint",
      src: "/community/ogat-chat-full.png",
      redirectSrc: "/community/ogat-chat",
    },
  ];

  return (
    <main className="container mx-auto space-y-12 px-4 py-8">
      {communityResources.map((resource, index) => (
        <section key={resource.title} className={index === 2 ? "pb-8" : ""}>
          <CommunityCard
            title={resource.title}
            useIframe={false}
            description={resource.description}
            author={resource.author}
            src={resource.src}
            redirectSrc={resource.redirectSrc}
            isAffiliated={resource.isAffiliated}
          />
        </section>
      ))}

      {/* Add structured data for organization and content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "OGAT Community Hub",
            description:
              "A hub for OGAT community resources including Project Ball, OGATHAX, and OGAT Chat podcast",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/community`,
            hasPart: [
              {
                "@type": "WebSite",
                name: "Project Ball",
                author: { "@type": "Person", name: "Cominu" },
                description: "Project Ball development insights and updates",
              },
              {
                "@type": "WebSite",
                name: "OGATHAX.org",
                author: { "@type": "Person", name: "Stevie" },
                description: "Strategy hub for Of Guards and Thieves",
              },
              {
                "@type": "PodcastSeries",
                name: "OGAT Chat",
                author: { "@type": "Person", name: "LickTheTaint" },
                description:
                  "Official OGAT community podcast with game updates and special segments",
              },
            ],
          }),
        }}
      />
    </main>
  );
};

export default CommunityPage;
