import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: `About Us`,
    description: "Info and history of The OGAT Guardian",
    openGraph: {
      title: `About Us`,
      description: `Info and history of THe OGAT Guardian.`,
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
    <div className="flex min-h-[80vh] items-center justify-center font-open_sans">
      <div className="m-8 max-w-[840px] rounded-md bg-gradient-to-b from-slate-200 to-blue-200 shadow-lg shadow-blue-100">
        <div className="m-0.5 rounded-md bg-gray-50 p-8">
          <div className="text-2xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Welcome dear reader to OGAT premiere news service
          </div>
          <div className="pb-4 pt-8 text-xl font-bold text-guardianBlue sm:text-3xl lg:text-4xl">
            The Guardian News
          </div>
          <div className="space-y-8 text-sm sm:text-base">
            <div>
              A news service providing you with the latest OGAT news. We delve
              deep into conspiracies, scandals and put the lives of our
              journalists on the line to provide our readers with the most
              accurate and factual OGAT news experience they can get.
            </div>
            <div>
              The Guardian News opened the first offices in the year 2016 on old{" "}
              <a
                className="text-guardianBlue hover:underline"
                href="http://www.subvertgames.com/community/t/6366492115337216?p=1"
              >
                OGAT forums
              </a>
              . As the first OGAT newspaper The Guardian quickly gained new
              readers. We were first to report about the first OGAT election and
              about countless murders, robberies and scandals that occur daily
              in OGAT.
            </div>
            <div>
              Then it moved to{" "}
              <a
                className="text-guardianBlue hover:underline"
                href="https://theogatguardian.wixsite.com/home"
              >
                Guardian News Wixsite
              </a>
              . As the Wixsite became outdated and difficult to manage, we moved
              it here.
            </div>
            <div>
              Today The Guardian News is one of the most read OGAT newspapers,
              with a large and dedicated team of journalists bringing you the
              most exciting news.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
