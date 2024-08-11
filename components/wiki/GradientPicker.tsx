'use client'

import { VT323 } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { clsx } from 'clsx'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { useCopyText } from '@/hooks/useCopy'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { colors } from '@/tailwind.config'

const font = VT323({ weight: ['400'], subsets: ['latin'] })

const GradientPicker = () => {
  const [leftColor, setLeftColor] = useState(colors.green)
  const [rightColor, setRightColor] = useState(colors.blue)

  const [nicknameColor, setNicknameColor] = useState(
    `/nickcolor <gradient:${colors.green}:${colors.blue}>`
  )
  const copyHex = useCopyText()

  useEffect(() => {
    setNicknameColor(`/nickcolor <gradient:${leftColor}:${rightColor}>`)
  }, [leftColor, rightColor])

  return (
    <div>
      <div className="flex w-full flex-col gap-8 lg:w-full">
        <div>
          <div className="flex items-center justify-center gap-2">
            <p
              className={clsx('bg-clip-text text-[48px] text-transparent', font.className)}
              style={{
                backgroundImage: `linear-gradient(to right, ${leftColor}, ${rightColor})`
              }}
            >
              Nickname
            </p>
            <Image
              className="h-[32px] w-auto"
              src="/LCPlus/lcicon.png"
              alt="Сердце"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <HexColorPicker
              style={{ width: '100%', minWidth: '200px' }}
              color={leftColor}
              onChange={setLeftColor}
            />
            <HexColorPicker
              style={{ width: '100%', minWidth: '200px' }}
              color={rightColor}
              onChange={setRightColor}
            />
          </div>
        </div>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                className="mx-auto mb-8 w-full rounded-xl border-none bg-purple px-24 py-8 text-[20px] transition hover:bg-purple/80 active:scale-95 lg:w-fit"
                onClick={() => copyHex(nicknameColor)}
              >
                <span className="text-lg font-bold">Скопировать</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="p-0 text-sm text-white" side="bottom">
              Скопировать команду одним кликом
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

export default GradientPicker
