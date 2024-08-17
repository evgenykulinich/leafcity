/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leafcity.ru',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/wiki',
        destination: '/wiki/start/info',
        permanent: false
      },
      {
        source: '/wiki/start',
        destination: '/wiki/start/info',
        permanent: false
      },
      {
        source: '/wiki/features',
        destination: '/wiki/features/worlds',
        permanent: false
      },
      {
        source: '/wiki/manuals',
        destination: '/wiki/manuals/commands',
        permanent: false
      }
    ]
  }
}

export default nextConfig
