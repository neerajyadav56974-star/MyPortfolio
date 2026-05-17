'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Code2, 
  MapPin, 
  Mail, 
  Phone, 
  Sparkles,
  Users,
  Rocket,
  CheckCircle,
  Clock,
  Globe,
  Star
} from 'lucide-react'

export default function AboutPage() {
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
            About <span className="text-primary">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Freelance Full Stack Developer helping businesses grow online
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32">
              <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-yellow-500 p-0.5 mb-4">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <Code2 className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold">Neeraj Yadav</h2>
                  <p className="text-primary text-sm mt-1">Freelance Full Stack Developer</p>
                  <div className="flex justify-center gap-1 mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-gray-600 dark:text-gray-400">+91 902 754 2717</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-gray-600 dark:text-gray-400">neerajyadav56974@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-gray-600 dark:text-gray-400">Dehradun, India (Remote)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-gray-600 dark:text-gray-400">Available for work</span>
                  </div>
                </div>

                <div className="flex gap-3 justify-center">
                  <a href="https://www.linkedin.com/in/neeraj-yadav-017a571b4/" target='_blank' className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.206 0 22.225 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Who Am I - Freelancer Focus */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Who Am I?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                I'm <span className="text-primary font-semibold">Neeraj Yadav</span>, a Freelance Full Stack Developer 
                based in Dehradun, India. I help <span className="text-primary font-semibold">businesses and startups</span> 
                bring their ideas to life through modern web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                As a freelancer, I specialize in end-to-end web development - from concept to deployment. 
                I work closely with my clients to understand their needs and deliver solutions that 
                <span className="text-primary font-semibold"> drive real business results</span>.
              </p>
            </div>

            {/* What I Offer as a Freelancer */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Rocket className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">What I Offer</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Custom Web Development</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tailored solutions for your business needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Full Stack Expertise</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Frontend + Backend + Database</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Responsive Design</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mobile-first, SEO optimized websites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Ongoing Support</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Maintenance and updates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Hire Me */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Why Hire Me?</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm">Communication</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                  <div className="text-2xl font-bold text-primary mb-1">On-Time</div>
                  <div className="text-sm">Delivery Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Tech Stack</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Laravel', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Tailwind CSS', 'TypeScript', 'Figma'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Work Process */}
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">How I Work</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <p className="text-sm">Discovery Call</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <p className="text-sm">Planning & Design</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <p className="text-sm">Development</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <p className="text-sm">Launch & Support</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-black font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Let's Work Together
                <Rocket className="w-4 h-4" />
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Available for freelance projects worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}