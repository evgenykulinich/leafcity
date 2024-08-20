'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FadeInImage } from '@/components/common/FadeInImage'
import { Navigation } from '@/components/common/Navigation'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'
import { HeaderProps } from '@/interfaces/common'
import { cn } from '@/lib/utils'

function HeaderLogo() {
  return (
    <div className="flex cursor-pointer select-none items-center transition duration-300 active:scale-95">
      <FadeInImage
        className="mr-4 h-[36px] w-auto"
        src="/logo/lc.png"
        alt="Leaf City Logo"
        height={100}
        width={100}
      />
      <span className="text-2xl font-bold">LEAF CITY</span>
    </div>
  )
}

export function Header({ className }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header
      className={cn(
        'mx-auto flex w-full max-w-screen-2xl items-center justify-between border-b-2 border-white/10 py-4 lg:static',
        className
      )}
    >
      {pathname === routes.main ? (
        <HeaderLogo />
      ) : (
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Link href={routes.main} aria-label="На главную">
                <HeaderLogo />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="mt-2 bg-black px-2 py-1" side="bottom">
              На главную
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      <Navigation />
    </header>
  )
}
