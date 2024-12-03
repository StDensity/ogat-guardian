import React from "react";
import { ModeToggle } from "../theme/ModeToggle";
import { CircleUserRound, Menu } from "lucide-react";
import Link from "next/link";
import TopHeaderDropdown from "./TopHeaderDropdown";

const Header = () => {
  return (
    <header>
      {/* Top Header */}
      <div className="text-md bg-[#1D4A90] px-1 font-poppins text-white">
        {/* container mx-auto flex justify-end py-1 space-x-3 px-1 */}

        {/* Small screen */}

        <div className="flex justify-end py-1 sm:hidden">
          <TopHeaderDropdown />
        </div>

        <div className="container mx-auto hidden justify-end space-x-3 px-1 py-1 sm:flex">
          <Link href="/work-with-us" className="hover:underline">
            WORK WITH US
          </Link>
          <span>|</span>
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
          <h1 className="text-4xl font-bold">THE GUARDIAN</h1>
          <p className="text-lg">OGAT NEWS SERVICE</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
