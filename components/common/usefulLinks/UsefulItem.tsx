import { clsx } from 'clsx'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { UsefulItemProps } from '@/interfaces/common'

export const UsefulItem = ({ title, description, color, href, children }: UsefulItemProps) => {
  return (
    <Link className="flex w-full" href={href}>
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <Card
              className={clsx(
                'w-full rounded-2xl border-2 transition',
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
                }
              )}
            >
              <CardHeader>
                <div className="mb-4 flex justify-between lg:mb-8">
                  {children}
                  <ExternalLink />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          </TooltipTrigger>
          <TooltipContent className="p-1">Перейти</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  )
}
