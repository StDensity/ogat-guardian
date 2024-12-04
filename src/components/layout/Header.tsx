import React from "react";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* Top Header */}
      <div className="text-md bg-[#1D4A90] px-1 font-poppins text-white">
        {/* container mx-auto flex justify-end py-1 space-x-3 px-1 */}

        <div className="container mx-auto flex justify-end space-x-3 px-1 py-1 text-lg font-bold">
          <Link
            href="/work-with-us"
            className="hidden hover:underline sm:block"
          >
            WORK WITH US
          </Link>
          <span className="hidden sm:block">|</span>
          <Link href="/subscribe" className="hover:underline">
            SUBSCRIBE
          </Link>
          <span>|</span>
          <Link href="/sign-in" className="flex items-center hover:underline">
            SIGN IN{" "}
            <span className="pl-2">
              <CircleUserRound />
            </span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#288BDE] px-1 py-6 font-noto_serif text-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-8xl">
            THE GUARDIAN
          </h1>
          <p className="text-2xl">OGAT NEWS SERVICE</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
