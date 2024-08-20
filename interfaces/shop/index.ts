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

export interface Payment {
  daysAgo: string
  imageUrl: string
  key: string
  username: string
}

export interface PaymentsListProps {
  lastPayments: Payment[]
  children: React.ReactNode
}

export interface PaymentsItemProps {
  payment: Payment
}
