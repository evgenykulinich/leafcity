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
    <Card className={`flex-1 rounded-2xl border px-4 pb-2 pt-4 transition ${className}`}>
      <p className="flex items-center justify-center gap-2">
        <Image alt="Эмоджи" src={icon} width={24} height={24} />
        <span className={`text-${color}`}>{title}</span>
      </p>
      <Carousel className="mt-4 lg:mt-6" opts={{ loop: true }}>
        <CarouselContent>
          {screenshots.map(screenshot => (
            <CarouselItem className="relative" key={screenshot.url}>
              <div>
                <Dialog>
                  <DialogTrigger className="min-h-[200px] w-full overflow-hidden rounded-xl outline-none lg:h-[400px]">
                    <Image
                      className="h-full w-full rounded-xl"
                      alt="Скриншот"
                      src={screenshot.url}
                      width={1920}
                      height={1080}
                    />
                  </DialogTrigger>
                  <DialogContent className="w-full lg:max-w-fit">
                    <Image
                      className="rounded-xl"
                      alt="Скриншот"
                      src={screenshot.url}
                      width={1920}
                      height={1080}
                    />
                    <TooltipProvider>
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                          <div className="absolute bottom-3 left-3 flex cursor-default items-center gap-1 rounded-[6px] bg-black/60 px-1 py-1 lg:bottom-4 lg:left-4 lg:gap-2 lg:rounded-[8px] lg:px-2 lg:py-2">
                            <Image
                              className="w-[20px] rounded"
                              alt="Аватар"
                              src={`${routes.head}/${screenshot.author}`}
                              width={180}
                              height={180}
                            />
                            <span className="text-sm">{screenshot.author}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="p-0">Автор</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 hidden border-none bg-black/60 text-white/80 hover:bg-black/90 lg:inline-flex" />
        <CarouselNext className="right-3 hidden border-none bg-black/60 text-white/80 hover:bg-black/90 lg:inline-flex" />
      </Carousel>
    </Card>
  )
}

export default GalleryCard
