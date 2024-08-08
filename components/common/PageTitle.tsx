interface Props {
  children: React.ReactNode
}

export const PageTitle = ({ children }: Props) => {
  return (
    <h1 className="mt-8 cursor-default text-center text-xl lg:mt-12 lg:text-2xl">{children}</h1>
  )
}
