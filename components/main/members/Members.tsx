'use client'

import { MembersItem } from '@/components/main/members/MembersItem'
import MembersList from '@/components/main/members/MembersList'
import { members } from '@/data/members'
import { Member } from '@/interfaces/main'

export const Members = () => {
  return (
    <section className="mt-16 overflow-hidden lg:mt-24">
      <h2 className="text-heading text-center lg:text-left">Команда проекта</h2>
      <div className="members-borders flex">
        <MembersList>
          <div
            className="mt-8 flex animate-loop-scroll whitespace-nowrap pb-10 lg:mt-12"
            id="members"
          >
            {members.map((member: Member) => (
              <MembersItem member={member} key={member.nickname} />
            ))}
          </div>
        </MembersList>
      </div>
    </section>
  )
}
