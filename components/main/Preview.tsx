import Image from 'next/image'

export function Preview() {
  return (
    <div className="relative">
      <Image
        className="absolute right-0 top-[-60px] hidden cursor-pointer transition hover:scale-105 active:scale-95 xl:block xl:size-[576px]"
        src="/animal.png"
        alt="animal"
        height={1024}
        width={1024}
        priority={true}
      />
      <h1 className="mt-6 cursor-default text-[2.75rem] font-bold sm:text-5xl lg:mt-24 lg:text-[60px] lg:leading-[1.25]">
        Уникальный{' '}
        <span className="hover-underline underline-green text-green after:bottom-0">ванильный</span>
        <br />
        сервер с{' '}
        <span className="hover-underline underline-blue text-blue after:bottom-0">ламповым</span>
        <br />
        сообществом
      </h1>
      <p className="mt-8 text-[18px] text-white/80 lg:mt-12">
        Идеальное место для твоих идей.
        <br />
        Без привилегий, привата и лишних плагинов.
      </p>
    </div>
  )
}
