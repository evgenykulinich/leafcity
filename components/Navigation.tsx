'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMedia } from 'react-use'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { usePathname } from 'next/navigation'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navigation } from '@/data/navigation'
import { routes } from '@/constants/routes'
import { DialogTitle } from '@/components/ui/dialog'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMedia('(max-width: 1024px)', false)
  const pathname = usePathname()

  const handleClose = () => {
    setIsOpen(false)
  }

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="acive:text-green border-none outline-none transition hover:text-green focus-visible:ring-transparent focus-visible:ring-offset-0 lg:hover:scale-125 lg:focus-visible:scale-125 lg:focus-visible:text-green">
          <Menu className="size-8" />
        </SheetTrigger>
        <SheetContent className="border-none outline-none" side="top" aria-describedby={undefined}>
          <DialogTitle>
            <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
          </DialogTitle>
          <nav className="pt-4">
            <ul>
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
            </ul>
            <Link
              className="flex items-center justify-center rounded-xl border-none bg-purple/80 py-4 no-underline outline-none transition active:bg-purple/60"
              target="_blank"
              href={routes.discord}
            >
              <Image
                className="mr-2"
                src="/icon/discord.svg"
                alt="Discord"
                width={30}
                height={30}
              />
              Присоединиться
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav>
      <ul className="hidden gap-20 text-lg lg:flex">
        {navigation.map(link => (
          <li className="cursor-pointer" key={link.label}>
            <Link
              target={link.label === 'Веб-карта' || 'Правила' ? '_self' : '_blank'}
              href={link.href}
              className={`text-md hover-underline underline-green ${pathname === link.href ? 'text-green' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
