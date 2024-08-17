'use client'

import { clsx } from 'clsx'
import Image from 'next/image'

import { FadeInImageProps } from '@/interfaces/common'

const restyleLoadedImage = (e: any) => {
  ;(e.target as HTMLImageElement).style.opacity = '1'
  ;(e.target as HTMLImageElement).style.filter = 'none'
}

export const FadeInImage = ({
  className,
  style,
  src,
  alt,
  height,
  width,
  layout,
  objectFit,
  quality,
  id
}: FadeInImageProps) => {
  return (
    <Image
      className={clsx('image-loading', className)}
      style={style}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={e => restyleLoadedImage(e)}
      priority
      decoding={'async'}
      layout={layout}
      objectFit={objectFit}
      quality={quality}
      id={id}
    />
  )
}
