import MapFrame from '@/components/map/MapFrame'
import { routes } from '@/constants/routes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Карта',
  description:
    'Интерактивная карта игрового сервера. Узнайте расположение построек и территорий. Полезно для новичков и опытных игроков',
  metadataBase: new URL(routes.baseUrl),
  keywords: [
    'онлайн-карта лиф сити',
    'веб-карта Minecraft',
    'карта сервера лиф сити',
    'карта майнкрафт сервера',
    'миникарта Minecraft',
    'интерактивная карта лиф сити',
    'онлайн карта майнкрафт',
    'карта мира Minecraft',
    'карта выживания лиф сити',
    'навигация на сервере лиф сити'
  ],
  openGraph: {
    title: 'LEAF CITY - Карта',
    images: [
      {
        url: `${routes.baseUrl}/og/map.png`,
        width: 1200,
        height: 630,
        alt: 'LEAF CITY - Карта'
      }
    ],
    description:
      'Интерактивная карта игрового сервера. Узнайте расположение построек и территорий. Полезно для новичков и опытных игроков',
    type: 'website'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'LEAF CITY - Карта'
  }
}

export default function MapPage() {
  return <MapFrame />
}
