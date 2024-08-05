import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Cute() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-xl font-bold">Фишки</h1>
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
          другого игрока только нажав по нему <span className="style-info">ПКМ</span>, чтобы обнять.
        </li>
        <li>
          <span className="text-white/50">2. </span>Ты можешь гладить котиков нажав по ним{' '}
          <span className="style-info">ПКМ</span>
        </li>
        <li>
          <span className="text-white/50">3. </span>Ты можешь поделиться своей любовью с игроков
          прописав <span className="style-info text-nowrap">{'/love <игрок>'}</span>
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="список-не-милых-фишек-сервера">
        Список не милых фишек сервера
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">1. </span>Ты можешь харкнуть в игрока написав{' '}
          <span className="style-info">/spit</span>
        </li>
        <li>
          <span className="text-white/50">2. </span>Ты можешь переключить фантомов командой{' '}
          <span className="style-info text-nowrap">/phantoms off / on</span>
        </li>
      </ul>

      <p className="mb-8 mt-8">На этом всё, ты думал тут что-то ещё будет?</p>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
