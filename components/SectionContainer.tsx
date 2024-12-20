import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <section className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-6xl xl:px-0">{children}</section>
  )
}
