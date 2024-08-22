import { notFound } from 'next/navigation'

export async function getProductsList() {
  try {
    const getProductsUrl = `${process.env.NEXT_PUBLIC_API_URL}/shop/products`
    const productsResponse = await fetch(getProductsUrl, {
      method: 'GET',
      cache: 'no-store'
    })

    if (!productsResponse.ok) {
      if (productsResponse.status === 404) {
        return notFound()
      } else {
        throw new Error(`Ошибка: сервер вернул статус ${productsResponse.status}`)
      }
    }

    const productList = await productsResponse.json()
    return productList
  } catch (error) {
    throw new Error(`Ошибка при попытке получения списка товаров: ${error.message}`)
  }
}
