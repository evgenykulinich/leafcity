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
        <section className="mx-auto grid min-h-dvh max-w-screen-2xl grid-rows-[auto_auto_1fr_auto] px-4 lg:px-8">
          <Header />
          <PageTitle>
            Онлайн-карта для <span className="text-blue">каждого</span> мира в{' '}
            <span className="text-green">реальном</span> времени
          </PageTitle>
          <div className="mx-auto mt-8 grid w-full max-w-screen-2xl gap-8 lg:mt-12 lg:grid-cols-3 lg:items-start">
            {worlds.map(world => (
              <Card
                className={clsx(
                  `radius-animation relative mx-auto block aspect-square w-full max-w-[450px] cursor-pointer overflow-hidden border-2 p-4 transition-all lg:p-6`,
                  {
                    'bg-green/10': world.color === 'green',
                    'bg-mango/10': world.color === 'mango',
                    'bg-blue/10': world.color === 'blue'
                  },
                  {
                    'hover:bg-green/20': world.color === 'green',
                    'hover:bg-mango/20': world.color === 'mango',
                    'hover:bg-blue/20': world.color === 'blue'
                  },
                  {
                    'border-green': world.color === 'green',
                    'border-mango': world.color === 'mango',
                    'border-blue': world.color === 'blue'
                  },
                  {
                    'text-green': world.color === 'green',
                    'text-mango': world.color === 'mango',
                    'text-blue': world.color === 'blue'
                  }
                )}
                key={world.title}
                onClick={() => handleButtonClick(world.title)}
              >
                <div className={`${world.title} mx-auto aspect-square w-full`} />
                <p className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center gap-2 transition duration-500">
                  <Image
                    className="w-[30px] lg:w-[35px]"
                    alt="Аватар"
                    src={world.icon}
                    width={180}
                    height={180}
                  />
                  <span className="text-nowrap text-2xl font-bold lg:text-[1.6vw]">
                    {world.description}
                  </span>
                </p>
              </Card>
            ))}
          </div>
          <Copyright />
        </section>
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
