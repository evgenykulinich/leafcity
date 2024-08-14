import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Registration() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-heading">Регистрация</h1>

      <h2 className="text-subheading" id="в-разработке">
        В разработке
      </h2>

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
