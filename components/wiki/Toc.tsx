import { AlignLeft } from 'lucide-react'

import { ScrollArea } from '@/components/ui/scroll-area'
import TocObserver from '@/components/wiki/Toc-observer'
import { getTocs } from '@/lib/markdown'

export default async function Toc({ path }: { path: string }) {
  const tocs = await getTocs(path)

  return (
    <div className="toc w-[250px]">
      <div className="fixed flex w-full flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <AlignLeft size={22} color="#fedf00" strokeWidth={1.5} />
          <h3 className="cursor-default text-lg font-medium text-mango">На этой странице</h3>
        </div>
        <ScrollArea className="pb-4 pt-0.5">
          <TocObserver data={tocs} />
        </ScrollArea>
      </div>
    </div>
  )
}
