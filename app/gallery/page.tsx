import { Clock8 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Copyright } from '@/components/common/Copyright'
import { Header } from '@/components/common/Header'
import { PageTitle } from '@/components/common/PageTitle'
import GalleryCard from '@/components/gallery/GalleryCard'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'
import { projects, generation } from '@/data/gallery'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Галерея',
  description: 'Галерея уникальных построек игроков и красочной генерации мира',
  metadataBase: new URL(routes.baseUrl),
  keywords: [
    'галерея построек лиф сити',
    'уникальные постройки Minecraft',
    'красочные генерации мира',
    'строительства игроков лиф сити',
    'лучшие постройки лиф сити',
    'генерация мира Minecraft',
    'достижения в строительстве лиф сити',
    'творческие постройки Minecraft',
    'галерея миров лиф сити',
    'выдающиеся постройки на сервере'
  ],
  openGraph: {
    title: 'LEAF CITY - Галерея',
    images: [
      {
        url: `${routes.baseUrl}/og/gallery.png`,
        width: 1200,
        height: 630,
        alt: 'LEAF CITY - Галерея'
      }
    ],
    description: 'Галерея уникальных построек игроков и красочной генерации мира',
    type: 'website'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'LEAF CITY - Галерея'
  }
}

export default function Gallery() {
  return (
    <div className="mx-auto grid min-h-dvh max-w-screen-2xl grid-rows-[auto_1fr_auto] flex-col px-4 lg:px-8">
      <Header />
      <section>
        <PageTitle>
          <span>
            Галерея уникальных <span className="text-blue">построек</span> игроков и красочной{' '}
            <span className="text-green">генерации</span> мира
          </span>
        </PageTitle>
        <h2 className="mt-4 flex cursor-default items-center justify-center gap-2 text-center text-xl lg:mt-12">
          <span>
            Галерея отправлена на <span className="text-mango">доработку</span>, ожидайте{' '}
            <Clock8 className="inline text-mango" size={24} strokeWidth={1.5} />
          </span>
        </h2>
        {/*<div className="mt-8 flex cursor-default flex-col gap-4 text-center text-xl lg:mt-12 lg:flex-row lg:text-2xl">*/}
        {/*  <GalleryCard*/}
        {/*    className="border-green bg-green/10 hover:bg-green/20"*/}
        {/*    screenshots={generation}*/}
        {/*    title="Генерация мира"*/}
        {/*    icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2M5NjAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWVhcnRoIj48cGF0aCBkPSJNMjEuNTQgMTVIMTdhMiAyIDAgMCAwLTIgMnY0LjU0Ii8+PHBhdGggZD0iTTcgMy4zNFY1YTMgMyAwIDAgMCAzIDNhMiAyIDAgMCAxIDIgMmMwIDEuMS45IDIgMiAyYTIgMiAwIDAgMCAyLTJjMC0xLjEuOS0yIDItMmgzLjE3Ii8+PHBhdGggZD0iTTExIDIxLjk1VjE4YTIgMiAwIDAgMC0yLTJhMiAyIDAgMCAxLTItMnYtMWEyIDIgMCAwIDAtMi0ySDIuMDUiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg=="*/}
        {/*    color="green"*/}
        {/*  />*/}
        {/*  <GalleryCard*/}
        {/*    className="border-blue bg-blue/10 hover:bg-blue/20"*/}
        {/*    screenshots={projects}*/}
        {/*    title="Постройки и геймплей"*/}
        {/*    icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZTlmZDIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBpY2theGUiPjxwYXRoIGQ9Ik0xNC41MzEgMTIuNDY5IDYuNjE5IDIwLjM4YTEgMSAwIDEgMS0zLTNsNy45MTItNy45MTIiLz48cGF0aCBkPSJNMTUuNjg2IDQuMzE0QTEyLjUgMTIuNSAwIDAgMCA1LjQ2MSAyLjk1OCAxIDEgMCAwIDAgNS41OCA0LjcxYTIyIDIyIDAgMCAxIDYuMzE4IDMuMzkzIi8+PHBhdGggZD0iTTE3LjcgMy43YTEgMSAwIDAgMC0xLjQgMGwtNC42IDQuNmExIDEgMCAwIDAgMCAxLjRsMi42IDIuNmExIDEgMCAwIDAgMS40IDBsNC42LTQuNmExIDEgMCAwIDAgMC0xLjR6Ii8+PHBhdGggZD0iTTE5LjY4NiA4LjMxNGExMi41MDEgMTIuNTAxIDAgMCAxIDEuMzU2IDEwLjIyNSAxIDEgMCAwIDEtMS43NTEtLjExOSAyMiAyMiAwIDAgMC0zLjM5My02LjMxOSIvPjwvc3ZnPg=="*/}
        {/*    color="blue"*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="mt-8 text-center text-lg lg:mt-12 lg:text-xl">
          Поделиться своими скриншотами можно в{' '}
          <Link className="hover-underline underline-purple text-purple" href={routes.discord}>
            Discord
          </Link>{' '}
          канале{' '}
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link
                  className="text-note note-purple transition hover:bg-purple/40"
                  href={routes.discordSupport}
                >
                  #предложения
                </Link>
              </TooltipTrigger>
              <TooltipContent className="p-0">Перейти</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>
      <Copyright />
    </div>
  )
}
