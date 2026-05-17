'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/api/placeholder/600/400',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'AI-powered content generation platform',
    tech: ['Next.js', 'OpenAI', 'Supabase'],
    image: '/api/placeholder/600/400',
  },
  {
    id: 3,
    title: 'Social Analytics Dashboard',
    description: 'Real-time social media analytics',
    tech: ['React', 'D3.js', 'Express'],
    image: '/api/placeholder/600/400',
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'Collaborative task management platform',
    tech: ['Vue.js', 'Firebase', 'Tailwind'],
    image: '/api/placeholder/600/400',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern developer portfolio',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    image: '/api/placeholder/600/400',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'Full-featured blogging platform',
    tech: ['Laravel', 'MySQL', 'Vue.js'],
    image: '/api/placeholder/600/400',
  },
]

export default function ProjectsPage() {
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
            My <span className="text-primary">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Here are some of my recent works
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glassmorphism rounded-2xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-gray-800" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="text-primary hover:text-primary/80 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}