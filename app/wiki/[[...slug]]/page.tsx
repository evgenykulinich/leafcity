import { notFound } from 'next/navigation'
import { PropsWithChildren, cache } from 'react'

import { getComponentForSlug } from '@/lib/markdown'
import Pagination from '@/components/wiki/pagination'
import Toc from '@/components/wiki/toc'
import { page_routes } from '@/lib/wiki_routes'
import { routes } from '@/constants/routes'
import { Leftbar, SheetLeftbar } from '@/components/wiki/leftbar'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Википедия',
  description: 'Документация проекта, самая важная информация о проекте на одной странице',
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
    <div className="flex h-fit grid-cols-[auto_1fr_auto_auto_auto] flex-col self-start lg:grid lg:gap-6">
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
  return <div className="lg:pl-[100px]">{children}</div>
}

// export async function generateMetadata({ params: { slug = [] } }: PageProps) {
//   const pathName = slug.join('/')
//   const res = await cachedGetMarkdownForSlug(pathName)
//   if (!res) {
//     // @ts-ignore
//     return null
//   }
//   const { frontmatter } = res
//   return {
//     title: frontmatter.title,
//     description: frontmatter.description
//   }
// }

export function generateStaticParams() {
  return page_routes.map(item => ({
    slug: item.href.split('/')
  }))
}
