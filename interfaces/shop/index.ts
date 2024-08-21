type ProductDuration = {
  id: number
  duration: number
  description: string
}

type ProductCategory = {
  id: number
  name: string
}

export interface Product {
  id: number
  name: string
  price: number
  description: string
  sale: number
  imageUrl: string
  duration: ProductDuration
  category?: ProductCategory
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

export interface Payment {
  daysAgo: string
  imageUrl: string
  key: string
  username: string
  productName: string
}

export interface PaymentsListProps {
  lastPayments: Payment[]
  children: React.ReactNode
}

export interface PaymentsItemProps {
  payment: Payment
}
