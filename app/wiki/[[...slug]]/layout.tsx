import { Leftbar, SheetLeftbar } from '@/components/wiki/leftbar'
import { WikiHeader } from '@/components/Header'
import { Copyright } from '@/components/copyright/Copyright'

export default function DocsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto grid min-h-dvh max-w-screen-2xl grid-rows-[auto_1fr_auto] px-4 lg:px-8">
      <WikiHeader />
      <div className="mt-4 grid lg:mt-8 lg:grid-cols-[auto_auto_1fr]">
        <SheetLeftbar />
        <Leftbar />
        {children}
      </div>
      <Copyright />
    </div>
  )
}
