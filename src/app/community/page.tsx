import CommunityCard from "@/components/community/CommunityCard";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

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
          redirectSrc="https://youtu.be/eFWeRl2lHQ8?list=PL_mGAtNQHjQBDBE0BoaPPfIQWq5UMDg7H"
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
    </div>
  );
};

export default page;
