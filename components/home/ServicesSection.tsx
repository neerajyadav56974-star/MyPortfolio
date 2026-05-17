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

export default function ServicesSection() {
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
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
    </section>
  )
}