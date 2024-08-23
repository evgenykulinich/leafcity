import { ProductsItem } from '@/components/shop/ProductsItem'
import { getProductsList } from '@/helpers/getProductsList'
import { Product } from '@/interfaces/shop'

export const ProductsList = async () => {
  const productList = await getProductsList()

  return (
    <>
      {productList?.length ? (
        <div className="align-start mt-8 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12 xl:grid-cols-3">
          {productList.map((product: Product) => (
            <ProductsItem product={product} key={product.id} />
          ))}
        </div>
      ) : null}
    </>
  )
}
