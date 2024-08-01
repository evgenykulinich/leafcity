'use client'

import { useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

import { Card } from '@/components/ui/card'
import { Header } from '@/components/Header'
import { Copyright } from '@/components/copyright/Copyright'

const worlds = [
  {
    title: 'survival',
    description: 'Мир выживания',
    color: 'purple',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3Mjg5REEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNwcm91dCI+PHBhdGggZD0iTTcgMjBoMTAiLz48cGF0aCBkPSJNMTAgMjBjNS41LTIuNS44LTYuNCAzLTEwIi8+PHBhdGggZD0iTTkuNSA5LjRjMS4xLjggMS44IDIuMiAyLjMgMy43LTIgLjQtMy41LjQtNC44LS4zLTEuMi0uNi0yLjMtMS45LTMtNC4yIDIuOC0uNSA0LjQgMCA1LjUuOHoiLz48cGF0aCBkPSJNMTQuMSA2YTcgNyAwIDAgMC0xLjEgNGMxLjktLjEgMy4zLS42IDQuMy0xLjQgMS0xIDEuNi0yLjMgMS43LTQuNi0yLjcuMS00IDEtNC45IDJ6Ii8+PC9zdmc+'
  },
  {
    title: 'farms',
    description: 'Мир ферм',
    color: 'green',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2M5NjAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYWN0b3IiPjxwYXRoIGQ9Im0xMCAxMSAxMSAuOWExIDEgMCAwIDEgLjggMS4xbC0uNjY1IDQuMTU4YTEgMSAwIDAgMS0uOTg4Ljg0MkgyMCIvPjxwYXRoIGQ9Ik0xNiAxOGgtNSIvPjxwYXRoIGQ9Ik0xOCA1YTEgMSAwIDAgMC0xIDF2NS41NzMiLz48cGF0aCBkPSJNMyA0aDguMTI5YTEgMSAwIDAgMSAuOTkuODYzTDEzIDExLjI0NiIvPjxwYXRoIGQ9Ik00IDExVjQiLz48cGF0aCBkPSJNNyAxNWguMDEiLz48cGF0aCBkPSJNOCAxMC4xVjQiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIyIi8+PGNpcmNsZSBjeD0iNyIgY3k9IjE1IiByPSI1Ii8+PC9zdmc+'
  },
  {
    title: 'resources',
    description: 'Мир ресурсов',
    color: 'blue',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZTlmZDIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBpY2theGUiPjxwYXRoIGQ9Ik0xNC41MzEgMTIuNDY5IDYuNjE5IDIwLjM4YTEgMSAwIDEgMS0zLTNsNy45MTItNy45MTIiLz48cGF0aCBkPSJNMTUuNjg2IDQuMzE0QTEyLjUgMTIuNSAwIDAgMCA1LjQ2MSAyLjk1OCAxIDEgMCAwIDAgNS41OCA0LjcxYTIyIDIyIDAgMCAxIDYuMzE4IDMuMzkzIi8+PHBhdGggZD0iTTE3LjcgMy43YTEgMSAwIDAgMC0xLjQgMGwtNC42IDQuNmExIDEgMCAwIDAgMCAxLjRsMi42IDIuNmExIDEgMCAwIDAgMS40IDBsNC42LTQuNmExIDEgMCAwIDAgMC0xLjR6Ii8+PHBhdGggZD0iTTE5LjY4NiA4LjMxNGExMi41MDEgMTIuNTAxIDAgMCAxIDEuMzU2IDEwLjIyNSAxIDEgMCAwIDEtMS43NTEtLjExOSAyMiAyMiAwIDAgMC0zLjM5My02LjMxOSIvPjwvc3ZnPg=='
  }
]

export default function MapWorlds() {
  const [activeWorld, setActiveWorld] = useState<string | null>(null)
  const [buttonsVisible, setButtonsVisible] = useState(true)

  const noCacheUrl = (world: string) =>
    `https://leafcity.ru/backend/${world}?nocache=${new Date().getTime()}`

  const handleButtonClick = (world: string) => {
    setActiveWorld(world)
    setButtonsVisible(false)
  }

  return (
    <>
      {buttonsVisible && (
        <div className="flex flex-col pb-4 lg:h-dvh">
          <div className="mx-auto w-full max-w-screen-2xl touch-none px-4 pt-4 lg:static lg:px-8">
            <Header />
          </div>
          <div className="mt-8 cursor-default text-center text-xl lg:mt-10 lg:text-2xl">
            <span>
              Онлайн-карта для <span className="text-blue">каждого</span> мира в{' '}
              <span className="text-green">реальном</span> времени 🧭
            </span>
          </div>
          <div className="mx-auto mt-8 grid h-full w-full max-w-screen-2xl gap-4 px-4 lg:mt-10 lg:grid-cols-3 lg:flex-row lg:items-center lg:gap-8 lg:px-8">
            {worlds.map(world => (
              <Card
                className={clsx(
                  `block w-full cursor-pointer rounded-2xl border-2 p-4 transition lg:p-6`,
                  {
                    'bg-purple/10': world.color === 'purple',
                    'bg-green/10': world.color === 'green',
                    'bg-blue/10': world.color === 'blue'
                  },
                  {
                    'hover:bg-purple/20': world.color === 'purple',
                    'hover:bg-green/20': world.color === 'green',
                    'hover:bg-blue/20': world.color === 'blue'
                  },
                  {
                    'border-purple/40': world.color === 'purple',
                    'border-green/40': world.color === 'green',
                    'border-blue/40': world.color === 'blue'
                  },
                  {
                    'hover:border-purple': world.color === 'purple',
                    'hover:border-green': world.color === 'green',
                    'hover:border-blue': world.color === 'blue'
                  },
                  {
                    'text-purple': world.color === 'purple',
                    'text-green': world.color === 'green',
                    'text-blue': world.color === 'blue'
                  }
                )}
                key={world.title}
                onClick={() => handleButtonClick(world.title)}
              >
                <div
                  className={`${world.title} mx-auto min-h-[275px] w-full rounded-2xl lg:min-h-[400px]`}
                ></div>
                <div className="mt-4 flex items-center justify-center gap-1.5 text-xl lg:mt-6">
                  <Image
                    className="w-[25px] lg:w-[25px]"
                    alt="Аватар"
                    src={world.icon}
                    width={180}
                    height={180}
                  />
                  <p>{world.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mx-auto w-full max-w-screen-2xl px-4 pt-4 lg:px-8">
            <Copyright />
          </div>
        </div>
      )}
      {!buttonsVisible && activeWorld && (
        <div>
          <div className="fixed mx-auto w-full max-w-screen-2xl touch-none px-4 pt-4 lg:static lg:px-8">
            <Header />
          </div>
          <div className="fixed bottom-0 w-full flex-1 overflow-hidden">
            <iframe
              src={noCacheUrl(activeWorld)}
              className="h-[calc(100dvh-65px)] w-full border-0"
              title="Map"
            />
          </div>
        </div>
      )}
    </>
  )
}
