import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CommunityCardProps {
  useIframe: boolean;
  src: string;
  title: string;
  author: string;
  description: string;
  redirectSrc: string;
}

const CommunityCard = ({
  src,
  title,
  author,
  description,
  redirectSrc,
}: CommunityCardProps) => {
  return (
    <div>
      <div className="rounded-lg bg-gradient-to-b from-slate-200 to-blue-200 p-0.5 shadow-lg shadow-blue-100">
        <div className="flex flex-col gap-8 rounded-lg bg-gray-100 p-2 md:flex-row">
          {/* About */}
          <div className="flex flex-col justify-between p-10 md:w-1/2">
            <div className="">
              <h2 className="mb-4 text-3xl font-bold hover:underline">
                <Link href={redirectSrc}>{title}</Link>
              </h2>
              <div className="text-gray-700">
                <p className="font-bold">Author: {author}</p>
                <p className="pt-10 italic">{description}</p>
              </div>
            </div>
            <div className="pt-5 text-sm italic text-gray-500">
              Note: OGAT Guardian is not affiliated with {title} (We would love
              to). We are just journalists and fans.
            </div>
          </div>
          {/* Iframe of the webpage */}
          <div className="md:w-1/2">
            <div className="scrollbar-hidden max-h-[352px] cursor-pointer overflow-x-hidden overflow-y-scroll rounded-lg">
              <Link href={redirectSrc}>
                <Image
                  className="transition-transform duration-500 hover:scale-105 hover:transform"
                  src={src}
                  height={1000}
                  width={1000}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
