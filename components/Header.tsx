'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Navigation } from '@/components/Navigation'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'

interface Props {
  className?: string
}

export function Header({ className }: Props) {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <header
      className={cn(
        'mx-auto flex w-full max-w-screen-2xl items-center justify-between border-b-2 border-white/10 py-4 lg:static',
        className
      )}
    >
      {pathname === routes.main ? (
        <Link className="flex items-center transition duration-300 active:scale-95" href="/">
          <Image
            className="mr-4 h-[36px] w-auto cursor-pointer"
            src="/logo/lc.png"
            alt="LC"
            height={1000}
            width={1000}
          />
          <span className="text-2xl font-bold">LEAF CITY</span>
        </Link>
      ) : (
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link className="flex items-center transition duration-300 active:scale-95" href="/">
                <Image
                  className="mr-4 h-[36px] w-auto cursor-pointer"
                  src="/logo/lc.png"
                  alt="LC"
                  height={1000}
                  width={1000}
                />
                <span className="text-2xl font-bold">LEAF CITY</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="p-0">
              На главную
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <Navigation />
    </header>
  )
}

export function WikiHeader({ className }: Props) {
  return (
    <header
      className={cn(
        'mx-auto flex w-full max-w-screen-2xl items-center justify-between border-b-2 border-white/10 py-4 lg:static',
        className
      )}
    >
      <Link
        className="flex items-center transition duration-300 active:scale-95 lg:hover:scale-105 lg:active:scale-100"
        href="/"
      >
        <Image
          className="mr-4 h-[36px] w-auto cursor-pointer"
          src="/logo/lc.png"
          alt="LC"
          height={1000}
          width={1000}
        />
        <span className="text-2xl font-bold">LEAF CITY</span>
      </Link>
      <Navigation />
    </header>
  )
}
