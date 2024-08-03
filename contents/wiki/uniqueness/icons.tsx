import Link from 'next/link'

import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'
import { routes } from '@/constants/routes'

const updateDate = '3 Aug 2024'

export default function Icons() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="mb-8 text-xl font-bold">Иконки</h1>
      <p className="mt-4">
        Иконки на нашем проекте - способ выделиться среди других игроков, а так же финансовая
        поддержка для сервера. В данном руководстве ты сможешь узнать какие есть команды для смены
        иконки.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="важно">
        Важно
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">1. </span>Команды работают только при покупке товара на{' '}
          <Link className="hover-underline underline-green text-green" href={routes.shop}>
            shop.leafcity.ru.
          </Link>
        </li>
        <li>
          <span className="text-white/50">2. </span>Иконки работают как на Java, так и на Bedrock.
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
      <div className="mb-8 mt-4 rounded bg-green/10 px-2 py-1">
        <p>/icon star</p>
        <p>/icon heart</p>
        <p>/icon pickaxe</p>
        <p>/icon snowflake</p>
        <p>/icon plane</p>
        <p>/icon ussr</p>
        <p>/icon death</p>
        <p>/icon radiation</p>
        <p>/icon fire</p>
        <p>/icon meteorite</p>
        <p>/icon banana</p>
      </div>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
