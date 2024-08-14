'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { routes } from '@/constants/routes'
import { copyIpMessage } from '@/constants/copyIpMessage'
import { useCopyIp } from '@/hooks/useCopy'

export function Controls() {
  const { copyMessage, animate, toggleCopyIp } = useCopyIp(copyIpMessage.default)

  return (
    <div className="mt-8 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:gap-8">
      <Link
        className="w-full rounded-xl bg-green py-6 text-center text-[20px] font-bold transition hover:bg-green/70 lg:w-[300px] lg:active:bg-green/50"
        target="_blank"
        href={routes.discord}
      >
        <span>Начать играть</span>
      </Link>

      <div className="hover-versions lg:block">
        <Button
          variant="outline"
          onClick={toggleCopyIp}
          className="block h-[80px] w-full rounded-xl border-2 border-green text-[20px] hover:bg-green/10 lg:w-[300px]"
        >
          <span className={animate ? 'animation-fade-in' : ''}>{copyMessage}</span>
        </Button>
      </div>
    </div>
  )
}
