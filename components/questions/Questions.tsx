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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'
import { questionList } from '@/data/questionList'
import { Server } from '@/components/Server'

export function Questions() {
  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="mt-10 text-[26px] lg:mt-24">Ответы на вопросы</h2>
      <div className="mt-10 flex flex-col items-start gap-12 lg:flex-row">
        <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
          {questionList.map(question => (
            <AccordionItem
              value={question.value}
              key={question.value}
              className="overflow-hidden rounded-2xl border-2 border-white/20 px-4 transition hover:border-purple hover:bg-purple/20"
            >
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-[450px] flex-col justify-between lg:w-[50%]">
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
                Заходи на наш Discord сервер и задавай вопросы в канале поддержки. Администратор
                Дашенька обязательно тебе поможет!
              </CardContent>
            </Card>
          </Link>
          <Server />
        </div>
      </div>
    </section>
  )
}
