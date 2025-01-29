import DiscordInvite from "@/components/misc/DiscordInvite";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: `Subscribe`,
    description: "Subscribe to The OGAT Guardian",
    openGraph: {
      title: `Subscribe`,
      description: `Subscribe to THe OGAT Guardian newsletter.`,
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

const page = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="space-y-3">
        <div className="items-center">
          <div className="text-2xl font-bold">
            Subscribe to The Guardian News
          </div>
          <div className="text-center">Never Miss News Again</div>
        </div>
        <div className="space-y-3">
          <Input placeholder="OGAT Username" />
          <Input placeholder="Email" />
          <Button className="w-full" title="Subscribe">
            Subscribe
          </Button>
        </div>

        <div>
          <DiscordInvite
            imgUrl={"/ogat_guardian_img_small.png"}
            serverName={"The Guardian News"}
            inviteLink={"https://discord.com/invite/y9tQGXnnAe"}
            altText="The Guardian News"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
