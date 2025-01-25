import CommunityCard from "@/components/community/CommunityCard";
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
          redirectSrc="https://ogatguardian.vercel.app/community/ogat-chat"
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
