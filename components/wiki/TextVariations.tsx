import Image from 'next/image'

import { TextVariantProps } from '@/interfaces/wiki'

export const InfoText = ({ children, className }: TextVariantProps) => {
  return (
    <div
      className={`${className} flex items-center gap-2 rounded-xl border-2 border-blue/20 bg-blue/10 px-3 py-4`}
    >
      <Image
        className="h-[20px] w-[20px]"
        alt="Инфо"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZTlmZDIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJhZGdlLWluZm8iPjxwYXRoIGQ9Ik0zLjg1IDguNjJhNCA0IDAgMCAxIDQuNzgtNC43NyA0IDQgMCAwIDEgNi43NCAwIDQgNCAwIDAgMSA0Ljc4IDQuNzggNCA0IDAgMCAxIDAgNi43NCA0IDQgMCAwIDEtNC43NyA0Ljc4IDQgNCAwIDAgMS02Ljc1IDAgNCA0IDAgMCAxLTQuNzgtNC43NyA0IDQgMCAwIDEgMC02Ljc2WiIvPjxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTYiIHkyPSIxMiIvPjxsaW5lIHgxPSIxMiIgeDI9IjEyLjAxIiB5MT0iOCIgeTI9IjgiLz48L3N2Zz4="
        width={20}
        height={20}
      />
      <span>{children}</span>
    </div>
  )
}
