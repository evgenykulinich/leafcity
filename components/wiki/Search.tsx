'use client'

import { Book, CommandIcon, SearchIcon } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
  DialogTitle
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { page_routes } from '@/lib/wiki_routes'
import Anchor from '@/components/wiki/Anchor'

export default function Search() {
  const [searchedInput, setSearchedInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        setIsOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const filteredResults = useMemo(
    () =>
      page_routes.filter(item => item.title.toLowerCase().includes(searchedInput.toLowerCase())),
    [searchedInput]
  )

  return (
    <div className="search">
      <Dialog
        open={isOpen}
        onOpenChange={open => {
          if (!open) setSearchedInput('')
          setIsOpen(open)
        }}
      >
        <DialogTrigger asChild>
          <div className="relative mx-auto w-fit flex-1 cursor-pointer rounded-[6px] bg-white/10 py-2">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <Input
              className="h-fit w-fit bg-transparent py-0 pl-10 text-sm caret-green"
              placeholder="Поиск..."
              type="search"
            />
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-0.5 rounded-[6px] bg-green/40 p-[5px] font-mono text-xs font-medium transition hover:bg-green/60">
              <CommandIcon className="h-[12px] w-[12px]" />
              <span className="text-[15px]">K</span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent
          className="top-[45%] flex w-full max-w-[650px] flex-col gap-0 overflow-hidden rounded-[8px] border-2 border-green bg-black/[85%] p-0 sm:top-[38%]"
          aria-describedby={undefined}
        >
          <DialogTitle>
            <VisuallyHidden.Root />
          </DialogTitle>
          <DialogHeader>
            <input
              className="h-14 bg-transparent px-4 text-[15px] caret-green outline-none"
              value={searchedInput}
              onChange={e => setSearchedInput(e.target.value)}
              placeholder="Поиск..."
              autoFocus
            />
          </DialogHeader>
          {filteredResults.length == 0 && searchedInput && (
            <p className="mx-auto mt-2 px-4 text-sm">
              Нет результатов для <span className="text-primary">{`"${searchedInput}"`}</span>
            </p>
          )}
          <ScrollArea className="max-h-[350px]">
            <div className="flex flex-col items-start gap-0.5 overflow-y-auto px-1 pb-4 sm:px-3">
              {filteredResults.map(item => (
                <DialogClose onChange={val => console.log(val)} key={item.href} asChild>
                  <Anchor
                    className="flex w-full items-center gap-2.5 rounded-lg p-2.5 px-3 text-[15px] hover:bg-green/40"
                    href={`/wiki/${item.href}`}
                    activeClassName="bg-green/40"
                  >
                    <Book className="h-[1.1rem] w-[1.1rem]" color="#ffffff" strokeWidth={1.5} />
                    {item.title}
                  </Anchor>
                </DialogClose>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
