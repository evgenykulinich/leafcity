import { ShoppingBasket, Map, Scale, GraduationCap, Image } from 'lucide-react'

import { routes } from '@/constants/routes'

interface Navigation {
  href: string
  label: string
  icon: React.ReactElement
}

export const navigation: Navigation[] = [
  {
    href: routes.shop,
    label: 'Магазин',
    icon: <ShoppingBasket size={30} strokeWidth={1.5} />
  },
  {
    href: routes.map,
    label: 'Веб-карта',
    icon: <Map size={30} strokeWidth={1.5} />
  },
  {
    href: routes.rules,
    label: 'Правила',
    icon: <Scale size={30} strokeWidth={1.5} />
  },
  {
    href: routes.wiki,
    label: 'Википедия',
    icon: <GraduationCap size={30} strokeWidth={1.5} />
  },
  {
    href: routes.gallery,
    label: 'Галерея',
    icon: <Image size={30} strokeWidth={1.5} />
  }
]
