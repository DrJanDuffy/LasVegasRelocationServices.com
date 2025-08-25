'use client'

import { motion } from '@/components/motion'
import { 
  // Import relevant icons for your service
  Icon1, 
  Icon2, 
  Icon3, 
  Icon4,
  CheckCircle, 
  Phone, 
  Calendar
} from 'lucide-react'

// Service features array - customize for your specific service
const serviceFeatures = [
  {
    icon: Icon1,
    title: 'Feature Title 1',
    description: 'Description of this service feature',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
  },
  {
    icon: Icon2,
    title: 'Feature Title 2',
    description: 'Description of this service feature',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
  },
  {
    icon: Icon3,
    title: 'Feature Title 3',
    description: 'Description of this service feature',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
  },
  {
    icon: Icon4,
    title: 'Feature Title 4',
    description: 'Description of this service feature',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
  }
]

// Service packages - customize pricing and features
const servicePackages = [
  {
    name: 'Basic Package',
    price: 'Starting at $X,XXX',
    description: 'Essential services for basic needs',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
      'Feature 5'
    ],
    bestFor: 'Individuals and small families',
    cta: 'Get Started'
  },
  {
    name: 'Complete Package',
    price: 'Starting at $X,XXX',
    description: 'Comprehensive services with full support',
    features: [
      'All Basic features',
      'Additional feature 1',
      'Additional feature 2',
      'Additional feature 3',
      'Additional feature 4'
    ],
    bestFor: 'Families and professionals',
    cta: 'Get Started'
  },
  {
    name: 'Premium Package',
    price: 'Starting at $X,XXX',
    description: 'Luxury service with concierge support',
    features: [
      'All Complete features',
      'Premium feature 1',
      'Premium feature 2',
      'Premium feature 3',
      'Premium feature 4',
      '24/7 support'
    ],
    bestFor: 'Executives and luxury clients',
    cta: 'Contact Sales'
  }
]

// Service benefits - customize for your service
const serviceBenefits = [
  {
    icon: Icon1,
    title: 'Benefit Title 1',
    description: 'Description of this benefit'
  },
  {
    icon: Icon2,
    title: 'Benefit Title 2',
    description: 'Description of this benefit'
  },
  {
    icon: Icon3,
    title: 'Benefit Title 3',
    description: 'Description of this benefit'
  },
  {
    icon: Icon4,
    title: 'Benefit Title 4',
    description: 'Description of this benefit'
  }
]

export default function ServiceNamePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Customize colors and content */}
      <section className="py-20 bg-gradient-to-br from-[PRIMARY_COLOR]-900 via-[PRIMARY_COLOR]-800 to-[SECONDARY_COLOR]-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Service Name
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[PRIMARY_COLOR]-200 to-[SECONDARY_COLOR]-200">
                  Services
                </span>
              </h1>
              <p className="text-xl [PRIMARY_COLOR]-100 mb-8 leading-relaxed">
                [Service description - customize this description for your specific service]
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" className="bg-white text-[PRIMARY_COLOR]-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </button>
                <button type="button" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[PRIMARY_COLOR]-900 transition-colors flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Free Consultation
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-64 h-64 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Icon1 className="w-32 h-32 text-white/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              [Service Name] Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              [Service overview description - customize this for your specific service]
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-[PRIMARY_COLOR]-50 to-[SECONDARY_COLOR]-50 rounded-2xl border border-[PRIMARY_COLOR]-100"
              >
                <div className="w-16 h-16 bg-[PRIMARY_COLOR]-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-[PRIMARY_COLOR]-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[PRIMARY_COLOR]-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your [Service Name] Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              [Package description - customize this for your specific service]
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[PRIMARY_COLOR]-600 mb-4">{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[PRIMARY_COLOR]-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-sm text-gray-500 mb-6">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>
                
                <button type="button" className="w-full bg-[PRIMARY_COLOR]-600 text-white py-3 rounded-lg font-semibold hover:bg-[PRIMARY_COLOR]-700 transition-colors">
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-gradient-to-br from-[PRIMARY_COLOR]-50 to-[SECONDARY_COLOR]-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our [Service Name] Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              [Benefits description - customize this for your specific service]
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-[PRIMARY_COLOR]-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[PRIMARY_COLOR]-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[PRIMARY_COLOR]-600 to-[PRIMARY_COLOR]-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started with [Service Name]?
            </h2>
            <p className="text-xl [PRIMARY_COLOR]-100 mb-8 max-w-3xl mx-auto">
              [CTA description - customize this for your specific service]
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="bg-white text-[PRIMARY_COLOR]-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </button>
              <button type="button" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[PRIMARY_COLOR]-600 transition-colors flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
