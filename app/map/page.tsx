import { Header } from '@/components/main/Header'

export default function MapPage() {
  return (
    <section className="h-screen w-screen overflow-hidden">
      <div className="container mx-auto max-w-screen-2xl">
        <Header />
      </div>
      <div className="map map-lg">
        <iframe
          src="https://map.leafcity.ru/"
          className="m-0 h-full w-full border-0 p-0 ring-offset-background focus-visible:outline-none"
        />
      </div>
    </section>
  )
}
