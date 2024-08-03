import Link from 'next/link'

import { modpack } from '@/data/wiki'
import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'
import { routes } from '@/constants/routes'

const updateDate = '3 Aug 2024'
const sortedModpack = modpack.sort((prev, next) => (prev.name > next.name ? 1 : -1))

export default function ModPack() {
  const lastUpdateDate = getLastUpdateDate(updateDate)
  return (
    <>
      <h1 className="text-xl font-bold">Сборка</h1>
      <p className="mt-4">
        Модпак для Minecraft на базе Fabric предназначен для улучшения производительности и
        графического качества игры. В его состав входят оптимизационные моды, такие как{' '}
        <span className="leading-height rounded bg-purple/20 px-2 py-1">Sodium</span>,{' '}
        <span className="leading-height rounded bg-purple/20 px-2 py-1">Lithium</span> и{' '}
        <span className="leading-height rounded bg-purple/20 px-2 py-1">Starlight</span>
      </p>

      <h2 className="mt-8 text-lg font-bold" id="список-модов">
        Список модов
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        {sortedModpack.map(mod => (
          <li key={mod.name}>
            <span className="text-white/50">• </span>
            <span className="leading-height rounded bg-blue/20 px-2 py-1 font-bold">
              {mod.name}
            </span>{' '}
            – {mod.description}
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="скачать-сборку">
        Скачать сборку
      </h2>
      <Link
        className="hover-underline underline-blue mb-8 mt-4 block w-fit text-blue"
        target="_blank"
        href={routes.modpack}
      >
        Fabric – 1.21
      </Link>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
