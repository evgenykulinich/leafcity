'use client'

import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { useCopyText } from '@/hooks/useCopy'

const ColorPicker = () => {
  const [color, setColor] = useState('#aabbcc')
  const copyHex = useCopyText()

  return (
    <div className="mb-8 flex w-full flex-col items-center gap-8 lg:flex-row">
      <HexColorPicker
        style={{ width: '100%', maxWidth: '400px' }}
        color={color}
        onChange={setColor}
      />
      <div className="flex w-full max-w-[400px] flex-col items-center gap-4 rounded-2xl">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger className="w-full" asChild>
              <Button
                className="flex w-full rounded-xl border-none py-8 text-[20px] transition active:scale-95 lg:w-[300px]"
                onClick={() => copyHex(color)}
                style={{ backgroundColor: color }}
              >
                <span className="text-lg font-bold">{color}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="p-0">Скопировать</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="text-center">Скопируй одним кликом</p>
      </div>
    </div>
  )
}

export default ColorPicker
