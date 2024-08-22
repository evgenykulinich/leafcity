import { UsefulItem } from '@/components/common/usefulLinks/UsefulItem'
import { UsefulLinksProps } from '@/interfaces/common'

export const UsefulLinks = ({ linksList }: UsefulLinksProps) => {
  return (
    <section className="mt-16 lg:mt-24">
      <h2 className="text-center text-2xl">Полезные ссылки</h2>
      <div className="mt-8 flex flex-col gap-8 lg:mt-12 lg:flex-row lg:justify-between">
        {linksList.map(link => (
          <UsefulItem
            title={link.title}
            description={link.description}
            color={link.color}
            href={link.href}
            key={link.title}
          >
            {link.children}
          </UsefulItem>
        ))}
      </div>
    </section>
  )
}
