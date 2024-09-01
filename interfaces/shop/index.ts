type ProductDuration = {
  id: number
  duration: number
  description: string
}

type ProductCategory = {
  id: number
  name: string
}

type ProductAbout = {
  name: number
  description: string
}

type ProductAbilities = {
  name: number
  description: string
}

export interface Product {
  id: number
  name: string
  realPrice: number
  about: ProductAbout[]
  sale: number
  imageUrl: string
  duration: ProductDuration
  category?: ProductCategory
  abilities?: ProductAbilities[]
  features?: string[]
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
  thanksMessage?: string
}

export interface PaymentsItemProps {
  payment: Payment
  thanksMessage?: string
}
