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
        description={'"Forget OGAT 2, the devs are busy redefining gaming\'—are they really nailing it? Lets find out what they’re up to!"'}
        author="Cominu"
        src="/community/bg-image-fallback.png"
        redirectSrc="/project-ball"
        isAffiliated={true}
      />
    </div>
  );
};

export default page;
