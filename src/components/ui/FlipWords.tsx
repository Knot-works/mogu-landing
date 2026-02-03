import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FlipWordsProps {
  words: string[]
  duration?: number
  className?: string
}

export function FlipWords({ words, duration = 3000, className = '' }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextWord = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length)
  }, [words.length])

  useEffect(() => {
    const interval = setInterval(nextWord, duration)
    return () => clearInterval(interval)
  }, [nextWord, duration])

  return (
    <span className={className} style={{ display: 'inline-block', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -10, rotateX: 90 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ display: 'inline-block' }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
