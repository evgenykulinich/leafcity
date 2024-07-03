import { Header } from '@/components/main/Header'
import { Preview } from '@/components/main/Preview'
import { Controls } from '@/components/main/Controls'

export default function Main() {
  return (
    <main className="container mx-auto max-w-screen-2xl ">
      <Header />
      <Preview />
      <Controls />
    </main>
  )
}
