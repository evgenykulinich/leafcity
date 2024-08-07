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
  const [isButtonsVisible, setIsButtonsVisible] = useState(true)

  const handleButtonClick = (world: string) => {
    setActiveWorld(world)
    setIsButtonsVisible(false)
  }

  return (
    <>
      {isButtonsVisible && (
        <section className="mx-auto grid min-h-dvh max-w-screen-2xl grid-rows-[auto_auto_1fr_auto] px-4 lg:px-8">
          <Header />
          <PageTitle>
            Онлайн-карта для <span className="text-blue">каждого</span> мира в{' '}
            <span className="text-green">реальном</span> времени
          </PageTitle>
          <div className="mx-auto mt-8 flex w-full max-w-screen-2xl flex-col gap-4 lg:mt-12 lg:flex-row lg:items-start lg:gap-8">
            {worlds.map(world => (
              <Card
                className={clsx(
                  `width-animation relative mx-auto block h-[150px] w-full cursor-pointer overflow-hidden rounded-2xl border-2 p-4 transition-all lg:h-[500px] lg:p-6`,
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
                <div className={`${world.title} h-full w-full`} />
                <p className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center gap-2 transition duration-500">
                  <Image
                    className="w-[22px]"
                    alt="Аватар"
                    src={world.icon}
                    width={180}
                    height={180}
                  />
                  <span className="text-[22px] font-bold">{world.description}</span>
                </p>
              </Card>
            ))}
          </div>
          <Copyright />
        </section>
      )}
      {!isButtonsVisible && activeWorld && (
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
