'use client'

import { clsx } from 'clsx'
import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AchievementItemProps } from '@/interfaces/main'

export function AchievementItem({ achievement }: AchievementItemProps) {
  const { title, content, color, icon, className } = achievement

  return (
    <Card
      className={clsx(
        'w-full flex-1 cursor-default rounded-2xl border-2 transition-all',
        {
          'bg-purple/10': color === 'purple',
          'bg-green/10': color === 'green',
          'bg-blue/10': color === 'blue'
        },
        {
          'hover:bg-purple/20': color === 'purple',
          'hover:bg-green/20': color === 'green',
          'hover:bg-blue/20': color === 'blue'
        },
        {
          'border-purple': color === 'purple',
          'border-green': color === 'green',
          'border-blue': color === 'blue'
        },
        {
          'text-purple': color === 'purple',
          'text-green': color === 'green',
          'text-blue': color === 'blue'
        },
        className
      )}
    >
      <CardHeader>
        <Image className="mb-4 size-[40px] lg:mb-8" src={icon} alt={title} width={50} height={50} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-pretty">{content}</CardContent>
    </Card>
  )
}
