import { Header } from '@/components/main/Header'
import { Preview } from '@/components/main/Preview'
import { Controls } from '@/components/main/Controls'
import { Achievements } from '@/components/achievements/Achievements'
import { Questions } from '@/components/questions'

export default function Main() {
  return (
    <main className="container mx-auto max-w-screen-2xl pb-12">
      <Header />
      <Preview />
      <Controls />
      <Achievements />
      <Questions />
    </main>
  )
}
