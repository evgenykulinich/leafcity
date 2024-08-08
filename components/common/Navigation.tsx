'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMedia } from 'react-use'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { usePathname } from 'next/navigation'
import { FaDiscord } from 'react-icons/fa'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navigation } from '@/data/navigation'
import { routes } from '@/constants/routes'
import { DialogTitle } from '@/components/ui/dialog'
import Search from '@/components/wiki/Search'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMedia('(max-width: 1024px)', false)
  const pathname = usePathname()

  const handleClose = () => setIsOpen(false)

  function MobileNavigationLinks() {
    return (
      <>
        {navigation.map(link => (
          <li className="mb-5 cursor-pointer text-center text-2xl" key={link.label}>
            <Link
              className="text-md flex items-center justify-center hover:text-green"
              href={link.href}
              onClick={handleClose}
            >
              <Image
                className="mr-4 w-7"
                src={link.icon}
                alt={link.label}
                width={100}
                height={100}
              />
              {link.label}
            </Link>
          </li>
        ))}
      </>
    )
  }

  return isMobile ? (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="acive:text-green border-none outline-none transition hover:text-green focus-visible:ring-transparent focus-visible:ring-offset-0 lg:hover:scale-125 lg:focus-visible:scale-125 lg:focus-visible:text-green">
        <Menu className="size-8" />
      </SheetTrigger>
      <SheetContent
        className="border-b-2 border-purple/20 bg-black/[85%] pt-0 outline-none"
        side="top"
      >
        <DialogTitle>
          <VisuallyHidden.Root />
        </DialogTitle>
        <nav className="pt-4">
          <MobileNavigationLinks />
          <Link
            className="flex items-center justify-center rounded-xl border-none bg-purple/80 py-4 font-semibold no-underline outline-none transition active:bg-purple/60"
            href={routes.discord}
          >
            <FaDiscord className="mr-2 h-auto w-[30px]" />
            Присоединиться
          </Link>
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