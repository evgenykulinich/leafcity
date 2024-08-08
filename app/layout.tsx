import { Montserrat } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import { routes } from '@/constants/routes'
import YandexMetrika from '@/app/YandexMetrika'
import Providers from '@/components/common/ProgressBarProvider'

import type { Metadata } from 'next'

import './globals.css'

const font = Montserrat({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: {
    default: 'LEAF CITY • Ванильное выживание',
    template: `LEAF CITY • %s`
  },
  description:
    'Уникальный ванильный сервер, нацеленный на выживание и ламповое общение, без привата и платных преимуществ',
  metadataBase: new URL(routes.baseUrl),
  keywords: [
    'лиф сити майнкрафт',
    'leaf city minecraft',
    'ванильное выживание',
    'без модов',
    'выживание на сервере',
    'minecraft сервер',
    'без доната',
    'лицензионный minecraft сервер',
    'лучший minecraft сервер',
    'онлайн-карта minecraft'
  ],
  openGraph: {
    title: 'LEAF CITY • Ванильное выживание',
    images: [
      {
        url: `${routes.baseUrl}/og/main.png`,
        width: 1200,
        height: 630,
        alt: 'LEAF CITY • Ванильное выживание'
      }
    ],
    description:
      'Уникальный ванильный сервер, нацеленный на выживание и ламповое общение, без привата и платных преимуществ',
    type: 'website'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'LEAF CITY • Ванильное выживание'
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
        <YandexMetrika />
      </body>
    </html>
  )
}
