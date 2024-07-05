import Image from 'next/image'

import { Header } from '@/components/main/Header'
import { Preview } from '@/components/main/Preview'
import { Controls } from '@/components/main/Controls'
import { Achievements } from '@/components/achievements/Achievements'
import { Questions } from '@/components/question/Questions'
import { Copyright } from '@/components/copyright/Copyright'

export default function Main() {
  return (
    <main className="container mx-auto max-w-screen-2xl pb-12">
      <Header />
      <Preview />
      <Controls />
      <Achievements />
      <Questions />

      <div className="mt-12 flex justify-center">
        <Image
          className="w-full overflow-hidden rounded-xl lg:w-[512px]"
          src="/about-us.gif"
          alt="about"
          width={100}
          height={100}
        />
      </div>

      <Copyright />
    </main>
  )
}
