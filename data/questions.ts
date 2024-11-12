interface Question {
  value: string
  question: string
  answer: string
}

export const questions: Question[] = [
  {
    value: 'question-1',
    question: 'На какой версии сервера?',
    answer: 'Сервера стоят на 1.21 purpur. Зайти можно с Java 1.13-1.21 и Bedrock'
  },
  {
    value: 'question-2',
    question: 'Как зайти на сервер?',
    answer: 'Нужно перейти в наш Discord и подать заявку, потом получить ответ и начать играть'
  },
  {
    value: 'question-3',
    question: 'Можно ли играть с телефона?',
    answer: 'Конечно, мы поддерживаем как Java, так и Bedrock'
  },
  {
    value: 'question-4',
    question: 'Нужна ли лицензия Minecraft?',
    answer: 'Нет, лицензия не нужна. Можно зайти с пиратки'
  },
  {
    value: 'question-5',
    question: 'Когда происходят вайпы?',
    answer: 'В среднем раз 6 месяцев.  В зависимости от желания игроков'
  },
  {
    value: 'question-6',
    question: 'Проходка бесплатная?',
    answer: 'Да, проходка бесплатная, но ты можешь купить её чтобы не подавать заявку'
  }
]
