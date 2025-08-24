'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Star, Users, Clock, Shield, Building, Heart } from 'lucide-react'

const highlights = [
  '15+ years of Las Vegas real estate expertise',
  'Berkshire Hathaway Services Relocation Team member',
  'Certified relocation specialist with proven track record',
  'Personalized approach for every client family',
  'Local market knowledge and community connections',
  'Ongoing support throughout your relocation journey'
]

const stats = [
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

const values = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every relocation is unique. We treat your move as if it were our own family\'s move.'
  },
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'Built on 15+ years of trust, transparency, and consistent delivery of promises.'
  },
  {
    icon: Building,
    title: 'Local Expertise',
    description: 'Deep knowledge of Las Vegas neighborhoods, schools, and real estate markets.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Committed to exceeding expectations in every aspect of your relocation.'
  }
]

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dr. Jan Duffy</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dr. Jan Duffy leads our Las Vegas relocation services team with over 15 years of
              experience in helping families and businesses successfully transition to the vibrant
              Las Vegas community.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As part of the prestigious Berkshire Hathaway Services Relocation Services Team, we
              bring unmatched expertise, reliability, and local market knowledge to every relocation
              project. Our commitment to excellence ensures that your move to Las Vegas is not just
              successful, but truly exceptional.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={`highlight-${highlight}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <button type="button" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Learn More About Dr. Duffy
            </button>
          </motion.div>

          {/* Right Column - Stats & Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Company Values */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <value.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{value.title}</h5>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Berkshire Hathaway Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Berkshire Hathaway Services</h4>
              <p className="text-blue-100 text-sm">Relocation Services Team Member</p>
              <p className="text-xs text-blue-200 font-medium mt-2">
                Quality • Reliability • Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
