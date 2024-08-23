'use client'

import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaDiscord } from 'react-icons/fa'
import { useMedia } from 'react-use'

import { DialogTitle } from '@/components/ui/dialog'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Search from '@/components/wiki/Search'
import { routes } from '@/constants/routes'
import { navigation } from '@/data/navigation'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMedia('(max-width: 1024px)', false)
  const pathname = usePathname()

  const handleClose = () => setIsOpen(false)

  function MobileNavigationLinks() {
    return (
      <ul className="flex flex-col gap-5">
        {navigation.map(link => (
          <li className="cursor-pointer text-2xl" key={link.label}>
            <Link
              className={`text-md flex items-center gap-2 hover:text-green ${pathname === link.href || (pathname.startsWith(routes.wiki) && link.href.startsWith(routes.wiki)) ? 'text-green' : ''}`}
              href={link.href}
              onClick={handleClose}
            >
              {link.icon()}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return isMobile ? (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="acive:text-green border-none outline-none transition hover:text-green focus-visible:ring-transparent focus-visible:ring-offset-0">
        <Menu className="size-8" />
      </SheetTrigger>
      <SheetContent
        className="border-l-2 border-purple/20 bg-black pt-0 outline-none"
        side="right"
        aria-describedby={undefined}
      >
        <DialogTitle>
          <VisuallyHidden.Root />
        </DialogTitle>
        <nav className="flex flex-col gap-5 pt-4">
          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-2" href={routes.main}>
              <Image
                className="h-[28px] w-auto"
                src="/logo/lc.png"
                alt="Leaf City Logo"
                height={100}
                width={100}
              />
              <span className="text-2xl font-bold">LEAF CITY</span>
            </Link>
            <SheetClose className="outline-none">
              <X className="size-[1.75rem] transition hover:text-green lg:size-[1.5rem]" />
            </SheetClose>
          </div>
          <Link
            className="flex items-center justify-center rounded-lg border-none bg-purple/80 px-4 py-3 font-semibold no-underline outline-none transition active:bg-purple/60"
            href={routes.discord}
          >
            <FaDiscord className="mr-2 h-auto w-[30px]" />
            Начать играть
          </Link>
          <MobileNavigationLinks />
        </nav>
      </SheetContent>
    </Sheet>
  ) : (
    <nav>
      <ul className="hidden items-center gap-10 text-lg lg:flex">
        {pathname.startsWith(routes.wiki) && <Search />}
        {navigation.map(link => (
          <li className="cursor-pointer" key={link.label}>
            <Link
              href={link.href}
              className={`text-md hover-underline underline-green ${pathname === link.href || (pathname.startsWith(routes.wiki) && link.href.startsWith(routes.wiki)) ? 'text-green' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
