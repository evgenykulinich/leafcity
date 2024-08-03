import { getTocs } from '@/lib/markdown'
import { ScrollArea } from '@/components/ui/scroll-area'
import TocObserver from '@/components/wiki/toc-observer'

export default async function Toc({ path }: { path: string }) {
  const tocs = await getTocs(path)

  return (
    <div className="toc hidden h-fit w-[250px] flex-[1]">
      <div className="flex w-full flex-col gap-2.5">
        <h3 className="cursor-default text-lg font-medium">На этой странице</h3>
        <ScrollArea className="pb-4 pt-0.5">
          <TocObserver data={tocs} />
        </ScrollArea>
      </div>
    </div>
  )
}