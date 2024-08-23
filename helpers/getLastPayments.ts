export async function getLastPaymentsList() {
  try {
    const getLastPaymentsUrl = `${process.env.NEXT_PUBLIC_API_URL}/payment/getLastPayments`
    const lastPaymentsResponse = await fetch(getLastPaymentsUrl, {
      method: 'GET',
      cache: 'no-store'
    })

    if (!lastPaymentsResponse.ok) {
      throw new Error(`Ошибка: сервер вернул статус ${lastPaymentsResponse.status}`)
    }

    const lastPaymentsList = await lastPaymentsResponse.json()
    return lastPaymentsList
  } catch (error) {
    return
  }
}
