/** @type {import('next').NextConfig} */
const nextConfig = {
  // 'output: export' removed — middleware requires server runtime (Vercel handles Next.js natively)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
