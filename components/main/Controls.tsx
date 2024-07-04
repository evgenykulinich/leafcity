'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

const copyIpMessage = {
  textToCopy: 'play.leafcity.ru',
  default: 'Скопировать IP',
  success: 'Скопировано!',
  error: 'Ошибка :('
}

export function Controls() {
  const [copyMessage, setCopyMessage] = useState(copyIpMessage.default)

  const toggleCopyIp = async () => {
    try {
      if (copyMessage === copyIpMessage.default) {
        await navigator.clipboard.writeText(copyIpMessage.textToCopy)
        setCopyMessage(copyIpMessage.success)
      }

      if (copyMessage === copyIpMessage.success || copyMessage === copyIpMessage.error) {
        setCopyMessage(copyIpMessage.default)
      }
    } catch {
      setCopyMessage(copyIpMessage.error)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row mt-10 lg:mt-20">
      <Button
        variant="default"
        className="text-[20px] font-bold px-16 py-10 rounded-xl bg-green hover:bg-green/70 lg:w-[300px] w-full mb-4 lg:mr-10"
      >
        <Link target="_blank" href="https://discord.com/invite/8rx6xEsj2U">
          Начать играть
        </Link>
      </Button>

      <div className="hidden lg:block version">
        <Button
          variant="outline"
          onClick={toggleCopyIp}
          className="block rounded-xl border-green hover:bg-green/15 text-[20px] lg:w-[300px] w-full h-[80px]"
        >
          <span>{copyMessage}</span>
        </Button>
      </div>
    </div>
  )
}
