import { notFound } from 'next/navigation'

export async function getProductsList() {
  try {
    const getProductsUrl = `${process.env.NEXT_PUBLIC_API_URL}/shop/products`
    const productsResponse = await fetch(getProductsUrl, {
      method: 'GET',
      cache: 'no-store'
    })

    if (!productsResponse.ok) {
      return notFound()
    }

    const productList = await productsResponse.json()
    return productList
  } catch (error) {
    return notFound()
  }
}
