import Image from 'next/image'

export function Preview() {
  return (
    <section className="relative">
      <Image
        className="hidden xl:block absolute right-0 top-0 xl:size-[576px]"
        src="/animal.png"
        alt="animal"
        height={1024}
        width={1024}
      />
      <h1 className="font-bold text-[42px] lg:text-[64px] leading-tight mt-6 lg:mt-20">
        Уникальный{' '}
        <span className="text-blue">
          ванильный <br />{' '}
        </span>{' '}
        сервер с <span className="text-green">ламповым</span>
        <br />
        сообществом
      </h1>
      <p className="mt-10 text-white/80 text-[18px]">
        Идеальное место для твоих идей.
        <br />
        Без привилегий, привата и лишних плагинов.
      </p>
    </section>
  )
}
