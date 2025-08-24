'use client'

import { motion } from 'framer-motion'
import { Star, Play, Quote, CheckCircle, MapPin, Users } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    location: 'Los Angeles → Las Vegas',
    rating: 5,
    quote: 'Dr. Jan Duffy made our cross-state move absolutely seamless. From finding our dream home to helping us settle into the community, every detail was handled with care. We couldn\'t be happier with our new Las Vegas life!',
    beforeAfter: {
      before: 'Stressed about moving logistics',
      after: 'Smooth, organized transition'
    },
    video: true,
    image: '/testimonials/sarah-michael.jpg',
    service: 'Full-Service Relocation'
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'San Francisco → Las Vegas',
    rating: 5,
    quote: 'As a busy executive, I needed a relocation service that could handle everything. Dr. Duffy\'s team exceeded my expectations. They found me the perfect home in a great neighborhood and coordinated every aspect of the move.',
    beforeAfter: {
      before: 'Overwhelmed with move planning',
      after: 'Stress-free executive relocation'
    },
    video: false,
    image: '/testimonials/david-chen.jpg',
    service: 'Corporate Relocation'
  },
  {
    id: 3,
    name: 'The Rodriguez Family',
    location: 'Phoenix → Las Vegas',
    rating: 5,
    quote: 'Moving with kids is always challenging, but Dr. Jan made it feel like an adventure. She helped us find a home in an excellent school district and introduced us to other families in the area. We felt at home immediately.',
    beforeAfter: {
      before: 'Concerned about schools & community',
      after: 'Perfect neighborhood fit'
    },
    video: true,
    image: '/testimonials/rodriguez-family.jpg',
    service: 'Family Relocation'
  },
  {
    id: 4,
    name: 'Jennifer Williams',
    location: 'Seattle → Las Vegas',
    rating: 5,
    quote: 'The luxury relocation service was exceptional. Dr. Duffy handled our fine art collection with the utmost care and found us a stunning property that exceeded our expectations. Professional, discreet, and perfect.',
    beforeAfter: {
      before: 'Worried about valuable handling',
      after: 'Perfect luxury relocation'
    },
    video: false,
    image: '/testimonials/jennifer-williams.jpg',
    service: 'Luxury Relocation'
  }
]

const stats = [
  { number: '500+', label: 'Happy Families', icon: Users },
  { number: '98%', label: 'Satisfaction Rate', icon: Star },
  { number: '15+', label: 'Years Experience', icon: CheckCircle },
  { number: '50+', label: 'Neighborhoods Served', icon: MapPin }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what families and businesses say about 
            their relocation experience with Dr. Jan Duffy and our team.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                    {testimonial.video ? (
                      <Play className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Quote className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{testimonial.location}</span>
                    </div>
                    <div className="text-xs text-blue-600 font-medium mt-1">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Before/After */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-100">
                <h5 className="font-semibold text-gray-900 mb-3 text-sm">Transformation:</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Before: {testimonial.beforeAfter.before}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">After: {testimonial.beforeAfter.after}</span>
                  </div>
                </div>
              </div>

              {/* Video Indicator */}
              {testimonial.video && (
                <div className="mt-4 flex items-center gap-2 text-blue-600 text-sm">
                  <Play className="w-4 h-4" />
                  <span>Video testimonial available</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-blue-100 mb-6">
              Ready to experience the same level of care and expertise? 
              Start your stress-free relocation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </button>
              <button type="button" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors">
                View More Testimonials
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
