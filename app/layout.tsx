import { Montserrat } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import { url } from '@/constants/translation'

import type { Metadata } from 'next'
import './globals.css'

const font = Montserrat({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: {
    default: 'LEAF CITY - Ванильное выживание',
    template: `LEAF CITY - %s`
  },
  description:
    'LEAF CITY - ванильный сервер, нацеленный на выживание и ламповое общение. Игровой процесс на проекте очень многогранный, ты можешь создать свое локальное сообщество, организовать поселение, продавать свой товар, строить огромные проекты, так и просто приятно общаться и проводить время.',
  metadataBase: new URL(url.baseUrl),
  keywords: [
    'minecraft',
    'vanilla',
    'leafcity',
    'leafcity minecraft',
    'leaf city',
    'leaf city minecraft',
    'лиф сити',
    'сервер',
    'ванильное',
    'приватное',
    'выживание',
    'карта',
    'приватный',
    'майнкрафт',
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
    'рейтинг'
  ],
  openGraph: {
    images: [
      {
        url: `${url.baseUrl}/opengraph-image.png`
      }
    ],
    description:
      'LEAF CITY - ванильный сервер, нацеленный на выживание и ламповое общение. Игровой процесс на проекте очень многогранный, ты можешь создать свое локальное сообщество, организовать поселение, продавать свой товар, строить огромные проекты, так и просто приятно общаться и проводить время.'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
      <Toaster />
    </html>
  )
}
