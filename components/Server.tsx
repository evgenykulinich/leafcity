'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { ProgressRoot, ProgressIndicator } from '@/components/ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getOnlineMinecraftUsers } from '@/helpers/users'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { copyIpMessage } from '@/constants/copyIpMessage'
import { Button } from '@/components/ui/button'
import { useScrollToTop } from '@/helpers/scroll'

export const Server = () => {
  const [users, setUsers] = useState<number | undefined>(undefined)
  const [copyMessage, setCopyMessage] = useState<string>(copyIpMessage.ip)
  const [animate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getOnlineMinecraftUsers()
        setUsers(users)
      } catch (e) {
        return null
      }
    }

    fetchUsers()
  }, [])

  const toggleCopyIp = async () => {
    try {
      if (copyMessage === copyIpMessage.ip) {
        await navigator.clipboard.writeText(copyIpMessage.textToCopy)
        setCopyMessage(copyIpMessage.success)
      } else if (copyMessage === copyIpMessage.success || copyMessage === copyIpMessage.error) {
        setCopyMessage(copyIpMessage.ip)
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
    <Card className="w-full rounded-2xl border-2 border-green bg-green/10 transition hover:bg-green/20">
      <CardHeader className="pb-0">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              className="mr-4 w-[40px] cursor-pointer"
              src="/logo/lc.png"
              alt="LC"
              height={1000}
              width={1000}
            />
            <span className="mr-2 cursor-default text-2xl font-bold">LEAF CITY</span>
          </div>
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <p className="visible cursor-default text-nowrap rounded-2xl bg-green/10 px-3 text-center text-lg font-normal lg:hidden xl:block">
                  1.13 − 1.21
                </p>
              </TooltipTrigger>
              <TooltipContent className="bg-black/80 text-white">
                <p>Допустимые версии</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-5 flex flex-col items-start justify-center">
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger
              asChild
              className="mb-3 flex w-full cursor-pointer justify-between self-stretch rounded-xl border-none bg-green/10 hover:bg-green/10"
              onClick={toggleCopyIp}
            >
              <div className="p-2">
                <span className={animate ? 'copy-fade-in' : ''}>{copyMessage}</span>
                <Image
                  className="mr-2 size-6"
                  src="/icon/copy.svg"
                  alt="Игроки"
                  width={100}
                  height={100}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-black/10 px-2 py-1">Скопировать IP</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p>Сейчас играют:</p>
        <p className="mt-2 flex items-center text-lg font-bold text-green">
          <Image
            className="mr-2 size-8"
            src="/icon/users.svg"
            alt="Игроки"
            width={100}
            height={100}
          />
          {users ? `${users} из 200` : 'Сервер оффлайн'}
        </p>
        <ProgressRoot className="mt-4 w-full bg-white" value={users} max={200}>
          <ProgressIndicator className="bg-green" />
        </ProgressRoot>
      </CardContent>
    </Card>
  )
}
