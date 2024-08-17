import { Clock8, Tag } from 'lucide-react'

import { FadeInImage } from '@/components/common/FadeInImage'
import { ProductDialogContent } from '@/components/shop/ProductDialogContent'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'
import { getProductsList } from '@/helpers/getProductsList'

interface Product {
  id: number
  name: string
  description: string
  price: number
}

export const ProductsList = async () => {
  const productList = await getProductsList()

  return (
    <div className="align-start mt-8 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12 xl:grid-cols-3">
      {productList.map((product: Product) => (
        <Card
          className="product-card flex flex-col justify-between gap-4 rounded-3xl border-2 border-purple bg-purple/10 p-2 pt-4 transition lg:gap-0 lg:border-purple/20 lg:hover:border-purple lg:hover:bg-purple/20"
          key={product.id}
        >
          <Dialog>
            <div className="flex flex-col">
              <CardTitle className="cursor-default text-center text-2xl">{product.name}</CardTitle>
            </div>
            <CardContent className="flex items-center justify-center py-0">
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger asChild>
                    <DialogTrigger className="aspect-square w-[200px] rounded-3xl bg-purple/10 p-4 outline-none">
                      <FadeInImage
                        id="product-card-image"
                        alt={product.name}
                        src={`${routes.shop}/${product.id}.png`}
                        width={250}
                        height={250}
                      />
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent
                    className="mt-1 hidden bg-purple/10 px-2 py-1 lg:block"
                    side="bottom"
                  >
                    Подробнее
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
            <CardFooter className="flex justify-between lg:mt-4">
              <p className="flex w-fit cursor-default items-center justify-center gap-2 rounded-xl bg-purple/10 px-2 py-1 text-lg">
                <Clock8 className="text-green" size={18} strokeWidth={1.5} />
                <span>На месяц</span>
              </p>
              <p className="flex items-center gap-2 text-nowrap rounded-xl bg-purple/10 px-2 py-1 text-lg font-semibold">
                <Tag className="text-green" strokeWidth={2} size={18} />
                <span>{product.price} ₽</span>
              </p>
              <ProductDialogContent
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </CardFooter>
          </Dialog>
        </Card>
      ))}
    </div>
  )
}
