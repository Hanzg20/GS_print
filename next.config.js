/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for Cloudflare Pages static site deployment
  images: {
    unoptimized: true,  // Cloudflare Pages doesn't support Next.js image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
