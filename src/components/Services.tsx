"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle, FileText, Globe, Home, Star, Truck, Users } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Relocation",
    description:
      "Complete home relocation services including packing, moving, and settling into your new Las Vegas home.",
    features: [
      "Professional packing services",
      "Furniture disassembly/assembly",
      "Home setup assistance",
      "Utility transfers",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Relocation",
    description:
      "Comprehensive corporate relocation solutions for businesses and their employees moving to Las Vegas.",
    features: [
      "Employee relocation packages",
      "Office space coordination",
      "Vendor management",
      "Timeline planning",
    ],
  },
  {
    icon: Truck,
    title: "Moving & Transportation",
    description:
      "Reliable moving and transportation services with experienced professionals and quality equipment.",
    features: [
      "Full-service moving",
      "Specialty item handling",
      "Storage solutions",
      "Insurance coverage",
    ],
  },
  {
    icon: Users,
    title: "Settling-In Services",
    description:
      "Help you get settled in your new Las Vegas community with local area orientation and services.",
    features: [
      "Area orientation tours",
      "Local service connections",
      "School district information",
      "Community integration",
    ],
  },
  {
    icon: FileText,
    title: "Relocation Planning",
    description:
      "Strategic relocation planning to ensure a smooth transition to your new Las Vegas location.",
    features: [
      "Custom relocation plans",
      "Budget management",
      "Timeline coordination",
      "Risk mitigation",
    ],
  },
  {
    icon: Globe,
    title: "International Relocation",
    description:
      "Expert international relocation services for clients moving to Las Vegas from abroad.",
    features: [
      "Visa assistance",
      "Customs coordination",
      "Cultural orientation",
      "Language support",
    ],
  },
];

const benefits = [
  "Berkshire Hathaway backed reliability",
  "Dr. Jan Duffy's expert guidance",
  "Local Las Vegas market knowledge",
  "Comprehensive service coverage",
  "Dedicated relocation specialists",
  "Proven track record of success",
];

export default function Services() {
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
            Comprehensive <span className="gradient-text">Relocation Services</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            From initial planning to settling into your new Las Vegas home, we provide end-to-end
            relocation solutions tailored to your unique needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">{service.title}</h3>
              </div>
              <p className="text-secondary-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-secondary-600"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Why Choose Our Relocation Services?
            </h3>
            <p className="text-lg text-secondary-600">
              Experience the difference that comes with professional expertise and local knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <Star className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span className="text-secondary-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
