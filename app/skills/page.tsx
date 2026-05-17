'use client'

import { motion } from 'framer-motion'
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiLaravel, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss,
  SiPhp,
  SiPython,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiRedis,
  // SiAmazon,
  SiFigma
} from 'react-icons/si'

const skills = [
  // Frontend
  { name: 'JavaScript', category: 'Frontend', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Frontend', icon: SiTypescript, color: '#3178C6' },
  { name: 'React.js', category: 'Frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: '#06B6D4' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'PHP', category: 'Backend', icon: SiPhp, color: '#777BB4' },
  { name: 'Laravel', category: 'Backend', icon: SiLaravel, color: '#FF2D20' },
  { name: 'Python', category: 'Backend', icon: SiPython, color: '#3776AB' },
  
  // Database
  { name: 'MongoDB', category: 'Database', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', category: 'Database', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Redis', category: 'Database', icon: SiRedis, color: '#DC382D' },
  
  // Tools & Others
  { name: 'GraphQL', category: 'Tools', icon: SiGraphql, color: '#E10098' },
  { name: 'Firebase', category: 'Tools', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Git', category: 'Tools', icon: SiGit, color: '#F05032' },
  { name: 'Docker', category: 'Tools', icon: SiDocker, color: '#2496ED' },
  // { name: 'AWS', category: 'Tools', icon: SiAmazon, color: '#FF9900' },
  { name: 'Figma', category: 'Design', icon: SiFigma, color: '#F24E1E' },
]

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Design']

export default function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group bg-white dark:bg-gray-800/50 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:bg-primary/10 transition-colors duration-300">
                  <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
                <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}