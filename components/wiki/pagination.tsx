import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

import { getPreviousNext } from '@/lib/markdown'

export default function Pagination({ pathname }: { pathname: string }) {
  const res = getPreviousNext(pathname)

  return (
    <div className="mt-8 flex items-center justify-between py-0">
      <div>
        {res.prev && (
          <Link
            className="flex items-center gap-2 text-sm transition hover:text-green"
            href={`/wiki/${res.prev.href}`}
          >
            <ChevronLeftIcon className="h-[1.1rem] w-[1.1rem]" />
            <p className="reset hover-underline underline-green text-[16px]">{res.prev.title}</p>
          </Link>
        )}
      </div>
      <div>
        {res.next && (
          <Link
            className="flex items-center gap-2 text-sm transition hover:text-green"
            href={`/wiki/${res.next.href}`}
          >
            <p className="reset hover-underline underline-green text-[16px]">{res.next.title}</p>
            <ChevronRightIcon className="h-[1.1rem] w-[1.1rem]" />
          </Link>
        )}
      </div>
    </div>
  )
}
