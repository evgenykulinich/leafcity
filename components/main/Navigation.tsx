import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

export const Navigation = () => {
  return (
    <nav>
      <ul className="text-lg flex gap-12">
        <li className="cursor-pointer">
          <Link
            target="_blank"
            href="https://discord.com/invite/8rx6xEsj2U"
            className="link-animation"
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button className="text-md">Правила</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 border-green border-2 rounded-2xl trans">
                <div className="flex justify-between rounded-md space-x-4">
                  <div className="space-y-1">
                    <p className="text-sm">Discord-канал со всеми правилами сервера!</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link target="_blank" href="https://shop.leafcity.ru" className="link-animation">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button className="text-md">Магазин</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 border-green border-2 rounded-2xl">
                <div className="flex justify-between rounded-md space-x-4">
                  <div className="space-y-1">
                    <p className="text-sm">Лучший способ поддержать проект!</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link target="_blank" href="https://map.leafcity.ru" className="link-animation">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button className="text-md">Веб-карта</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 border-green border-2 rounded-2xl">
                <div className="flex justify-between rounded-md space-x-4">
                  <div className="space-y-1">
                    <p className="text-sm">Карта сервера в реальном времени!</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link target="_blank" href="https://wiki.leafcity.ru" className="link-animation">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button className="text-md">Википедия</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 border-green border-2 rounded-2xl">
                <div className="flex justify-between rounded-md space-x-4">
                  <div className="space-y-1">
                    <p className="text-sm">Начни погружение в сообщество LEAF CITY уже сейчас!</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
