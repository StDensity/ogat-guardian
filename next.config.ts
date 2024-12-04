import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
};

module.exports = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
         //  port: '',
         //  pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
         //  port: '',
         //  pathname: '/account123/**',
        },
      ],
    },
   async redirects() {
      return [
         // Basic redirect
         {
            source: "/",
            destination: "/front-page",
            permanent: true,
         },
      ];
   },
};

export default nextConfig;

