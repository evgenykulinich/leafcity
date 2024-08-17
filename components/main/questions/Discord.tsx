import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { routes } from '@/constants/routes'

export const Discord = () => {
  return (
    <Link className="mb-8" href={routes.discord} target="_blank">
      <Card className="w-full rounded-2xl border-2 border-purple bg-purple/10 text-purple transition-all hover:bg-purple/20">
        <CardHeader className="pb-0">
          <div className="mb-4 flex flex-row items-start justify-between">
            <div className="flex items-center">
              <Image
                src="/icon/discord-icon.svg"
                alt="Discord"
                height={100}
                width={100}
                className="size-10"
              />
            </div>
            <ExternalLink />
          </div>
          <CardTitle>Остались вопросы?</CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          Заходи на наш Discord сервер и задавай вопросы в канале поддержки. Администратор Дашенька
          обязательно тебе поможет!
        </CardContent>
      </Card>
    </Link>
  )
}
