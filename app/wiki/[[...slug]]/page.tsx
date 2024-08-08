import { notFound } from 'next/navigation'
import { PropsWithChildren, cache } from 'react'

import { getComponentForSlug } from '@/lib/markdown'
import Pagination from '@/components/wiki/Pagination'
import { page_routes } from '@/lib/wiki_routes'
import { routes } from '@/constants/routes'
import { Leftbar, SheetLeftbar } from '@/components/wiki/Leftbar'
import Toc from '@/components/wiki/Toc'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Википедия',
  description: 'Документация проекта, самая важная информация о проекте на одной странице',
  metadataBase: new URL(routes.baseUrl),
  keywords: [
    'вики лиф сити',
    'моды лиф сити',
    'вики сервер лиф сити',
    'сборка лиф сити',
    'руководство по лиф сити',
    'вики Minecraft сервер',
    'цвет ника лиф сити',
    'пластинки лиф сити',
    'голосовой чат лиф сити',
    'иконки лиф сити'
  ],
  openGraph: {
    title: 'LEAF CITY - Википедия',
    images: [
      {
        url: `${routes.baseUrl}/og/wiki.png`,
        width: 1200,
        height: 630,
        alt: 'LEAF CITY - Википедия'
      }
    ],
    description: 'Документация проекта, самая важная информация о проекте на одной странице',
    type: 'website'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'LEAF CITY - Википедия'
  }
}

type PageProps = {
  params: { slug: string[] }
}

const cachedGetComponentForSlug = cache(getComponentForSlug)

export default async function WikiPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join('/')
  const Component = await cachedGetComponentForSlug(pathName)

  if (!Component) notFound()
  return (
    <div className="flex h-fit grid-cols-[auto_auto_1fr_auto_auto] flex-col self-start lg:grid lg:gap-6">
      <SheetLeftbar />
      <Leftbar />
      <Markdown>
        <Component />
        <Pagination pathname={pathName} />
      </Markdown>
      <Toc path={pathName} />
    </div>
  )
}

function Markdown({ children }: PropsWithChildren) {
  return <section className="lg:pl-[100px]">{children}</section>
}

export function generateStaticParams() {
  return page_routes.map(item => ({
    slug: item.href.split('/')
  }))
}
