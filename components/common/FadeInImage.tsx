'use client'

import Image from 'next/image'
import { clsx } from 'clsx'
import { CSSProperties } from 'react'

interface Props {
  className?: string
  style?: CSSProperties
  src: string
  alt: string
  height: number
  width: number
}

export const FadeInImage = ({ className, style, src, alt, height, width }: Props) => {
  return (
    <Image
      className={clsx('opacity-0 transition-all duration-500', className)}
      style={style}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={e => ((e.target as HTMLImageElement).style.opacity = '1')}
      priority
    />
  )
}
