import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from './Navigation'

export function Header() {
  return (
    <main className="py-6">
      <header className="flex justify-between items-center">
        <Link href="http://localhost:3000">
          <Image
            src="/lc-logo.png"
            alt="LC"
            height={75}
            width={75}
            className="cursor-pointer hover:scale-110 transition-all"
          />
        </Link>
        <Navigation />
      </header>
    </main>
  )
}
