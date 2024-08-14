import { ExternalLink, FileImage, Folder, Gamepad2 } from 'lucide-react'
import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { routes } from '@/constants/routes'

export const Useful = () => {
  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="text-heading text-center">Полезные ссылки</h2>
      <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:justify-between">
        <Link className="flex w-full" href={`${routes.wiki}/start/info`}>
          <Card className="w-full rounded-2xl border-2 border-blue bg-blue/10 text-blue transition hover:bg-blue/20">
            <CardHeader>
              <div className="mb-4 flex justify-between lg:mb-8">
                <Gamepad2 className="h-auto w-[40px]" strokeWidth={1.5} />
                <ExternalLink />
              </div>
              <CardTitle>Как начать играть?</CardTitle>
            </CardHeader>
            <CardContent>Полный гайд с подробным объяснением на нашей вики</CardContent>
          </Card>
        </Link>
        <Link className="flex w-full" href="/wiki/start/modpack">
          <Card className="w-full self-stretch rounded-2xl border-2 border-green bg-green/10 text-green transition hover:bg-green/20">
            <CardHeader>
              <div className="mb-4 flex justify-between lg:mb-8">
                <Folder className="h-auto w-[40px]" strokeWidth={1.5} />
                <ExternalLink />
              </div>
              <CardTitle>Наша сборка</CardTitle>
            </CardHeader>
            <CardContent>
              В её состав входят оптимизационные моды, такие как Sodium, Lithium и Starlight
            </CardContent>
          </Card>
        </Link>
        <Link className="flex w-full" href={routes.gallery}>
          <Card className="w-full rounded-2xl border-2 border-purple bg-purple/10 text-purple transition hover:bg-purple/20">
            <CardHeader>
              <div className="mb-4 flex justify-between lg:mb-8">
                <FileImage className="h-auto w-[40px]" strokeWidth={1.5} />
                <ExternalLink />
              </div>
              <CardTitle>Ваше творчество</CardTitle>
            </CardHeader>
            <CardContent>
              Атмосферные генерации, крутые постройки и весёлые моменты на скриншотах наших игроков
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  )
}
