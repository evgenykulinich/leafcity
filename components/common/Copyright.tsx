'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { routes } from '@/constants/routes'
import { useScrollToTop } from '@/hooks/useScroll'

export function Copyright() {
  return (
    <div className="mt-8 flex flex-col justify-between gap-2 border-t-2 border-white/10 pb-8 pt-4 lg:mt-12 lg:flex-row lg:gap-0 lg:pt-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="flex items-center gap-4">
          <div className="w-full">
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link href={routes.map}>
                    <Image
                      className="size-12 w-full cursor-pointer rounded-xl bg-purple p-2 transition hover:scale-105 hover:bg-purple/80"
                      src="/icon/map.svg"
                      alt="Cart"
                      height={1000}
                      width={1000}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="p-0">Карта</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="w-full">
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link href={routes.shop}>
                    <Image
                      className="size-12 w-full cursor-pointer rounded-xl border-2 border-green bg-green/10 p-2 transition hover:scale-105 hover:bg-green/20 lg:hover:scale-110"
                      src="/icon/shopping-basket.svg"
                      alt="Cart"
                      height={1000}
                      width={1000}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="p-0">Магазин</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="w-full">
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link href={routes.discord} target="_blank">
                    <Image
                      className="size-12 w-full cursor-pointer rounded-xl bg-slate-50 p-2 transition hover:scale-105 lg:hover:scale-110"
                      src="/icon/discord-icon.svg"
                      alt="Discord"
                      height={100}
                      width={100}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="p-0">Discord</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <p className="self-center text-center text-sm text-white/40 lg:flex lg:items-center lg:justify-center lg:text-start">
          © Все права защищены. LEAF CITY, 2023-2024.
          <br className="hidden lg:block" /> Проект LEAF CITY не относится к Mojang Studios
          {/*<p>Проект LEAF CITY не относится к Mojang Studios</p>*/}
        </p>
      </div>

      <div className="flex flex-col items-center gap-1 lg:items-end lg:gap-0">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                className="order-1 transition-all duration-300 active:scale-95 lg:order-none lg:w-auto"
                onClick={useScrollToTop}
              >
                <Image
                  className="mr-2 w-[28px] cursor-pointer"
                  src="/logo/lc.png"
                  alt="LC"
                  height={1000}
                  width={1000}
                />
                <span className="text-[1.5rem] font-bold">LEAF CITY</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="p-0">Наверх</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="text-sm text-white/40">
          Разработано под брендом{' '}
          <Link
            className="hover-underline underline-mango transition hover:text-mango"
            href="https://t.me/ratmoodfrontend"
          >
            RatMood
          </Link>{' '}
          🤍
        </p>
      </div>
    </div>
  )
}
