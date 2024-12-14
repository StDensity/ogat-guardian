import Image from "next/image";
import React from "react";

const DiscordInvite = () => {
  return (
    <div>
      <div className="bg-gray-200 p-2">
        <div className="font-bold text-gray-400">
          You have been invited to join a server
        </div>
        <div className="flex items-center justify-between gap-4 px-4 py-2">
          <div>
            <Image
              className="rounded-lg"  
              src={"/ogat_guardian_img_small.png"}
              height={100}
              width={100}
              alt="Ogat Guardian Logo"
            />
          </div>
          <div>
            <div className="text-lg font-bold">The Guardian News</div>
            <div>🟢 Online</div>
          </div>
          <div className="">
            <a
              className="hover:brightness-70 bg-gray-400 px-6 py-4"
              href="https://discord.com/invite/y9tQGXnnAe"
            >
              Join
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordInvite;
