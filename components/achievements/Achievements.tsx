import { Achievement } from '@/components/achievements/Achievement'
import { achievementList } from '@/data/achievementList'

export function Achievements() {
  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="text-[26px]">Вот, почему мы тебе понравимся</h2>
      <div className="mt-8 flex flex-col gap-12 lg:mt-12 lg:flex-row lg:justify-between">
        {achievementList.map(achievement => (
          <Achievement
            title={achievement.title}
            content={achievement.content}
            color={achievement.color}
            icon={achievement.icon}
            key={achievement.title}
          />
        ))}
      </div>
    </section>
  )
}
