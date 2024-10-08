import GradientPicker from '@/components/wiki/GradientPicker'
import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '9 Aug 2024'

export default function NickColor() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-heading">Цвет ника</h1>
      <p className="mt-4">
        С помощью этих команд ты сможешь изменить цвет своего ника в чате и Tab-е, выбрав один
        оттенок или градиент. Доступно только для подписчиков.
      </p>

      <h2 className="text-subheading" id="команда-для-смены-цвета-ника">
        Команда для смены цвета ника
      </h2>
      <p className="mt-4">
        <span className="text-note note-green">{'/nickcolor <#цвет>'}</span> – для цвета ника с
        одним оттенком
      </p>
      <p className="mt-5">
        <span className="text-note note-green">{'/nickcolor <gradient:#цвет1:#цвет2>'}</span> – для
        градиент ника
      </p>

      <h2 className="text-subheading" id="примеры">
        Примеры
      </h2>
      <p className="mt-4">
        <span className="text-note note-blue">{'/nickcolor <#90EE90>'}</span> – один оттенок
      </p>
      <p className="mb-4 mt-5">
        <span className="text-note note-blue">{'/nickcolor <gradient:#90EE90:#3CB371>'}</span> –
        градиент
      </p>

      <GradientPicker />

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
