import Image from 'next/image'
import Link from 'next/link'

import { Navigation } from '@/components/Navigation'
import { url } from '@/constants/translation'

export function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-white/10 pb-4">
      <Link href={url.baseUrl}>
        <Image
          className="w-[150px] cursor-pointer transition duration-300 hover:scale-110 lg:w-[200px]"
          src="/logo/leafcity.png"
          alt="LC"
          height={1000}
          width={1000}
        />
      </Link>
      <Navigation />
    </header>
  )
}
