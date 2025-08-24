import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Las Vegas Relocation Services | Dr. Jan Duffy | Berkshire Hathaway',
  description: 'Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team. Expert assistance for your move to Las Vegas.',
  keywords: 'Las Vegas relocation, Dr. Jan Duffy, Berkshire Hathaway, relocation services, Las Vegas moving, corporate relocation',
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Berkshire Hathaway Services Relocation Services Team',
  publisher: 'Las Vegas Relocation Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lasvegasrelocationservices.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Las Vegas Relocation Services | Dr. Jan Duffy',
    description: 'Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team.',
    url: 'https://lasvegasrelocationservices.com',
    siteName: 'Las Vegas Relocation Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Relocation Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Relocation Services | Dr. Jan Duffy',
    description: 'Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
