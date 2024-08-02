import Image from 'next/image'
import { clsx } from 'clsx'

import MembersList from '@/components/members/MembersList'
import { members } from '@/data/members'

export const Members = () => {
  return (
    <section className="mt-16 overflow-hidden lg:mt-24">
      <h2 className="text-[26px]">Команда проекта</h2>
      <div className="members-borders flex">
        <MembersList>
          <div
            className="mt-8 flex animate-loop-scroll whitespace-nowrap pb-10 lg:mt-12"
            id="members"
          >
            {members.map(member => (
              <div
                className={clsx(
                  `member mx-5 flex size-[100px] flex-1 flex-col items-center lg:mx-10 lg:size-[120px] ${member.styles}`
                )}
                key={member.nickname}
              >
                <p className="lg:hidden">{member.nickname}</p>
                <div className="shy">
                  <Image
                    className="mt-2 w-full cursor-pointer rounded-[8px] transition lg:active:scale-[.95]"
                    src={member.image}
                    alt={member.nickname}
                    height={500}
                    width={500}
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>
        </MembersList>
      </div>
    </section>
  )
}
