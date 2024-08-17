import * as z from 'zod'

export const PaymentSchema = z.object({
  productId: z.number(),
  username: z
    .string()
    .min(1, ' Обязательно')
    .max(69, ' Лимит символов')
    .regex(/^\S+$/, ' Без пробелов')
    .regex(/^[a-zA-Z0-9]+$/, ' Только латиница')
})
