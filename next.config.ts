/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // export static HTML
  images: { unoptimized: true }, // GitHub Pages doesn't handle Next.js image optimization
  basePath: '/portfolio', // ⚠️ replace with your repo name
  assetPrefix: '/portfolio/',
};

module.exports = nextConfig;
