'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Header } from '@/components/common/Header'

export default function Custom404() {
  return (
    <div className="mx-auto flex h-dvh max-w-screen-2xl flex-col px-4 lg:px-8">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center py-2">
        <div className="flex items-center gap-4 text-3xl font-bold md:text-5xl lg:text-6xl">
          <Link
            className="flex items-center justify-center transition duration-300 lg:active:scale-95"
            href="/"
          >
            <Image
              className="mr-4 w-[32px] cursor-pointer align-middle lg:w-[60px]"
              src="/logo/lc.png"
              alt="LC"
              height={1000}
              width={1000}
            />
            <p>LEAF CITY</p>
          </Link>
          <p>•</p>
          <p>Упс</p>
        </div>
        <p className="text-md mt-3 text-white/50 lg:mt-4 lg:text-lg">Тест на IQ не пройден</p>
      </div>
    </div>
  )
}
