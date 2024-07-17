import { MetadataRoute } from 'next'

import { routes } from '@/constants/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: routes.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly'
    },
    {
      url: routes.discord,
      lastModified: new Date(),
      changeFrequency: 'yearly'
    },
    {
      url: routes.map,
      lastModified: new Date(),
      changeFrequency: 'monthly'
    },
    {
      url: routes.shop,
      lastModified: new Date(),
      changeFrequency: 'monthly'
    },
    {
      url: routes.wiki,
      lastModified: new Date(),
      changeFrequency: 'monthly'
    }
  ]
}
