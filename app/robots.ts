import { MetadataRoute } from 'next'

import { routes } from '@/constants/routes'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/rules', '/map', '/wiki', '/gallery'],
      disallow: []
    },
    sitemap: `${routes.baseUrl}/sitemap.xml`
  }
}
