'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { url } from '@/constants/translation'

const copyIpMessage = {
  textToCopy: 'play.leafcity.ru',
  default: 'Скопировать IP',
  success: 'Скопировано!',
  error: 'Ошибка :('
}

export function Controls() {
  const [copyMessage, setCopyMessage] = useState(copyIpMessage.default)
  const [animate, setAnimate] = useState(false)

  const toggleCopyIp = async () => {
    try {
      if (copyMessage === copyIpMessage.default) {
        await navigator.clipboard.writeText(copyIpMessage.textToCopy)
        setCopyMessage(copyIpMessage.success)
      } else if (copyMessage === copyIpMessage.success || copyMessage === copyIpMessage.error) {
        setCopyMessage(copyIpMessage.default)
      }
      setAnimate(true)
    } catch {
      setCopyMessage(copyIpMessage.error)
      setAnimate(true)
    }
  }

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 200)
      return () => clearTimeout(timer)
    }
  }, [animate])

  return (
    <div className="mt-8 flex flex-col lg:mt-12 lg:flex-row">
      <Link target="_blank" href={url.discord}>
        <Button
          variant="default"
          className="mb-4 w-full rounded-xl bg-green px-16 py-10 text-[20px] font-bold hover:bg-green/70 lg:mr-10 lg:w-[300px] lg:active:bg-green/50"
        >
          Начать играть
        </Button>
      </Link>

      <div className="version lg:block">
        <Button
          variant="outline"
          onClick={toggleCopyIp}
          className="block h-[80px] w-full rounded-xl border-green text-[20px] hover:bg-green/10 lg:w-[300px]"
        >
          <span className={animate ? 'copy-fade-in' : ''}>{copyMessage}</span>
        </Button>
      </div>
    </div>
  )
}
