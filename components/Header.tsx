import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from '@/components/Navigation'
import { url } from '@/constants/translation'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-white/10 pb-4">
      <Link
        className="flex items-center transition duration-300 hover:scale-110"
        href={url.baseUrl}
      >
        <Image
          className="mr-4 w-[40px] cursor-pointer"
          src="/logo/lc.png"
          alt="LC"
          height={1000}
          width={1000}
        />
        <p className="text-2xl font-bold">LEAF CITY</p>
      </Link>
      <Navigation />
    </header>
  )
}
