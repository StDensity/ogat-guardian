"use client";
import React, { useRef, useState, useEffect } from "react";

interface VideoCardProps {
  videoSrc: string;
  title: string;
  description: string;
  tag?: string;
  fallbackImg?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoSrc,
  title,
  description,
  tag,
  fallbackImg,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(checkMobile());
  }, []);

  const handlePlay = () => {
    videoRef.current?.play().catch((error) => {
      console.log("Video play failed:", error);
    });
  };

  // Pause
  const handlePause = () => {
    videoRef.current?.pause();
  };

  // Unified event handlers
  const handleStart = () => {
    if (!isMobile) return;
    handlePlay();
  };

  const handleEnd = () => {
    if (!isMobile) return;
    handlePause();
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleFocus = () => !isMobile && handlePlay();
    const handleBlur = () => !isMobile && handlePause();

    const card = cardRef.current;
    card?.addEventListener("focus", handleFocus);
    card?.addEventListener("blur", handleBlur);

    return () => {
      card?.removeEventListener("focus", handleFocus);
      card?.removeEventListener("blur", handleBlur);
    };
  }, [isMobile]);

  return (
    <div
      ref={cardRef}
      tabIndex={0} // Make div focusable
      className="hover:shadow-3xl group relative h-[500px] overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-guardianBlue/50"
      onMouseEnter={!isMobile ? handlePlay : undefined}
      onMouseLeave={!isMobile ? handlePause : undefined}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onFocus={handlePlay}
      onBlur={handlePause}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        poster={fallbackImg}
        autoPlay={isMobile}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/0" />

      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        {tag && (
          <div className="absolute right-4 top-4 rounded-full bg-guardianBlue/90 px-4 py-1.5 font-poppins text-sm">
            {tag}
          </div>
        )}

        <h3 className="font-noto_serif text-3xl font-bold [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]">
          {title}
        </h3>
        <p className="mt-2 font-open_sans text-lg [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%)]">
          {description}
        </p>
      </div>
    </div>
  );
};

const VideoCardsGrid: React.FC<{ cards: VideoCardProps[] }> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <VideoCard key={index} {...card} />
      ))}
    </div>
  );
};

export default VideoCardsGrid;
