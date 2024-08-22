import { PaymentsItem } from '@/components/shop/PaymentsItem'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { thanksMessageList } from '@/data/shop'
import { getLastPaymentsList } from '@/helpers/getLastPayments'
import { getRandomItemInArray } from '@/helpers/getRandomItemInArray'
import { Payment } from '@/interfaces/shop'

export const LastPayments = async () => {
  const lastPayments = await getLastPaymentsList()

  return (
    <section className="mt-16 overflow-hidden lg:mt-24">
      <h2 className="text-center text-2xl lg:text-left">Последние покупки</h2>
      <div className="mt-8 select-none lg:mt-12">
        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselContent className="-ml-8">
            {lastPayments.map((payment: Payment) => (
              <CarouselItem className="pl-8 md:basis-1/3 lg:basis-1/4" key={payment.key}>
                <PaymentsItem
                  payment={payment}
                  thanksMessage={getRandomItemInArray(thanksMessageList)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 hidden border-none bg-black/60 text-white/80 outline-none transition hover:bg-blue active:bg-blue/60 lg:inline-flex" />
          <CarouselNext className="absolute right-2 hidden border-none bg-black/60 text-white/80 outline-none transition hover:bg-blue active:bg-blue/60 lg:inline-flex" />
        </Carousel>
      </div>
    </section>
  )
}
