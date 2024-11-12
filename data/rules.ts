interface RulePoint {
  point?: string
  text: string
}

interface RuleBlock {
  value: string
  block: string
  image: string
  color: string
  points: RulePoint[]
}

export const rules: RuleBlock[] = [
  {
    value: 'Пользовательское соглашение',
    block: 'Пользовательское соглашение',
    image: '/icon/book.png',
    color: 'white',
    points: [
      {
        text: 'Присоединяясь к нашим Discord и Minecraft серверам, вы выражаете свое согласие с нашими правилами, установленными на этом проекте'
      },
      {
        text: 'Незнание правил и пользовательского соглашения не освобождает от ответственности'
      },
      {
        text: 'За нарушение правил предусмотрены различные виды наказаний, включая, но не ограничиваясь, исключением с проекта на неопределенный срок. Решение о наказании принимает администрация проекта'
      },
      {
        text: 'Владелец аккаунта несет полную ответственность за все действия, совершаемые под его аккаунтом'
      },
      {
        text: 'Игрок имеет право снять любой вид блокировки купив товар на сайте. Размер платы определяется количеством наказаний. Администрация имеет право не производить разблокировку если осведомит пользователя о вечной блокировке'
      },
      {
        text: 'При запросе на проверку вы обязаны в течение установленного администратором времени подключиться к голосовому каналу. Несоблюдение данного требования может повлечь за собой наказание'
      }
    ]
  },
  {
    value: 'Гриферство',
    block: 'Гриферство',
    image: '/icon/tnt.png',
    color: 'purple',
    points: [
      {
        point: '1.1',
        text: 'Повреждение построек общественных мест или других игроков без разрешения владельца/руководства'
      },
      {
        point: '1.2',
        text: 'Похищение ресурсов с общественных или частных мест, а так же использование чужих объектов в своих целях без разрешения руководства/владельца'
      },
      {
        point: '1.3',
        text: 'Убийство и использование существ, принадлежащих другим игрокам'
      },
      {
        point: '1.4',
        text: 'Нарушение правил установленных владельцами территории'
      },
      {
        point: '1.5',
        text: 'Нанесение урона или убийство игрока без причины и возврата ресурсов'
      },
      {
        point: '1.6',
        text: 'Загрязнение общественных мест (установка или выбрасывание блоков, предметов)'
      },
      {
        point: '1.7',
        text: 'Создание лаг-машин, включая большое количество сущностей, сундуков, воронок или голов в одном месте, что может негативно сказаться на производительности сервера или привести к его краху'
      },
      {
        point: '1.8',
        text: 'Преследование других игроков, если они этого не желают'
      },
      {
        point: '1.9',
        text: 'Игнорирование просьб покинуть постройки/территории/фермы (за исключением общественных мест)'
      }
    ]
  },
  {
    value: 'Строительство и торговля',
    block: 'Строительство и торговля',
    image: '/icon/honey.png',
    color: 'green',
    points: [
      {
        point: '2.1',
        text: 'Строительство, без разрешения руководства вблизи от спавна (менее чем в 500 блоков), для артов (менее чем 1500 блоков)'
      },
      {
        point: '2.2',
        text: 'Строительство крупных ферм в мире выживания и ресурсов'
      },
      {
        point: '2.3',
        text: 'Строительство на территории других игроков в радиусе 100 блоков без разрешения владельцев'
      },
      {
        point: '2.4',
        text: 'Размещение нацистских символов и сексуализированных объектов'
      },
      {
        point: '2.5',
        text: 'Добыча ресурсов, без разрешения руководства вблизи от спавна (менее чем 500), разрушения ландшафта для добычи ресурсов в любом мире, кроме мира ресурсов'
      },
      {
        point: '2.6',
        text: 'Размещение товаров в общественных местах обходя шаблон без согласования с руководством'
      },
      {
        point: '2.7',
        text: 'Строительство трейд-холов в мире ресурсов и ферм'
      },
      {
        point: '2.8',
        text: 'Создание механизмов для дюпа ковриков в мире survival/resources'
      }
    ]
  },
  {
    value: 'Честная игра',
    block: 'Честная игра',
    image: '/icon/arrow.png',
    color: 'blue',
    points: [
      {
        point: '3.1',
        text: 'Использование/хранение любых видов читов и программного обеспечения, не разрешенных на сервере, а также отказ от проверки'
      },
      {
        point: '3.2',
        text: 'Использование любых видов ошибок и уязвимостей, непредусмотренных на сервере'
      },
      {
        point: '3.3',
        text: 'Создание и использование твинк-аккаунтов, обход блокировки'
      },
      {
        point: '3.4',
        text: 'Использование скинов и элементов одежды с прозрачностью более 50%, а также скинов, содержащих непристойные, нацистские элементы или принадлежащих команде проекта'
      },
      {
        point: '3.5',
        text: 'Использование провокационных никнеймов, содержащих оскорбления, ненормативную лексику или любую другую негативную информацию'
      },
      {
        point: '3.6',
        text: 'Продажа/передача/взлом аккаунтов'
      },
      {
        point: '3.7',
        text: 'Умышленная порча игрового процесса другим игрокам, создание помехи'
      },
      {
        point: '3.8',
        text: 'Вмешательство в работу администрации сервера и создание помех препятствующие работе'
      },
      {
        point: '3.9',
        text: 'Присваивать ресурсы/строения забаненных или ушедших игроков без разрешения руководства'
      },
      {
        point: '3.10',
        text: 'Бесплатно раздавать ресурсы без разрешения руководства'
      },
      {
        point: '3.11',
        text: 'Продавать внутриигровые ценности за реальные деньги'
      },
      {
        point: '3.12',
        text: 'Организация махинаций с украденными или приобретёнными за реальную валюту ресурсами, а также манипуляции с ними для получения выгоды'
      },
      {
        point: '3.13',
        text:
          'Использование провокационных эмоций, а также эмоций со звуковыми эффектами в общественных местах. Уточнение:\n' +
          'Использование эмоций нацистского характера.\n' +
          'Использование эмоций сексуализированного характера без согласования с игроком'
      }
    ]
  },
  {
    value: 'Чат Discord и Minecraft',
    block: 'Чат Discord и Minecraft',
    image: '/icon/note.png',
    color: 'mango',
    points: [
      {
        point: '4.1',
        text: ' Угнетение или оскорбление пользователей/любых меньшинств, негативное высказывание в адрес других наций, рас или религий'
      },
      {
        point: '4.2',
        text: 'Обсуждение/упоминание/публикация аморальных, непристойных, террористических, политических, нацистских тем/фото/видео'
      },
      {
        point: '4.3',
        text: 'Запугивание, оскорбление или разглашение персональной/ложной информации других игроков или третьих лиц, суицидальные намеки или призывы'
      },
      {
        point: '4.4',
        text: 'Чрезмерное использование глобального/общего чата в форме личной переписки'
      },
      {
        point: '4.5',
        text: 'Чрезмерный флуд, спам, оффтоп, упоминание игроков'
      },
      {
        point: '4.6',
        text: 'Попрошайничество, вымогательство, мошенничество и шантаж'
      },
      {
        point: '4.7',
        text: 'Реклама сторонних программ, читов, проектов или услуг без одобрения администрации'
      },
      {
        point: '4.8',
        text: 'Публичное оскорбление LEAF CITY или его команды'
      },
      {
        point: '4.9',
        text: 'Публичные негативные высказывания про блокировки выданную администрацией'
      },
      {
        point: '4.10',
        text: 'Проигрывание своей музыки через голосовой чат с использованием сторонних программ в общественных местах'
      },
      {
        point: '4.11',
        text: '4.12. Начинать или продолжать разговоры, включающие провокации на конфликты, оскорбления, нецензурную лексику, обсуждение религиозных или политических тем, а также любые споры, нарушающие правила или вызывающие негативные эмоции'
      }
    ]
  },
  {
    value: 'Администрация',
    block: 'Администрация',
    image: '/icon/chestplate.png',
    color: 'white',
    points: [
      {
        point: '5.1',
        text: 'Требование конфиденциальных данных от аккаунтов игроков'
      },
      {
        point: '5.2',
        text: 'Некорректное общение с участниками сервера в общих чатах и ⁠тикетах'
      },
      {
        point: '5.3',
        text: 'Предоставление услуг нарушающий режим игры'
      },
      {
        point: '5.4',
        text: 'Некорректная выдача наказаний, безотчетность'
      },
      {
        point: '5.5',
        text: 'Намеренное игнорирование игроков'
      },
      {
        point: '5.6',
        text: 'Препятствие игровому процессу'
      },
      {
        point: '5.7',
        text: 'Разглашение внутренней информацию проекта и работы администрации'
      },
      {
        point: '5.8',
        text: 'Использование режима наблюдателя или креативного режима для личных целей в игровых ситуациях'
      },
      {
        point: '5.9',
        text: 'Выдача предметов из креативного режима, использование дюпнутых ресурсов, сбор ресурсов после роллбэка, из инвентаря и сундука края других игроков'
      },
      {
        point: '5.10',
        text: 'Использование всевозможных команд без причины или в личных интересах'
      }
    ]
  }
]
