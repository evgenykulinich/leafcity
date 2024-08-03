import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Drinks() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="mb-8 text-xl font-bold">В разработке</h1>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
