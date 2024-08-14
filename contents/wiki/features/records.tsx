import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Records() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="text-heading">Пластинки</h1>
      <p className="mt-4">
        С помощью этих команд ты сможешь создавать музыкальные диски с пользовательскими звуками,
        искать треки на YouTube и заменять пользовательские диски на обычные.
      </p>

      <p className="mt-4">
        <span className="text-note note-purple text-nowrap">{'disc burn <url> [name]'}</span> –
        Создай диск с пользовательским звуком по URL. Тебе нужно держать музыкальный диск в руке.
      </p>
      <p className="mt-5">
        <span className="text-note note-purple text-nowrap">/disc erase</span> – Замени
        пользовательский диск на обычный.
      </p>
      <p className="mt-5">
        <span className="text-note note-purple text-nowrap">{'/disc search <query>'}</span> – Поиск
        треков на YouTube.
      </p>

      <h2 className="text-subheading" id="поддерживаемые-источники">
        Поддерживаемые источники
      </h2>
      <p className="mt-4">Аддон может загружать аудио с:</p>

      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="font-bold">• </span>Видео с{' '}
          <span className="text-note note-blue">YouTube</span> и прямые трансляции
        </li>
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">SoundCloud</span>
        </li>
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">Bandcamp</span>
        </li>
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">Vimeo</span>
        </li>
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">Twitch</span> прямые трансляции
        </li>
        <li>
          <span className="font-bold">• </span>Прямые{' '}
          <span className="text-note note-blue">HTTP-адреса</span>
        </li>
      </ul>

      <h2 className="text-subheading" id="поддерживаемые-форматы-файлов">
        Поддерживаемые форматы файлов
      </h2>
      <p className="mt-4">Если вы хотите транслировать аудио с прямых URL-адресов</p>

      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">MP3</span>
        </li>
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">FLAC</span>
        </li>
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">WAV</span>
        </li>
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">Matroska / WebM</span> (кодеки AAC, Opus или Vorbis)
        </li>
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">MP4 / M4A</span> (кодек AAC)
        </li>
        <li>
          <span className="font-bold">• </span>
          <span className="text-note note-blue">OGG-потоки</span> (кодеки Opus, Vorbis и FLAC)
        </li>
        <li>
          <span className="font-bold">• </span>Потоки{' '}
          <span className="text-note note-blue">AAC</span>
        </li>
        <li>
          <span className="font-bold">• </span>Плейлисты для стримов{' '}
          <span className="text-note note-blue">(M3U и PLS)</span>
        </li>
      </ul>

      <p className="text-subtext">{lastUpdateDate}</p>
    </>
  )
}
