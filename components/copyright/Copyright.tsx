'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { routes } from '@/constants/routes'
import { useScrollToTop } from '@/hooks/useScroll'

export function Copyright() {
  return (
    <div className="mt-8 flex flex-col border-t-2 border-white/10 pt-4 lg:mt-14 lg:flex-row lg:justify-between lg:pt-8">
      <div className="lg:flex lg:flex-col lg:items-start lg:justify-between">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                className="mb-4 w-full text-center transition-all duration-300 active:scale-95 lg:mb-8 lg:w-auto lg:px-0 lg:hover:scale-105 lg:active:scale-100"
                onClick={useScrollToTop}
              >
                <Image
                  className="mr-4 w-[40px] cursor-pointer"
                  src="/logo/lc.png"
                  alt="LC"
                  height={1000}
                  width={1000}
                />
                <span className="text-2xl font-bold">LEAF CITY</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="p-0">Наверх</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="text-sm text-white/40">
          Copyright © LEAF CITY 2023-2024. Все права защищены.
          <br />
          Проект LEAF CITY не относится к Mojang Studios.
        </p>
        <p className="mt-2 text-sm text-white/40">
          Сайт разработан под брендом{' '}
          <Link className="transition hover:text-mango" href="https://t.me/ratmoodfrontend">
            RatMood 🤍
          </Link>
        </p>
      </div>
      <div className="mt-6 flex justify-center gap-8 lg:mt-0 lg:block">
        <div className="flex-grow">
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link href={routes.shop} target="_blank">
                  <Image
                    src="/icon/cart.svg"
                    alt="Cart"
                    height={100}
                    width={100}
                    className="size-12 w-full cursor-pointer rounded-xl bg-green/80 p-2 transition hover:scale-110 lg:mb-6"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="p-0">Магазин</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex-grow">
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link href={routes.discord} target="_blank">
                  <Image
                    className="size-12 w-full cursor-pointer rounded-xl bg-slate-50 p-2 transition hover:scale-110"
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
    </div>
  )
}
