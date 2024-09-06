import Link from 'next/link'

import { Copyright } from '@/components/common/Copyright'
import { Header } from '@/components/common/Header'
import { PageTitle } from '@/components/common/PageTitle'
import { GalleryList } from '@/components/gallery/GalleryList'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'
import { getGenerationImagesList, getProjectsImagesList } from '@/helpers/getGalleryImages'

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

export default async function Gallery() {
  const generationImages = await getGenerationImagesList()
  const projectsImages = await getProjectsImagesList()

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
        <GalleryList generationImages={generationImages} projectsImages={projectsImages} />
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
