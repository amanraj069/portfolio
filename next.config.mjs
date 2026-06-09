/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    qualities: [70],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
