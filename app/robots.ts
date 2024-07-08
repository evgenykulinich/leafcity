import { MetadataRoute } from 'next'

import { url } from '@/constants/translation'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/map'],
      disallow: []
    },
    sitemap: `${url.baseUrl}/sitemap.xml`
  }
}
