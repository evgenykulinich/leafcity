'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import { useMedia } from 'react-use'

import { rulesList } from '@/data/rulesList'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { RulesItem } from '@/components/rules/RulesItem'
import { useCopyRule } from '@/hooks/useCopy'

export const RulesList = () => {
  const isDesktop = useMedia('(min-width: 1024px)', false)
  const copyRule = useCopyRule()

  return (
    <Accordion className="mt-10 w-full" defaultValue={rulesList[0].value} collapsible type="single">
      {rulesList.map(rule => (
        <AccordionItem
          className={clsx(
            'mb-4 overflow-hidden rounded-2xl px-2 transition',
            `border-2 hover:border-${rule.color}`,
            {
              'border-purple': rule.color === 'purple',
              'border-green': rule.color === 'green',
              'border-blue': rule.color === 'blue',
              'border-mango': rule.color === 'mango',
              'border-white': rule.color === 'white'
            }
          )}
          value={rule.value}
          key={rule.value}
        >
          <AccordionTrigger className="points-center flex flex-row text-justify">
            <span className="text-md points-center flex gap-2 lg:text-xl">
              <Image
                className="size-6 lg:size-6"
                src={rule.image}
                alt="tnt"
                width={100}
                height={100}
              />
              {rule.block}
            </span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            {rule.block !== 'Пользовательское соглашение' && (
              <p className="text-md mt-4 px-2 font-bold lg:text-lg">Запрещено:</p>
            )}
            {rule.points?.map(point => (
              <div
                onClick={isDesktop ? () => copyRule(`${point.point}. ${point.text}`) : undefined}
                title="Нажми чтобы скопировать"
                key={point.text}
              >
                <RulesItem
                  className={clsx(
                    'bordered cursor-copy rounded-[8px] border-2 border-transparent px-2 py-1 text-sm transition lg:text-lg',
                    `lg:hover:border-${rule.color}`,
                    {
                      'lg:hover:border-purple': rule.color === 'purple',
                      'lg:hover:border-green': rule.color === 'green',
                      'lg:hover:border-blue': rule.color === 'blue',
                      'lg:hover:border-mango': rule.color === 'mango',
                      'lg:hover:border-white': rule.color === 'white'
                    }
                  )}
                  point={point.point}
                  text={point.text}
                />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
