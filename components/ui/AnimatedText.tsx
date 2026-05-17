'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  tag?: keyof JSX.IntrinsicElements
  once?: boolean
}

export default function AnimatedText({ 
  text, 
  className = '', 
  tag: Tag = 'div',
  once = true 
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.5 })

  const words = text.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      <Tag className="flex flex-wrap gap-2 justify-center">
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}