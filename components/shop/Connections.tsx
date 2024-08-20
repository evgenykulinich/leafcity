'use client'

import { useEffect } from 'react'

import { FadeInImage } from '@/components/common/FadeInImage'
import { Discord } from '@/components/main/questions/Discord'
import { Server } from '@/components/main/questions/Server'

export const Connections = () => {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <div className="mt-16 lg:mt-24">
      <h2 className="text-center text-2xl">Будь с нами</h2>
      <div className="mt-8 flex flex-col items-center justify-between gap-8 lg:mt-12 lg:flex-row">
        <div className="w-full max-w-[500px]">
          <Server />
        </div>
        <div
          className="hover-connect flex w-full select-none items-center justify-center gap-4"
          data-scroll
          data-scroll-speed={'0.1'}
        >
          <FadeInImage
            className="h-[36px] w-auto lg:h-[48px]"
            src="/logo/lc.png"
            alt="Leaf City Logo"
            height={100}
            width={100}
          />
          <span className="text-nowrap text-3xl font-bold lg:text-4xl">LEAF CITY</span>
        </div>
        <div className="w-full max-w-[500px]">
          <Discord />
        </div>
      </div>
    </div>
  )
}
