'use client'

import clsx from 'clsx'
import Link from 'next/link'

import { getTocs } from '@/lib/markdown'

type Props = { data: Awaited<ReturnType<typeof getTocs>> }

export default function TocObserver({ data }: Props) {
  return (
    <div className="ml-0.5 inline-flex flex-col gap-4 pb-4 text-sm text-white/70">
      {data.map(({ level, text, href }) => {
        return (
          <Link
            key={href}
            href={href}
            className={clsx('w-fit text-[16px] transition hover:text-purple', {
              'ml-0': level == 2,
              'ml-4': level == 3,
              'ml-8': level == 4
            })}
          >
            {text}
          </Link>
        )
      })}
    </div>
  )
}
