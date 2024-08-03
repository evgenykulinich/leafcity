import Image from 'next/image'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const updateDate = '3 Aug 2024'

export default function Crafts() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="mb-8 text-xl font-bold">Крафты</h1>
      <p className="mt-4">
        Все кастомные крафты доступные на сервере, разнообразь свое приключение и создай то, что не
        смог в одиночной игре. Особенно полезно для строителей.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="палочка-откладки">
        Палочка откладки
      </h2>
      <p className="mt-4">
        С помощью палочки откладки ты сможешь создавать совершенно разнообразные проекты, некоторые
        блоки невозможно редактировать во избежание дюпа.
      </p>
      <Dialog>
        <DialogTrigger className="relative mx-auto mt-4 block max-w-[400px] overflow-hidden rounded-lg outline-none">
          <Image
            src="/wiki/crafts/debug-stick.avif"
            alt="Палочка отладки"
            width={500}
            height={500}
          />
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Image
                  className="absolute right-1 top-1 w-[25px] rounded-[6px] bg-black/60 p-1 lg:w-[30px]"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXpvb20taW4iPjxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiLz48bGluZSB4MT0iMjEiIHgyPSIxNi42NSIgeTE9IjIxIiB5Mj0iMTYuNjUiLz48bGluZSB4MT0iMTEiIHgyPSIxMSIgeTE9IjgiIHkyPSIxNCIvPjxsaW5lIHgxPSI4IiB4Mj0iMTQiIHkxPSIxMSIgeTI9IjExIi8+PC9zdmc+"
                  alt="Палочка отладки"
                  width={24}
                  height={24}
                />
              </TooltipTrigger>
              <TooltipContent className="p-0">Приблизить</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DialogTrigger>
        <DialogContent className="w-full px-4 lg:max-w-[1080px] lg:px-8">
          <Image
            className="w-full overflow-hidden rounded-lg"
            src="/wiki/crafts/debug-stick.avif"
            alt="Палочка отладки"
            width={1000}
            height={1000}
          />
        </DialogContent>
      </Dialog>

      <h2 className="mt-8 text-lg font-bold" id="палочка-откладки">
        Блок света
      </h2>
      <p className="mt-4">
        Ты можешь создать блок света используя бутылку и любой предмет освещения из списка снизу, в
        зависимости от ценности предмета - ты сможешь создать от 1 до 16 штук. Регулировать яркость
        блока света можно на камнерезе.
      </p>
      <Dialog>
        <DialogTrigger className="relative mx-auto mb-8 mt-4 block max-w-[400px] overflow-hidden rounded-lg outline-none">
          <Image
            src="/wiki/crafts/debug-stick.avif"
            alt="Палочка отладки"
            width={500}
            height={500}
          />
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Image
                  className="absolute right-1 top-1 w-[25px] rounded-[6px] bg-black/60 p-1 lg:w-[30px]"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXpvb20taW4iPjxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiLz48bGluZSB4MT0iMjEiIHgyPSIxNi42NSIgeTE9IjIxIiB5Mj0iMTYuNjUiLz48bGluZSB4MT0iMTEiIHgyPSIxMSIgeTE9IjgiIHkyPSIxNCIvPjxsaW5lIHgxPSI4IiB4Mj0iMTQiIHkxPSIxMSIgeTI9IjExIi8+PC9zdmc+"
                  alt="Палочка отладки"
                  width={24}
                  height={24}
                />
              </TooltipTrigger>
              <TooltipContent className="p-0">Приблизить</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DialogTrigger>
        <DialogContent className="w-full px-4 lg:max-w-[1080px] lg:px-8">
          <Image
            className="w-full overflow-hidden rounded-lg"
            src="/wiki/crafts/light.avif"
            alt="Палочка отладки"
            width={1000}
            height={1000}
          />
        </DialogContent>
      </Dialog>

      <small className="block text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
