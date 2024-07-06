import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  title: string
  content: string
  className: string
  children: React.ReactNode
}

export function Achievement({ title, content, className, children }: Props) {
  return (
    <Card className={className}>
      <CardHeader className="mb-2">
        {children}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  )
}
