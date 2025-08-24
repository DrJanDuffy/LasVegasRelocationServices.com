import { Metadata } from 'next'
import { motion } from 'framer-motion'
import {
  Building,
  Users, 
  Clock,
  DollarSign,
  CheckCircle, 
  ArrowRight, 
  Phone,
  Calendar,
  Shield,
  TrendingUp,
  Globe,
  Target
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Relocation Services | Las Vegas Business Moving Experts',
  description: 'Professional corporate relocation services in Las Vegas. Expert business moving, employee relocation, and corporate transition support. Get your free consultation today.',
  keywords: 'corporate relocation, business moving, employee relocation, Las Vegas corporate services, business transition',
  openGraph: {
    title: 'Corporate Relocation Services | Las Vegas Business Moving Experts',
    description: 'Professional corporate relocation services in Las Vegas. Expert business moving, employee relocation, and corporate transition support.',
    type: 'website',
    locale: 'en_US',
  },
}

const serviceFeatures = [
  {
    icon: Building,
    title: 'Business Relocation Planning',
    description: 'Comprehensive strategy development for your entire business move',
    benefits: ['Minimize downtime', 'Reduce costs', 'Maintain productivity']
  },
  {
    icon: Users,
    title: 'Employee Relocation Support',
    description: 'Full-service support for relocating employees and their families',
    benefits: ['Housing assistance', 'School district guidance', 'Community integration']
  },
  {
    icon: Globe,
    title: 'Vendor & Service Coordination',
    description: 'Coordinate all moving services and local vendor relationships',
    benefits: ['Single point of contact', 'Quality assurance', 'Cost optimization']
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive insurance and liability protection for your move',
    benefits: ['Full coverage', 'Compliance assurance', 'Peace of mind']
  }
]

const corporatePackages = [
  {
    name: 'Essential Corporate',
    price: 'Starting at $2,500',
    description: 'Basic corporate relocation support for small businesses',
    features: [
      'Relocation planning consultation',
      'Vendor recommendations',
      'Basic employee support',
      'Move coordination',
      'Post-move follow-up'
    ],
    bestFor: 'Small businesses (1-10 employees)',
    cta: 'Get Quote'
  },
  {
    name: 'Professional Corporate',
    price: 'Starting at $5,000',
    description: 'Comprehensive relocation services for growing companies',
    features: [
      'Full relocation management',
      'Employee relocation packages',
      'Housing assistance',
      'School district analysis',
      'Community integration support',
      'Ongoing support'
    ],
    bestFor: 'Medium businesses (10-50 employees)',
    cta: 'Get Quote'
  },
  {
    name: 'Enterprise Corporate',
    price: 'Custom Pricing',
    description: 'Full-service enterprise relocation with dedicated support',
    features: [
      'Dedicated relocation manager',
      'Custom employee packages',
      'Luxury housing options',
      'Executive relocation services',
      'Cultural integration programs',
      '24/7 support hotline'
    ],
    bestFor: 'Large corporations (50+ employees)',
    cta: 'Contact Sales'
  }
]

const caseStudies = [
  {
    company: 'Tech Solutions Inc.',
    industry: 'Technology',
    employees: '25',
    challenge: 'Relocating from San Francisco to Las Vegas with minimal disruption',
    solution: 'Comprehensive 3-month relocation plan with staggered employee moves',
    results: 'Zero downtime, 100% employee retention, 30% cost savings'
  },
  {
    company: 'Healthcare Partners',
    industry: 'Healthcare',
    employees: '15',
    challenge: 'Moving medical practice with sensitive equipment and patient care continuity',
    solution: 'Specialized medical relocation with weekend move and immediate setup',
    results: 'Patient care uninterrupted, equipment fully operational, 100% satisfaction'
  },
  {
    company: 'Financial Services Group',
    industry: 'Finance',
    employees: '40',
    challenge: 'Corporate headquarters relocation with regulatory compliance requirements',
    solution: 'Compliance-focused relocation with regulatory liaison and audit trail',
    results: 'Full regulatory compliance, zero violations, seamless transition'
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Minimize downtime and maintain business continuity during relocation'
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Optimize relocation costs through expert planning and vendor management'
  },
  {
    icon: Users,
    title: 'Employee Retention',
    description: 'Keep your valuable team members with comprehensive relocation support'
  },
  {
    icon: Target,
    title: 'Strategic Growth',
    description: 'Position your business for success in the Las Vegas market'
  }
]

export default function CorporateRelocationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Corporate Relocation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Expert corporate relocation services that minimize downtime, reduce costs, and ensure 
                your business continues to thrive during and after your move to Las Vegas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (702) 707-7273
              </button>
                <button type="button" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors flex items-center gap-2">
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
                <Building className="w-32 h-32 text-white/80" />
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
              Comprehensive Corporate Relocation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning to post-move support, we handle every aspect of your corporate 
              relocation to ensure a seamless transition to Las Vegas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
              </div>
      </section>

      {/* Corporate Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Corporate Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible corporate relocation packages designed to meet your business needs and budget. 
              All packages include our signature quality and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  pkg.name === 'Professional Corporate' 
                    ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20' 
                    : 'border-gray-100'
                }`}
              >
                {pkg.name === 'Professional Corporate' && (
                  <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
              </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-sm text-gray-500 mb-6">
                  <strong>Best for:</strong> {pkg.bestFor}
            </div>

                <button type="button" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses successfully relocate to Las Vegas with minimal 
              disruption and maximum results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span>{study.employees} employees</span>
                </div>
              </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <p className="text-gray-600 text-sm">{study.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Corporate Relocation Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional corporate relocation expertise makes 
              for your business and employees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Corporate Relocation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can make your business relocation to Las Vegas seamless, 
              cost-effective, and successful. Schedule your free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (702) 707-7273
              </button>
              <button type="button" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
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
