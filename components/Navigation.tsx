'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMedia } from 'react-use'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Card } from '@/components/ui/card'
import { url } from '@/constants/translation'

const routes = [
  {
    href: url.rules,
    label: 'Правила',
    description: 'Discord-канал со всеми правилами сервера!',
    icon: '/icon/rules.png'
  },
  {
    href: url.shop,
    label: 'Магазин',
    description: 'Лучший способ поддержать проект!',
    icon: '/icon/shop.png'
  },
  {
    href: url.map,
    label: 'Веб-карта',
    description: 'Карта сервера в реальном времени!',
    icon: '/icon/map.png'
  },
  {
    href: url.wiki,
    label: 'Википедия',
    description: 'Начни погружение в сообщество LEAF CITY уже сейчас!',
    icon: '/icon/wiki.png'
  }
]

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
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl border-none px-0 font-normal text-white outline-none transition hover:scale-125 hover:text-green focus-visible:scale-125 focus-visible:text-green focus-visible:ring-transparent focus-visible:ring-offset-0"
          >
            <Menu className="size-8" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="border-none">
          <nav className="pt-4">
            <ul>
              {routes.map(route => (
                <li className="mb-5 cursor-pointer text-center text-2xl" key={route.label}>
                  <Link href={route.href} className="link-animation">
                    <Card onClick={handleClose} className="border-none">
                      <Button className="text-md">
                        <Image
                          className="mr-4"
                          src={route.icon}
                          alt={route.label}
                          width={30}
                          height={30}
                        />
                        {route.label}
                      </Button>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
            <Link target="_blank" href={url.discord}>
              <Button
                variant="default"
                className="w-full rounded-xl bg-purple/80 py-6 text-lg hover:bg-purple/60"
              >
                <Image
                  className="mr-2"
                  src="/icon/discord.svg"
                  alt="Discord"
                  width={30}
                  height={30}
                />
                Присоединиться
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav>
      <ul className="hidden gap-12 text-lg lg:flex">
        {routes.map(route => (
          <li className="cursor-pointer" key={route.label}>
            <Link
              target={route.label === 'Веб-карта' || 'Правила' ? '_self' : '_blank'}
              href={route.href}
              className={`link-animation ${pathname === route.href ? 'text-green' : ''}`}
            >
              <Button className="text-md">{route.label}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
