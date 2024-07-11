'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { url } from '@/constants/translation'

export function Copyright() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <section className="mt-16 flex flex-col border-t-2 border-white/10 pt-4 lg:mt-24 lg:flex-row lg:justify-between lg:pt-8">
      <div className="lg:flex lg:flex-col lg:items-start lg:justify-between">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                className="mb-4 w-full text-center transition-all duration-300 hover:scale-90 lg:mb-8 lg:w-auto lg:px-0 lg:hover:scale-110"
                onClick={scrollToTop}
              >
                <Image
                  className="mr-4 w-[40px] cursor-pointer"
                  src="/logo/lc.png"
                  alt="LC"
                  height={1000}
                  width={1000}
                />
                <p className="text-2xl font-bold">LEAF CITY</p>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Наверх</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="text-sm text-white/40">
          Copyright © LEAF CITY 2023-2024. Все права защищены.
          <br />
          Проект LEAF CITY не относиться к Mojang Studios.
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
                <Link href={url.shop} target="_blank">
                  <Image
                    src="/icon/cart.svg"
                    alt="Cart"
                    height={100}
                    width={100}
                    className="size-12 w-full cursor-pointer rounded-xl bg-green/80 p-2 transition hover:scale-110 lg:mb-6"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Магазин</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Link className="flex-grow" href={url.discord} target="_blank">
          <Image
            className="size-12 w-full cursor-pointer rounded-xl bg-slate-50 p-2 transition hover:scale-110"
            src="/icon/discord-icon.svg"
            alt="Discord"
            height={100}
            width={100}
          />
        </Link>
      </div>
    </section>
  )
}
