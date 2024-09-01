import Image from 'next/image'
import Link from 'next/link'

import { routes } from '@/constants/routes'
import { icons, uniqueIcons } from '@/data/wiki'
import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '31 Aug 2024'
const sortedIconsList = icons.sort((prev, next) => (prev.icon > next.icon ? 1 : -1))

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
          <span className="font-bold">• </span>Иконки будут показываться в чате и табе
        </li>
        <li>
          <span className="font-bold">• </span>Товар приобретается навсегда
        </li>
      </ul>

      <h2 className="text-subheading" id="команда-для-смена-иконки">
        Команда для смены иконки
      </h2>
      <p className="mt-4">
        <span className="text-note note-purple">{'/icon <иконка>'}</span>
      </p>

      <h2 className="text-subheading" id="доступные-иконки">
        Доступные иконки
      </h2>
      <div className="mt-4">
        {sortedIconsList.map(icon => (
          <div className="flex items-center gap-2 py-2" key={icon.icon}>
            <Image
              className="h-auto w-[30px]"
              src={icon.img}
              alt={icon.icon}
              width={100}
              height={100}
            />
            <span className="font-bold">•</span>
            <span className="rounded bg-blue/20 px-2 py-1 font-bold">{icon.icon}</span>
          </div>
        ))}
      </div>

      <h2 className="text-subheading" id="уникальные-иконки">
        Уникальные иконки
      </h2>
      <div className="mt-4">
        {uniqueIcons.map(icon => (
          <div className="flex items-center gap-2 py-2" key={icon.icon}>
            <Image
              className="h-auto w-[30px]"
              src={icon.img}
              alt={icon.icon}
              width={100}
              height={100}
            />
            <span className="font-bold">•</span>
            <span className="rounded bg-blue/20 px-2 py-1 font-bold">{icon.icon}</span>
          </div>
        ))}
      </div>

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
