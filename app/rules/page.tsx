import { Header } from '@/components/Header'
import { Copyright } from '@/components/copyright/Copyright'
import { RulesList } from '@/components/rules/RulesList'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Правила',
  description: 'LEAF CITY стремится создать ламповую и безопасную среду для всех наших игроков ☘️',
  openGraph: {
    description: 'LEAF CITY стремится создать ламповую и безопасную среду для всех наших игроков ☘️'
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
