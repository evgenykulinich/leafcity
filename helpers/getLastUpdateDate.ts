import { differenceInDays, differenceInWeeks, differenceInMonths, parse } from 'date-fns'

const updateDateInfo = 'Обновлялось'

export const getLastUpdateDate = (dateString: string) => {
  // Определяем формат строки даты
  const dateFormat = 'd MMM yyyy'

  // Преобразуем строку даты в объект Date
  const givenDate = parse(dateString, dateFormat, new Date())

  const now = new Date()

  if (now < givenDate) {
    return `Не обновлялось`
  }

  const daysElapsed = differenceInDays(now, givenDate)
  const weeksElapsed = differenceInWeeks(now, givenDate)
  const monthsElapsed = differenceInMonths(now, givenDate)

  if (monthsElapsed >= 1) {
    return `${updateDateInfo} более месяца назад`
  } else if (weeksElapsed >= 1) {
    return `${updateDateInfo} более недели назад`
  } else if (daysElapsed >= 1) {
    return `${updateDateInfo} несколько дней назад`
  } else {
    return `${updateDateInfo} сегодня`
  }
}
