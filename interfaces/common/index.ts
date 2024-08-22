import { CSSProperties } from 'react'

export interface HeaderProps {
  className?: string
}

export interface PageTitleProps {
  children: React.ReactNode
}

export interface ProgressBarProviderProps {
  children: React.ReactNode
}

export interface FadeInImageProps {
  className?: string
  style?: CSSProperties
  src: string
  alt: string
  height?: number
  width?: number
  layout?: string
  objectFit?: string
  quality?: number
  onError?: () => void
  id?: string
}

interface UsefulLink {
  title: string
  description: string
  color: string
  href: string
  children: React.ReactNode
}

export interface UsefulLinksProps {
  linksList: UsefulLink[]
}

export interface UsefulItemProps {
  title: string
  description: string
  color: string
  href: string
  children: React.ReactNode
}
