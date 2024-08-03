import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Cute() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="mb-8 text-xl font-bold">Фишки</h1>
      <p className="mt-4">
        На нашем сервере есть несколько особых функций, которые добавляют веселья и уюта в вашу
        игру.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="список-милых-фишек-нашего-сервера">
        Список милых фишек сервера
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">1. </span>Именно на нашем сервере ты можешь узнать ник
          другого игрока только нажав по нему{' '}
          <span className="leading-height rounded bg-purple/20 px-2 py-1">ПКМ</span>, чтобы обнять.
        </li>
        <li>
          <span className="text-white/50">2. </span>Ты можешь гладить котиков нажав по ним{' '}
          <span className="leading-height rounded bg-purple/20 px-2 py-1">ПКМ</span>
        </li>
        <li>
          <span className="text-white/50">3. </span>Ты можешь поделиться своей любовью с игроков
          прописав{' '}
          <span className="leading-height text-nowrap rounded bg-purple/20 px-2 py-1">
            {'/love <игрок>'}
          </span>
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="список-не-очень-милых-фишек-сервера">
        Список не очень милых фишек сервера
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">1. </span>Ты можешь харкнуть в игрока написав{' '}
          <span className="leading-height rounded bg-purple/20 px-2 py-1">/spit</span>
        </li>
        <li>
          <span className="text-white/50">2. </span>Ты можешь переключить фантомов командой{' '}
          <span className="leading-height rounded bg-purple/20 px-2 py-1">/phantoms off / on</span>
        </li>
      </ul>

      <p className="mb-8 mt-8">На этом всё, ты думал тут что-то ещё будет?</p>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
