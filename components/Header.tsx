import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from './Navigation'

export function Header() {
  return (
    <main className="py-4 px-10">
      <header className="flex justify-between items-center">
        <Link href="http://localhost:3000">
          <Image
            src="/lc-logo.png"
            alt="LC"
            height={60}
            width={60}
            className="cursor-pointer hover:scale-125 transition-all"
          />
        </Link>
        <Navigation />
      </header>
    </main>
  )
}
