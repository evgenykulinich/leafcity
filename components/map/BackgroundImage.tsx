import { FadeInImage } from '@/components/common/FadeInImage'

export const BackgroundImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="card-blur relative h-full w-full overflow-hidden rounded-2xl">
      <FadeInImage
        className="h-full object-cover"
        src={src}
        width={1000}
        height={1000}
        quality={100}
        alt={alt}
        style={{ zIndex: -1 }}
      />
    </div>
  )
}
