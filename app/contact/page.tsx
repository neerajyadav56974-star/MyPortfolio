'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, Phone, Mail, MapPin, Clock, MessageCircle, 
  Github, Linkedin, Twitter, Instagram, Globe, 
  CheckCircle, AlertCircle, User, Calendar 
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 902 754 2717', href: 'tel:+9190275 42717', color: 'bg-green-500/10' },
    { icon: Mail, label: 'Email', value: 'neerajyadav56974@gmail.com', href: 'mailto:neerajyadav56974@gmail.com', color: 'bg-blue-500/10' },
    { icon: MapPin, label: 'Location', value: 'Dehradun, India', href: '#', color: 'bg-red-500/10' },
    { icon: Clock, label: 'Working Hours', value: 'Mon-Fri: 9AM - 7PM IST', href: '#', color: 'bg-purple-500/10' },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: '#333' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0077b5' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: '#1da1f2' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', color: '#e4405f' },
  ]

  const faqs = [
    { q: 'What is your response time?', a: 'I usually respond within 24 hours on weekdays.' },
    { q: 'Do you offer freelance services?', a: "Yes, I'm available for freelance projects worldwide." },
    { q: 'What payment methods do you accept?', a: 'I accept PayPal, Bank Transfer, and UPI.' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-28 md:pt-32 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6"
          >
            <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-primary text-xs md:text-sm font-medium">Let's Connect</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 font-space"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4"
          >
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Contact Form - Sticky on desktop */}
          <div className="lg:sticky lg:top-32 lg:w-3/5 xl:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <div className="bg-white dark:bg-gray-800/50 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                  <Send className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  Send me a message
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 md:py-12"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-3 md:mb-4">
                      <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 flex items-center gap-1.5 md:gap-2">
                          <User className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-primary focus:outline-none transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 flex items-center gap-1.5 md:gap-2">
                          <Mail className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-primary focus:outline-none transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 flex items-center gap-1.5 md:gap-2">
                          <Phone className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 12345 67890"
                          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-primary focus:outline-none transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 flex items-center gap-1.5 md:gap-2">
                          <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                          Subject
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Project Inquiry"
                          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-primary focus:outline-none transition-all"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 flex items-center gap-1.5 md:gap-2">
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell me about your project..."
                        className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 focus:border-primary focus:outline-none transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 md:px-8 py-2.5 md:py-3 bg-primary text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-3 h-3 md:w-4 md:h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:w-2/5 xl:w-1/3 space-y-4 md:space-y-6">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800/50 rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group"
                  >
                    <div className={`p-2 md:p-3 rounded-xl ${item.color}`}>
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] md:text-xs text-gray-500">{item.label}</p>
                      <p className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors break-all">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl md:rounded-2xl p-5 md:p-6 border border-green-500/20"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-xl bg-green-500/20">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm md:text-base font-semibold">Quick Response on WhatsApp</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Get faster replies for urgent inquiries</p>
                </div>
                <a
                  href="https://wa.me/919027542717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all text-xs md:text-sm font-medium whitespace-nowrap"
                >
                  Chat Now
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-gray-800/50 rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Connect With Me
              </h3>
              <div className="flex gap-2 md:gap-3 flex-wrap">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:scale-110 transition-all duration-300"
                    style={{ color: social.color }}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-gray-800/50 rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Quick Answers
              </h3>
              <div className="space-y-3 md:space-y-4">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group">
                    <summary className="cursor-pointer text-xs md:text-sm font-medium p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all">
                      {faq.q}
                    </summary>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2 pl-3 md:pl-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <div className="text-center p-3 md:p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  Available for freelance work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}