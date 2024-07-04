import { Earth, Handshake, Wifi } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Achievement } from './Achievement'

export function Achievements() {
  return (
    <section>
      {/* <h2 className='text-[26px] mt-24'>Вот, почему мы тебе понравимся</h2> */}
      <h2 className="text-[26px] mt-24">Вот, почему мы тебе не понравимся</h2>
      <div className="flex justify-between gap-12 mt-10">
        <Card className="w-full border-2 rounded-2xl border-green bg-green/10 hover:scale-105 transition-all text-emerald-200">
          <CardHeader className="mb-2">
            <Wifi className="size-10 mb-10" />
            <CardTitle>Высокая стабильность</CardTitle>
          </CardHeader>
          {/* <CardContent>Мощное оборудование, детальная оптимизация без вреда для игры</CardContent> */}
          <CardContent>
            В лучшем случае 8 тпс и желание сломать свой монитор молотком из-за лагов
          </CardContent>
        </Card>

        <Card className="w-full border-2 rounded-2xl bg-slate-300/10 hover:scale-105 transition-all">
          <CardHeader className="mb-2">
            <Handshake className="size-10 mb-10" />
            <CardTitle>Многогранное сообщество</CardTitle>
          </CardHeader>
          {/* <CardContent>
            Постоянные события от игроков. Собрания всего сервера для обсуждения новвоведений
          </CardContent> */}
          <CardContent>
            На сервере гриферы и дети на админах. Овнер сервера гей, пидорас и просто хороший
            человек
          </CardContent>
        </Card>

        <Card className="w-full border-2 rounded-2xl border-blue bg-blue/10 hover:scale-105 transition-all text-sky-200">
          <CardHeader className="mb-2">
            <Earth className="size-10 mb-10" />
            <CardTitle>Разные миры</CardTitle>
          </CardHeader>
          {/* <CardContent>Всё для твоих задач. Мир выживания, ферм и ресурсов</CardContent> */}
          <CardContent>
            Можешь выбрать любой мир, в любом из них тебя всё равно забанят, потому что ты сломал не
            тот блок
          </CardContent>
        </Card>

        {/* <Achievement
          title="Высокая стабильность"
          content="Мощное оборудование, детальная оптимизация без вреда для игры"
        >
          <Wifi />
        </Achievement>
        <Achievement
          title="Многогранное сообщество"
          content="Постоянные события от игроков. Собрания всего сервера для обсуждения новвоведений"
        >
          <Handshake />
        </Achievement>
        <Achievement
          title="Разные миры"
          content="Всё для твоих задач. Мир выживания, ферм и ресурсов"
        >
          <Earth />
        </Achievement> */}
      </div>
    </section>
  )
}
