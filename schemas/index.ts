import * as z from 'zod'

export const PaymentSchema = z.object({
  productId: z.number(),
  username: z
    .string()
    .min(1)
    .max(69)
    .regex(/^\S+$/)
    .regex(/^[a-zA-Z0-9_]+$/)
})
