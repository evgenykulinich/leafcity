import { Earth, Handshake, Wifi } from 'lucide-react'

import { Achievement } from '@/components/achievements/Achievement'

export function Achievements() {
  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="text-[26px]">Вот, почему мы тебе понравимся</h2>
      <div className="mt-8 flex flex-col gap-12 lg:mt-12 lg:flex-row lg:justify-between">
        <Achievement
          title="Высокая стабильность"
          content="Мощное оборудование, детальная оптимизация без вреда для игры"
          className="w-full flex-1 cursor-default rounded-2xl border-2 border-purple bg-purple/10 text-purple transition-all hover:bg-purple/20 lg:hover:scale-[1.025]"
        >
          <Wifi className="mb-10 size-10" />
        </Achievement>
        <Achievement
          title="Многогранное сообщество"
          content="Постоянные события от игроков. Собрания всего сервера для обсуждения новвоведений"
          className="w-full flex-1 cursor-default rounded-2xl border-2 border-green bg-green/10 text-green transition-all hover:bg-green/20 lg:hover:scale-[1.025]"
        >
          <Handshake className="mb-10 size-10" />
        </Achievement>
        <Achievement
          title="Разные миры"
          content="Всё для твоих задач. Мир выживания, ферм и ресурсов"
          className="w-full flex-1 cursor-default rounded-2xl border-2 border-blue bg-blue/10 text-blue transition-all hover:bg-blue/20 lg:hover:scale-[1.025]"
        >
          <Earth className="mb-10 size-10" />
        </Achievement>
      </div>
    </section>
  )
}
