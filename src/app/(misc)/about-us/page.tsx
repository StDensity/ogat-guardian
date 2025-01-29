import Testimonial from "@/components/misc/Testimonials";
import { Metadata } from "next";
import React from "react";

// export const generateMetadata = (): Metadata => {
//   return {
//     title: `About Us`,
//     description: "Info and history of The OGAT Guardian",
//     openGraph: {
//       title: `About Us`,
//       description: `Info and history of THe OGAT Guardian.`,
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
//   return (
//     <div className="flex min-h-[80vh] items-center justify-center font-open_sans">
//       <div className="m-8 max-w-[840px] rounded-md bg-gradient-to-b from-slate-200 to-blue-200 shadow-lg shadow-blue-100">
//         <div className="m-0.5 rounded-md bg-gray-50 p-8">
//           <div className="text-2xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
//             Welcome dear reader to OGAT premiere news service
//           </div>
//           <div className="pb-4 pt-8 text-xl font-bold text-guardianBlue sm:text-3xl lg:text-4xl">
//             The Guardian News
//           </div>
//           <div className="space-y-8 text-sm sm:text-base">
//             <div>
//               A news service providing you with the latest OGAT news. We delve
//               deep into conspiracies, scandals and put the lives of our
//               journalists on the line to provide our readers with the most
//               accurate and factual OGAT news experience they can get.
//             </div>
//             <div>
//               The Guardian News opened the first offices in the year 2016 on old{" "}
//               <a
//                 className="text-guardianBlue hover:underline"
//                 href="http://www.subvertgames.com/community/t/6366492115337216?p=1"
//               >
//                 OGAT forums
//               </a>
//               . As the first OGAT newspaper The Guardian quickly gained new
//               readers. We were first to report about the first OGAT election and
//               about countless murders, robberies and scandals that occur daily
//               in OGAT.
//             </div>
//             <div>
//               Then it moved to{" "}
//               <a
//                 className="text-guardianBlue hover:underline"
//                 href="https://theogatguardian.wixsite.com/home"
//               >
//                 Guardian News Wixsite
//               </a>
//               . As the Wixsite became outdated and difficult to manage, we moved
//               it here.
//             </div>
//             <div>
//               Today The Guardian News is one of the most read OGAT newspapers,
//               with a large and dedicated team of journalists bringing you the
//               most exciting news.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const generateMetadata = (): Metadata => {
  const pageTitle =
    "About The OGAT Guardian | History & Mission | Trusted News Source";
  const pageDescription =
    "Discover the history and mission of The OGAT Guardian, your premier source for investigative journalism in OGAT since 2016. Learn about our commitment to factual reporting.";
  const imageUrl = "/ogat_guardian_about.png"; // Consider creating an about-specific image

  return {
    title: pageTitle,
    description: pageDescription,
    keywords:
      "OGAT news history, about our newspaper, investigative journalism, OGAT media, Guardian mission",
    alternates: {
      canonical: "https://yourdomain.com/about",
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: "https://yourdomain.com/about",
      type: "website",
      siteName: "The OGAT Guardian",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "The OGAT Guardian News Team - About Us",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
      creator: "@OGATGuardian",
    },
  };
};

const AboutSchema = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsMediaOrganization",
      name: "The OGAT Guardian",
      description:
        "Premier investigative news service covering OGAT conspiracies, scandals, and daily events",
      foundingDate: "2016",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png",
        width: 600,
        height: 60,
      },
      sameAs: [
        "https://twitter.com/OGATGuardian",
        "https://facebook.com/OGATGuardian",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@yourdomain.com",
        contactType: "customer service",
      },
    })}
  </script>
);

const page = () => {
  return (
    <main className="flex flex-col min-h-[80vh] items-center justify-center font-open_sans">
      <AboutSchema />
      <article className="m-8 max-w-[840px] rounded-md bg-gradient-to-b from-slate-200 to-blue-200 shadow-lg shadow-blue-100">
        <div className="m-0.5 rounded-md bg-gray-50 p-8">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Welcome to OGAT&apos;s Premier News Service
            </h1>
          </header>

          <section aria-labelledby="mission-heading">
            <div>
              A news service providing you with the latest OGAT news. We delve
              deep into conspiracies, scandals and put the lives of our
              journalists on the line to provide our readers with the most
              accurate and factual OGAT news experience they can get.
            </div>
            <div className="pt-2">
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
            <div className="pt-2">
              Today The Guardian News is one of the most read OGAT newspapers,
              with a large and dedicated team of journalists bringing you the
              most exciting news.
            </div>
          </section>
        </div>
      </article>
      <section aria-labelledby="Testimonials">
        <Testimonial
          name="Comi, Developer OGAT"
          quote="How's my favorite newspaper going?"
        />
      </section>
    </main>
  );
};

export default page;
