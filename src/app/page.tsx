import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Las Vegas Relocation Services | Dr. Jan Duffy | Berkshire Hathaway',
  description: 'Professional relocation services in Las Vegas with Dr. Jan Duffy and the Berkshire Hathaway Services Relocation Services Team. Expert assistance for your move to Las Vegas.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <CTA />
    </main>
  )
}
