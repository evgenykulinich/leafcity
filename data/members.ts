import { routes } from '@/constants/routes'

interface Member {
  nickname: string
  image: string
  styles: string
}

export const members: Member[] = [
  {
    nickname: 'list_tw',
    image: `${routes.head}/list_tw`,
    styles: 'member-list_tw'
  },
  {
    nickname: 'Dashka17',
    image: `${routes.head}/Dashka17`,
    styles: 'member-dashka17'
  },
  {
    nickname: 'wahka_',
    image: `${routes.head}/wahka_`,
    styles: 'member-wahka'
  },
  {
    nickname: 'SoraFreak',
    image: `${routes.head}/SoraFreak`,
    styles: 'member-sorafreak'
  },
  {
    nickname: 'iv0xy',
    image: `${routes.head}/iv0xy`,
    styles: 'member-iv0xy'
  },
  {
    nickname: 'muz0ku',
    image: `${routes.head}/muz0ku`,
    styles: 'member-muz0ku'
  },
  {
    nickname: 'zevep',
    image: `${routes.head}/zevep`,
    styles: 'member-zevep'
  },
  {
    nickname: 'BiggishPark70',
    image: `${routes.head}/BiggishPark70`,
    styles: 'member-biggishpark70'
  },
  {
    nickname: 'Tpyxan',
    image: `${routes.head}/NastyD`,
    styles: 'member-tryxan'
  },
  {
    nickname: 'NebulousVortex',
    image: `${routes.head}/NebulousVortex`,
    styles: 'member-vortex'
  },
  {
    nickname: 'ratkea',
    image: `${routes.head}/ratkea`,
    styles: 'member-ratkea'
  },
  {
    nickname: 'Masha',
    image: `${routes.head}/Masha`,
    styles: 'member-masha'
  },
  {
    nickname: 'DefektiveDed',
    image: `${routes.head}/DefektiveDed`,
    styles: 'member-defektive'
  }
]
