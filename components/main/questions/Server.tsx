'use client'

import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProgressRoot, ProgressIndicator } from '@/components/ui/progress'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { copyIpMessage } from '@/constants/copyIpMessage'
import { useCopyIp } from '@/hooks/useCopy'
import useMinecraftUsers from '@/hooks/useMinecraftUsers'

export const Server = () => {
  const { copyMessage, animate, toggleCopyIp } = useCopyIp(copyIpMessage.ip)
  const { minecraftUsers } = useMinecraftUsers()

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
                <span className="visible cursor-default text-nowrap rounded-2xl bg-green/10 px-3 text-center text-lg font-normal lg:hidden xl:block">
                  1.13 − 1.21
                </span>
              </TooltipTrigger>
              <TooltipContent className="bg-black/[0.69] text-white">
                Допустимые версии
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-5 flex flex-col items-start justify-center">
        <div
          className="mb-3 flex w-full cursor-pointer justify-between self-stretch rounded-xl border-none bg-green/10 p-2 pr-1 hover:bg-green/10"
          onClick={toggleCopyIp}
        >
          <span className={animate ? 'animation-fade-in' : ''}>{copyMessage}</span>
          <Image
            className="mr-2 size-6"
            src="/icon/copy.svg"
            alt="Игроки"
            width={100}
            height={100}
          />
        </div>
        <p>Сейчас играют:</p>
        <p className="mt-2 flex items-center text-lg font-bold text-green">
          <Image
            className="mr-2 size-8"
            src="/icon/users.svg"
            alt="Игроки"
            width={100}
            height={100}
          />
          {minecraftUsers ? `${minecraftUsers} из ${minecraftUsers + 10}` : 'Сервер оффлайн'}
        </p>
        <ProgressRoot
          className="mt-4 w-full bg-white"
          value={minecraftUsers}
          max={minecraftUsers + 10}
        >
          <ProgressIndicator className="bg-green" />
        </ProgressRoot>
      </CardContent>
    </Card>
  )
}
