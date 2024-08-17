import { AchievementItem } from '@/components/main/achievements/AchievementItem'
import { achievements } from '@/data/achievements'
import { Achievement } from '@/interfaces/main'

export function AchievementsList() {
  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="text-heading text-center lg:text-left">Вот, почему мы тебе понравимся</h2>
      <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:justify-between">
        {achievements.map((achievement: Achievement) => (
          <AchievementItem achievement={achievement} key={achievement.title} />
        ))}
      </div>
    </section>
  )
}
