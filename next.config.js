/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'placehold.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Build time pe eslint errors ignore karne ke liye
  },
  typescript: {
    ignoreBuildErrors: true, // TypeScript errors ignore karne ke liye
  },
  output: 'standalone', // Vercel deploy ke liye optimize
}

module.exports = nextConfig