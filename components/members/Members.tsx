import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

export const Members = () => {
  return (
    <section className="mt-16 overflow-hidden lg:mt-24">
      <h2 className="text-[26px]">Команда проекта</h2>
      {/*<Carousel className="mt-10">*/}
      {/*  <CarouselContent className="lg:hidden">*/}
      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/list_tw.png"*/}
      {/*        alt="list_tw"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Владелец сервера</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/dashka17.png"*/}
      {/*        alt="dashka17"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Админ</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/ouiking.png"*/}
      {/*        alt="ouiking"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Админ</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/ratkea.png"*/}
      {/*        alt="list_tw"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Разработчик</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/nokarena.png"*/}
      {/*        alt="nokarena"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Модератор</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/kristopher.png"*/}
      {/*        alt="kristopher"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Креативный менеджер</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/muzoku.png"*/}
      {/*        alt="muzoku"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Менеджер Ада</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/drained.png"*/}
      {/*        alt="drained"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Менеджер Энда</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/mireraqq.png"*/}
      {/*        alt="mireraqq"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Менеджер Ивентов</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/crucesaureae.png"*/}
      {/*        alt="crucesaureae"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Хелпер</p>*/}
      {/*    </CarouselItem>*/}

      {/*    <CarouselItem className="flex basis-1/6 select-none flex-col items-center md:basis-1/4 lg:basis-1/5">*/}
      {/*      <Image*/}
      {/*        className="size-[100px] lg:size-[120px] rounded-[8px]"*/}
      {/*        src="/members/demi.png"*/}
      {/*        alt="demi"*/}
      {/*        height={1000}*/}
      {/*        width={1000}*/}
      {/*      />*/}
      {/*      <p className="mt-4 text-center text-sm lg:text-md">Хелпер</p>*/}
      {/*    </CarouselItem>*/}
      {/*  </CarouselContent>*/}
      {/*  <CarouselPrevious />*/}
      {/*  <CarouselNext />*/}
      {/*</Carousel>*/}

      <div className="members-borders flex">
        <div className="hover:pause mt-4 flex animate-loop-scroll whitespace-nowrap pb-10 lg:mt-10">
          <div className="member-list_tw mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-green lg:hidden">list_tw</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/list_tw.png"
              alt="list_tw"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-dashka17 mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-mango lg:hidden">Dashka17</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/dashka17.png"
              alt="dashka17"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-ouiking hover:pause mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-blue lg:hidden">OuiKing</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/ouiking.png"
              alt="ouiking"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-ratkea mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-purple lg:hidden">ratkea</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/ratkea.png"
              alt="ratkea"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-nokarena mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-green lg:hidden">Nokarena</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/nokarena.png"
              alt="nokarena"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-crucesaureae mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-mango lg:hidden">crucesaureae</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/crucesaureae.png"
              alt="crucesaureae"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-demi_0 mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-blue lg:hidden">demi_0</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/demi.png"
              alt="demi"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-mireraqq mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-purple lg:hidden">Mireraqq</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/mireraqq.png"
              alt="mireraqq"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-kristopher mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-green lg:hidden">_Kristopher_</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/kristopher.png"
              alt="kristopher"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-muz0ku mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-mango lg:hidden">muz0ku</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/muzoku.png"
              alt="kristopher"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-drainedgod mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-blue lg:hidden">drainedgod</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/drained.png"
              alt="drainedgod"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
        </div>

        <div className="hover:pause mt-4 flex animate-loop-scroll whitespace-nowrap pb-10 lg:mt-10">
          <div className="member-list_tw mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-green lg:hidden">list_tw</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/list_tw.png"
              alt="list_tw"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-dashka17 mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-mango lg:hidden">Dashka17</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/dashka17.png"
              alt="dashka17"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-ouiking hover:pause mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-blue lg:hidden">OuiKing</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/ouiking.png"
              alt="ouiking"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-ratkea mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-purple lg:hidden">ratkea</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/ratkea.png"
              alt="ratkea"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-nokarena mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-green lg:hidden">Nokarena</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/nokarena.png"
              alt="nokarena"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-crucesaureae mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-mango lg:hidden">crucesaureae</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/crucesaureae.png"
              alt="crucesaureae"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-demi_0 mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-blue lg:hidden">demi_0</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/demi.png"
              alt="demi"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-mireraqq mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-purple lg:hidden">Mireraqq</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/mireraqq.png"
              alt="mireraqq"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-kristopher mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-green lg:hidden">_Kristopher_</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/kristopher.png"
              alt="kristopher"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-muz0ku mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-mango lg:hidden">muz0ku</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/muzoku.png"
              alt="kristopher"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
          <div className="member-drainedgod mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px]">
            <p className="text-blue lg:hidden">drainedgod</p>
            <Image
              className="mt-2 w-full rounded-[8px]"
              src="/members/drained.png"
              alt="drainedgod"
              height={1000}
              width={1000}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
