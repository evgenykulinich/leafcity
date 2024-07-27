import { Header } from '@/components/Header'
import { Copyright } from '@/components/copyright/Copyright'
import { RulesList } from '@/components/rules/RulesList'
import { routes } from '@/constants/routes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Правила',
  description:
    'Все правила проекта на одной странице. Обязательно к ознакомлению перед началом игры',
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
  }
}

export default function RulesPage() {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 pb-8 pt-4 lg:px-8">
      <Header />
      <div className="mt-8 cursor-default text-center text-xl lg:mt-10 lg:text-2xl">
        <span>Проект </span>
        <span className="font-bold">LEAF CITY</span> стремится создать{' '}
        <span className="hover-underline underline-green text-green">ламповую</span> и{' '}
        <span className="hover-underline underline-blue text-blue">безопасную</span> среду для всех
        наших игроков ☘️
      </div>
      <RulesList />
      <Copyright />
    </div>
  )
}
