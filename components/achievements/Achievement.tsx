import Image from 'next/image'
import { clsx } from 'clsx'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  title: string
  content: string
  color: string
  icon: string
}

export function Achievement({ title, content, color, icon }: Props) {
  return (
    <Card
      className={clsx(
        'w-full flex-1 cursor-default rounded-2xl border-2 transition-all lg:hover:scale-[1.025]',
        {
          [`border-${color}`]: color,
          [`bg-${color}/10`]: color,
          [`text-${color}`]: color,
          [`hover:bg-${color}/20`]: color,
          [`bg-${color}/10`]: color
        }
      )}
    >
      <CardHeader className="mb-2">
        <Image className="mb-10 size-10" src={icon} alt={title} width={50} height={50} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  )
}
