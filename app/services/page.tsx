'use client'

import { motion } from 'framer-motion'
import { Code2, Layers, Palette, Database, BarChart3, Wrench } from 'lucide-react'

const services = [
  { icon: Code2, title: 'Web Development', description: 'Custom websites with modern tech stack' },
  { icon: Layers, title: 'Full Stack Development', description: 'End-to-end application development' },
  { icon: Palette, title: 'UI/UX Design', description: 'Beautiful and intuitive user interfaces' },
  { icon: Database, title: 'API Integration', description: 'Seamless third-party integrations' },
  { icon: BarChart3, title: 'SEO Optimization', description: 'Boost your search engine rankings' },
  { icon: Wrench, title: 'Website Maintenance', description: 'Regular updates and support' },
]

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space"
          >
            My <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive solutions for your digital needs
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism rounded-2xl p-6 text-center group cursor-pointer"
            >
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}