'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

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
    <div className="mt-8 flex flex-col lg:mt-12 lg:flex-row">
      <Link target="_blank" href="https://discord.gg/leaf-city">
        <Button
          variant="default"
          className="mb-4 w-full rounded-xl bg-green px-16 py-10 text-[20px] font-bold hover:bg-green/70 lg:mr-10 lg:w-[300px]"
        >
          Начать играть
        </Button>
      </Link>

      <div className="version hidden lg:block">
        <Button
          variant="outline"
          onClick={toggleCopyIp}
          className="block h-[80px] w-full rounded-xl border-green text-[20px] hover:bg-green/10 lg:w-[300px]"
        >
          <span>{copyMessage}</span>
        </Button>
      </div>
    </div>
  )
}
