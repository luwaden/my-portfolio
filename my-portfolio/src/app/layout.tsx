import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ayodeji Dennis Oluwatunla - Full-Stack Software Engineer',
  description: 'Professional portfolio of Ayodeji Dennis Oluwatunla, a Full-Stack Software Engineer specializing in Next.js, React, TypeScript, Node.js, and Express.js. Building scalable web applications and innovative solutions.',
  keywords: 'Full-Stack Developer, Next.js, React, TypeScript, Node.js, Express.js, Software Engineer',
  authors: [{ name: 'Ayodeji Dennis Oluwatunla' }],
  openGraph: {
    title: 'Ayodeji Dennis Oluwatunla - Full-Stack Software Engineer',
    description: 'Professional portfolio showcasing expertise in Next.js, React, TypeScript, and full-stack development',
    type: 'website',
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
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}