import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript type checking during builds
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        //  port: '',
        //  pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        //  port: '',
        //  pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
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
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
