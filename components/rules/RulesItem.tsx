interface RulesItemProps {
  point?: string
  text: string
  className: string
}

export const RulesItem = ({ className, point, text }: RulesItemProps) => {
  return (
    <p className={className}>
      <span>{point ? `${point}. ` : '• '}</span>
      {text}
    </p>
  )
}
