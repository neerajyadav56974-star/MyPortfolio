'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Dhaniram Paints',
    role: 'Business Partner',
    content: 'Thank you bhai 🤝👍⚡ great efforts, great skillset',
    rating: 5,
  },
  {
    id: 2,
    name: 'Process Safety',
    role: 'Product Manager',
    content: 'Working with Neeraj was a pleasure. He understood our requirements perfectly and delivered beyond expectations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anshul',
    role: 'Owner',
    content: 'One of the most talented developers I have worked with. His code is clean, efficient, and well-documented.',
    rating: 5,
  },
    {
    id: 4,
    name: 'Anita Engineering Works',
    role: 'Owner',
    content: 'Neeraj is highly professional and talented. He transformed our ideas into a modern and user-friendly website with great attention to detail.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glassmorphism rounded-2xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-6 italic">
                "{testimonials[current].content}"
              </p>
              <h3 className="text-xl font-bold mb-1">{testimonials[current].name}</h3>
              <p className="text-gray-400">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full glassmorphism hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full glassmorphism hover:bg-primary/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}