'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'Corporate Client',
    company: 'Tech Solutions Inc.',
    content:
      'Dr. Duffy and her team made our corporate relocation to Las Vegas incredibly smooth. Their attention to detail and local market knowledge exceeded our expectations. The entire process was professional and stress-free.',
    rating: 5,
    image: '/testimonials/jennifer-martinez.jpg',
  },
  {
    name: 'Robert & Sarah Thompson',
    role: 'Family Relocation',
    company: 'Residential Clients',
    content:
      "Moving our family of five to Las Vegas seemed overwhelming, but Dr. Duffy's team handled everything perfectly. From finding the right neighborhood to setting up utilities, they were there every step of the way.",
    rating: 5,
    image: '/testimonials/thompson-family.jpg',
  },
  {
    name: 'David Chen',
    role: 'International Relocation',
    company: 'Global Enterprises',
    content:
      'As an international client, I was concerned about the complexity of moving to Las Vegas. Michael and the team provided exceptional support with visa processes and cultural integration. Highly recommended!',
    rating: 5,
    image: '/testimonials/david-chen.jpg',
  },
  {
    name: 'Amanda Rodriguez',
    role: 'Senior Executive',
    company: 'Healthcare Partners',
    content:
      "The Berkshire Hathaway team's professionalism and local expertise made our healthcare facility relocation seamless. Dr. Duffy's strategic planning saved us time and resources.",
    rating: 5,
    image: '/testimonials/amanda-rodriguez.jpg',
  },
  {
    name: 'Mark & Lisa Williams',
    role: 'Retirement Relocation',
    company: 'Individual Clients',
    content:
      "Retiring to Las Vegas was a dream come true, and Dr. Duffy's team made it a reality. Their knowledge of retirement communities and local amenities was invaluable.",
    rating: 5,
    image: '/testimonials/williams-family.jpg',
  },
  {
    name: 'Carlos Mendez',
    role: 'Business Owner',
    company: 'Mendez Construction',
    content:
      "Relocating our construction business to Las Vegas required careful planning. The team's expertise in commercial relocation and local business regulations was outstanding.",
    rating: 5,
    image: '/testimonials/carlos-mendez.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about
            their Las Vegas relocation experience with our team.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200 group-hover:text-primary-300 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-secondary-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary-600">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.role}</p>
                  <p className="text-xs text-secondary-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-sm text-secondary-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-sm text-secondary-600">Successful Relocations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-sm text-secondary-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-secondary-600">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
