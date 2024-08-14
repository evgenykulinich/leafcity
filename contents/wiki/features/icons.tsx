import Link from 'next/link'
import Image from 'next/image'

import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'
import { routes } from '@/constants/routes'
import { icons } from '@/data/wiki'

const updateDate = '3 Aug 2024'
const sortedIconsList = icons.sort((prev, next) => (prev.command > next.command ? 1 : -1))

export default function Icons() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-heading">Иконки</h1>
      <p className="mt-4">
        Иконки на нашем проекте – способ выделиться среди других игроков, а так же финансовая
        поддержка для сервера. В данном руководстве ты сможешь узнать какие есть команды для смены
        иконки.
      </p>

      <h2 className="text-subheading" id="важно">
        Важно
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="font-bold">• </span>Команды работают только при покупке товара в{' '}
          <Link className="hover-underline underline-green text-green" href={routes.shop}>
            магазине
          </Link>
        </li>
        <li>
          <span className="font-bold">• </span>Иконки работают как на{' '}
          <span className="text-note note-purple">Java</span>, так и на{' '}
          <span className="text-note note-purple">Bedrock</span>
        </li>
        <li>
          <span className="font-bold">• </span>Иконки будут показываться в чате и табе.
        </li>
        <li>
          <span className="font-bold">• </span>Товар приобретается навсегда.
        </li>
      </ul>

      <h2 className="text-subheading" id="доступные-иконки">
        Доступные иконки
      </h2>
      <div className="mt-4">
        {sortedIconsList.map(icon => (
          <div className="flex items-center gap-2 py-2" key={icon.command}>
            <Image
              className="h-auto w-[30px]"
              src={icon.img}
              alt={icon.command}
              width={100}
              height={100}
            />
            <span className="font-bold">•</span>
            <span className="rounded bg-purple/20 px-2 py-1 font-bold">{icon.command}</span>
          </div>
        ))}
      </div>

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
