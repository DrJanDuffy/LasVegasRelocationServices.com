'use client'

import { motion } from '@/components/motion'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Corporate Relocation', href: '/services/corporate-relocation' },
    { name: 'Residential Moving', href: '/services/residential-moving' },
    { name: 'Luxury Relocation', href: '/services/luxury-relocation' },
    { name: 'Home Finding', href: '/services/home-finding' },
    { name: 'Settling-In Services', href: '/services/settling-in' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Careers', href: '/careers' }
  ],
  resources: [
    { name: 'Moving Checklist', href: '/resources/moving-checklist' },
    { name: 'Las Vegas Guide', href: '/resources/las-vegas-guide' },
    { name: 'School Districts', href: '/resources/school-districts' },
    { name: 'Neighborhood Guide', href: '/resources/neighborhoods' },
    { name: 'Relocation Tips', href: '/resources/relocation-tips' }
  ],
  support: [
    { name: 'FAQ', href: '/support/faq' },
    { name: 'Contact Support', href: '/support/contact' },
    { name: 'Emergency Relocation', href: '/support/emergency' },
    { name: 'Client Portal', href: '/portal' }
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/lasvegasrelocationservices' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/lasvegasrelo' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/las-vegas-relocation-services' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/lasvegasrelocationservices' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Las Vegas Relocation Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Expert relocation services in Las Vegas with Dr. Jan Duffy. We make your move 
                  seamless, stress-free, and successful with personalized support and local expertise.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">(702) 707-7273</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">DrJan@LasVegasRelocationServices.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Serving Las Vegas & Surrounding Areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm">
                © 2025 Las Vegas Relocation Services. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Sitemap
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>BBB A+ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Berkshire Hathaway Services</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
