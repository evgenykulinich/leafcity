'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

import { getTocs } from '@/lib/markdown'

type Props = { data: Awaited<ReturnType<typeof getTocs>> }

export default function TocObserver({ data }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntry = entries.find(entry => entry.isIntersecting)
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id)
      }
    }

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-20px 0px 0px 0px',
      threshold: 0.1
    })

    const elements = data.map(item => document.getElementById(item.href.slice(1)))

    elements.forEach(el => {
      if (el && observer.current) {
        observer.current.observe(el)
      }
    })

    return () => {
      if (observer.current) {
        elements.forEach(el => {
          if (el) {
            observer.current!.unobserve(el)
          }
        })
      }
    }
  }, [data])

  return (
    <div className="ml-0.5 inline-flex flex-col gap-4 pb-4 text-sm text-white/70">
      {data.map(({ level, text, href }) => {
        return (
          <Link
            key={href}
            href={href}
            className={clsx('hover-underline underline-purple w-fit text-[16px] transition', {
              'ml-0': level == 2,
              'ml-4': level == 3,
              'ml-8': level == 4,
              'font-medium': activeId == href.slice(1)
            })}
          >
            {text}
          </Link>
        )
      })}
    </div>
  )
}
