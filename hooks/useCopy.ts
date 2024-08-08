import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { copyIpMessage } from '@/constants/copyIpMessage'

export const useCopyText = () => {
  const copyText = useCallback(async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      toast.success('Скопировано')
    } catch (e) {
      toast.error('Ошибка :(')
    }
  }, [])

  return copyText
}

export const useCopyIp = (message: string) => {
  const [copyMessage, setCopyMessage] = useState<string>(message)
  const [animate, setAnimate] = useState<boolean>(false)

  const toggleCopyIp = useCallback(async () => {
    try {
      if (copyMessage === message) {
        await navigator.clipboard.writeText(copyIpMessage.textToCopy)
        setCopyMessage(copyIpMessage.success)
      } else if (copyMessage === copyIpMessage.success || copyMessage === copyIpMessage.error) {
        setCopyMessage(message)
      }
      setAnimate(true)
    } catch {
      setCopyMessage(copyIpMessage.error)
      setAnimate(true)
    }
  }, [copyMessage, copyIpMessage])

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 200)
      return () => clearTimeout(timer)
    }
  }, [animate])

  return { copyMessage, animate, toggleCopyIp }
}
