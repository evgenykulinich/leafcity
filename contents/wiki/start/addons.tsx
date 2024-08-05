import Link from 'next/link'

import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'
import { allowedMods, bannedMods, bannedPacks } from '@/data/wiki'
import { InfoText } from '@/components/wiki/textVariations'

const updateDate = '3 Aug 2024'
const sortedAllowedModsList = allowedMods.sort((prev, next) => (prev.name > next.name ? 1 : -1))
const sortedBannedModsList = bannedMods.sort((prev, next) => (prev.name > next.name ? 1 : -1))
const sortedBannedPacksList = bannedPacks.sort((prev, next) => (prev.name > next.name ? 1 : -1))

export default function Info() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-xl font-bold">Модификации</h1>
      <p className="mt-4">
        На нашем сервере разрешены модификации, которые добавляют визуальный контент или
        оптимизируют игру, при условии, что они не дают явного преимущества над другими игроками.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="разрешенные-модификации">
        Разрешенные модификации
      </h2>
      <p className="mt-4">
        Всё модификации, которые добавляют визуальный контент, а так же оптимизацию, кроме тех, что
        дают явные преимущества над другими игроками - разрешены. Автокликеры,{' '}
        <span className="style-info text-nowrap">Easy Place Mode</span>, а так же модификации, по
        типу: <span className="style-info">Gamma</span>,{' '}
        <span className="style-info text-nowrap">Fullbright UB</span>,{' '}
        <span className="style-info">InventoryProfileNext</span> - так же разрешены.
      </p>
      <InfoText className="mt-8">
        Если вы сомневаетесь в какой-либо модификации - обратитесь в поддержку.
      </InfoText>

      <h3 className="mt-8 text-lg font-bold" id="дополнительный-список">
        Дополнительный список
      </h3>

      <ul className="mt-4 flex flex-col gap-3">
        {sortedAllowedModsList.map(mod => (
          <li className="text-white/50" key={mod.name}>
            •{' '}
            <Link className="hover-underline underline-blue text-blue" href={mod.url}>
              {mod.name}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="ресурспаки">
        Ресурспаки
      </h2>
      <p className="mt-4">
        Ресурспаки также являются модификацией. Разрешено устанавливать любые ресурспаки, кроме тех,
        что указаны в списке запрещённых.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="запрещенные-модификации">
        Запрещенные модификации
      </h2>
      <p className="mt-4">
        Помимо перечисленных ниже модификаций, к использованию запрещены все копии, клоны и форки
        перечисленных ниже модов, выполняющих те же функции, вне зависимости от изменения названия и
        изменений в коде.
      </p>

      <h3 className="mt-8 text-lg font-bold" id="моды">
        Моды
      </h3>
      <ul className="mt-4 flex flex-col gap-3 text-white/50">
        {sortedBannedModsList.map(mod => (
          <li className="w-fit" key={mod.name}>
            <span className="style-danger">{mod.name}</span>
          </li>
        ))}
      </ul>

      <h3 className="mt-8 text-lg font-bold" id="список-ресурспаков">
        Список ресурспаков
      </h3>
      <ul className="mb-8 mt-4 flex flex-col gap-3">
        {sortedBannedPacksList.map(mod => (
          <li className="w-fit" key={mod.name}>
            <span className="style-danger">{mod.name}</span>
          </li>
        ))}
      </ul>

      <small className="text-nowrap text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
