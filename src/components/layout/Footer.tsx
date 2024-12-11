import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="h-4 w-full bg-customDarkBlue" />
      <div className="w-full bg-guardianBlue pb-10 pt-4">
        <div className="container mx-auto justify-center gap-24 font-noto_serif text-white md:flex">
          <div className="text-center md:text-left">
            <Link className="" href={"/front-page"}>
              <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
                THE GUARDIAN
              </h1>
              <p className="text-2xl">OGAT NEWS SERVICE</p>
            </Link>
          </div>

          <div className="flex flex-col text-center font-open_sans md:text-left mt-8 md:mt-0">
            <Link className="font-bold hover:underline" href={"/authors"}>
              Contributors <span className="animate-pulse">💖</span>
            </Link>

            <Link className="font-bold hover:underline" href={"/about-us"}>
              About us
            </Link>
            <address>
              The Guardian News ltd. <br />
              Medic Street 14 1000 <br />
              River City
            </address>
          </div>

          <div className="flex flex-col text-center md:text-left mt-8 md:mt-0">
            <Link className="font-bold hover:underline" href={"/about-us"}>
              Terms of Service
            </Link>
            <Link className="font-bold hover:underline" href={"/about-us"}>
              Subscription
            </Link>
            <Link className="font-bold hover:underline" href={"/about-us"}>
              Contact Us
            </Link>
            <Link className="font-bold hover:underline" href={"/about-us"}>
              Digital Archive
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
