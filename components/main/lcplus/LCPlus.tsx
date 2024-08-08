'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMedia } from 'react-use'

import { routes } from '@/constants/routes'
import { lcplus } from '@/data/lcplus'

export const LCPlus = () => {
  const isMobile = useMedia('(max-width: 1024px)', false)

  return (
    <>
      {!isMobile && (
        <section className="mt-24">
          <h2 className="text-[26px] lg:text-end">Будь ярким на сервере</h2>
          <div className="mt-12 flex w-full items-center justify-between gap-12 rounded-2xl">
            <div className="mx-auto flex flex-col items-center justify-center gap-8 px-8">
              <div className="flex items-center gap-2">
                <p className="cursor-default text-center text-[38px] font-bold">Подписка</p>
                <Image
                  className="mx-auto w-[70px]"
                  src="/logo/lcplus.png"
                  alt={'LC+'}
                  width={500}
                  height={500}
                />
              </div>
              <Link
                className="lcplus-button text-nowrap rounded-2xl bg-green px-24 py-6 font-bold transition hover:bg-green/70"
                href={routes.shop}
              >
                Хочу такую!
              </Link>
            </div>
            <div className="flex cursor-default flex-col items-start justify-center gap-4 self-stretch rounded-2xl border-2 border-white/20 px-8 py-8 transition hover:border-purple hover:bg-purple/20">
              {lcplus.map(item => (
                <div className="flex items-center justify-start gap-4" key={item.title}>
                  <Image
                    className="w-[40px] self-start"
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isMobile && (
        <section className="mt-24">
          <h2 className="text-center text-[26px]">Будь ярким на сервере</h2>
          <div className="mt-8 flex w-full flex-col items-center gap-8 rounded-2xl">
            <div className="mx-auto flex flex-col px-8">
              <div className="flex items-center gap-2">
                <p className="text-[28px] font-bold">Подписка</p>
                <Image
                  className="mx-auto w-[54px]"
                  src="/logo/lcplus.png"
                  alt={'LC+'}
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex cursor-default flex-col items-start justify-center gap-4 self-stretch rounded-2xl border-2 border-white/20 px-8 py-8 transition hover:border-purple hover:bg-purple/20">
              {lcplus.map(item => (
                <div className="flex flex-col gap-2" key={item.title}>
                  <div className="flex">
                    <Image
                      className="mr-2 h-[30px] w-auto"
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                    />
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <Link
              className="w-full text-nowrap rounded-2xl bg-green py-6 text-center font-bold transition hover:bg-green/70"
              href={routes.shop}
            >
              Хочу такую!
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
