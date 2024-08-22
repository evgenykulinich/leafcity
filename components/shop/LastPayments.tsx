import { PaymentCarousel } from '@/components/shop/PaymentCarousel'
import { getLastPaymentsList } from '@/helpers/getLastPayments'

export const LastPayments = async () => {
  const lastPayments = await getLastPaymentsList()

  return (
    <section className="mt-16 overflow-hidden lg:mt-24">
      <h2 className="text-center text-2xl lg:text-left">Последние покупки</h2>
      <div className="mt-8 select-none lg:mt-12">
        <PaymentCarousel lastPayments={lastPayments} />
      </div>
    </section>
  )
}
