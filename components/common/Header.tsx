'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Navigation } from '@/components/common/Navigation'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'
import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

function HeaderLogo() {
  return (
    <div className="flex cursor-pointer select-none items-center transition duration-300 active:scale-95">
      <Image
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
