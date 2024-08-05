import Link from 'next/link'

import { routes } from '@/constants/routes'
import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Info() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-xl font-bold">Введение</h1>
      <p className="mt-4">
        Документация проекта, самая важная информация о проекте на одной странице. Мы надеемся, что
        наша документация поможет тебе более полно погрузиться в наш мир и насладиться игрой вместе
        с нами!
      </p>
      <p className="mt-4">
        Наша основная цель – создание уютного сообщества игроков с разнообразными интересами,
        которым мы предоставим расширенный игровой опыт по мотивам{' '}
        <span className="style-info">ванильного</span> Minecraft!
      </p>
      <h2 className="mt-8 text-lg font-bold" id="впервые-на-сервере">
        Впервые на сервере?
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li className="text-white/50">
          <span className="font-bold text-white/50">• </span>
          <Link className="hover-underline underline-blue text-blue" href={routes.rules}>
            Правила сервера
          </Link>
        </li>
        <li className="text-white/50">
          <span className="font-bold text-white/50">• </span>
          <Link
            className="hover-underline underline-blue text-blue"
            href={`${routes.baseUrl}/wiki/start/addons`}
          >
            Разрешённые модификации
          </Link>
        </li>
        <li className="text-white/50">
          <span className="font-bold text-white/50">• </span>
          <Link
            className="hover-underline underline-blue text-blue"
            href={`${routes.baseUrl}/wiki/start/modpack`}
          >
            Сборка сервера
          </Link>
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="ищешь-гайды">
        Ищешь гайды?
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="font-bold text-white/50">• </span>
          <Link
            className="hover-underline underline-blue text-blue"
            href={`${routes.baseUrl}/wiki/manuals/commands`}
          >
            Команды сервера
          </Link>
        </li>
        <li>
          <span className="font-bold text-white/50">• </span>
          <Link
            className="hover-underline underline-blue text-blue"
            href={`${routes.baseUrl}/wiki/manuals/crafts`}
          >
            Крафты
          </Link>
        </li>
        <li>
          <span className="font-bold text-white/50">• </span>
          <Link
            className="hover-underline underline-blue text-blue"
            href={`${routes.baseUrl}/wiki/manuals/registration`}
          >
            Регистрация
          </Link>
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="остались-вопросы">
        Остались вопросы?
      </h2>
      <p className="mb-8 mt-4">
        Возможно ответ на твой вопрос уже есть на странице с часто задаваемыми вопросами. Если его
        нет, то ты можешь обратиться за помощью в{' '}
        <Link className="hover-underline underline-purple text-purple" href={routes.discord}>
          Службу заботы
        </Link>{' '}
        Discrod-a.
      </p>
      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
