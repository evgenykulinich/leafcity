import { Header } from '@/components/Header'
import { projects, generation } from '@/data/gallery'
import { routes } from '@/constants/routes'
import { Copyright } from '@/components/copyright/Copyright'
import GalleryCard from '@/components/gallery/GalleryCard'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Галерея',
  description: 'Галерея уникальных построек игроков и красочной генерации мира',
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
  }
}

export default function Gallery() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 pb-8 pt-4 lg:px-8">
      <Header />
      <div className="mt-8 cursor-default text-center text-xl lg:mt-10 lg:text-2xl">
        <span>
          Галерея уникальных <span className="text-blue">построек</span> игроков и красочной{' '}
          <span className="text-green">генерации</span> мира 🎨
        </span>
      </div>
      <div className="mt-8 cursor-default text-center text-xl lg:mt-10 lg:text-2xl">
        <div className="mt-10 flex flex-col gap-4 lg:flex-row">
          <GalleryCard
            className="border-green hover:bg-green/10"
            screenshots={generation}
            title="Генерация мира"
            icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2M5NjAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWVhcnRoIj48cGF0aCBkPSJNMjEuNTQgMTVIMTdhMiAyIDAgMCAwLTIgMnY0LjU0Ii8+PHBhdGggZD0iTTcgMy4zNFY1YTMgMyAwIDAgMCAzIDNhMiAyIDAgMCAxIDIgMmMwIDEuMS45IDIgMiAyYTIgMiAwIDAgMCAyLTJjMC0xLjEuOS0yIDItMmgzLjE3Ii8+PHBhdGggZD0iTTExIDIxLjk1VjE4YTIgMiAwIDAgMC0yLTJhMiAyIDAgMCAxLTItMnYtMWEyIDIgMCAwIDAtMi0ySDIuMDUiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg=="
            color="green"
          />
          <GalleryCard
            className="border-blue hover:bg-blue/10"
            screenshots={projects}
            title="Постройки и геймплей"
            icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZTlmZDIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBpY2theGUiPjxwYXRoIGQ9Ik0xNC41MzEgMTIuNDY5IDYuNjE5IDIwLjM4YTEgMSAwIDEgMS0zLTNsNy45MTItNy45MTIiLz48cGF0aCBkPSJNMTUuNjg2IDQuMzE0QTEyLjUgMTIuNSAwIDAgMCA1LjQ2MSAyLjk1OCAxIDEgMCAwIDAgNS41OCA0LjcxYTIyIDIyIDAgMCAxIDYuMzE4IDMuMzkzIi8+PHBhdGggZD0iTTE3LjcgMy43YTEgMSAwIDAgMC0xLjQgMGwtNC42IDQuNmExIDEgMCAwIDAgMCAxLjRsMi42IDIuNmExIDEgMCAwIDAgMS40IDBsNC42LTQuNmExIDEgMCAwIDAgMC0xLjR6Ii8+PHBhdGggZD0iTTE5LjY4NiA4LjMxNGExMi41MDEgMTIuNTAxIDAgMCAxIDEuMzU2IDEwLjIyNSAxIDEgMCAwIDEtMS43NTEtLjExOSAyMiAyMiAwIDAgMC0zLjM5My02LjMxOSIvPjwvc3ZnPg=="
            color="blue"
          />
        </div>
      </div>
      <Copyright />
    </div>
  )
}
