import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from '@/components/Navigation'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-white/10 pb-4">
      <Link
        className="flex items-center transition duration-300 hover:scale-105 lg:active:scale-100"
        href="/"
      >
        <Image
          className="mr-4 w-[40px] cursor-pointer"
          src="/logo/lc.png"
          alt="LC"
          height={1000}
          width={1000}
        />
        <span className="text-2xl font-bold">LEAF CITY</span>
      </Link>
      <Navigation />
    </header>
  )
}
