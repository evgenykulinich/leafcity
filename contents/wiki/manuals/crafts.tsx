import { Description } from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import Image from 'next/image'

import { FadeInImage } from '@/components/common/FadeInImage'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Crafts() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-heading">Крафты</h1>
      <p className="mt-4">
        Все кастомные крафты доступные на сервере, разнообразь свое приключение и создай то, что не
        смог в одиночной игре. Особенно полезно для строителей.
      </p>

      <h2 className="text-subheading" id="палочка-отладки">
        Палочка отладки
      </h2>
      <p className="mt-4">
        С помощью палочки откладки ты сможешь создавать совершенно разнообразные проекты, некоторые
        блоки невозможно редактировать во избежание дюпа.
      </p>
      <Dialog>
        <DialogTrigger className="relative mx-auto mt-4 block overflow-hidden rounded-lg outline-none lg:rounded-xl">
          <FadeInImage
            src="/wiki/crafts/debug-stick.avif"
            alt="Палочка отладки"
            width={400}
            height={400}
          />
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Image
                  className="absolute right-1 top-1 w-[25px] rounded-[6px] bg-black/60 p-1 lg:w-[30px]"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXpvb20taW4iPjxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiLz48bGluZSB4MT0iMjEiIHgyPSIxNi42NSIgeTE9IjIxIiB5Mj0iMTYuNjUiLz48bGluZSB4MT0iMTEiIHgyPSIxMSIgeTE9IjgiIHkyPSIxNCIvPjxsaW5lIHgxPSI4IiB4Mj0iMTQiIHkxPSIxMSIgeTI9IjExIi8+PC9zdmc+"
                  alt="Приблизить"
                  width={24}
                  height={24}
                />
              </TooltipTrigger>
              <TooltipContent className="p-0">Приблизить</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DialogTrigger>
        <DialogContent className="w-full max-w-screen-xl px-4 lg:px-8">
          <VisuallyHidden.Root>
            <Description />
          </VisuallyHidden.Root>
          <DialogTitle>
            <VisuallyHidden.Root />
          </DialogTitle>
          <FadeInImage
            className="w-full overflow-hidden rounded-lg lg:rounded-xl"
            src="/wiki/crafts/debug-stick.avif"
            alt="Палочка отладки"
            width={1920}
            height={1080}
          />
        </DialogContent>
      </Dialog>

      <h2 className="text-subheading" id="блок-света">
        Блок света
      </h2>
      <p className="mt-4">
        Ты можешь создать блок света используя бутылку и любой предмет освещения из списка снизу, в
        зависимости от ценности предмета – ты сможешь создать от 1 до 16 штук. Регулировать яркость
        блока света можно на камнерезе.
      </p>
      <Dialog>
        <DialogTrigger className="relative mx-auto mt-4 block overflow-hidden rounded-lg outline-none lg:rounded-xl">
          <FadeInImage src="/wiki/crafts/light.avif" alt="Блок света" width={400} height={400} />
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Image
                  className="absolute right-1 top-1 w-[25px] rounded-[6px] bg-black/60 p-1 lg:w-[30px]"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXpvb20taW4iPjxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiLz48bGluZSB4MT0iMjEiIHgyPSIxNi42NSIgeTE9IjIxIiB5Mj0iMTYuNjUiLz48bGluZSB4MT0iMTEiIHgyPSIxMSIgeTE9IjgiIHkyPSIxNCIvPjxsaW5lIHgxPSI4IiB4Mj0iMTQiIHkxPSIxMSIgeTI9IjExIi8+PC9zdmc+"
                  alt="Приблизить"
                  width={24}
                  height={24}
                />
              </TooltipTrigger>
              <TooltipContent className="p-0">Приблизить</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DialogTrigger>
        <DialogContent className="w-full max-w-screen-xl px-4 lg:px-8">
          <VisuallyHidden.Root>
            <Description />
          </VisuallyHidden.Root>
          <DialogTitle>
            <VisuallyHidden.Root />
          </DialogTitle>
          <FadeInImage
            className="overflow-hidden rounded-lg lg:rounded-xl"
            src="/wiki/crafts/light.avif"
            alt="Блок света"
            width={1920}
            height={1080}
          />
        </DialogContent>
      </Dialog>

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
