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
  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="text-[26px] mt-10 lg:mt-24">Ответы на вопросы</h2>
      <div className="flex flex-col lg:flex-row gap-12 mt-10">
        <Accordion type="single" collapsible className="w-full">
          {questionList.map(query => (
            <AccordionItem
              value={query.value}
              key={query.value}
              className="px-4 rounded-2xl overflow-hidden border-2 border-slate-200/30 hover:border-purple hover:bg-purple/20 transition mb-4"
            >
              <AccordionTrigger>{query.question}</AccordionTrigger>
              <AccordionContent>{query.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link
          href="https://discord.com/invite/8rx6xEsj2U"
          className="lg:w-[40%] max-w-[450px]"
          target="_blank"
        >
          <Card className="w-full border-2 rounded-2xl border-purple bg-purple/10 hover:bg-purple/20 hover:scale-105 transition-all text-indigo-200">
            <CardHeader>
              <div className="flex flex-row items-center justify-between mb-10">
                <Image
                  src="/discord-icon.svg"
                  alt="Discord"
                  height={100}
                  width={100}
                  className="size-10"
                />
                <ExternalLink />
              </div>
              <CardTitle>Остались вопросы?</CardTitle>
            </CardHeader>
            <CardContent>
              Заходи на наш Discord сервер и задавай вопросы в канале поддержки. Администратор
              Дашка17 обязательно тебе поможет!
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  )
}
