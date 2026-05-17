'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Dhaniram Paints',
    description: 'This is a simple and modern business landing page developed for a paint and coatings company. The website is designed to showcase the brand professionally, highlight products and services, and provide an easy way for customers to connect with the business through a mail submission/contact form. The project focuses on clean UI, responsive design, fast performance, and smooth user experience.',
    tech: ['Next', 'Tailwind Css', 'ShadCN'],
    image: '/image/dhanirampaints.png', 
    liveLink: 'https://www.dhanirampaint.com/',
    // githubLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Process Safety Support',
    description: 'I designed and developed a professional corporate website for Process Safety Support, a company focused on industrial process safety, risk management, compliance, and safety consulting services. The website was built with a clean and modern UI to establish trust and present technical services in a simple and professional manner.',
    tech: ['Next.js', 'Tailwind', 'OpenAI'],
    image: '/image/ProcessSafety.png',
    liveLink: 'https://www.processsafetysupport.com/',
    // githubLink: 'https://github.com',
  },
  {
    id: 3,
    title: 'Anshul Wallah Travel',
    description: 'I designed and developed a modern travel booking website for Anshul Wallah Travel focused on tourism and travel experiences across Uttarakhand. The website was created with an attractive and user-friendly interface to help travelers easily explore destinations, tour packages, hotels, and travel services.',
    tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    image: '/image/anshulwallah.png',  // Placeholder image
    liveLink: 'https://www.anshulwallahtravel.in/',
    // githubLink: 'https://github.com',
  },
]

export default function FeaturedProjects() {
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
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my best works that showcase my expertise and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative glassmorphism rounded-2xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56 bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  // Fallback gradient if no image
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-gray-800" />
                )}
                
                {/* Overlay with tech icons */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 transform hover:scale-110"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-black transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}