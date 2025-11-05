/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.pravatar.cc' } // demo avatars on /board
    ]
  },
  // optional: clean URLs
  trailingSlash: false
};

export default nextConfig;
