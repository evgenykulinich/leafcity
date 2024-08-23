import { notFound } from 'next/navigation'
import * as z from 'zod'

import { PaymentSchema } from '@/schemas'

export async function getRedirectPayment(values: z.infer<typeof PaymentSchema>) {
  try {
    const getRedirectUrl = `${process.env.NEXT_PUBLIC_API_URL}/payment/getRedirectPayment`
    const redirectResponse = await fetch(getRedirectUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store',
      body: JSON.stringify(values)
    })

    if (!redirectResponse.ok) {
      if (redirectResponse.status === 404) {
        console.log(redirectResponse)
        return notFound()
      } else {
        throw new Error(`Ошибка: сервер вернул статус ${redirectResponse.status}`)
      }
    }

    const { confirmation_url } = await redirectResponse.json()
    return confirmation_url
  } catch (error) {
    console.log(error)
    return notFound()
  }
}
