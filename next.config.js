/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to support middleware for multi-domain routing
  // For Cloudflare Pages deployment, we'll use Cloudflare's routing features
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
