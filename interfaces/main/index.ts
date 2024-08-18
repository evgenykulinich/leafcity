export interface Achievement {
  title: string
  content: string
  color: string
  icon: string
  className: string
}

export interface AchievementItemProps {
  achievement: Achievement
}

export interface Member {
  nickname: string
  image: string
  styles: string
}

export interface MembersListProps {
  children: React.ReactNode
}

export interface MembersItemProps {
  member: Member
}