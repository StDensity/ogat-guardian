import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: `TOS`,
    description: "OGAT Guardian TOS",
    openGraph: {
      title: `TOS`,
      description: `Terms of Service - OGAT Guardian`,
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
  const tos = [
    "Registration: Access to the Guardian News requires an invitation to become a subscribed reader.",
    "Termination of Registration: Users can leave the Guardian News Discord server to terminate their registration.",
    "Use of Material: - You may download and print extracts, but must mention the original author. - Content is for general informational and entertainment purposes only.",
    "Disclaimer of Liability: The Guardian News does not accept responsibility for statements made. Nothing is provided for any specific purpose.",
    "Third-Party Advertising: You may see ads from official sponsors like Packer and Movers Inc. and Zongyi's Wooden Flooring Co.",
    "User Content: Interactions are governed by the Community Standards and Participation Guidelines.",
  ];

  return (
    <div className="m-8 flex min-h-[70vh] items-center justify-center font-open_sans">
      <div>
        <div className="mb-4 text-xl font-bold">Terms of Service</div>
        <div>
          <ol className="list-decimal space-y-4 pl-6">
            {tos.map((terms, index) => (
              <li key={index} className="text-base">
                {terms}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default page;
