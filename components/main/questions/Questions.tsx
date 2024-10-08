import { Discord } from '@/components/main/questions/Discord'
import { Server } from '@/components/main/questions/Server'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { questions } from '@/data/questions'

export function Questions() {
  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="mt-16 text-center text-2xl lg:mt-24">Ответы на вопросы</h2>
      <div className="mt-8 flex flex-col items-start gap-8 lg:mt-12 lg:flex-row">
        <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
          {questions.map(question => (
            <AccordionItem
              value={question.value}
              key={question.value}
              className="overflow-hidden rounded-2xl border-2 border-white/20 px-4 transition hover:border-purple hover:bg-purple/20"
            >
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent className="text-base">{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div
          className="mx-auto flex flex-col justify-between lg:w-[50%] lg:max-w-[450px]"
          data-scroll
          data-scroll-speed={'0.15'}
        >
          <Discord />
          <Server />
        </div>
      </div>
    </section>
  )
}
