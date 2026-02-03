import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './ScrollReveal.module.css'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  })

  const directionClass = styles[direction] || ''

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${directionClass} ${isVisible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
