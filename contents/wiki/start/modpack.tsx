import Link from 'next/link'

import { routes } from '@/constants/routes'
import { modpack } from '@/data/wiki'
import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'
const sortedModpack = modpack.sort((prev, next) => (prev.name > next.name ? 1 : -1))

export default function ModPack() {
  const lastUpdateDate = getLastUpdateDate(updateDate)
  return (
    <>
      <h1 className="text-heading">Сборка</h1>
      <p className="mt-4">
        Модпак для Minecraft на базе Fabric предназначен для улучшения производительности и
        графического качества игры. В его состав входят оптимизационные моды, такие как{' '}
        <span className="text-note note-purple">Sodium</span>,{' '}
        <span className="text-note note-purple">Lithium</span> и{' '}
        <span className="text-note note-purple">Starlight</span>
      </p>

      <h2 className="text-subheading" id="список-модов">
        Список модов
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        {sortedModpack.map(mod => (
          <li key={mod.name}>
            <span className="font-bold">• </span>
            <span className="text-note note-blue">{mod.name}</span> – {mod.description}
          </li>
        ))}
      </ul>

      <h2 className="text-subheading" id="скачать-сборку">
        Скачать сборку
      </h2>
      <Link
        className="hover-underline underline-blue mb-8 mt-4 block w-fit text-blue"
        target="_blank"
        href={routes.modpack}
      >
        Fabric – 1.21
      </Link>

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
