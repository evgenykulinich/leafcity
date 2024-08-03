export const WIKI_ROUTES = [
  {
    title: 'Начало',
    href: 'start',
    items: [
      { title: 'Введение', href: '/info' },
      { title: 'Модификации', href: '/addons' },
      { title: 'Сборка', href: '/modpack' }
    ]
  },
  {
    title: 'Фишки',
    href: 'features',
    items: [
      { title: 'Миры', href: '/worlds' },
      { title: 'Напитки', href: '/drinks' },
      { title: 'Пластинки', href: '/records' },
      { title: 'Цвет ника', href: '/nickcolor' },
      { title: 'Иконки', href: '/icons' },
      { title: 'Фишки', href: '/cute' }
    ]
  },
  {
    title: 'Руководства',
    href: 'manuals',
    items: [
      { title: 'Команды', href: '/commands' },
      { title: 'Крафты', href: '/crafts' },
      { title: 'Регистрация', href: '/registration' },
      { title: 'Карта', href: '/map' },
      { title: 'Голосовой чат', href: '/voicechat' }
    ]
  }
]

export const page_routes = WIKI_ROUTES.map(({ href, items }) => {
  return items.map(link => {
    return {
      title: link.title,
      href: href + link.href
    }
  })
}).flat()
