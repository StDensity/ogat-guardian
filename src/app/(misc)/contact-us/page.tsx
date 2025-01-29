import DiscordInvite from "@/components/misc/DiscordInvite";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: `Contact Us`,
    description: "How to contact us.",
    openGraph: {
      title: `Contact Us`,
      description: `Contact The OGAT Guardian.`,
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
    <div className="m-8 flex min-h-[70vh] items-center justify-center font-open_sans">
      <div className="">
        <div className="text-xl font-bold">Join us on Discord</div>
        <div className="pb-4">Interact with other Guardian News readers an journalists.</div>
        <DiscordInvite
            imgUrl={"/ogat_guardian_img_small.png"}
            serverName={"The Guardian News"}
            inviteLink={"https://discord.com/invite/y9tQGXnnAe"}
            altText="The Guardian News"
          />
      </div>
    </div>
  );
};

export default page;
