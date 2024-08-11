import Image from 'next/image'

interface Props {
  children: React.ReactNode
  className?: string
}

export const InfoText = ({ children, className }: Props) => {
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

export const WarningText = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} flex items-center gap-2 rounded-xl border-2 border-mango/20 bg-mango/10 px-3 py-4`}
    >
      <Image
        className="h-[20px] w-[20px]"
        alt="Инфо"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZWRmMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW9jdGFnb24tYWxlcnQiPjxwYXRoIGQ9Ik0xMiAxNmguMDEiLz48cGF0aCBkPSJNMTIgOHY0Ii8+PHBhdGggZD0iTTE1LjMxMiAyYTIgMiAwIDAgMSAxLjQxNC41ODZsNC42ODggNC42ODhBMiAyIDAgMCAxIDIyIDguNjg4djYuNjI0YTIgMiAwIDAgMS0uNTg2IDEuNDE0bC00LjY4OCA0LjY4OGEyIDIgMCAwIDEtMS40MTQuNTg2SDguNjg4YTIgMiAwIDAgMS0xLjQxNC0uNTg2bC00LjY4OC00LjY4OEEyIDIgMCAwIDEgMiAxNS4zMTJWOC42ODhhMiAyIDAgMCAxIC41ODYtMS40MTRsNC42ODgtNC42ODhBMiAyIDAgMCAxIDguNjg4IDJ6Ii8+PC9zdmc+"
        width={20}
        height={20}
      />
      <span>{children}</span>
    </div>
  )
}

export const DangerText = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} flex items-center gap-2 rounded-xl border-2 border-danger/20 bg-danger/10 px-3 py-4`}
    >
      <Image
        className="h-[20px] w-[20px]"
        alt="Инфо"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlZDJlMzgiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyaWFuZ2xlLWFsZXJ0Ij48cGF0aCBkPSJtMjEuNzMgMTgtOC0xNGEyIDIgMCAwIDAtMy40OCAwbC04IDE0QTIgMiAwIDAgMCA0IDIxaDE2YTIgMiAwIDAgMCAxLjczLTMiLz48cGF0aCBkPSJNMTIgOXY0Ii8+PHBhdGggZD0iTTEyIDE3aC4wMSIvPjwvc3ZnPg=="
        width={20}
        height={20}
      />
      <span>{children}</span>
    </div>
  )
}
