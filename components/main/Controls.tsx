'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

export function Controls() {
  const [copyMessage, setCopyMessage] = useState('Скопировать IP')

  const handleCopyIp = async () => {
    try {
      const textToCopy = 'play.leafcity.ru'
      await navigator.clipboard.writeText(textToCopy)
      setCopyMessage('Скопировано!')
    } catch {
      setCopyMessage('Ошибка :(')
    }
  }

  return (
    <div className="flex mt-20">
      <Button
        variant="default"
        className="text-[20px] font-bold px-16 py-10 rounded-xl bg-green hover:bg-green/70 w-[300px] mr-10"
      >
        <Link target="_blank" href="https://discord.com/invite/8rx6xEsj2U">
          Начать играть
        </Link>
      </Button>

      <div className="version">
        <Button
          variant="outline"
          onClick={handleCopyIp}
          className="block rounded-xl border-green hover:bg-green/15 text-[20px] w-[300px] h-[80px]"
        >
          <span>{copyMessage}</span>
        </Button>
      </div>
    </div>
  )
}
