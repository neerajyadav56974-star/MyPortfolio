'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-space">
            Let's Build Something <span className="text-primary">Amazing</span> Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? Let's collaborate and create something extraordinary.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}