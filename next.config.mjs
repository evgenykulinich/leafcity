/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['leafcity.ru']
  },
  async redirects() {
    return [
      {
        source: '/wiki',
        destination: '/wiki/start/info',
        permanent: false
      }
    ]
  }
}

export default nextConfig
