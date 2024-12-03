import React from "react";
import { ModeToggle } from "../theme/ModeToggle";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

const Header = () => {
   return (
      <header >
         {/* Top Header */}
         <div className="bg-[#1D4A90] text-white  font-poppins text-md">
            <div className="container mx-auto flex justify-end py-1 space-x-3 px-1 ">
               <Link href="/work-with-us" className="hover:underline">
                  WORK WITH US
               </Link>
               <span>|</span>
               <Link href="/subscribe" className="hover:underline">
                  SUBSCRIBE
               </Link>
               <span>|</span>
               <Link
                  href="/sign-in"
                  className="hover:underline flex items-center"
               >
                  SIGN IN{" "}
                  <span className="pl-2">
                     <CircleUserRound />
                  </span>
               </Link>
            </div>
         </div>

         {/* Main Header */}
         <div className="bg-[#288BDE] text-white py-6 font-noto_serif px-1">
            <div className="container mx-auto">
               <h1 className="text-4xl font-bold">THE GUARDIAN</h1>
               <p className="text-lg">OGAT NEWS SERVICE</p>
            </div>
         </div>
      </header>
   );
};

export default Header;
