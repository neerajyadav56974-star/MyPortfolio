'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  { id: 1, title: 'Project 1', category: 'Web Dev', image: '/images/project1.jpg' },
  { id: 2, title: 'Project 2', category: 'Mobile App', image: '/images/project2.jpg' },
  { id: 3, title: 'Project 3', category: 'UI/UX', image: '/images/project3.jpg' },
]

export default function GalleryPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space">
            My <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my creative work and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}