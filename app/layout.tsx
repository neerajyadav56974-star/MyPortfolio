import type { Metadata } from 'next'
import { Inter, Sora, Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider' // Use custom provider
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/layout/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})
const sora = Sora({ 
  subsets: ['latin'], 
  variable: '--font-sora',
  display: 'swap'
})
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Neeraj Yadav | Full Stack Developer & Freelance Web Developer',
  description: 'Premium full stack developer specializing in modern web experiences.',
  keywords: 'Full Stack Developer, Web Developer, Freelance Developer, React, Next.js, Laravel',
  authors: [{ name: 'Neeraj Yadav' }],
  openGraph: {
    title: 'Neeraj Yadav | Full Stack Developer',
    description: 'Building modern, fast, and scalable web experiences',
    url: 'https://neeraj.dev',
    siteName: 'Neeraj Yadav Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neeraj Yadav | Full Stack Developer',
    description: 'Building modern, fast, and scalable web experiences',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} ${poppins.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="relative overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}