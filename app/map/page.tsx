import { Header } from '@/components/Header'

export default function MapPage() {
  return (
    <section className="flex h-screen w-screen flex-col overflow-hidden">
      <div className="mx-auto w-full max-w-screen-2xl px-4 pt-4 lg:px-8">
        <Header />
      </div>
      <div className="flex-1 overflow-hidden">
        <iframe
          src="https://map.leafcity.ru/"
          className="h-[calc(100dvh-72px)] w-full border-0 sm:h-full"
          title="Map"
        />
      </div>
    </section>
  )
}
