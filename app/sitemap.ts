import { MetadataRoute } from 'next'

import { routes } from '@/constants/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: routes.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: routes.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9
    },
    {
      url: `${routes.baseUrl}/${routes.rules}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${routes.baseUrl}/${routes.map}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: routes.shop,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${routes.baseUrl}/${routes.wiki}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    }
  ]
}
