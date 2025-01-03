"use client"

import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

// Luxury serif font for headings
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

// Elegant sans-serif for body text
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

// Metadata configuration (moved inside client component)
const metadata = {
  title: 'ROYAL CUTS | Premium Gentleman\'s Grooming Sanctuary',
  description: 'Experience unparalleled luxury at ROYAL CUTS, where traditional craftsmanship meets modern sophistication. Our master stylists provide bespoke grooming services for the distinguished gentleman.',
  keywords: [
    'luxury grooming', 
    'gentleman\'s salon', 
    'premium haircut', 
    'barbershop', 
    'men\'s styling'
  ],
  themeColor: '#1a1a1a'
}

// Client-side cursor tracking component
function CursorTracker() {
  return (
    <>
      <div 
        className="fixed inset-0 z-30 pointer-events-none opacity-70"
        style={{
          background: 'radial-gradient(600px at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(251,191,36,0.015), transparent 40%)',
        }}
      />
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('mousemove', (e) => {
            document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
            document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
          });
        `
      }} />
    </>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="theme-color" content={metadata.themeColor} />
      </head>
      <body className="bg-black text-white">
        <div className="container mx-auto px-4 relative">
          {/* Main content area */}
          <div className="min-h-screen flex flex-col">
            {children}
          </div>

          {/* Cursor Effect */}
          <CursorTracker />

          {/* Analytics */}
          <Analytics />
        </div>

        {/* Global Styles */}
        <style jsx global>{`
          :root {
            --font-playfair: ${playfair.style.fontFamily};
            --font-montserrat: ${montserrat.style.fontFamily};
          }
          
          body {
            font-family: var(--font-montserrat);
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-playfair);
          }
        `}</style>
      </body>
    </html>
  )
}