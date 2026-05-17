import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Local images ke liye (jo public folder mein hain)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Remote images allow karne ke liye (agar external images use karte ho)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Sabhi domains allow karne ke liye
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    
    // Image optimization settings
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Agar ye warnings aaye toh
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;