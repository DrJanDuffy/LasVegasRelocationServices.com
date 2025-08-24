"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle, Phone } from "lucide-react";

const benefits = [
  "Free initial consultation",
  "Customized relocation plan",
  "Local market expertise",
  "Ongoing support throughout the process",
];

export default function CTA() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your <span className="text-yellow-300">Las Vegas Journey?</span>
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join hundreds of satisfied clients who have successfully relocated to Las Vegas with
              Dr. Jan Duffy and our expert team. Your dream move starts with a simple conversation.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white"
              >
                <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-blue-700 group">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: (702) 555-0123
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button className="bg-white hover:bg-gray-100 text-blue-700 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 group">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-blue-500 pt-8"
          >
            <p className="text-blue-200 text-sm mb-4">
              Trusted by leading organizations and families across the country
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-300" />
                Berkshire Hathaway Backed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-300" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-300" />
                BBB Accredited
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yellow-300" />
                15+ Years Experience
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
