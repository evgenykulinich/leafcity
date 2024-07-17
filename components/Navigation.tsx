'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMedia } from 'react-use'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { url } from '@/constants/translation'

const routes = [
  {
    href: url.rules,
    label: 'Правила',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNjYWxlIj48cGF0aCBkPSJtMTYgMTYgMy04IDMgOGMtLjg3LjY1LTEuOTIgMS0zIDFzLTIuMTMtLjM1LTMtMVoiLz48cGF0aCBkPSJtMiAxNiAzLTggMyA4Yy0uODcuNjUtMS45MiAxLTMgMXMtMi4xMy0uMzUtMy0xWiIvPjxwYXRoIGQ9Ik03IDIxaDEwIi8+PHBhdGggZD0iTTEyIDN2MTgiLz48cGF0aCBkPSJNMyA3aDJjMiAwIDUtMSA3LTIgMiAxIDUgMiA3IDJoMiIvPjwvc3ZnPg=='
  },
  {
    href: url.map,
    label: 'Веб-карта',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWVhcnRoIj48cGF0aCBkPSJNMjEuNTQgMTVIMTdhMiAyIDAgMCAwLTIgMnY0LjU0Ii8+PHBhdGggZD0iTTcgMy4zNFY1YTMgMyAwIDAgMCAzIDNhMiAyIDAgMCAxIDIgMmMwIDEuMS45IDIgMiAyYTIgMiAwIDAgMCAyLTJjMC0xLjEuOS0yIDItMmgzLjE3Ii8+PHBhdGggZD0iTTExIDIxLjk1VjE4YTIgMiAwIDAgMC0yLTJhMiAyIDAgMCAxLTItMnYtMWEyIDIgMCAwIDAtMi0ySDIuMDUiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg=='
  },
  {
    href: url.shop,
    label: 'Магазин',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNob3BwaW5nLWJhc2tldCI+PHBhdGggZD0ibTE1IDExLTEgOSIvPjxwYXRoIGQ9Im0xOSAxMS00LTciLz48cGF0aCBkPSJNMiAxMWgyMCIvPjxwYXRoIGQ9Im0zLjUgMTEgMS42IDcuNGEyIDIgMCAwIDAgMiAxLjZoOS44YTIgMiAwIDAgMCAyLTEuNmwxLjctNy40Ii8+PHBhdGggZD0iTTQuNSAxNS41aDE1Ii8+PHBhdGggZD0ibTUgMTEgNC03Ii8+PHBhdGggZD0ibTkgMTEgMSA5Ii8+PC9zdmc+'
  },
  {
    href: url.wiki,
    label: 'Википедия',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdyYWR1YXRpb24tY2FwIj48cGF0aCBkPSJNMjEuNDIgMTAuOTIyYTEgMSAwIDAgMC0uMDE5LTEuODM4TDEyLjgzIDUuMThhMiAyIDAgMCAwLTEuNjYgMEwyLjYgOS4wOGExIDEgMCAwIDAgMCAxLjgzMmw4LjU3IDMuOTA4YTIgMiAwIDAgMCAxLjY2IDB6Ii8+PHBhdGggZD0iTTIyIDEwdjYiLz48cGF0aCBkPSJNNiAxMi41VjE2YTYgMyAwIDAgMCAxMiAwdi0zLjUiLz48L3N2Zz4='
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
        <SheetTrigger className="border-none outline-none">
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl border-none px-0 font-normal text-white outline-none transition hover:scale-125 hover:text-green focus-visible:scale-125 focus-visible:text-green focus-visible:ring-transparent focus-visible:ring-offset-0"
          >
            <Menu className="size-8" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="border-none outline-none">
          <nav className="pt-4">
            <ul>
              {routes.map(route => (
                <li className="mb-5 cursor-pointer text-center text-2xl" key={route.label}>
                  <Link
                    className="text-md flex items-center justify-center hover:text-green"
                    href={route.href}
                    onClick={handleClose}
                  >
                    <Image
                      className="mr-4 w-7"
                      src={route.icon}
                      alt={route.label}
                      width={100}
                      height={100}
                    />
                    <span>{route.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              className="flex items-center justify-center rounded-xl border-none bg-purple/80 py-4 no-underline outline-none transition active:bg-purple/60"
              target="_blank"
              href={url.discord}
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
      <ul className="hidden gap-16 text-lg lg:flex">
        {routes.map(route => (
          <li className="cursor-pointer" key={route.label}>
            <Link
              target={route.label === 'Веб-карта' || 'Правила' ? '_self' : '_blank'}
              href={route.href}
              className={`text-md link-animation font-semibold ${pathname === route.href ? 'text-green' : ''}`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
