'use client'

import Link from 'next/link'
import { useMedia } from 'react-use'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Card } from '@/components/ui/card'

const routes = [
  {
    href: 'https://discord.com/invite/8rx6xEsj2U',
    label: 'Правила',
    description: 'Discord-канал со всеми правилами сервера!'
  },
  {
    href: 'https://shop.leafcity.ru',
    label: 'Магазин',
    description: 'Лучший способ поддержать проект!'
  },
  {
    href: 'https://map.leafcity.ru',
    label: 'Веб-карта',
    description: 'Карта сервера в реальном времени!'
  },
  {
    href: 'https://wiki.leafcity.ru',
    label: 'Википедия',
    description: 'Начни погружение в сообщество LEAF CITY уже сейчас!'
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
            className="font-normal border-none rounded-xl focus-visible:text-green hover:text-green focus-visible:scale-125 hover:scale-125 focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white transition"
          >
            <Menu className="size-8" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="border-none">
          <nav className="pt-4">
            <ul>
              {routes.map(route => (
                <li className="cursor-pointer text-2xl mb-5 text-center" key={route.label}>
                  <Link target="_blank" href={route.href} className="link-animation">
                    <Card onClick={handleClose} className="border-none">
                      <Button className="text-md">{route.label}</Button>
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
      <ul className="text-lg flex gap-12">
        {routes.map(route => (
          <li className="cursor-pointer" key={route.label}>
            <Link target="_blank" href={route.href} className="link-animation">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="text-md">{route.label}</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 border-green border-2 rounded-2xl">
                  <div className="flex justify-between rounded-md space-x-4">
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
