import { ShoppingBasket, Map, Scale, GraduationCap, Image } from 'lucide-react'

import { routes } from '@/constants/routes'

interface Navigation {
  href: string
  label: string
  icon: () => React.ReactElement
}

export const navigation: Navigation[] = [
  {
    href: routes.shop,
    label: 'Магазин',
    icon: () => <ShoppingBasket strokeWidth={1.5} />
  },
  {
    href: routes.map,
    label: 'Веб-карта',
    icon: () => <Map strokeWidth={1.5} />
  },
  {
    href: routes.rules,
    label: 'Правила',
    icon: () => <Scale strokeWidth={1.5} />
  },
  {
    href: routes.wiki,
    label: 'Википедия',
    icon: () => <GraduationCap strokeWidth={1.5} />
  },
  {
    href: routes.gallery,
    label: 'Галерея',
    icon: () => <Image strokeWidth={1.5} />
  }
]
