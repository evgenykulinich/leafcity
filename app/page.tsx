import { Header } from '@/components/Header'
import { Preview } from '@/components/main/Preview'
import { Controls } from '@/components/main/Controls'
import { Achievements } from '@/components/achievements/Achievements'
import { Questions } from '@/components/question/Questions'
import { Copyright } from '@/components/copyright/Copyright'

export default function Main() {
  return (
    <main className="mx-auto max-w-screen-2xl px-4 pb-8 lg:px-8">
      <div className="py-4">
        <Header />
      </div>
      <Preview />
      <Controls />
      <Achievements />
      <Questions />
      <Copyright />
    </main>
  )
}
