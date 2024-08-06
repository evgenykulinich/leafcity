import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Registration() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-xl font-bold">Регистрация</h1>

      <h2 className="mb-8 mt-8 text-lg font-bold" id="в-разработке">
        В разработке
      </h2>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
