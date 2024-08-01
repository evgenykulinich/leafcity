import { Montserrat } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import { routes } from '@/constants/routes'
import YandexMetrika from '@/app/YandexMetrika'
import Providers from '@/components/ProgressBarProvider'

import type { Metadata } from 'next'

import './globals.css'

const font = Montserrat({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: {
    default: 'LEAF CITY - Ванильное выживание',
    template: `LEAF CITY - %s`
  },
  description:
    'Уникальный ванильный сервер, нацеленный на выживание и ламповое общение, без привата и платных преимуществ',
  metadataBase: new URL(routes.baseUrl),
  keywords: [
    'minecraft',
    'vanilla',
    'leafcity',
    'leafcity minecraft',
    'leaf city minecraft',
    'leafcity minecraft server',
    'leaf city',
    'leaf city minecraft',
    'лиф сити',
    'лиф сити маин',
    'лиф сити майн',
    'лиф сити маинкрафт',
    'лиф сити майнкрафт',
    'лиф сити сервер',
    'лиф сити карта',
    'лиф сити правила',
    'сервер',
    'ванильное',
    'приватное',
    'выживание',
    'карта',
    'приватный',
    'майнкрафт',
    'карта',
    'веб-карта',
    'онлайн-карта',
    'онлайн карта',
    'миникарта',
    'RP',
    'РП',
    'без доната',
    'бесплатная проходка',
    'лицензионный',
    'мониторинг',
    'без привата',
    'топ',
    'список',
    'войс чат',
    'ванила',
    'без модов',
    'выживание на сервере',
    'официальный',
    'оригинальный',
    'без читеров',
    'без гриферов',
    'играть',
    'лучший',
    'топ сервера',
    'лучшие сервера',
    'мониторинг серверов',
    'easydonate',
    'онлайн-магазин',
    'role',
    'role-play',
    'рейтинг',
    'выживание в minecraft',
    'лучший minecraft сервер',
    'minecraft без модов',
    'ванильное выживание',
    'LEAF CITY minecraft'
  ],
  openGraph: {
    title: 'LEAF CITY - Ванильное выживание',
    images: [
      {
        url: `${routes.baseUrl}/og/main.png`,
        width: 1200,
        height: 630,
        alt: 'LEAF CITY - Ванильное выживание'
      }
    ],
    description:
      'Уникальный ванильный сервер, нацеленный на выживание и ламповое общение, без привата и платных преимуществ',
    type: 'website'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'LEAF CITY'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Providers>{children}</Providers>
        <Toaster />
        {/*<YandexMetrika />*/}
      </body>
    </html>
  )
}
