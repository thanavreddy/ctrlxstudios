import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'www.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol:'https',
        hostname:'www.thestatesman.com',
        port : '',
        pathname:'/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
