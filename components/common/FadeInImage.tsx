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

const restyleLoadedImage = (e: any) => {
  ;(e.target as HTMLImageElement).style.opacity = '1'
  ;(e.target as HTMLImageElement).style.filter = 'none'
}

export const FadeInImage = ({ className, style, src, alt, height, width }: Props) => {
  return (
    <Image
      className={clsx('image-fade-in', className)}
      style={style}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={e => restyleLoadedImage(e)}
      priority
      decoding={'async'}
    />
  )
}
