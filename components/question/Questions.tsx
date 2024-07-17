import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getOnlineUsers } from '@/helpers/users'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'
import { questionList } from '@/data/questionList'

export function Questions() {
  const onlineUsers = getOnlineUsers()

  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="mt-10 text-[26px] lg:mt-24">Ответы на вопросы</h2>
      <div className="mt-10 flex flex-col items-start gap-12 lg:flex-row">
        <Accordion type="single" collapsible className="w-full">
          {questionList.map(question => (
            <AccordionItem
              value={question.value}
              key={question.value}
              className="mb-4 overflow-hidden rounded-2xl border-2 border-white/20 px-4 transition hover:border-purple hover:bg-purple/20"
            >
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link className="mx-auto max-w-[450px] lg:w-[35%]" href={routes.discord} target="_blank">
          <Card className="w-full rounded-2xl border-2 border-purple bg-purple/10 text-purple transition-all hover:bg-purple/20 lg:hover:scale-[1.025]">
            <CardHeader>
              <div className="mb-10 flex flex-row items-start justify-between">
                <div className="flex items-center">
                  <Image
                    src="/icon/discord-icon.svg"
                    alt="Discord"
                    height={100}
                    width={100}
                    className="size-10"
                  />
                  <TooltipProvider>
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger asChild>
                        <p className="ml-2 rounded-2xl border-purple bg-purple/10 px-3">
                          {onlineUsers}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black/50 text-white">
                        <p>Игроков онлайн</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <ExternalLink />
              </div>
              <CardTitle>Остались вопросы?</CardTitle>
            </CardHeader>
            <CardContent>
              Заходи на наш Discord сервер и задавай вопросы в канале поддержки. Администратор
              Дашенька обязательно тебе поможет!
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  )
}
