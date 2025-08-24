'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone, Star } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Jan Duffy',
    role: 'Lead Relocation Specialist',
    bio: 'Dr. Duffy brings over 15 years of relocation expertise and deep knowledge of the Las Vegas market. She leads our team with a commitment to excellence and personalized service.',
    specialties: ['Residential Relocation', 'Corporate Relocation', 'Market Analysis'],
    experience: '15+ Years',
    education: 'Ph.D. in Business Administration',
    image: '/team/dr-jan-duffy.jpg'
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Relocation Coordinator',
    bio: 'Sarah specializes in corporate relocation packages and employee transition support. Her attention to detail ensures seamless corporate moves.',
    specialties: ['Corporate Relocation', 'Employee Support', 'Vendor Management'],
    experience: '12+ Years',
    education: 'MBA in Business Management',
    image: '/team/sarah-johnson.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'International Relocation Specialist',
    bio: 'Michael handles international relocations with expertise in visa processes, customs coordination, and cultural integration support.',
    specialties: ['International Relocation', 'Visa Assistance', 'Cultural Integration'],
    experience: '10+ Years',
    education: 'Master\'s in International Relations',
    image: '/team/michael-chen.jpg'
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Settling-In Coordinator',
    bio: 'Lisa helps families integrate into the Las Vegas community, providing local area knowledge and service connections.',
    specialties: ['Community Integration', 'Local Services', 'Family Support'],
    experience: '8+ Years',
    education: 'Bachelor\'s in Social Work',
    image: '/team/lisa-rodriguez.jpg'
  }
]

export default function Team() {
  return (
    <section className="section-padding bg-white">
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
            Meet Our{' '}
            <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to making your Las Vegas relocation 
            experience exceptional. Each team member brings unique expertise and a commitment to excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-primary-600 font-medium mb-2">
                    {member.role}
                  </p>
                  
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-secondary-700 mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience & Education */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-secondary-700">Experience:</span>
                      <p className="text-secondary-600">{member.experience}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-secondary-700">Education:</span>
                      <p className="text-secondary-600">{member.education}</p>
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex gap-3 mt-4">
                    <button 
                      className="p-2 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors"
                      aria-label={`Email ${member.name}`}
                      title={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4 text-primary-600" />
                    </button>
                    <button 
                      className="p-2 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors"
                      aria-label={`Call ${member.name}`}
                      title={`Call ${member.name}`}
                    >
                      <Phone className="w-4 h-4 text-primary-600" />
                    </button>
                    <button 
                      className="p-2 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors"
                      aria-label={`View ${member.name}'s LinkedIn profile`}
                      title={`View ${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4 text-primary-600" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
            Our Team Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-primary-50 rounded-xl">
              <h4 className="text-lg font-semibold text-primary-800 mb-2">Excellence</h4>
              <p className="text-primary-700">We maintain the highest standards in every aspect of our service.</p>
            </div>
            <div className="p-6 bg-accent-50 rounded-xl">
              <h4 className="text-lg font-semibold text-accent-800 mb-2">Integrity</h4>
              <p className="text-accent-700">Honest, transparent communication and ethical business practices.</p>
            </div>
            <div className="p-6 bg-secondary-50 rounded-xl">
              <h4 className="text-lg font-semibold text-secondary-800 mb-2">Innovation</h4>
              <p className="text-secondary-700">Continuously improving our processes and embracing new solutions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
