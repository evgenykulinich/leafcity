import { notFound } from 'next/navigation'

export async function getProductsList() {
  try {
    const getProductsUrl = `${process.env.NEXT_PUBLIC_API_URL}/shop/products`
    const productsResponse = await fetch(getProductsUrl, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYXRrZWEiLCJleHAiOjE3MjQ4NDg0MjR9.tSKnbdB-WhvvouQYSQc9neIqWG9WugnesZhbgWQXSnA4w32R6msSIgaFl6Eg6V_RXLbTKpLrfpWSZ2oQZGuSvg'
      }
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
