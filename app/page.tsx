'use client'

import Hero from '@/components/home/Hero'
import AboutPreview from '@/components/home/AboutPreview'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import ServicesSection from '@/components/home/ServicesSection'
import SkillsSection from '@/components/home/SkillsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTABanner from '@/components/home/CTABanner'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <ServicesSection />
      <SkillsSection />
      <TestimonialsSection />
      <CTABanner />
    </motion.div>
  )
}