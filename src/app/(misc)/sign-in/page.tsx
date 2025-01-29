// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Metadata } from "next";
// import Link from "next/link";
// import React from "react";

// export const generateMetadata = (): Metadata => {
//   return {
//     title: `Signin`,
//     description: "Signin to The OGAT Guardian",
//     openGraph: {
//       title: `Signin`,
//       description: `Signin to The OGAT Guardian.`,
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
//     <div className="flex min-h-[70vh] items-center justify-center">
//       <div className="space-y-4">
//         <div className="text-2xl font-bold">Sign in to Guardian News</div>
//         <div className="space-y-2">
//           <Input placeholder="Email" />
//           <Input placeholder="Password" />
//           <Button className="w-full bg-guardianBlue hover:bg-customDarkBlue">
//             Sign in
//           </Button>
//         </div>
//         <div className="flex justify-between">
//           <Link className="text-guardianBlue" href={"/sign-in"}>
//             Forgot Password
//           </Link>
//           <Link className="text-guardianBlue" href={"/sign-in"}>
//             Create Account
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const generateMetadata = (): Metadata => {
  const title = "Sign in to Guardian News";
  const description = "Access your Guardian News account to manage your profile and preferences";
  
  return {
    title,
    description,
    robots: "noindex, nofollow", // Prevent indexing of auth pages
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/ogat_guardian_img.png",
          width: 1200,
          height: 630,
          alt: "Guardian News Logo"
        },
      ],
    },
  };
};

const SignInPage = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6">Sign in to Guardian News</h1>
        <form className="space-y-4" aria-label="Sign in form">
          <div className="space-y-2">
            <label htmlFor="email" className="sr-only">Email</label>
            <Input 
              id="email"
              type="email"
              placeholder="Email"
              required
              aria-required="true"
            />
            
            <label htmlFor="password" className="sr-only">Password</label>
            <Input 
              id="password"
              type="password"
              placeholder="Password"
              required
              aria-required="true"
            />
            
            <Button className="w-full bg-guardianBlue hover:bg-customDarkBlue">
              Sign in
            </Button>
          </div>

          <div className="flex justify-between text-sm">
            <Link 
              href="/forgot-password"
              className="text-guardianBlue hover:underline"
              aria-label="Reset your password"
            >
              Forgot Password
            </Link>
            <Link 
              href="/register"
              className="text-guardianBlue hover:underline"
              aria-label="Create a new account"
            >
              Create Account
            </Link>
          </div>
        </form>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Sign in to Guardian News",
              "description": "Access your Guardian News account",
              "significantLink": [
                {
                  "@type": "LinkRole",
                  "url": "/forgot-password",
                  "name": "Forgot Password"
                },
                {
                  "@type": "LinkRole",
                  "url": "/register",
                  "name": "Create Account"
                }
              ]
            })
          }}
        />
      </div>
    </main>
  );
};

export default SignInPage;