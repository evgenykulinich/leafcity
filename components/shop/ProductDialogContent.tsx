import { Description } from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { X } from 'lucide-react'

import { FadeInImage } from '@/components/common/FadeInImage'
import { ProductForm } from '@/components/shop/ProductForm'
import { Card, CardContent } from '@/components/ui/card'
import { DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { ProductDialogContentProps } from '@/interfaces/shop'

export const ProductDialogContent = ({ product }: ProductDialogContentProps) => {
  const { id, name, description, price } = product

  return (
    <DialogContent className="product-dialog flex w-full flex-col items-stretch justify-stretch bg-black p-0 lg:max-w-[1280px] lg:rounded-2xl lg:border-2 lg:border-purple lg:p-2">
      <DialogTitle>
        <VisuallyHidden.Root />
      </DialogTitle>
      <VisuallyHidden.Root>
        <Description />
      </VisuallyHidden.Root>
      <Card className="flex w-full flex-col py-4">
        <div className="flex w-full flex-row items-center justify-between px-4 text-white">
          <p className="text-2xl font-bold text-white lg:mx-0">{name}</p>
          <DialogClose
            className="cursor-pointer p-0 text-white/50 transition hover:opacity-[0.8] lg:font-semibold"
            asChild
          >
            <X className="size-[1.75rem] transition hover:text-green lg:size-[1.5rem]" />
          </DialogClose>
        </div>
        <CardContent className="flex w-full flex-col gap-4 py-0 lg:flex-row">
          <div className="mx-auto aspect-square h-[150px] rounded-xl bg-purple/10 px-2 py-3">
            <FadeInImage
              className="h-full w-full"
              alt={name}
              src={`/shop/${id}.png`}
              width={150}
              height={150}
            />
          </div>
          <div className="flex w-full flex-col gap-4 text-white lg:flex-row">
            <p className="h-fit w-full flex-1 rounded-xl bg-purple/10 px-2 py-3 text-white">
              {description}
            </p>
            <ProductForm productId={id} price={price} />
          </div>
        </CardContent>
      </Card>
    </DialogContent>
  )
}