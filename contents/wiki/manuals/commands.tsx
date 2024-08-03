import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const commandList = [
  {
    name: '/addsocial /addtg',
    description: 'добавить телеграмм для аутентификации.'
  },
  {
    name: '/armorstand',
    description: 'просмотреть и редактировать стойки для брони рядом с вами.'
  },
  {
    name: '/bellyflop /bf',
    description: 'лечь на животик.'
  },
  {
    name: '/co',
    description: 'coreprotect (логи).'
  },
  {
    name: '/changepass /changepassword',
    description: 'изменить пароль.'
  },
  {
    name: '/crawl',
    description: 'ползти как солдатик.'
  },
  {
    name: '/disc',
    description: 'загрузить песню на диск.'
  },
  {
    name: '/donate /shop',
    description: 'купить себе плюшки и поддержать сервер.'
  },
  {
    name: '/glow',
    description: 'начать светиться как солнышко (только с подпиской).'
  },
  {
    name: '/hat',
    description: 'надеть любой предмет на голову.'
  },
  {
    name: '/icon',
    description: 'поменять иконку в чате и tab`е (только с покупкой иконок).'
  },
  {
    name: '/ignore',
    description: 'игнорировать кого-то или всех.'
  },
  {
    name: '/ignorelist',
    description: 'список игнорируемых.'
  },
  {
    name: '/iname /itemname',
    description: 'поменять название предмета (только с подпиской).'
  },
  {
    name: '/lay',
    description: 'лежать как на кровати.'
  },
  {
    name: '/license /premium',
    description: 'сменить аутентификацию на лицензионную.'
  },
  {
    name: '/love',
    description: 'поделиться любовью с игроком рядом.'
  },
  {
    name: '/map',
    description: 'спрятать/показать себя на карте (только с подпиской).'
  },
  {
    name: '/me',
    description: 'RP команда, выполнить действие от себя.'
  },
  {
    name: '/msg /tell /w /t /m',
    description: 'написать конкретному игроку.'
  },
  {
    name: '/nickcolor',
    description: 'изменить цвет ника (только с подпиской).'
  },
  {
    name: '/phantoms',
    description: 'отключить/включить фантомов.'
  },
  {
    name: '/playtime',
    description: 'узнать своё наигранное время.'
  },
  {
    name: '/playtimetop',
    description: 'топ игроков по наигранному времени.'
  },
  {
    name: '/pp',
    description: 'изменить эффекты для себя (только с покупкой эффектов).'
  },
  {
    name: '/ptime',
    description: 'поменять время для себя (только с подпиской).'
  },
  {
    name: '/pweather',
    description: 'поменять погоду для себя (только с подпиской).'
  },
  {
    name: '/ride',
    description: 'сесть на сущность или моба (только с подпиской).'
  },
  {
    name: '/server',
    description: 'сменить сервер (мир).'
  },
  {
    name: '/shakeitoff',
    description: 'стрясти игрока на себе.'
  },
  {
    name: '/sit',
    description: 'сесть как фрик.'
  },
  {
    name: '/skin',
    description: 'поменять свой скин по лицензионному нику.'
  },
  {
    name: '/skins',
    description: 'доступные скины игроков на сервере.'
  },
  {
    name: '/spin',
    description: 'начать вертеться как пельмень в кастрюле.'
  },
  {
    name: '/spit',
    description: 'харкнуть, ничего более.'
  },
  {
    name: '/totp',
    description: 'привязка 2fa.'
  },
  {
    name: '/unreg /unregister',
    description: 'сбросить регистрацию для себя.'
  }
]
const sortedCommandList = commandList.sort((prev, next) => (prev.name > next.name ? 1 : -1))

const updateDate = '3 Aug 2024'

export default function Commands() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-xl font-bold">Команды</h1>
      <p className="mt-4">
        Эти команды помогут тебе настроить свой игровой опыт, взаимодействовать с другими игроками и
        воспользоваться дополнительными возможностями, предоставляемыми сервером.
      </p>

      <ul className="mb-8 mt-4 flex flex-col gap-3">
        {sortedCommandList.map(command => (
          <li key={command.name}>
            <span className="text-nowrap rounded bg-blue/20 px-2 py-1">{command.name}</span> -{' '}
            {command.description}
          </li>
        ))}
      </ul>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
