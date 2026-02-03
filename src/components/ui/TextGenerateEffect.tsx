import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TextGenerateEffectProps {
  words: string
  className?: string
  duration?: number
  filter?: boolean
}

export function TextGenerateEffect({
  words,
  className = '',
  duration = 0.5,
  filter = true,
}: TextGenerateEffectProps) {
  const [isVisible, setIsVisible] = useState(false)
  const wordsArray = words.split(' ')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: filter ? 'blur(8px)' : 'none',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: duration,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      style={{ display: 'inline' }}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          variants={childVariants}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
