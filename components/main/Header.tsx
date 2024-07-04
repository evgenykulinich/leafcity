import Image from 'next/image'

import { Navigation } from './Navigation'

export function Header() {
  return (
    <main className="py-6">
      <header className="flex justify-between items-center">
        <Image
          src="/lc-logo.png"
          alt="LC"
          height={100}
          width={100}
          className="cursor-pointer hover:scale-110 transition-all duration-300 size-[60px] lg:size-[75px]"
        />
        <Navigation />
      </header>
    </main>
  )
}
