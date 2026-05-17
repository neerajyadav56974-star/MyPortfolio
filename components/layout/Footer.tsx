'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { Icon: Github, href: 'https://github.com', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { Icon: Mail, href: 'mailto:neeraj@example.com', label: 'Email' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black/50 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-space">
                <span className="text-primary">Neeraj</span>
                <span className="text-white">.dev</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Building modern, fast, and scalable web experiences that captivate and perform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Web Development</li>
              <li className="text-gray-400 text-sm">Full Stack Development</li>
              <li className="text-gray-400 text-sm">UI/UX Design</li>
              <li className="text-gray-400 text-sm">API Integration</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-primary/20 transition-colors group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Neeraj Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}