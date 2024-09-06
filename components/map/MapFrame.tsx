import { Header } from '@/components/common/Header'

export default function MapFrame() {
  const noCacheUrl = (world: string) =>
    `${process.env.NEXT_PUBLIC_API_URL}/map/${world}?nocache=${new Date().getTime()}`

  return (
    <>
      <Header className="fixed touch-none px-4 lg:px-8" />
      <iframe
        src={noCacheUrl('survival')}
        className="fixed bottom-0 h-[calc(100dvh-65px)] w-full flex-1 overflow-hidden border-0"
        title="LEAF CITY - Карта"
      />
    </>
  )
}
