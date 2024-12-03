import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
};

module.exports = {
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
