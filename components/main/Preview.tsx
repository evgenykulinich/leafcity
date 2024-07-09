import Image from 'next/image'

export function Preview() {
  return (
    <section className="relative">
      <Image
        className="absolute right-0 top-[-60px] hidden cursor-pointer transition hover:scale-105 active:scale-95 xl:block xl:size-[576px]"
        src="/animal.png"
        alt="animal"
        height={1024}
        width={1024}
      />
      <h1 className="mt-4 text-[2.75rem] font-bold leading-tight sm:text-5xl lg:mt-24 lg:text-6xl">
        Уникальный{' '}
        <span className="text-blue">
          ванильный <br />{' '}
        </span>{' '}
        сервер с <span className="text-green">ламповым</span>
        <br />
        сообществом
      </h1>
      <p className="mt-8 text-[18px] text-white/80 lg:mt-12">
        Идеальное место для твоих идей.
        <br />
        Без привилегий, привата и лишних плагинов.
      </p>
    </section>
  )
}
