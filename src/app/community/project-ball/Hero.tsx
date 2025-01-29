"use client"

// import { getAsset } from "node:sea";
import React from "react";
import { useState, useEffect } from "react";
// import { getAssetById } from "../lib/dataFetcher";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
//   const [videoSrc, setVideoSrc] = useState("");
  

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust 100 to match your header height
    };

    // getVideoSrc();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background (existing code) */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 z-0 h-full w-full object-cover"
        poster="/community/bg-image-fallback.png"
      >
        <source
          src={"https://videos.ctfassets.net/blh9d07agz8n/5aJFEhogD4Vm8ZngPXK7Jj/9fbabcfced406c0b0b17ca9cae158f4c/Background_Video_Project_Ball.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay (existing code) */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Modified Content Section */}
      <div className="relative z-20 flex h-full items-center justify-center text-center">
        <div
          className={`max-w-4xl px-4 transition-all duration-500 ${
            isScrolled
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="mb-6 font-noto_serif text-4xl font-bold text-white md:text-6xl">
            <span className="text-guardianBlue">Project Ball</span> Developers
            Forced to Include
            <br />
            <span className="text-white">Ogat Guardian Logo</span>
          </h1>
          <p className="mt-8 font-poppins text-lg italic text-gray-200 md:text-xl">
            &quot;Could&#39;ve forced them to make Ogat 2!&quot; — a regretful
            afterthought.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
