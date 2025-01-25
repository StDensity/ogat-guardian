"use client";

import DeveloperCard from "@/components/project-ball/DeveloperCard";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProjectBallPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust 100 to match your header height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="font-open_sans">
      {/* Hero Section with Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background (existing code) */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 z-0 h-full w-full object-cover"
          poster="community/bg-image-fallback.png"
        >
          <source
            src="videos/background_video_project_ball.mp4"
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
              "Could've forced them to make Ogat 2" — a regretful afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <DeveloperCard
            name="Comi"
            role="Lead dev"
            quote="Should've sticked with ogat 2'"
            videoSrc="/videos/juggling.mp4"
            avatarSrc="community/comi.png"
            fallbackImg="community/juggling-fallback.png"
          />

          <DeveloperCard
            name="J"
            role="The new art guy"
            quote="The logo reduces the ball gravity by .6% - trust me bro"
            videoSrc="/videos/ball-physics.mp4"
            avatarSrc="community/jm.png"
            fallbackImg="community/ball-physics-fallback.png"
          />
        </div>
      </section>

      {/* Screenshot Carousel */}
      {/* <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-noto_serif text-3xl font-bold">
            Controversial Logo Sightings
          </h2>

          <div className="scrollbar-hide flex gap-4 overflow-x-scroll pb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative w-80 flex-shrink-0">
                <img
                  src={`https://source.unsplash.com/random/800x600/?football,stadium,${item}`}
                  className="transform rounded-lg shadow-lg transition-transform group-hover:scale-105"
                  alt="Game screenshot"
                />
                <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-black/60 p-4 text-white">
                  <p className="text-sm">
                    Found in{" "}
                    {
                      [
                        "locker room",
                        "ball texture",
                        "crowd banner",
                        "referee shirt",
                      ][item - 1]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Small Interactive Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl rounded-xl bg-guardianBlue/10 p-8">
          <h3 className="mb-4 font-noto_serif text-2xl font-bold">
            Think You Can Spot All the Logos?
          </h3>
          <p className="mb-6">Join our community scavenger hunt:</p>
          <Link
            href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            className="rounded-lg bg-guardianBlue px-8 py-3 text-white transition-colors hover:bg-customDarkBlue"
          >
            Enter Challenge →
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Prize: Eternal glory (and maybe a mousepad)
          </p>
        </div>
      </section>
    </div>
  );
}
