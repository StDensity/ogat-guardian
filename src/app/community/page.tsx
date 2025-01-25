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
  },
};

const page = () => {
  return (
    <div className="container mx-auto space-y-12 px-4 py-8">
      {/* OGAT Podcast */}
      <div>
        <CommunityCard
          title="OGAT Chat"
          useIframe={false}
          description='"The best OGAT podcast in the interweb"'
          author="LickTheTaint"
          src="/community/ogat-chat-full.png"
          redirectSrc="/community/ogat-chat"
        />
      </div>

      {/* OGATHAX */}
      <CommunityCard
        title="OGATHAX.org"
        useIframe={false}
        description='"The best place to find tips, tricks, and cheats for Of Guards and Thieves!"'
        author="Stevie"
        src="/community/ogathax-frontpage-full.png"
        redirectSrc="https://www.ogathax.org"
      />

      {/* Project Ball */}
      <CommunityCard
        title="Project Ball"
        useIframe={false}
        description={
          '"Forget OGAT 2, the devs are busy redefining gaming\'—are they really nailing it? Lets find out what they’re up to!"'
        }
        author="Cominu"
        src="/community/bg-image-fallback.png"
        redirectSrc="/project-ball"
        isAffiliated={true}
      />
    </div>
  );
};

export default page;
