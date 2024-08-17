import Image from 'next/image'
import Link from 'next/link'

import { routes } from '@/constants/routes'
import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Map() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-heading">Карта</h1>
      <p className="mt-4">
        Узнай о расположении всех построек и территорий нашего сервера на удобной и интуитивно
        понятной карте. Этот инструмент особенно полезен для новичков.
      </p>

      <Link
        className="relative mt-8 flex items-center rounded-lg border-2 border-green bg-green/10 p-4 transition hover:bg-green/20"
        href={routes.map}
      >
        <Image
          className="mr-4 w-[25px] cursor-pointer"
          src="/logo/lc.png"
          alt="LC"
          height={1000}
          width={1000}
        />
        <span className="text-[20px] font-bold">LEAF CITY • Карта</span>
        <Image
          className="absolute right-1"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4="
          alt=">"
          height={24}
          width={24}
        />
      </Link>

      <h2 className="text-subheading" id="дополнение">
        Дополнение
      </h2>

      <p className="mt-4 leading-loose">
        Ты можешь скрыть/показать себя на общей карте используя команду{' '}
        <span className="text-note note-blue text-nowrap">/map hide / show</span>
      </p>

      <p className="mt-4">
        Так же на общей карте доступны флаги, с помощью которых можно указать свой проект / базу /
        магазин, ты можешь их показать нажав{' '}
        <span className="text-note note-purple text-nowrap">Shift + ПКМ</span> по флагу (только с
        подпиской) или же через поддержку в Discord.
      </p>

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
