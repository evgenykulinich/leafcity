import { notFound } from 'next/navigation'

export async function getProductsList() {
  try {
    const getProductsUrl = `${process.env.NEXT_PUBLIC_API_URL}/shop/products`
    const productsResponse = await fetch(getProductsUrl, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJWb3J0ZXgiLCJleHAiOjE3MjQ3ODE2MTB9.nZGtKlSlk7XsoEv7v-p_de8CvfoYcnNt0bLIO5TC4ov4YYCZ5Na1_iVS8ZsjlaA6xK8HuO75SesYs6tasFgr8Q'
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
