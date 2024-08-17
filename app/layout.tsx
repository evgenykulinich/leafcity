import { Montserrat } from 'next/font/google'
import Head from 'next/head'

import YandexMetrika from '@/app/YandexMetrika'
import ProgressBarProvider from '@/components/common/ProgressBarProvider'
import { Toaster } from '@/components/ui/sonner'
import { routes } from '@/constants/routes'

import type { Metadata, Viewport } from 'next'
import './globals.css'

const font = Montserrat({ subsets: ['cyrillic', 'latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  themeColor: 'black'
}

export const metadata: Metadata = {
  title: {
    default: 'LEAF CITY - Ванильное выживание',
    template: `LEAF CITY - %s`
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
    title: 'LEAF CITY - Ванильное выживание'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className={font.className}>
        <ProgressBarProvider>{children}</ProgressBarProvider>
        <Toaster />
        <YandexMetrika />
      </body>
    </html>
  )
}
