'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FileText, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormField,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { getRedirectPayment } from '@/helpers/getPaymentUrl'
import { PaymentFormProps } from '@/interfaces/shop'
import { PaymentSchema } from '@/schemas'

export function ProductForm({
  productId,
  price,
  canApplyPromoCode,
  canEnterQuantity
}: PaymentFormProps) {
  const router = useRouter()
  const [isPaymentDisabled, setIsPaymentDisabled] = useState(true)

  const form = useForm<z.infer<typeof PaymentSchema>>({
    resolver: zodResolver(PaymentSchema),
    mode: 'onChange',
    defaultValues: {
      productId,
      email: '',
      username: '',
      promoCode: '',
      count: 1,
      redirectUrl: process.env.NEXT_PUBLIC_PAYMENT_REDIRECT_URL
    }
  })

  const count = form.watch('count') || 1

  const onSubmit = async (values: z.infer<typeof PaymentSchema>) => {
    const confirmation_url = await getRedirectPayment(values)
    return router.push(confirmation_url)
  }

  return (
    <div className="flex w-full flex-[0] flex-col items-center justify-between gap-2 lg:flex-row lg:gap-8">
      <div className="flex w-full flex-col gap-4 lg:w-[300px]">
        <div className="h-[2px] w-full rounded-xl bg-purple/10 lg:hidden" />

        <div className="text-black">
          <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 rounded-xl bg-purple/10 px-2 py-3 lg:px-3 lg:py-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="inline text-lg text-white">Никнейм:</FormLabel>
                      {fieldState.error && (
                        <FormMessage className="inline text-mango">
                          {fieldState.error.message}
                        </FormMessage>
                      )}
                      <FormControl>
                        <Input
                          className="w-full rounded-xl border-[3px] border-transparent px-4 py-6 text-[1rem] font-semibold caret-purple outline-none transition focus:border-purple"
                          {...field}
                          placeholder="Dashka17. . ."
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="inline text-lg text-white">Почта:</FormLabel>
                      {fieldState.error && (
                        <FormMessage className="inline text-mango">
                          {fieldState.error.message}
                        </FormMessage>
                      )}
                      <FormControl>
                        <Input
                          className="w-full rounded-xl border-[3px] border-transparent px-4 py-6 text-[1rem] font-semibold caret-purple outline-none transition focus:border-purple"
                          {...field}
                          placeholder="email@leafcity.ru"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {canApplyPromoCode ? (
                  <FormField
                    control={form.control}
                    name="promoCode"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="inline text-lg text-white">Промокод:</FormLabel>
                        {fieldState.error && (
                          <FormMessage className="inline text-mango">
                            {fieldState.error.message}
                          </FormMessage>
                        )}
                        <FormControl>
                          <Input
                            className="w-full rounded-xl border-[3px] border-transparent px-4 py-6 text-[1rem] font-semibold caret-purple outline-none transition focus:border-purple"
                            {...field}
                            placeholder="MEGAPROMO69"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ) : null}
                {canEnterQuantity ? (
                  <FormField
                    control={form.control}
                    name="count"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="inline text-lg text-white">Сумма:</FormLabel>
                        {fieldState.error && (
                          <FormMessage className="inline text-mango">
                            {fieldState.error.message}
                          </FormMessage>
                        )}
                        <FormControl>
                          <Input
                            className="w-full rounded-xl border-[3px] border-transparent px-4 py-6 text-[1rem] font-semibold caret-purple outline-none transition focus:border-purple"
                            {...field}
                            placeholder="Добавь побольше"
                            type="number"
                            inputMode="numeric"
                            min={1}
                            onKeyDown={e => {
                              if (e.key === '-' || e.key === 'e') {
                                e.preventDefault()
                              }
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ) : null}
              </div>

              <div className="flex flex-col items-start justify-between gap-3 rounded-xl bg-purple/10 px-2 py-3 text-white lg:gap-4 lg:px-3 lg:py-4">
                <p className="text-xl font-bold">Оформление платежа</p>
                <div className="flex w-full items-center justify-between text-black">
                  <p className="text-nowrap text-center text-lg text-white">Стоимость:</p>
                  <p className="flex items-center gap-2 text-nowrap text-lg">
                    <Tag className="text-green" strokeWidth={2} size={18} />
                    <span className="font-semibold text-white">
                      {canEnterQuantity ? count : price} ₽
                    </span>
                  </p>
                </div>
                <Button
                  className="mx-auto flex w-full items-center justify-center gap-2 rounded-xl bg-green px-2 py-7 text-center text-lg font-bold text-white transition hover:bg-green/80"
                  type="submit"
                  disabled={!isPaymentDisabled || !form.formState.isValid}
                >
                  <Image
                    className="size-[22px]"
                    src="/icon/shopping-basket.svg"
                    alt="Cart"
                    height={1000}
                    width={1000}
                  />
                  <span>Оплатить</span>
                </Button>
              </div>

              <div className="flex flex-col space-x-2 rounded-xl bg-purple/10 px-2 py-3 lg:px-3 lg:py-4">
                <div className="flex items-center gap-2">
                  <Checkbox
                    className="text-green transition"
                    id="agreement"
                    checked={isPaymentDisabled}
                    onClick={() => setIsPaymentDisabled(disabled => !disabled)}
                  />
                  <label
                    className="cursor-pointer select-none text-sm font-medium leading-none text-white transition active:text-green peer-disabled:cursor-not-allowed peer-disabled:opacity-70 lg:hover:text-green"
                    htmlFor="agreement"
                  >
                    Я принимаю условия обработки персональных данных
                  </label>
                </div>
              </div>
            </form>
          </Form>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-purple/10 px-2 py-3 lg:px-3 lg:py-4">
            <FileText className="text-purple" size={22} strokeWidth={1.5} />
            <Link
              className="w-fit cursor-pointer select-none text-sm font-medium text-white transition hover:text-green"
              href={'/shop/policy.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Политика конфиденциальности
            </Link>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-purple/10 px-2 py-3 lg:px-3 lg:py-4">
            <FileText className="text-purple" size={22} strokeWidth={1.5} />
            <Link
              className="w-fit cursor-pointer select-none text-sm font-medium text-white transition hover:text-green"
              href={'/shop/agreement.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Договор-оферта
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
