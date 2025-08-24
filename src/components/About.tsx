"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, MapPin, Users } from "lucide-react";

const stats = [
  { number: "500+", label: "Successful Relocations", icon: CheckCircle },
  { number: "15+", label: "Years of Experience", icon: Award },
  { number: "50+", label: "Corporate Clients", icon: Users },
  { number: "100%", label: "Local Las Vegas Focus", icon: MapPin },
];

const highlights = [
  "Expert knowledge of Las Vegas real estate market",
  "Strong relationships with local service providers",
  "Comprehensive understanding of relocation challenges",
  "Personalized approach to every client",
  "Berkshire Hathaway quality standards",
  "Ongoing support throughout the relocation process",
];

export default function About() {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Meet <span className="gradient-text">Dr. Jan Duffy</span>
            </h2>

            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              Dr. Jan Duffy leads our Las Vegas relocation services team with over 15 years of
              experience in helping families and businesses successfully transition to the vibrant
              Las Vegas community.
            </p>

            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              As part of the prestigious Berkshire Hathaway Services Relocation Services Team, we
              bring unmatched expertise, reliability, and local market knowledge to every relocation
              project. Our commitment to excellence ensures that your move to Las Vegas is not just
              successful, but truly exceptional.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-secondary-700">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <button className="btn-primary">Learn More About Dr. Duffy</button>
          </motion.div>

          {/* Stats and Visual */}
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
                  className="text-center p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-secondary-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Berkshire Hathaway Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-primary-100"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  Berkshire Hathaway
                </h4>
                <p className="text-sm text-secondary-600">Relocation Services Team Member</p>
                <p className="text-xs text-primary-600 font-medium mt-2">
                  Quality • Reliability • Excellence
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
