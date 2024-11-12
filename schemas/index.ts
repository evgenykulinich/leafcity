import * as z from 'zod'

export const PaymentSchema = z.object({
  productId: z.number(),
  email: z
    .string()
    .min(1, '')
    .max(69, ' • Превышен лимит')
    .regex(/^\S+$/, ' • Без пробелов')
    .regex(/^[a-zA-Z0-9_@.]+$/, ' • Только латиница')
    .email(' • Некорректная почта'),
  username: z
    .string()
    .min(1, '')
    .max(69, ' • Превышен лимит')
    .regex(/^\S+$/, ' • Без пробелов')
    .regex(/^[a-zA-Z0-9_]+$/, ' • Только латиница'),
  promoCode: z
    .string()
    .max(69, ' • Превышен лимит')
    .refine(value => value === '' || /^\S+$/.test(value), ' • Без пробелов')
    .refine(value => value === '' || /^[a-zA-Z0-9_]+$/.test(value), ' • Только латиница')
    .optional(),
  count: z.coerce
    .number()
    .int()
    .positive(' • Минимум 1 ₽')
    .max(100000, ' • Максимум 100 000 ₽')
    .optional(),
  redirectUrl: z.string()
})
