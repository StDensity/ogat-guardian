import React from 'react';

interface AdBadgeProps {
  children: React.ReactNode;
}

const AdBadge: React.FC<AdBadgeProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute top-2 z-0 rounded-lg  bg-[#4fd1c5] px-2 pb-2 text-white">
        Advert
      </div>
      <div className="relative z-10 pt-5">{children}</div>
    </div>
  );
};

export default AdBadge;