import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const generateMetadata = (): Metadata => {
  return {
    title: `Signin`,
    description: "Signin to The OGAT Guardian",
    openGraph: {
      title: `Signin`,
      description: `Signin to The OGAT Guardian.`,
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
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="space-y-4">
        <div className="text-2xl font-bold">Sign in to Guardian News</div>
        <div className="space-y-2">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button className="w-full bg-guardianBlue hover:bg-customDarkBlue">
            Sign in
          </Button>
        </div>
        <div className="flex justify-between">
          <Link className="text-guardianBlue" href={"/sign-in"}>
            Forgot Password
          </Link>
          <Link className="text-guardianBlue" href={"/sign-in"}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
