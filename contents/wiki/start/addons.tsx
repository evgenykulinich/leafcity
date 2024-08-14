import Link from 'next/link'

import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'
import { allowedMods, bannedMods, bannedPacks } from '@/data/wiki'
import { InfoText } from '@/components/wiki/TextVariations'
import { routes } from '@/constants/routes'

const updateDate = '3 Aug 2024'
const sortedAllowedModsList = allowedMods.sort((prev, next) => (prev.name > next.name ? 1 : -1))
const sortedBannedModsList = bannedMods.sort((prev, next) => (prev.name > next.name ? 1 : -1))
const sortedBannedPacksList = bannedPacks.sort((prev, next) => (prev.name > next.name ? 1 : -1))

export default function Info() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-heading">Модификации</h1>
      <p className="mt-4">
        На нашем сервере разрешены модификации, которые добавляют визуальный контент или
        оптимизируют игру, при условии, что они не дают явного преимущества над другими игроками.
      </p>

      <h2 className="text-subheading" id="разрешённые-модификации">
        Разрешённые модификации
      </h2>
      <p className="mt-4">
        Все модификации, которые добавляют визуальный контент, а так же оптимизацию, кроме тех, что
        дают явные преимущества над другими игроками – разрешены. Автокликеры,{' '}
        <span className="text-note note-purple text-nowrap">Easy Place Mode</span>, а так же
        модификации, по типу: <span className="text-note note-purple">Gamma</span>,{' '}
        <span className="text-note note-purple text-nowrap">Fullbright UB</span>,{' '}
        <span className="text-note note-purple">InventoryProfileNext</span> – так же разрешены.
      </p>
      <InfoText className="mt-8">
        Если вы сомневаетесь в какой-либо модификации – обратитесь в{' '}
        <Link className="hover-underline underline-blue text-blue" href={routes.discordSupport}>
          поддержку
        </Link>
      </InfoText>

      <h3 className="text-subheading" id="дополнительный-список">
        Дополнительный список
      </h3>

      <ul className="mt-4 flex flex-col gap-3">
        {sortedAllowedModsList.map(mod => (
          <li key={mod.name}>
            <span className="font-bold">• </span>
            <Link className="hover-underline underline-green text-green" href={mod.url}>
              {mod.name}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-subheading" id="ресурспаки">
        Ресурспаки
      </h2>
      <p className="mt-4">
        Ресурспаки также являются модификацией. Разрешено устанавливать любые ресурспаки, кроме тех,
        что указаны в списке запрещённых.
      </p>

      <h2 className="text-subheading" id="запрещённые-модификации">
        Запрещённые модификации
      </h2>
      <p className="mt-4">
        Помимо перечисленных ниже модификаций, к использованию запрещены все копии, клоны и форки
        перечисленных ниже модов, выполняющих те же функции, вне зависимости от изменения названия и
        изменений в коде.
      </p>

      <h3 className="text-subheading" id="моды">
        Моды
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {sortedBannedModsList.map(mod => (
          <li key={mod.name}>
            <span className="text-note note-red">{mod.name}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-subheading" id="список-ресурспаков">
        Список ресурспаков
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {sortedBannedPacksList.map(mod => (
          <li key={mod.name}>
            <span className="text-note note-red">{mod.name}</span>
          </li>
        ))}
      </ul>

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
