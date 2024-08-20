import { notFound } from 'next/navigation'

export async function getLastPaymentsList() {
  try {
    const getLastPaymentsUrl = `${process.env.NEXT_PUBLIC_API_URL}/payment/getLastPayments`
    const lastPaymentsResponse = await fetch(getLastPaymentsUrl, {
      method: 'GET',
      cache: 'no-store'
    })

    if (!lastPaymentsResponse.ok) {
      return notFound()
    }

    const lasPaymentsList = await lastPaymentsResponse.json()
    return lasPaymentsList
  } catch (error) {
    return notFound()
  }
}
