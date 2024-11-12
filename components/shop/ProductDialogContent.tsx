import { Description } from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { X } from 'lucide-react'
import Image from 'next/image'

import { ProductForm } from '@/components/shop/ProductForm'
import { Card, CardContent } from '@/components/ui/card'
import { DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ProductDialogContentProps } from '@/interfaces/shop'

export const ProductDialogContent = ({ product }: ProductDialogContentProps) => {
  const {
    id,
    name,
    about,
    realPrice,
    imageUrl,
    sale,
    abilities,
    features,
    canApplyPromoCode,
    canEnterQuantity
  } = product

  return (
    <DialogContent className="product-dialog flex h-full w-full flex-col items-stretch justify-stretch bg-black p-0 lg:max-w-[1280px] lg:rounded-2xl lg:border-2 lg:border-purple lg:p-2">
      <DialogTitle>
        <VisuallyHidden.Root />
      </DialogTitle>
      <VisuallyHidden.Root>
        <Description />
      </VisuallyHidden.Root>
      <Card className="flex w-full flex-col py-4">
        <div className="flex w-full flex-row items-center justify-between px-4 text-white">
          <p className="flex items-center gap-2 text-xl font-bold leading-[1.5rem] text-white lg:mx-0">
            <span>{name}</span>
            {sale !== 0 && (
              <span className="ml-2 text-nowrap rounded-lg bg-danger/10 px-2 py-1 text-xl font-normal">
                - {sale}%
              </span>
            )}
          </p>
          <DialogClose
            className="cursor-pointer p-0 text-white/50 transition hover:opacity-[0.8] lg:font-semibold"
            asChild
          >
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger className="outline-none" asChild>
                  <DialogTrigger>
                    <X className="ml-2 size-[1.75rem] transition hover:text-green lg:size-[1.5rem]" />
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent className="mt-1 hidden bg-purple/10 px-2 py-1 lg:block" side="left">
                  Закрыть
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DialogClose>
        </div>
        <CardContent className="flex w-full flex-col gap-4 py-0 lg:flex-row">
          <div className="mx-auto flex aspect-square h-[150px] items-center justify-center rounded-xl bg-purple/10 px-2 py-3">
            <Image className="h-auto w-full" alt={name} src={imageUrl} width={150} height={150} />
          </div>
          <div className="flex w-full flex-col items-start gap-4 text-white lg:flex-row">
            <div className="flex flex-1 flex-col gap-4 text-white">
              {about.map(paragraph => (
                <p className="rounded-xl bg-purple/10 px-2 py-3" key={paragraph.name}>
                  {paragraph.description}
                </p>
              ))}

              {features.length ? (
                <ul className="rounded-xl bg-purple/10 px-2 py-3">
                  <span>Ты получишь:</span>
                  {features.map(feature => (
                    <li key={feature}>
                      <span className="font-bold">• </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : null}

              {abilities.length ? (
                <ul className="rounded-xl bg-purple/10 px-2 py-3">
                  <span>Команды:</span>
                  {abilities.map(ability => (
                    <li key={ability.name}>
                      <span className="text-note note-blue">{ability.name}</span> –{' '}
                      {ability.description}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <ProductForm
              productId={id}
              price={realPrice}
              canApplyPromoCode={canApplyPromoCode}
              canEnterQuantity={canEnterQuantity}
            />
          </div>
        </CardContent>
      </Card>
    </DialogContent>
  )
}
