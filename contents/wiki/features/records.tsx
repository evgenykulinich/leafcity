import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Records() {
  const lastUpdateDate = getLastUpdateDate(updateDate)

  return (
    <>
      <h1 className="mb-8 text-xl font-bold">Пластинки</h1>
      <p className="mt-4">
        С помощью этих команд ты сможешь создавать музыкальные диски с пользовательскими звуками,
        искать треки на YouTube и заменять пользовательские диски на обычные.
      </p>

      <p className="mt-4">
        <span className="leading-height text-nowrap rounded bg-blue/20 px-2 py-1 leading-[20px]">
          {'disc burn <url> [name]'}
        </span>{' '}
        – Создай диск с пользовательским звуком по URL. Тебе нужно держать музыкальный диск в руке.
      </p>
      <p className="mt-5">
        <span className="leading-height text-nowrap rounded bg-blue/20 px-2 py-1 leading-[20px]">
          /disc erase
        </span>{' '}
        – Замени пользовательский диск на обычный.
      </p>
      <p className="mt-5">
        <span className="leading-height text-nowrap rounded bg-blue/20 px-2 py-1 leading-[20px]">
          {'/disc search <query>'}
        </span>{' '}
        – Поиск треков на YouTube.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="поддерживаемые-источники">
        Поддерживаемые источники
      </h2>
      <p className="mt-4">Аддон может загружать аудио с:</p>

      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">• </span>Видео с YouTube и прямые трансляции
        </li>
        <li>
          <span className="text-white/50">• </span>SoundCloud
        </li>
        <li>
          <span className="text-white/50">• </span>Bandcamp
        </li>
        <li>
          <span className="text-white/50">• </span>Vimeo
        </li>
        <li>
          <span className="text-white/50">• </span>Twitch прямые трансляции
        </li>
        <li>
          <span className="text-white/50">• </span>Прямые HTTP-адреса
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="поддерживаемые-форматы-файлов">
        Поддерживаемые форматы файлов
      </h2>
      <p className="mt-4">Если вы хотите транслировать аудио с прямых URL-адресов</p>

      <ul className="mb-8 mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">• </span>MP3
        </li>
        <li>
          <span className="text-white/50">• </span>FLAC
        </li>
        <li>
          <span className="text-white/50">• </span>WAV
        </li>
        <li>
          <span className="text-white/50">• </span>Matroska / WebM (кодеки AAC, Opus или Vorbis)
        </li>
        <li>
          <span className="text-white/50">• </span>MP4 / M4A (кодек AAC)
        </li>
        <li>
          <span className="text-white/50">• </span>OGG-потоки (кодеки Opus, Vorbis и FLAC)
        </li>
        <li>
          <span className="text-white/50">• </span>Потоки AAC
        </li>
        <li>
          <span className="text-white/50">• </span>Плейлисты для стримов (M3U и PLS)
        </li>
      </ul>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
