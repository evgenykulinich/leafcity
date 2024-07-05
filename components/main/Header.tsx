import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from './Navigation'

export function Header() {
  return (
    <main className="py-2 lg:py-3">
      <header className="flex items-center justify-between">
        <Link href="/">
          <Image
            className="size-[60px] cursor-pointer transition-all duration-300 hover:scale-110 lg:size-[75px]"
            src="/lc-logo.png"
            alt="LC"
            height={100}
            width={100}
          />
        </Link>
        <Navigation />
      </header>
    </main>
  )
}
