import * as z from 'zod'

export const PaymentSchema = z.object({
  productId: z.number(),
  username: z
    .string()
    .min(1, '')
    .max(69, ' • Превышен лимит')
    .regex(/^\S+$/, ' • Без пробелов')
    .regex(/^[a-zA-Z0-9_]+$/, ' • Только латиница'),
  redirectUrl: z.string()
})
