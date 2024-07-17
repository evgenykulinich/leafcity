import { MetadataRoute } from 'next'

import { routes } from '@/constants/routes'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/map'],
      disallow: []
    },
    sitemap: `${routes.baseUrl}/sitemap.xml`
  }
}
