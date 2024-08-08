import { Header } from '@/components/common/Header'
import { Preview } from '@/components/main/Preview'
import { Controls } from '@/components/main/Controls'
import { Achievements } from '@/components/main/achievements/Achievements'
import { Questions } from '@/components/main/questions/Questions'
import { LCPlus } from '@/components/main/lcplus/LCPlus'
import { Useful } from '@/components/main/usefulLinks/Useful'
import { Members } from '@/components/main/members/Members'
import { Copyright } from '@/components/common/Copyright'

export default function Main() {
  return (
    <div className="mx-auto min-h-dvh max-w-screen-2xl px-4 lg:px-8">
      <Header />
      <Preview />
      <Controls />
      <Achievements />
      <Questions />
      <LCPlus />
      <Useful />
      <Members />
      <Copyright />
    </div>
  )
}
