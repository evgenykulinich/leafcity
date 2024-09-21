'use client'

import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useCopyText } from '@/hooks/useCopy'
import { colors } from '@/tailwind.config'

const IconColorPicker = () => {
  const [color, setColor] = useState(colors.green)
  const copyHex = useCopyText()

  return (
    <>
      <div className="flex w-full flex-col gap-8 lg:w-full">
        <div>
          <p className="mb-4 mt-4 text-center">
            <span className="text-note note-purple">
              {'/icon <иконка> '}
              <span style={{ color: `${color}` }}>{'<#цвет>'}</span>
            </span>
          </p>
          <div className="flex flex-col gap-8 lg:flex-row">
            <HexColorPicker
              style={{ width: '100%', minWidth: '200px', maxWidth: '480px', margin: '0 auto' }}
              color={color}
              onChange={setColor}
            />
          </div>
        </div>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button
                className="mx-auto w-full max-w-[480px] rounded-xl border-none bg-purple px-24 py-8 text-[20px] transition hover:bg-purple/80 active:scale-95 lg:w-fit"
                onClick={() => copyHex(color)}
              >
                <span className="text-lg font-bold">Скопировать</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="p-0 text-sm text-white" side="bottom">
              Скопировать цвет одним кликом
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  )
}

export default IconColorPicker
