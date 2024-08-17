import { RulesItemProps } from '@/interfaces/rules'

export const RulesItem = ({ className, point, text }: RulesItemProps) => {
  return (
    <p className={className}>
      <span>{point ? `${point}. ` : '• '}</span>
      {text}
    </p>
  )
}
