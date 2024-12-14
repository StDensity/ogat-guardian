import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: `Work with us`,
    description: "Info on how to work with us",
    openGraph: {
      title: `Work with us`,
      description: `How to contribute to The Guardian - OGAT News Service.`,
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
    <div className="flex min-h-[70vh] items-center justify-center font-open_sans">
      <div>
        <div className="text-4xl font-bold">Work with us</div>
        <div className="pt-2">
          We are always hiring new reporters, photgraphers,
          <br />
          proofreaders. If you wish to work for <b>The Guardian News</b>
          <br />
          contact: <br />- DOJEGAN; Discord contact{" "}
          <b>
            <i>dojegan</i>
          </b>{" "}
          <br />- The Guardian News; Discord Contact{" "}
          <b>
            <i>theguardiannews</i>
          </b>
        </div>
      </div>
    </div>
  );
};

export default page;
