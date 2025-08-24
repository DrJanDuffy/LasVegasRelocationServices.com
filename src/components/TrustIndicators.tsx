'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Star, CheckCircle, Users, Clock } from 'lucide-react'

const trustMetrics = [
  {
    icon: Users,
    number: '500+',
    label: 'Families Relocated',
    description: 'Successfully moved across the country'
  },
  {
    icon: Star,
    number: '98%',
    label: 'Satisfaction Rate',
    description: 'Based on post-move surveys'
  },
  {
    icon: Clock,
    number: '15+',
    label: 'Years Experience',
    description: 'Professional relocation expertise'
  },
  {
    icon: Award,
    number: 'A+',
    label: 'BBB Rating',
    description: 'Better Business Bureau accredited'
  }
]

const certifications = [
  'Berkshire Hathaway Services',
  'Licensed Real Estate Agent',
  'Certified Relocation Specialist',
  'Insured & Bonded',
  'Member of NAR',
  'Local Market Expert'
]

export default function TrustIndicators() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{metric.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Trusted & Certified by Industry Leaders
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </motion.div>
            ))}
          </div>

          {/* Security & Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-green-600" />
              <span className="text-sm">5-Star Rated</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
