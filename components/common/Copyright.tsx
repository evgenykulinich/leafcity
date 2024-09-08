'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaDiscord } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'
import { useScrollToTop } from '@/hooks/useScroll'

export function Copyright() {
  const pathname = usePathname()

  return (
    <div className="mt-8 flex flex-col justify-between gap-4 border-t-2 border-white/10 pb-8 pt-4 lg:mt-12 lg:flex-row lg:gap-0 lg:pt-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="flex items-center gap-4">
          <div className="w-full">
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link href={routes.shop}>
                    <Image
                      className="size-12 w-full cursor-pointer rounded-xl bg-green p-2 transition hover:bg-green/80"
                      src="/icon/shopping-basket.svg"
                      alt="Cart"
                      height={1000}
                      width={1000}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="p-1">Магазин</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="w-full">
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link href={routes.map}>
                    <Image
                      className="size-12 w-full cursor-pointer rounded-xl bg-blue p-2 transition hover:bg-blue/80"
                      src="/icon/map.svg"
                      alt="Cart"
                      height={1000}
                      width={1000}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="p-1">Карта</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="w-full">
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link href={routes.discord} target="_blank">
                    <FaDiscord className="size-12 w-full cursor-pointer rounded-xl bg-purple p-2 transition hover:bg-purple/80" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="p-1">Discord</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <p className="flex flex-col self-center text-center text-sm text-white/40 lg:items-start lg:gap-2 lg:text-start">
          <span>© Все права защищены. LEAF CITY, 2023-2024.</span>
          <span>Проект LEAF CITY не относится к Mojang Studios</span>
        </p>
        {pathname === '/shop' && (
          <p className="flex flex-col justify-center text-center text-sm text-white/40 lg:mb-0 lg:gap-2 lg:text-start">
            <span>ИП Русаков Андрей Васильевич</span>
            <span>ИНН: 381113698877</span>
          </p>
        )}
      </div>

      <div className="flex flex-col items-center gap-2 lg:items-end lg:gap-0">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                className="order-1 p-0 transition-all duration-300 active:scale-95 lg:order-none lg:w-auto"
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
        <p className="text-right text-sm text-white/40">
          Под авторством{' '}
          <Link
            className="hover-underline underline-mango transition hover:text-mango"
            href="https://t.me/ratmoodfrontend"
          >
            RatMood
          </Link>
        </p>
      </div>
    </div>
  )
}
