'use client'

import { useEffect } from 'react'

import { Copyright } from '@/components/common/Copyright'
import { Header } from '@/components/common/Header'
import { AchievementsList } from '@/components/main/achievements/AchievementsList'
import { Controls } from '@/components/main/Controls'
import { LCPlus } from '@/components/main/lcplus/LCPlus'
import { Members } from '@/components/main/members/Members'
import { Preview } from '@/components/main/Preview'
import { Questions } from '@/components/main/questions/Questions'
import { Useful } from '@/components/main/usefulLinks/Useful'

export default function Main() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <div className="mx-auto min-h-dvh max-w-screen-2xl px-4 lg:px-8">
      <Header />
      <Preview />
      <Controls />
      <AchievementsList />
      <Questions />
      <LCPlus />
      <Useful />
      <Members />
      <Copyright />
    </div>
  )
}
