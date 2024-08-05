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
      <h1 className="mb-8 text-xl font-bold">Иконки</h1>
      <p className="mt-4">
        Иконки на нашем проекте – способ выделиться среди других игроков, а так же финансовая
        поддержка для сервера. В данном руководстве ты сможешь узнать какие есть команды для смены
        иконки.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="важно">
        Важно
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">1. </span>Команды работают только при покупке товара в{' '}
          <Link className="hover-underline underline-green text-green" href={routes.shop}>
            магазине
          </Link>
        </li>
        <li>
          <span className="text-white/50">2. </span>Иконки работают как на{' '}
          <span className="style-info">Java</span>, так и на{' '}
          <span className="style-info">Bedrock</span>
        </li>
        <li>
          <span className="text-white/50">3. </span>Иконки будут показываться в чате и табе.
        </li>
        <li>
          <span className="text-white/50">3. </span>Товар приобретается навсегда.
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="доступные-иконки">
        Доступные иконки
      </h2>
      <div className="mb-8 mt-4">
        {sortedIconsList.map(icon => (
          <div className="flex items-center gap-2 py-2" key={icon.command}>
            <Image className="icon" src={icon.img} alt={icon.command} width={100} height={100} />
            <span className="font-bold text-white/50">•</span>
            <span className="rounded bg-purple/20 px-2 py-1 font-bold">{icon.command}</span>
          </div>
        ))}
      </div>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
