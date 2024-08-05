import { Header } from '@/components/Header'
import { Preview } from '@/components/main/Preview'
import { Controls } from '@/components/main/Controls'
import { Achievements } from '@/components/achievements/Achievements'
import { Questions } from '@/components/questions/Questions'
import { LCPlus } from '@/components/lcplus/LCPlus'
import { Members } from '@/components/members/Members'
import { Copyright } from '@/components/copyright/Copyright'

export default function Main() {
  return (
    <main className="mx-auto min-h-dvh max-w-screen-2xl px-4 lg:px-8">
      <Header />
      <Preview />
      <Controls />
      <Achievements />
      <Questions />
      <LCPlus />
      <Members />
      <Copyright />
    </main>
  )
}
