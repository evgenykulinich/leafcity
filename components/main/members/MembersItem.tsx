import { clsx } from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import { MembersItemProps } from '@/interfaces/main'

export const MembersItem = ({ member }: MembersItemProps) => {
  const { nickname, image, styles } = member
  const [imgError, setImgError] = useState(false)

  const handleError = () => {
    setImgError(true)
  }
  return (
    <div
      className={clsx(
        `member-card mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px] ${styles}`
      )}
    >
      <p className="lg:hidden">{nickname}</p>
      <div className="hover-shy">
        {imgError ? (
          <Image
            className="mt-2 w-full cursor-pointer rounded-[8px] transition lg:active:scale-[.95]"
            src="/icon/head_default.png"
            alt={nickname}
            height={500}
            width={500}
            loading="eager"
          />
        ) : (
          <Image
            className="mt-2 w-full cursor-pointer rounded-[8px] transition lg:active:scale-[.95]"
            src={image}
            alt={nickname}
            height={500}
            width={500}
            loading="eager"
            onError={handleError}
          />
        )}
      </div>
    </div>
  )
}
