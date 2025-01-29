// import { Metadata } from "next";
// import React from "react";

// export const generateMetadata = (): Metadata => {
//   return {
//     title: `TOS`,
//     description: "OGAT Guardian TOS",
//     openGraph: {
//       title: `TOS`,
//       description: `Terms of Service - OGAT Guardian`,
//       images: [
//         {
//           url: "/ogat_guardian_img.png",
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//   };
// };

// const page = () => {
//   const tos = [
//     "Registration: Access to the Guardian News requires an invitation to become a subscribed reader.",
//     "Termination of Registration: Users can leave the Guardian News Discord server to terminate their registration.",
//     "Use of Material: - You may download and print extracts, but must mention the original author. - Content is for general informational and entertainment purposes only.",
//     "Disclaimer of Liability: The Guardian News does not accept responsibility for statements made. Nothing is provided for any specific purpose.",
//     "Third-Party Advertising: You may see ads from official sponsors like Packer and Movers Inc. and Zongyi's Wooden Flooring Co.",
//     "User Content: Interactions are governed by the Community Standards and Participation Guidelines.",
//   ];

//   return (
//     <div className="m-8 flex min-h-[70vh] items-center justify-center font-open_sans">
//       <div>
//         <div className="mb-4 text-xl font-bold">Terms of Service</div>
//         <div>
//           <ol className="list-decimal space-y-4 pl-6">
//             {tos.map((terms, index) => (
//               <li key={index} className="text-base">
//                 {terms}
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => {
  const pageTitle = "Terms of Service | The OGAT Guardian - Official Policies";
  const pageDescription = "Review the official Terms of Service for The OGAT Guardian covering user registration, content usage, liabilities, advertising policies, and community guidelines.";
  const imageUrl = "/ogat_guardian_img.png";

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: "OGAT terms of service, news platform policies, user agreement, content usage guidelines, legal disclaimer",
    alternates: {
      canonical: "https://yourdomain.com/tos",
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "article",
      siteName: "The OGAT Guardian",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "OGAT Guardian Terms of Service",
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
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
    <main className="m-8 flex min-h-[70vh] items-center justify-center font-open_sans">
      <article itemScope itemType="https://schema.org/Article">
        <div itemScope itemType="https://schema.org/WebPage">
          <header className="mb-6">
            <h1 itemProp="headline" className="mb-4 text-2xl font-bold md:text-3xl">
              Terms of Service
            </h1>
          </header>
          
          <div itemProp="articleBody">
            <ol className="list-decimal space-y-4 pl-6">
              {tos.map((terms, index) => (
                <li 
                  key={index} 
                  className="text-base"
                  itemProp="text"
                >
                  {terms}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Terms of Service",
            "description": "Official policies and user agreement for The OGAT Guardian",
            "datePublished": "2023-01-01", // Update with actual date
            "publisher": {
              "@type": "Organization",
              "name": "The OGAT Guardian",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yourdomain.com/logo.png"
              }
            }
          })}
        </script>
      </article>
    </main>
  );
};

export default page;