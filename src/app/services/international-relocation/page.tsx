'use client'

import { motion } from '@/components/motion'
import { 
  Globe, 
  FileText, 
  Building, 
  Users, 
  CheckCircle, 
  Phone, 
  Calendar,
  MapPin,
  Shield,
  DollarSign,
  Home
} from 'lucide-react'

const internationalServices = [
  {
    icon: FileText,
    title: 'Visa & Immigration Support',
    description: 'Assistance with visa applications and immigration requirements',
    benefits: ['Visa consultation', 'Document preparation', 'Legal referrals', 'Timeline planning']
  },
  {
    icon: Building,
    title: 'Corporate Relocation',
    description: 'Support for international businesses expanding to Las Vegas',
    benefits: ['Business registration', 'Office space', 'Local partnerships', 'Cultural integration']
  },
  {
    icon: Home,
    title: 'Housing Solutions',
    description: 'International-friendly housing options and neighborhoods',
    benefits: ['Temporary housing', 'Long-term rentals', 'Home purchases', 'Neighborhood guidance']
  },
  {
    icon: Users,
    title: 'Cultural Integration',
    description: 'Help your family adapt to American culture and Las Vegas lifestyle',
    benefits: ['Cultural orientation', 'Language support', 'Community connections', 'Local customs']
  }
]

const internationalPackages = [
  {
    name: 'Essential International',
    price: 'Starting at $3,500',
    description: 'Basic international relocation support for individuals and families',
    features: [
      'Visa consultation and support',
      'Housing assistance',
      'Basic cultural orientation',
      'Airport pickup and welcome',
      'Essential services setup'
    ],
    bestFor: 'Individual professionals and small families',
    cta: 'Get Quote'
  },
  {
    name: 'Complete International',
    price: 'Starting at $6,500',
    description: 'Comprehensive international relocation with full support',
    features: [
      'Full visa and immigration support',
      'Comprehensive housing search',
      'School enrollment assistance',
      'Cultural integration program',
      'Ongoing support network',
      'Legal and financial guidance'
    ],
    bestFor: 'Families with children and professionals',
    cta: 'Get Quote'
  },
  {
    name: 'Premium International',
    price: 'Starting at $10,000',
    description: 'Luxury international relocation with concierge service',
    features: [
      'Dedicated relocation manager',
      'Premium housing options',
      'Private school assistance',
      'Concierge services',
      'Cultural programs',
      '24/7 international support',
      'Legal and financial planning'
    ],
    bestFor: 'Executives and high-net-worth individuals',
    cta: 'Contact Sales'
  }
]

const internationalBenefits = [
  {
    icon: Globe,
    title: 'Global Expertise',
    description: 'Experience with clients from over 30 countries'
  },
  {
    icon: Shield,
    title: 'Legal Compliance',
    description: 'Ensuring all immigration and legal requirements are met'
  },
  {
    icon: DollarSign,
    title: 'Financial Guidance',
    description: 'Help with banking, taxes, and financial planning'
  },
  {
    icon: MapPin,
    title: 'Local Knowledge',
    description: 'Deep understanding of Las Vegas for international residents'
  }
]

export default function InternationalRelocationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                International
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200">
                  Relocation Services
                </span>
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Expert international relocation services to Las Vegas. We help clients from around the world 
                make a smooth transition to their new home in the United States.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" className="bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
                </button>
                <button type="button" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors flex items-center gap-2">
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
                <Globe className="w-32 h-32 text-white/80" />
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
              Comprehensive International Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From visa applications to cultural integration, we provide complete support for your 
              international relocation to Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internationalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Packages */}
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
              Choose Your International Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible international relocation packages designed to meet your needs and ensure 
              a successful transition to Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {internationalPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-sm text-gray-500 mb-6">
                  <strong>Best for:</strong> {pkg.bestFor}
                </div>
                
                <button type="button" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our International Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that international relocation expertise makes 
              for your move to Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internationalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your International Journey to Las Vegas?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's begin your international relocation process. Schedule your free consultation 
              and discover how we can make your move to Las Vegas successful and stress-free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </button>
              <button type="button" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2">
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
