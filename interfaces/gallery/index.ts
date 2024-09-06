type Screenshot = {
  url: string
  author: string
}

export interface GalleryCardProps {
  className?: string
  screenshots: Screenshot[]
  title: string
  icon: string
  color: string
  preview: string
}
