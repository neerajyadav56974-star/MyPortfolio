'use client'

import { motion } from 'framer-motion'
import { Download, Briefcase, GraduationCap, Code2, Award } from 'lucide-react'

export default function ResumePage() {
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
            My <span className="text-primary">Resume</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Download my resume to know more about my professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary to-yellow-500 p-0.5 mb-4">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <Code2 className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-bold">Neeraj Yadav</h2>
              <p className="text-primary">Full Stack Developer</p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Download my complete resume to see my work experience, education, skills, and achievements in detail.
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-black font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </a>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500">
                Or contact me directly for a detailed CV
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}