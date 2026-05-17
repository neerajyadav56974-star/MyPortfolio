'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, Award, Briefcase, Users, Code2, Sparkles, Star, CheckCircle2 } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '3+', label: 'Years Experience', description: 'Industry expertise' },
  { icon: Award, value: '5+', label: 'Projects Completed', description: 'Successful deliveries' },
  { icon: Users, value: '10+', label: 'Happy Clients', description: 'Worldwide' },
]

const expertise = [
  { 
    name: 'Frontend Development', 
    icon: Code2,
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  { 
    name: 'Backend Development', 
    technologies: ['Node.js', 'PHP/Laravel', 'Python', 'REST APIs']
  },
  { 
    name: 'UI/UX Design', 
    technologies: ['Figma', 'Adobe XD', 'Responsive Design', 'Prototyping']
  },
]

export default function AboutPreview() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center lg:text-left"
          >
            {/* Badge - Center on mobile */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Who Am I?</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-space">
              About <span className="text-primary">Me</span>
            </h2>
            
            {/* Justified text for both sides */}
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-4 leading-relaxed text-justify">
              I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with over 3 years of experience in building 
              modern web applications that drive business growth.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 leading-relaxed text-justify">
              I specialize in creating <span className="text-primary font-semibold">scalable, performant</span>, and 
              user-centric solutions using cutting-edge technologies. My approach combines technical excellence 
              with creative problem-solving to deliver exceptional results.
            </p>
            
            {/* Stats with Premium Cards - Responsive grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="relative text-center p-3 md:p-4 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 group-hover:border-primary/50 transition-all duration-300">
                    <div className="inline-flex p-1.5 md:p-2 rounded-full bg-primary/10 mb-1 md:mb-2">
                      <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Button - Center on mobile */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-primary text-black font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden text-sm md:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Expertise Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Decorative elements - hidden on mobile */}
              <div className="hidden lg:block absolute -top-5 -right-5 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="hidden lg:block absolute -bottom-5 -left-5 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              {/* Main Card */}
              <div className="relative rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-4 md:p-6 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">Core Expertise</span>
                  </div>
                  <div className="flex gap-0.5 md:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>

                {/* Expertise Areas */}
                <div className="space-y-4 md:space-y-6">
                  {expertise.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2 md:space-y-3"
                    >
                      <h3 className="text-sm md:text-md font-semibold text-gray-900 dark:text-white text-center lg:text-left">
                        {area.name}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center lg:justify-start">
                        {area.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-flex items-center gap-1 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-[10px] md:text-xs text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-6 md:mt-8 p-3 md:p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed text-justify">
                    "I believe in writing clean, maintainable code that solves real business problems. 
                    My goal is to deliver solutions that not only work but also provide exceptional user experiences."
                  </p>
                  <div className="flex items-center gap-2 mt-3 justify-center lg:justify-start">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Code2 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs font-semibold text-gray-900 dark:text-white">Neeraj Yadav</p>
                      <p className="text-[8px] md:text-xs text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}