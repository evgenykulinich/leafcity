import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  title: string
  content: string
  children: React.ReactNode
}

export function Achievement({ title, content, children }: Props) {
  return (
    <Card className="w-full bordered">
      <CardHeader>
        {children}
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>{content}</CardContent>

      <CardFooter className="flex justify-between">footer</CardFooter>
    </Card>
  )
}
