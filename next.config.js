/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    unoptimized: true,
  },
  redirects: async () => {
    return [
      {
        source: '/yellow-paper.pdf',
        destination: 'https://yellow-paper.arweave.dev/',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
