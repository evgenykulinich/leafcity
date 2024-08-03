import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import Anchor from '@/components/wiki/anchor'
import { WIKI_ROUTES } from '@/lib/wiki_routes'

export function Leftbar() {
  return (
    <aside className="top-16 hidden flex-[0.9] flex-col self-start pr-8 lg:flex">
      <ScrollArea className="m-0">
        <Menu />
      </ScrollArea>
    </aside>
  )
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <div className="mx-auto mb-4 w-full">
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="flex w-full border-2 border-green bg-green/10 px-2 py-6 text-lg font-bold hover:bg-green/20 active:bg-green/20 lg:hidden"
          >
            Навигация
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent className="flex flex-col gap-4 border-none px-0" side="left">
        <SheetHeader>
          <SheetClose className="px-5" asChild></SheetClose>
        </SheetHeader>
        <ScrollArea className="flex flex-col gap-4">
          <div className="mx-2 mt-3 flex flex-col gap-2 px-5"></div>
          <div className="mx-2 px-5">
            <Menu isSheet />
          </div>
          <div className="flex gap-2 p-6 pb-4"></div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

function Menu({ isSheet = false }) {
  return (
    <div className="flex flex-col gap-8">
      {WIKI_ROUTES.map(({ href, items, title }) => {
        return (
          <div className="flex flex-col gap-4" key={href}>
            <h4 className="cursor-default text-lg font-bold text-green">{title}</h4>
            <div className="ml-0.5 flex flex-col gap-3 text-white/70 sm:text-sm">
              {items.map(subItem => {
                const key = `/wiki/${href}${subItem.href}`
                const Comp = (
                  <Anchor activeClassName="font-medium text-blue" key={key} href={key}>
                    {subItem.title}
                  </Anchor>
                )
                return isSheet ? (
                  <SheetClose key={key} asChild>
                    {Comp}
                  </SheetClose>
                ) : (
                  Comp
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
