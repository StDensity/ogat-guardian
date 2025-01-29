import Image from "next/image";
import React from "react";

interface DiscordInviteProps {
  imgUrl: string;
  serverName: string;
  inviteLink: string;
  altText: string;
}

const DiscordInvite = (props: DiscordInviteProps) => {
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
              src={props.imgUrl}
              height={100}
              width={100}
              alt={props.altText}
            />
          </div>
          <div>
            <div className="text-lg font-bold">{props.serverName}</div>
            <div>🟢 Online</div>
          </div>
          <div className="">
            <a
              className="hover:brightness-70 bg-gray-400 px-6 py-4"
              href={props.inviteLink}
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
