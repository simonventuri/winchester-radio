import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { GlobalPlayer } from '@/components/GlobalPlayer'

export const metadata: Metadata = {
  title: 'Winchester Radio',
  description: 'Radio for Winchester, from Winchester, by Winchester. 94.7 FM • DAB • Online.',
  metadataBase: new URL('https://winchester.radio'),
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
    shortcut: '/favicon-simple.png',
  },
  openGraph: {
    title: 'Winchester Radio',
    description: 'Community-powered radio for Winchester & nearby villages.',
    url: 'https://winchester.radio',
    siteName: 'Winchester Radio',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-black antialiased">
        <Header />
        {children}
        <GlobalPlayer />
      </body>
    </html>
  )
}
