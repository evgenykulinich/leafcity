'use client'

import { useState } from 'react'

import { FadeInImage } from '@/components/common/FadeInImage'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { routes } from '@/constants/routes'
import { PaymentsItemProps } from '@/interfaces/shop'

export const PaymentsItem = ({ payment, thanksMessage }: PaymentsItemProps) => {
  const { daysAgo, imageUrl, username, productName } = payment
  const [imgError, setImgError] = useState(false)

  const handleError = () => {
    setImgError(true)
  }

  return (
    <Card
      className="hover-thanks flex w-full flex-1 flex-col flex-nowrap items-center gap-4 rounded-2xl border-2 border-blue bg-blue/10 py-4 pt-4 transition lg:hover:bg-blue/20"
      data-thanks-message={thanksMessage}
    >
      <CardTitle className="ml-auto mt-0 px-2">
        <span className="rounded-2xl bg-blue/10 px-2 py-1 text-lg font-normal">{daysAgo}</span>
      </CardTitle>
      <CardContent className="mt-0 flex flex-col gap-4 py-0 lg:mt-0">
        <div className="mx-auto aspect-square max-w-[100px] rounded-xl bg-blue/10 p-4">
          <FadeInImage
            className="mx-auto mt-2 h-auto w-full"
            src={'/LCPlus/other.png'}
            alt={username}
            height={256}
            width={256}
          />
        </div>
        <span className="text-nowrap text-center font-semibold">{productName}</span>
      </CardContent>
      <CardFooter className="mt-0 flex items-center gap-2 rounded-xl bg-blue/10 px-2 py-1 lg:mt-0">
        {imgError ? (
          <FadeInImage
            className="w-[20px] rounded"
            alt="Игрок"
            src="/icon/head_default.png"
            width={180}
            height={180}
          />
        ) : (
          <FadeInImage
            className="w-[20px] rounded"
            alt="Игрок"
            src={`${routes.head}/${username}`}
            width={180}
            height={180}
            onError={handleError}
          />
        )}
        <span className="text-lg">{username}</span>
      </CardFooter>
    </Card>
  )
}
