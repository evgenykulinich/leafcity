import { Copyright } from '@/components/common/Copyright'
import { Header } from '@/components/common/Header'
import { PageTitle } from '@/components/common/PageTitle'
import { ProductsList } from '@/components/shop/ProductsList'
import { routes } from '@/constants/routes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Магазин',
  description: 'Лучший способ выделить себя и поддержать проект',
  metadataBase: new URL(routes.baseUrl),
  keywords: [
    'магазин лиф сити',
    'магазин Minecraft',
    'проходка сервера лиф сити',
    'магазин майнкрафт сервера',
    'подписка Minecraft',
    'иконки лиф сити',
    'онлайн магазин майнкрафт',
    'эффекты Minecraft',
    'эффекты лиф сити',
    'проходка на сервере лиф сити',
    'разбан лиф сити'
  ],
  openGraph: {
    title: 'LEAF CITY - Магазин',
    images: [
      {
        url: `${routes.baseUrl}/og/shop.png`,
        width: 1200,
        height: 630,
        alt: 'LEAF CITY - Магазин'
      }
    ],
    description: 'Лучший способ выделить себя и поддержать проект',
    type: 'website'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'LEAF CITY - Магазин'
  }
}

export default function Shop() {
  return (
    <section className="mx-auto flex min-h-dvh max-w-screen-2xl flex-col justify-between px-4 lg:px-8">
      <Header />
      <PageTitle>
        Лучший способ <span className="text-green">выделить</span> себя и{' '}
        <span className="text-blue">поддержать</span> проект
      </PageTitle>
      <div className="flex-grow">
        <ProductsList />
      </div>
      <Copyright />
    </section>
  )
}
