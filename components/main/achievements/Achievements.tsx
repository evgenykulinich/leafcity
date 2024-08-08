import { Achievement } from '@/components/main/achievements/Achievement'
import { achievements } from '@/data/achievements'

export function Achievements() {
  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="text-center text-[26px] lg:text-left">Вот, почему мы тебе понравимся</h2>
      <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:justify-between">
        {achievements.map(achievement => (
          <Achievement
            title={achievement.title}
            content={achievement.content}
            color={achievement.color}
            icon={achievement.icon}
            className={achievement.className}
            key={achievement.title}
          />
        ))}
      </div>
    </section>
  )
}
