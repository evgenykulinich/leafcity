import { Header } from '@/components/Header'
import { routes } from '@/constants/routes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Карта',
  description:
    'Интерактивная карта игрового сервера. Узнайте расположение построек и территорий. Полезно для новичков и опытных игроков',
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
  }
}

export default function MapPage() {
  const noCacheUrl = `https://leafcity.ru/backend/survival?nocache=${new Date().getTime()}`

  return (
    <div className="flex h-screen w-screen flex-col overflow-x-hidden">
      <div className="mx-auto w-full max-w-screen-2xl px-4 pt-4 lg:px-8">
        <Header />
      </div>
      <div className="flex-1 overflow-hidden">
        <iframe
          src={noCacheUrl}
          className="h-[calc(100dvh-65px)] w-full border-0 sm:h-full"
          title="Map"
        />
      </div>
    </div>
  )
}
