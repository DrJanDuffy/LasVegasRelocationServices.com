'use client';

import { Award, Building, Globe, MapPin, Shield, Star, Users } from 'lucide-react';
import { motion } from '@/components/motion';

const stats = [
  {
    number: '85K+',
    label: 'Annual Employee Relocations',
    icon: Users,
    color: 'text-orange-500',
  },
  {
    number: '125',
    label: 'Countries Served',
    icon: Globe,
    color: 'text-blue-500',
  },
  {
    number: '35%',
    label: 'Fortune 100 Market Share',
    icon: Building,
    color: 'text-green-500',
  },
  {
    number: '1,300+',
    label: 'Local Las Vegas Experts',
    icon: MapPin,
    color: 'text-purple-500',
  },
];

const trustBadges = [
  {
    icon: Award,
    title: 'Nationally Recognized Team',
    description: 'Multiple awards for service and performance',
    color: 'text-yellow-500',
  },
  {
    icon: Shield,
    title: 'Primary BGRS Provider',
    description: '2nd largest relocation provider worldwide',
    color: 'text-blue-500',
  },
  {
    icon: Star,
    title: 'Preferred Broker Status',
    description: 'Primary or preferred with most third-party companies',
    color: 'text-green-500',
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Fortune 100 Companies</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We are the primary service provider for Las Vegas metro with BGRS (2nd largest
            relocation provider worldwide). Our team has earned "primary" or "preferred" broker
            status with most third-party relocation companies.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className={`mx-auto mb-4 ${badge.color}`}>
                <badge.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{badge.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Representing the Majority of Las Vegas Relocations
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Our expertise and track record make us the go-to choice for individuals, families, and
              corporations seeking professional relocation services in the Las Vegas area.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
