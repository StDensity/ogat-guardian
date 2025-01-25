// components/DeveloperCard.tsx
import Image from "next/image";
import React from "react";

interface DeveloperCardProps {
  name: string;
  role: string;
  quote: string;
  videoSrc: string;
  avatarSrc: string;
  fallbackImg: string;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  name,
  role,
  quote,
  videoSrc,
  avatarSrc,
  fallbackImg
}) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
      {/* Video Background Container */}
      <div className="relative h-48 bg-gray-900">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
          poster={fallbackImg}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />

        {/* Avatar Centered Over Video */}
        <div className="absolute top-3/4 ml-20 mt-10 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={avatarSrc}
            className="h-24 w-24 rounded-full border-4 border-guardianBlue"
            alt={name}
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6 text-center">
        <h3 className="font-poppins text-xl font-bold">{name}</h3>
        <p className="mb-3 text-gray-600">{role}</p>
        <blockquote className="border-l-4 border-guardianBlue pl-4 italic text-gray-800">
        &quot;{quote}!&quot;
        </blockquote>
      </div>
    </div>
  );
};

export default DeveloperCard;
