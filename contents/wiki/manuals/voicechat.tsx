import Link from 'next/link'
import Image from 'next/image'

import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const updateDate = '3 Aug 2024'

export default function VoiceChat() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="mb-8 text-xl font-bold">Голосовой чат</h1>
      <p className="mt-4">
        Plasmo Voice позволяет использовать голосовой чат в Minecraft, предоставляя множество
        функций и настроек для удобного общения в игре.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="мод-на-голосовой-чат">
        Мод на голосовой чат
      </h2>
      <h3 className="mt-8 text-lg font-bold" id="установка">
        Установка
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">1. </span>Скачать и установить{' '}
          <Link
            className="hover-underline underline-green text-green"
            href="https://fabricmc.net/use/installer/"
          >
            Fabric
          </Link>{' '}
          или{' '}
          <Link
            className="hover-underline underline-green text-green"
            href="http://files.minecraftforge.net/"
          >
            Forge
          </Link>
        </li>
        <li>
          <span className="text-white/50">2. </span>Скачать{' '}
          <Link
            className="hover-underline underline-green text-green"
            href="https://modrinth.com/plugin/plasmo-voice/"
          >
            Plasmo Voice
          </Link>{' '}
          и перекинуть в папку{' '}
          <span className="rounded bg-purple/20 px-2 py-1">/.minecraft/mods/</span>
        </li>
      </ul>

      <p className="mt-4">
        Мод доступен на Fabric и на Forge, но чтобы скачать мод на Forge вам нужно нажать на кнопку
        Files и выбрать его там. По умолчанию скачивается версия на Fabric.
      </p>

      <h3 className="mt-8 text-lg font-bold" id="дополнительно">
        Дополнительно
      </h3>
      <p className="mt-4">
        Если ты пользуешься Fabric впервые, то рекомендуем установить{' '}
        <Link
          className="hover-underline underline-green text-green"
          href="https://optifine.net/downloads"
        >
          OptiFine
        </Link>{' '}
        или{' '}
        <Link
          className="hover-underline underline-green text-green"
          href="https://www.curseforge.com/minecraft/mc-mods/sodium"
        >
          Sodium
        </Link>
      </p>
      <p className="mt-4">
        Чтобы установить Optifine, скачай мод{' '}
        <Link
          className="hover-underline underline-green text-green"
          href="https://www.curseforge.com/minecraft/mc-mods/optifabric"
        >
          OptiFabric
        </Link>{' '}
        и OptiFine с официального сайта. Нужно перекинуть оба мода в папку{' '}
        <span className="rounded bg-purple/20 px-2 py-1">/.minecraft/mods/</span>
      </p>

      <h3 className="mt-8 text-lg font-bold" id="зависимости-для-данного-мода">
        Зависимости для данного мода
      </h3>
      <p className="mt-4">
        Зависимости мода для Fabric: необходимо скачать{' '}
        <Link
          className="hover-underline underline-green text-green"
          href="https://modrinth.com/mod/fabric-api/versions?c=release"
        >
          Fabric API
        </Link>{' '}
        Зависимости мода для Forge: необходимо скачать{' '}
        <Link
          className="hover-underline underline-green text-nowrap text-green"
          href="https://modrinth.com/mod/kotlin-for-forge/versions"
        >
          Kotlin for Forge
        </Link>
      </p>

      <h2 className="mt-8 text-lg font-bold" id="новые-значки">
        Новые значки
      </h2>
      <p className="mt-4">
        Теперь ты можешь отличить значки{' '}
        <span className="rounded bg-purple/20 px-2 py-1">Client Mute</span> и{' '}
        <span className="rounded bg-purple/20 px-2 py-1">Server Mute</span>
      </p>
      <p className="mt-4">
        Также есть новая <span className="rounded bg-purple/20 px-2 py-1">Player Muted Audio</span>{' '}
        иконка. Этот значок означает, что игрок отключил голосовой чат на клиенте.
      </p>

      <div className="flex flex-wrap gap-4">
        <Dialog>
          <DialogTrigger className="relative mx-auto mt-4 block max-w-[400px] overflow-hidden rounded-lg outline-none">
            <Image
              className="h-full"
              src="/wiki/voice/icons-1.png"
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
                    alt="Иконки"
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
              src="/wiki/voice/icons-1.png"
              alt="Палочка отладки"
              width={1000}
              height={1000}
            />
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger className="relative mx-auto mt-4 block max-w-[400px] overflow-hidden rounded-lg outline-none">
            <Image src="/wiki/voice/icons-2.png" alt="Палочка отладки" width={500} height={500} />
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Image
                    className="absolute right-1 top-1 w-[25px] rounded-[6px] bg-black/60 p-1 lg:w-[30px]"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXpvb20taW4iPjxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiLz48bGluZSB4MT0iMjEiIHgyPSIxNi42NSIgeTE9IjIxIiB5Mj0iMTYuNjUiLz48bGluZSB4MT0iMTEiIHgyPSIxMSIgeTE9IjgiIHkyPSIxNCIvPjxsaW5lIHgxPSI4IiB4Mj0iMTQiIHkxPSIxMSIgeTI9IjExIi8+PC9zdmc+"
                    alt="Иконки"
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
              src="/wiki/voice/icons-2.png"
              alt="Палочка отладки"
              width={1000}
              height={1000}
            />
          </DialogContent>
        </Dialog>
      </div>

      <h2 className="mt-8 text-lg font-bold" id="новое-меню">
        Новое меню
      </h2>
      <p className="mt-4">Благодаря множеству новых функций нам пришлось заново продумать меню.</p>
      <p className="mt-4">
        Мы заменили <span className="rounded bg-purple/20 px-2 py-1">General</span>
        категорию четырьмя новыми: <span className="rounded bg-purple/20 px-2 py-1">
          Devices
        </span>, <span className="rounded bg-purple/20 px-2 py-1">Volume</span>,{' '}
        <span className="rounded bg-purple/20 px-2 py-1">Activation</span> и{' '}
        <span className="rounded bg-purple/20 px-2 py-1">Overlay</span>
      </p>
      <p className="mb-8 mt-4">
        Также появилась новая <span className="rounded bg-purple/20 px-2 py-1">Add-ons</span>
        категория и множество улучшений визуального оформления и удобства использования.
      </p>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
