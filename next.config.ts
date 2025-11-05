/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // DO NOT set output: 'export' (that causes 404s on Vercel for app router)
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.pravatar.cc' } // demo avatars on /board
    ]
  },
  // optional: clean URLs
  trailingSlash: false
};

export default nextConfig;
