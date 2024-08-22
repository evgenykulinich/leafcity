'use client'

import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

import { PaymentsItem } from '@/components/shop/PaymentsItem'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { thanksMessageList } from '@/data/shop'
import { getRandomItemInArray } from '@/helpers/getRandomItemInArray'
import { Payment } from '@/interfaces/shop'

export const PaymentCarousel = ({ lastPayments }) => {
  const [thanksMessages, setThanksMessages] = useState([])

  useEffect(() => {
    setThanksMessages(lastPayments.map(() => getRandomItemInArray(thanksMessageList)))
  }, [lastPayments])

  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      plugins={[
        Autoplay({
          delay: 2500
        })
      ]}
    >
      <CarouselContent className="-ml-8">
        {lastPayments.map((payment: Payment, index: number) => (
          <CarouselItem className="pl-8 md:basis-1/3 lg:basis-1/4" key={payment.key}>
            <PaymentsItem payment={payment} thanksMessage={thanksMessages[index]} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 hidden border-none bg-black/60 text-white/80 outline-none transition hover:bg-blue active:bg-blue/60 lg:inline-flex" />
      <CarouselNext className="absolute right-2 hidden border-none bg-black/60 text-white/80 outline-none transition hover:bg-blue active:bg-blue/60 lg:inline-flex" />
    </Carousel>
  )
}
