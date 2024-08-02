'use client'

import Image from 'next/image'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/constants/routes'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card } from '@/components/ui/card'

interface Props {
  className?: string
  screenshots: { url: string; author: string }[]
  title: string
  icon: string
  color: string
}

const GalleryCard = ({ className = '', screenshots, title, icon, color }: Props) => {
  return (
    <Card className={`flex-1 rounded-2xl border-2 p-4 transition lg:p-6 lg:py-4 ${className}`}>
      <p className="flex items-center justify-center gap-2">
        <Image alt="Эмоджи" src={icon} width={24} height={24} />
        <span className={`text-${color}`}>{title}</span>
      </p>
      <Dialog>
        <DialogTrigger className="relative mt-4 w-full overflow-hidden rounded-xl outline-none">
          <Image
            className="h-full w-full rounded-xl"
            alt="Скриншот"
            src={screenshots[0].url}
            width={1920}
            height={1080}
          />
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Image
                  className="absolute right-1 top-1 w-[25px] rounded-[6px] bg-black/60 p-1 lg:w-[30px]"
                  alt="Аватар"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdXNlLXBvaW50ZXItY2xpY2siPjxwYXRoIGQ9Im05IDkgNSAxMiAxLjgtNS4yTDIxIDE0WiIvPjxwYXRoIGQ9Ik03LjIgMi4yIDggNS4xIi8+PHBhdGggZD0ibTUuMSA4LTIuOS0uOCIvPjxwYXRoIGQ9Ik0xNCA0LjEgMTIgNiIvPjxwYXRoIGQ9Im02IDEyLTEuOSAyIi8+PC9zdmc+"
                  width={180}
                  height={180}
                />
              </TooltipTrigger>
              <TooltipContent className="p-0">Смотреть</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DialogTrigger>
        <DialogContent className="w-full px-4 lg:max-w-[1080px] lg:px-8">
          <Carousel className="relative w-full lg:max-w-fit" opts={{ loop: true }}>
            <CarouselContent>
              {screenshots.map(item => (
                <CarouselItem className="relative" key={item.url}>
                  <Image
                    className="h-full rounded-xl"
                    alt="Скриншот"
                    src={item.url}
                    width={1920}
                    height={1080}
                  />
                  <TooltipProvider>
                    <Tooltip delayDuration={200}>
                      <TooltipTrigger asChild>
                        <div className="absolute bottom-1 left-5 flex cursor-default items-center gap-1 rounded-[6px] bg-black/60 p-1 transition hover:bg-black/90 lg:bottom-1 lg:gap-2 lg:rounded-[8px] lg:px-2 lg:py-2">
                          <Image
                            className="w-[20px] rounded"
                            alt="Аватар"
                            src={`${routes.head}/${item.author}`}
                            width={180}
                            height={180}
                          />
                          <span className="text-sm">{item.author}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="p-0">Автор</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-1 hidden border-none bg-black/60 text-white/80 outline-none hover:bg-black/90 lg:inline-flex" />
            <CarouselNext className="absolute right-1 hidden border-none bg-black/60 text-white/80 outline-none hover:bg-black/90 lg:inline-flex" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default GalleryCard
