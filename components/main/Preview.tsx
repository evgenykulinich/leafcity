import { FadeInImage } from '@/components/common/FadeInImage'

export function Preview() {
  return (
    <section className="relative">
      <FadeInImage
        className="absolute right-0 top-[-60px] hidden cursor-pointer hover:scale-105 active:scale-95 xl:block xl:size-[576px]"
        style={{ transitionDuration: '175ms' }}
        src="/animal.png"
        alt="animal"
        height={1024}
        width={1024}
      />
      <h1 className="mt-8 cursor-default text-balance text-center text-[2.75rem] font-bold leading-[1.2] sm:text-5xl lg:mt-24 lg:text-left lg:text-[60px] lg:leading-[1.25]">
        Уникальный{' '}
        <span className="hover-underline underline-green text-green after:bottom-0">ванильный</span>
        <br />
        сервер с{' '}
        <span className="hover-underline underline-blue text-blue after:bottom-0">ламповым</span>
        <br />
        сообществом
      </h1>
      <p className="mt-8 text-balance text-center text-[18px] text-white/80 lg:mt-12 lg:text-left">
        Идеальное место для твоих идей.
        <br />
        Без привилегий, привата и лишних плагинов
      </p>
    </section>
  )
}
