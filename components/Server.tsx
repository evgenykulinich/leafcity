'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { ProgressRoot, ProgressIndicator } from '@/components/ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getOnlineMinecraftUsers } from '@/helpers/users'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export const Server = () => {
  const [users, setUsers] = useState<number | undefined>(undefined)

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
