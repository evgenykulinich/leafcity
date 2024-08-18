import { Clock8, Tag } from 'lucide-react'

import { FadeInImage } from '@/components/common/FadeInImage'
import { ProductDialogContent } from '@/components/shop/ProductDialogContent'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ProductsItemProps } from '@/interfaces/shop'

export const ProductsItem = ({ product }: ProductsItemProps) => {
  return (
    <Card className="product-card flex flex-col justify-between gap-4 rounded-3xl border-2 border-purple bg-purple/10 p-2 pt-4 transition lg:gap-0 lg:border-purple/60 lg:hover:border-purple lg:hover:bg-purple/20">
      <Dialog>
        <div className="flex flex-col">
          <CardTitle className="cursor-default text-center text-2xl">
            {product.name}{' '}
            <span className="ml-2 rounded-lg bg-danger/10 px-2 py-1 text-xl font-normal">
              - {product.sale}%
            </span>
          </CardTitle>
        </div>

        <CardContent className="flex items-center justify-center py-0">
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger className="outline-none" asChild>
                <DialogTrigger className="aspect-square w-[200px] rounded-xl bg-purple/10 p-4 outline-none">
                  <FadeInImage
                    className="rounded-xl transition hover:scale-105"
                    id="product-card-image"
                    alt={product.name}
                    src={product.imageUrl}
                    width={250}
                    height={250}
                  />
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent className="mt-1 hidden bg-purple/10 px-2 py-1 lg:block" side="bottom">
                Подробнее
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>

        <CardFooter className="flex justify-between lg:mt-4">
          <p className="flex w-fit cursor-default items-center justify-center gap-2 rounded-xl bg-purple/10 px-2 py-1 text-lg">
            <Clock8 className="text-green" size={18} strokeWidth={1.5} />
            <span>{product.duration}</span>
          </p>
          <p className="flex items-center gap-2 text-nowrap rounded-xl bg-purple/10 px-2 py-1 text-lg font-semibold">
            <Tag className="text-green" strokeWidth={2} size={18} />
            <span>{product.price} ₽</span>
          </p>
          <ProductDialogContent product={product} />
        </CardFooter>
      </Dialog>
    </Card>
  )
}
