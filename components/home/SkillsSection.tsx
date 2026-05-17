'use client'

import { motion } from 'framer-motion'
import { 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiLaravel, 
  SiPython, 
  SiMongodb, 
  SiMysql, 
  SiTailwindcss, 
  SiFigma, 
  SiGit 
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', category: 'Frontend', icon: SiJavascript, color: '#F7DF1E', description: 'ES6+, Async/Await, DOM Manipulation' },
  { name: 'React.js', category: 'Frontend', icon: SiReact, color: '#61DAFB', description: 'Hooks, Context API, Redux' },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs, color: '#FFFFFF', description: 'SSR, SSG, API Routes' },
  { name: 'TypeScript', category: 'Frontend', icon: SiTypescript, color: '#3178C6', description: 'Types, Interfaces, Generics' },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#339933', description: 'Express, REST APIs, JWT' },
  { name: 'PHP/Laravel', category: 'Backend', icon: SiLaravel, color: '#FF2D20', description: 'MVC, Eloquent, Artisan' },
  { name: 'Python', category: 'Backend', icon: SiPython, color: '#3776AB', description: 'Django, Flask, Automation' },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb, color: '#47A248', description: 'NoSQL, Aggregation, Indexing' },
  { name: 'MySQL', category: 'Database', icon: SiMysql, color: '#4479A1', description: 'Complex Queries, Optimization' },
  { name: 'Tailwind CSS', category: 'Styling', icon: SiTailwindcss, color: '#06B6D4', description: 'Responsive, Custom Config' },
  { name: 'Figma', category: 'Design', icon: SiFigma, color: '#F24E1E', description: 'UI/UX, Prototyping, Components' },
  { name: 'Git', category: 'Tools', icon: SiGit, color: '#F05032', description: 'Version Control, CI/CD, Collaboration' },
]

export default function SkillsSection() {
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
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I specialize in to deliver premium solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative p-3 rounded-xl bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300">
                    <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {skill.description}
                  </p>
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >

        </motion.div>
      </div>
    </section>
  )
}