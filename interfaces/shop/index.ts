export interface Product {
  id: number
  name: string
  description: string
  price: number
  sale: number
  imageUrl: string
  duration: string
}

export interface ProductsItemProps {
  product: Product
}

export interface ProductDialogContentProps {
  product: Product
}

export interface PaymentFormProps {
  productId: number
  price: number
}
