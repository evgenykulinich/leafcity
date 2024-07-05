'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMedia } from 'react-use'
import { useState } from 'react'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Card } from '@/components/ui/card'

const routes = [
  {
    href: 'https://discord.gg/leaf-city',
    label: 'Правила',
    description: 'Discord-канал со всеми правилами сервера!',
    icon: '/rules.png'
  },
  {
    href: 'https://shop.leafcity.ru',
    label: 'Магазин',
    description: 'Лучший способ поддержать проект!',
    icon: '/shop.png'
  },
  {
    href: 'map',
    label: 'Веб-карта',
    description: 'Карта сервера в реальном времени!',
    icon: '/map.png'
  },
  {
    href: 'https://wiki.leafcity.ru',
    label: 'Википедия',
    description: 'Начни погружение в сообщество LEAF CITY уже сейчас!',
    icon: '/wiki.png'
  }
]

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMedia('(max-width: 1024px)', false)

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
            className="rounded-xl border-none font-normal text-white outline-none transition hover:scale-125 hover:text-green focus-visible:scale-125 focus-visible:text-green focus-visible:ring-transparent focus-visible:ring-offset-0"
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
              target={route.label === 'Веб-карта' ? '_self' : '_blank'}
              href={route.href}
              className="link-animation"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="text-md">{route.label}</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 rounded-2xl border-2 border-green bg-black/70">
                  <div className="flex justify-between space-x-4 rounded-md">
                    <div className="space-y-1">
                      <p className="text-sm">{route.description}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
