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
        <span className="style-point text-nowrap">{'disc burn <url> [name]'}</span> – Создай диск с
        пользовательским звуком по URL. Тебе нужно держать музыкальный диск в руке.
      </p>
      <p className="mt-5">
        <span className="style-point text-nowrap">/disc erase</span> – Замени пользовательский диск
        на обычный.
      </p>
      <p className="mt-5">
        <span className="style-point text-nowrap">{'/disc search <query>'}</span> – Поиск треков на
        YouTube.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="поддерживаемые-источники">
        Поддерживаемые источники
      </h2>
      <p className="mt-4">Аддон может загружать аудио с:</p>

      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">• </span>Видео с{' '}
          <span className="style-info">YouTube</span> и прямые трансляции
        </li>
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">SoundCloud</span>
        </li>
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">Bandcamp</span>
        </li>
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">Vimeo</span>
        </li>
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">Twitch</span> прямые трансляции
        </li>
        <li>
          <span className="text-white/50">• </span>Прямые{' '}
          <span className="style-info">HTTP-адреса</span>
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="поддерживаемые-форматы-файлов">
        Поддерживаемые форматы файлов
      </h2>
      <p className="mt-4">Если вы хотите транслировать аудио с прямых URL-адресов</p>

      <ul className="mb-8 mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">MP3</span>
        </li>
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">FLAC</span>
        </li>
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">WAV</span>
        </li>
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">Matroska / WebM</span> (кодеки AAC, Opus или Vorbis)
        </li>
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">MP4 / M4A</span> (кодек AAC)
        </li>
        <li>
          <span className="text-white/50">• </span>
          <span className="style-info">OGG-потоки</span> (кодеки Opus, Vorbis и FLAC)
        </li>
        <li>
          <span className="text-white/50">• </span>Потоки <span className="style-info">AAC</span>
        </li>
        <li>
          <span className="text-white/50">• </span>Плейлисты для стримов{' '}
          <span className="style-info">(M3U и PLS)</span>
        </li>
      </ul>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
