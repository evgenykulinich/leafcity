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
import { url } from '@/constants/translation'
import { getOnlineUsers } from '@/helpers/users'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const questionList = [
  {
    value: 'item-1',
    question: 'На какой версии сервера?',
    answer: 'Сервера стоят на 1.21 purpur. Зайти можно с Java 1.13-1.21 и Bedrock.'
  },
  {
    value: 'item-2',
    question: 'Как зайти на сервер?',
    answer: 'Нужно перейти в наш Discord и подать заявку, потом получить ответ и начать играть.'
  },
  {
    value: 'item-3',
    question: 'Можно ли играть с телефона?',
    answer: 'Конечно, мы поддерживаем как Java, так и Bedrock.'
  },
  {
    value: 'item-4',
    question: 'Нужна ли лицензия Minecraft?',
    answer: 'Нет, лицензия не нужна. Можно зайти с пиратки.'
  },
  {
    value: 'item-5',
    question: 'Какой онлайн?',
    answer: 'Средний - 70-110 игроков, рекорд - 138.'
  },
  {
    value: 'item-6',
    question: 'Когда происходят вайпы?',
    answer: 'В среднем раз 6 месяцев.  В зависимости от желания игроков.'
  },
  {
    value: 'item-7',
    question: 'Проходка бесплатная?',
    answer: 'Да, проходка бесплатная, но ты можешь купить её чтобы не подавать заявку.'
  }
]

export function Questions() {
  const onlineUsers = getOnlineUsers()

  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="mt-10 text-[26px] lg:mt-24">Ответы на вопросы</h2>
      <div className="mt-10 flex flex-col items-start gap-12 lg:flex-row">
        <Accordion type="single" collapsible className="w-full">
          {questionList.map(query => (
            <AccordionItem
              value={query.value}
              key={query.value}
              className="mb-4 overflow-hidden rounded-2xl border-2 border-white/20 px-4 transition hover:border-purple hover:bg-purple/20"
            >
              <AccordionTrigger>{query.question}</AccordionTrigger>
              <AccordionContent>{query.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link className="mx-auto max-w-[450px] lg:w-[35%]" href={url.discord} target="_blank">
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
