import { MetadataRoute } from 'next'

import { url } from '@/constants/translation'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url.domain,
      lastModified: new Date(),
      changeFrequency: 'yearly'
    },
    {
      url: url.discord,
      lastModified: new Date(),
      changeFrequency: 'yearly'
    },
    {
      url: url.map,
      lastModified: new Date(),
      changeFrequency: 'monthly'
    },
    {
      url: url.shop,
      lastModified: new Date(),
      changeFrequency: 'monthly'
    },
    {
      url: url.wiki,
      lastModified: new Date(),
      changeFrequency: 'monthly'
    }
  ]
}
