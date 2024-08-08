import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'
import ColorPicker from '@/components/wiki/ColorPicker'

const updateDate = '8 Aug 2024'

export default function NickColor() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-xl font-bold">Цвет ника</h1>
      <p className="mt-4">
        С помощью этих команд ты сможешь изменить цвет своего ника в чате и Tab-е, выбрав один
        оттенок или градиент. Доступно только для подписчиков.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="команда-для-смены-цвета-ника">
        Команда для смены цвета ника
      </h2>
      <p className="mt-4">
        <span className="style-success">{'/nickcolor <#цвет>'}</span> – для цвета ника с одним
        оттенком
      </p>
      <p className="mt-5">
        <span className="style-success">{'/nickcolor <gradient:#цвет1:#цвет2>'}</span> – для
        градиент ника
      </p>

      <h2 className="mt-8 text-lg font-bold" id="примеры">
        Примеры
      </h2>
      <p className="mt-4">
        <span className="style-point">{'/nickcolor <#90EE90>'}</span> – один оттенок
      </p>
      <p className="mb-8 mt-5">
        <span className="style-point">{'/nickcolor <gradient:#90EE90:#3CB371>'}</span> – градиент
      </p>

      <ColorPicker />

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
