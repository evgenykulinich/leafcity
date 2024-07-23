import { Montserrat } from 'next/font/google'
import Head from 'next/head'

import { Toaster } from '@/components/ui/sonner'
import { routes } from '@/constants/routes'

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
    'рейтинг'
  ],
  openGraph: {
    images: [
      {
        url: `${routes.baseUrl}/opengraph-image.png`
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
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(97899201, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              });
            `
          }}
        />
      </Head>
      <body className={font.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
