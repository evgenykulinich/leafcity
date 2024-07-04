import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function Copyright() {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between bg-white/5 p-8 rounded-2xl mt-16 lg:mt-24">
      <div>
        <Image
          className="cursor-pointer hover:scale-110 transition-all duration-300 size-[60px] lg:size-[75px] mb-10"
          src="/lc-logo.png"
          alt="LC"
          height={100}
          width={100}
        />
        <p className="text-white/50 text-sm">
          Copyright © LEAF CITY 2023-2024. Все права защищены.
          <br />
          Проект LEAF CITY не относиться к Mojang Studios.
        </p>
      </div>
      <div className="flex justify-center gap-8 lg:block mt-10 lg:mt-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="https://shop.leafcity.ru" target="_blank">
                <Image
                  src="/cart.svg"
                  alt="Cart"
                  height={100}
                  width={100}
                  className="size-12 lg:size-14 lg:mb-6 cursor-pointer hover:scale-110 transition bg-green/80 rounded-xl p-2"
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
            className="size-12 lg:size-14 cursor-pointer hover:scale-110 transition bg-slate-50 rounded-xl p-2"
            src="/discord-icon.svg"
            alt="Discord"
            height={100}
            width={100}
          />
        </Link>
      </div>
    </section>
  )
}
