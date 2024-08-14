import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Cute() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-heading">Фишки</h1>
      <p className="mt-4">
        На нашем сервере есть несколько особых функций, которые добавляют веселья и уюта в вашу
        игру.
      </p>

      <h2 className="text-subheading" id="список-милых-фишек-нашего-сервера">
        Список милых фишек сервера
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="font-bold">• </span>Именно на нашем сервере ты можешь узнать ник другого
          игрока только нажав по нему <span className="text-note note-purple">ПКМ</span>, чтобы
          обнять.
        </li>
        <li>
          <span className="font-bold">• </span>Ты можешь гладить котиков нажав по ним{' '}
          <span className="text-note note-purple">ПКМ</span>
        </li>
        <li>
          <span className="font-bold">• </span>Ты можешь поделиться своей любовью с игроков прописав{' '}
          <span className="text-note note-purple text-nowrap">{'/love <игрок>'}</span>
        </li>
      </ul>

      <h2 className="text-subheading" id="список-не-милых-фишек-сервера">
        Список не милых фишек сервера
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="font-bold">• </span>Ты можешь харкнуть в игрока написав{' '}
          <span className="text-note note-purple">/spit</span>
        </li>
        <li>
          <span className="font-bold">• </span>Ты можешь переключить фантомов командой{' '}
          <span className="text-note note-purple text-nowrap">/phantoms off / on</span>
        </li>
      </ul>

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
