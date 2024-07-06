'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

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
                className="mb-4 w-full text-center lg:mb-8 lg:w-auto lg:px-0"
                onClick={scrollToTop}
              >
                <Image
                  className="w-[150px] cursor-pointer transition-all duration-300 hover:scale-110 lg:w-[200px]"
                  src="/logo/leafcity.png"
                  alt="LC"
                  height={1000}
                  width={1000}
                />
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
      </div>
      <div className="mt-6 flex justify-center gap-8 lg:mt-0 lg:block">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link href="https://shop.leafcity.ru" target="_blank">
                <Image
                  src="/icon/cart.svg"
                  alt="Cart"
                  height={100}
                  width={100}
                  className="size-12 cursor-pointer rounded-xl bg-green/80 p-2 transition hover:scale-110 lg:mb-6 lg:size-12"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Магазин</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Link href="https://discord.gg/leaf-city" target="_blank">
          <Image
            className="size-12 cursor-pointer rounded-xl bg-slate-50 p-2 transition hover:scale-110 lg:size-12"
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
