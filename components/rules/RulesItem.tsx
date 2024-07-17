interface Props {
  point?: string
  text: string
  className: string
}

export const RulesItem = ({ className, point, text }: Props) => {
  return (
    <p className={className}>
      <span>{point ? `${point}. ` : '• '}</span>
      {text}
    </p>
  )
}
