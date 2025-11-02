import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow remote images for avatars
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
};

export default nextConfig;
