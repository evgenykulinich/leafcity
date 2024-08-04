import { Header } from '@/components/Header'
import { Copyright } from '@/components/copyright/Copyright'
import { RulesList } from '@/components/rules/RulesList'
import { routes } from '@/constants/routes'
import { PageTitle } from '@/components/PageTitle'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Правила',
  description:
    'Все правила проекта на одной странице. Обязательно к ознакомлению перед началом игры',
  metadataBase: new URL(routes.baseUrl),
  keywords: [
    'правила лиф сити',
    'гриферство лиф сити',
    'правила сервера Minecraft',
    'правила выживания лиф сити',
    'честная игра лиф сити',
    'строительство и торговля лиф сити',
    'чат Discord и Minecraft лиф сити',
    'администрация лиф сити',
    'пользовательское соглашение лиф сити',
    'нарушения правил лиф сити'
  ],
  openGraph: {
    title: 'LEAF CITY - Правила',
    images: [
      {
        url: `${routes.baseUrl}/og/rules.png`,
        width: 1200,
        height: 630,
        alt: 'LEAF CITY - Правила'
      }
    ],
    description:
      'Все правила проекта на одной странице. Обязательно к ознакомлению перед началом игры',
    type: 'website'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'LEAF CITY - Правила'
  }
}

export default function RulesPage() {
  return (
    <section className="mx-auto grid min-h-dvh max-w-screen-2xl grid-rows-[auto_auto_1fr_auto] px-4 lg:px-8">
      <Header />
      <PageTitle>
        Проект <span className="font-bold">LEAF CITY</span> стремится создать{' '}
        <span className="text-green">ламповую</span> и <span className="text-blue">безопасную</span>{' '}
        среду для всех наших игроков ☘️
      </PageTitle>
      <RulesList />
      <Copyright />
    </section>
  )
}
