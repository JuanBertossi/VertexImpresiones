import type { ElementType, ReactNode } from 'react'
import { useReveal } from '@/shared/hooks/useReveal'

interface RevealProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

export function Reveal({ as: Tag = 'div', className, children }: RevealProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <Tag ref={ref} className={className ? `reveal ${className}` : 'reveal'}>
      {children}
    </Tag>
  )
}
