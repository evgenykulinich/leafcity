import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function NickColor() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="mb-8 text-xl font-bold">Цвет ника</h1>
      <p className="mt4">
        С помощью этих команд ты сможешь изменить цвет своего ника в чате и tab`е, выбрав один
        оттенок или градиент. Доступно только для подписчиков.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="команда-для-смены-цвета-ника">
        Команда для смены цвета ника
      </h2>
      <p className="mt-4">
        <span className="leading-height rounded bg-green/20 px-2 py-1">{'/nickcolor <#цвет>'}</span>{' '}
        - для цвета ника с одним оттенком
      </p>
      <p className="mt-5">
        <span className="leading-height rounded bg-green/20 px-2 py-1">
          {'/nickcolor <gradient:#первый-цвет:#второй-цвет>'}
        </span>{' '}
        - для градиент ника
      </p>

      <h2 className="mt-8 text-lg font-bold" id="примеры">
        Примеры
      </h2>
      <p className="mt-4">
        <span className="leading-height rounded bg-purple/20 px-2 py-1">
          {'/nickcolor <#90EE90>'}
        </span>{' '}
        - один оттенок
      </p>
      <p className="mb-8 mt-5">
        <span className="leading-height rounded bg-purple/20 px-2 py-1">
          {'/nickcolor <gradient:#90EE90:#3CB371>'}
        </span>{' '}
        - градиент
      </p>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
