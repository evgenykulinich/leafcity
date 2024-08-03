'use client'

import { useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

import { Card } from '@/components/ui/card'
import { Header } from '@/components/Header'
import { Copyright } from '@/components/copyright/Copyright'
import { PageTitle } from '@/components/PageTitle'
import { noCacheUrl, worlds } from '@/data/worlds'

export default function MapWorlds() {
  const [activeWorld, setActiveWorld] = useState<string | null>(null)
  const [buttonsVisible, setButtonsVisible] = useState(true)

  const handleButtonClick = (world: string) => {
    setActiveWorld(world)
    setButtonsVisible(false)
  }

  return (
    <>
      {buttonsVisible && (
        <div className="mx-auto grid min-h-dvh max-w-screen-2xl grid-rows-[auto_auto_1fr_auto] px-4 lg:px-8">
          <Header />
          <PageTitle>
            Онлайн-карта для <span className="text-blue">каждого</span> мира в{' '}
            <span className="text-green">реальном</span> времени 🧭
          </PageTitle>
          <div className="mx-auto mt-8 grid w-full max-w-screen-2xl gap-8 lg:mt-12 lg:grid-cols-3 lg:items-start">
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
                    'border-purple': world.color === 'purple',
                    'border-green': world.color === 'green',
                    'border-blue': world.color === 'blue'
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
                  className={`${world.title} mx-auto min-h-[275px] w-full rounded-2xl lg:min-h-[350px]`}
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
          <Copyright />
        </div>
      )}
      {!buttonsVisible && activeWorld && (
        <>
          <Header className="fixed touch-none px-4 lg:px-8" />
          <iframe
            src={noCacheUrl(activeWorld)}
            className="fixed bottom-0 h-[calc(100dvh-65px)] w-full flex-1 overflow-hidden border-0"
            title="Map"
          />
        </>
      )}
    </>
  )
}
