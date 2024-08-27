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
    <div className="mt-8 flex flex-col justify-between gap-2 border-t-2 border-white/10 pb-8 pt-4 lg:mt-12 lg:flex-row lg:gap-0 lg:pt-8">
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
        <p className="gap-2 self-center text-center text-sm text-white/40 lg:flex lg:flex-col lg:items-start lg:text-start">
          <span>© Все права защищены. LEAF CITY, 2023-2024.</span>
          <br className="lg:hidden" />
          <span>Проект LEAF CITY не относится к Mojang Studios</span>
        </p>

        {pathname === '/shop' && (
          <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-8">
            <p className="gap-2 self-center text-center text-sm text-white/40 lg:flex lg:flex-col lg:items-start lg:text-start">
              <span>ИП Русаков Андрей Васильевич</span>
              <br className="lg:hidden" />
              <span>ИНН: 381113698877</span>
            </p>
            <p className="mb-4 gap-2 self-center text-center text-sm text-white/40 lg:mb-0 lg:flex lg:flex-col lg:items-start lg:text-start">
              <span>ОГРНИП: 323237500107113</span>
              <br className="lg:hidden" />
              <span>fylhtqhecfrjd@gmail.com</span>
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-1 lg:items-end">
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
