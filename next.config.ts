import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',       // enables static export
  images: {
    unoptimized: true,    // required for GitHub Pages
  },
  basePath: '/portfolio',  
};

module.exports = nextConfig;
