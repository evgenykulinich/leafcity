export interface Product {
  id: number
  name: string
  description: string
  price: number
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
