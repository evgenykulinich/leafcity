import React from 'react'

export interface WikiPageProps {
  params: { slug: string[] }
}

export interface TextVariantProps {
  children: React.ReactNode
  className?: string
}
