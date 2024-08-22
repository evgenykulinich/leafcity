import { Disc3, FileImage, Folder, Gamepad2, Heart, Palette } from 'lucide-react'

import { routes } from '@/constants/routes'

export const usefulMainLink = [
  {
    title: 'Как начать играть?',
    description: 'Полный гайд с подробным объяснением на нашей вики',
    color: 'blue',
    href: `${routes.wiki}/start/info`,
    children: <Gamepad2 className="h-auto w-[40px]" strokeWidth={1.5} />
  },
  {
    title: 'Наша сборка',
    description: 'В её состав входят оптимизационные моды, такие как Sodium, Lithium и Starlight',
    color: 'green',
    href: `/wiki/start/modpack`,
    children: <Folder className="h-auto w-[40px]" strokeWidth={1.5} />
  },
  {
    title: 'Ваше творчество',
    description:
      'Атмосферные генерации, крутые постройки и весёлые моменты на скриншотах наших игроков',
    color: 'purple',
    href: routes.gallery,
    children: <FileImage className="h-auto w-[40px]" strokeWidth={1.5} />
  }
]

export const usefulShopLink = [
  {
    title: 'Цвет ника',
    description: 'Выбрать цвет или градиент для своего ника. Доступно для подписчиков LC+',
    color: 'green',
    href: '/wiki/features/nickcolor',
    children: <Palette className="h-auto w-[40px]" strokeWidth={1.5} />
  },
  {
    title: 'Кастомные пластинки',
    description: 'Подробное объяснение как загрузить любую песню на свою пластинку в Minecraft',
    color: 'purple',
    href: `/wiki/features/records`,
    children: <Disc3 className="h-auto w-[40px]" strokeWidth={1.5} />
  },
  {
    title: 'Иконки',
    description: 'Ознакомиться со списком команд для смена кастомной иконки',
    color: 'blue',
    href: `/wiki/features/icons`,
    children: <Heart className="h-auto w-[40px]" strokeWidth={1.5} />
  }
]
