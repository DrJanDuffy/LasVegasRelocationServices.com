'use client'

import { motion } from '@/components/motion'
import { CheckCircle, Award, Users, MapPin, Shield, Star } from 'lucide-react'

const whyChooseUs = [
  {
    icon: Users,
    title: '🏠 Complete Relocation Services',
    description: 'Full-service relocation division with over 1,300 local Las Vegas experts providing valuable insights relevant to your family and lifestyle.',
    color: 'text-blue-600'
  },
  {
    icon: Award,
    title: '🎯 Single Point of Contact',
    description: 'Dr. Jan Duffy personally oversees your entire relocation process, ensuring seamless communication and exceptional results.',
    color: 'text-green-600'
  },
  {
    icon: Star,
    title: '🏆 Award-Winning Team',
    description: 'Our nationally recognized team has received multiple awards for service and performance, representing the majority of Las Vegas relocations.',
    color: 'text-purple-600'
  }
]

const credentials = [
  'Primary service provider for Las Vegas metro with BGRS',
  '2nd largest relocation provider worldwide',
  'Primary or preferred broker status with most third-party companies',
  'Serving Fortune 100 companies nationwide',
  '35% Fortune 100 market share',
  '125+ countries served annually'
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Dr. Jan Duffy for Your Las Vegas Relocation?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Relocating to Las Vegas can be overwhelming. Dr. Jan Duffy and our team of certified relocation specialists provide exceptional, personalized service you can depend on. Whether you're moving for work, retirement, or lifestyle, we make your Las Vegas relocation seamless and stress-free.
          </p>
        </motion.div>

        {/* Why Choose Us Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`mx-auto mb-4 ${item.color}`}>
                <item.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Credentials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Fortune 100 Companies
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We are the primary service provider for Las Vegas metro with BGRS (2nd largest relocation provider worldwide). Our team has earned "primary" or "preferred" broker status with most third-party relocation companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100 leading-relaxed">{credential}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Personal Attention from Dr. Jan Duffy
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Unlike large corporate relocation companies where you're just a number, Dr. Jan Duffy personally oversees every aspect of your relocation. 
              From initial consultation to final settlement, you'll have direct access to her expertise and dedication.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  What You Get
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct access to Dr. Jan Duffy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Personalized relocation strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Ongoing support throughout the process</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  Local Expertise
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Deep knowledge of Las Vegas market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Established local business relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Community insights and recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
