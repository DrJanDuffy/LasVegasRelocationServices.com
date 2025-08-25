'use client';

import {
  Building,
  Calendar,
  Home,
  Phone,
  Shield,
  Target,
  TrendingUp,
} from 'lucide-react';
import { motion } from '@/components/motion';
import { useId } from 'react';
import { 
  SchemaMarkup, 
  FAQSection, 
  QuickFacts, 
  Breadcrumbs,
  ComparisonTable 
} from '@/components/seo';

export default function HomePage() {
  const fullNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const currentCityId = useId();
  const moveDateId = useId();

  // FAQ data for AI search optimization
  const homePageFAQs = [
    {
      question: "What are the best neighborhoods in Las Vegas for families relocating from other cities?",
      answer: "Summerlin, Henderson, and Green Valley are excellent choices for families. Summerlin offers top-rated schools, parks, and shopping centers. Henderson provides a safe, family-oriented environment with beautiful parks and excellent schools. Green Valley features mature trees and established amenities. All three areas offer spacious homes, great schools, and family-friendly activities."
    },
    {
      question: "How much does it cost to move from major US cities to Las Vegas?",
      answer: "Moving costs vary by distance and household size. From Los Angeles: $2,000-$5,000. From Chicago: $3,000-$7,000. From New York: $4,000-$8,000. From Miami: $3,500-$7,500. These estimates include professional movers, packing services, and transportation. Las Vegas offers significant long-term savings with no state income tax and lower housing costs."
    },
    {
      question: "What's the job market like in Las Vegas compared to other major cities?",
      answer: "Las Vegas has a diverse job market with strong opportunities in hospitality, gaming, technology, healthcare, and construction. The city is experiencing growth in tech startups and remote work opportunities. While salaries may be slightly lower than cities like San Francisco or New York, the cost of living is significantly lower, resulting in better overall financial outcomes."
    },
    {
      question: "How do I find the right real estate agent for my Las Vegas relocation?",
      answer: "Look for agents with relocation expertise, local market knowledge, and proven track records. Dr. Jan Duffy has 15+ years of Las Vegas real estate experience and specializes in helping families relocate. She provides comprehensive services including area research, property search, and settlement support. Check credentials, read reviews, and schedule consultations to find the right fit."
    },
    {
      question: "What are the tax benefits of moving to Las Vegas from other states?",
      answer: "Nevada offers significant tax advantages: no state income tax, no state corporate tax, and no inheritance tax. Property taxes are also relatively low. This can result in thousands of dollars in annual savings compared to high-tax states like California, New York, or Illinois. Combined with lower housing costs, the financial benefits of Las Vegas relocation are substantial."
    }
  ];

  // Quick facts for AI search optimization
  const lasVegasFacts = [
    {
      label: "State Income Tax",
      value: "0%",
      description: "No state income tax in Nevada"
    },
    {
      label: "Average Home Price",
      value: "$450K",
      description: "Significantly lower than coastal cities"
    },
    {
      label: "Days of Sunshine",
      value: "300+",
      description: "Year-round outdoor activities"
    },
    {
      label: "Population Growth",
      value: "2.1%",
      description: "Fastest growing metro area"
    },
    {
      label: "Job Growth",
      value: "3.2%",
      description: "Strong economic expansion"
    },
    {
      label: "Cost of Living",
      value: "8% below",
      description: "Below national average"
    }
  ];

  // City comparison data
  const cityComparison = [
    {
      category: "Median Home Price",
      originCity: "$850,000",
      lasVegas: "$450,000",
      difference: "better" as const,
      description: "40%+ savings on housing"
    },
    {
      category: "State Income Tax",
      originCity: "13.3%",
      lasVegas: "0%",
      difference: "better" as const,
      description: "No state income tax"
    },
    {
      category: "Property Tax Rate",
      originCity: "1.25%",
      lasVegas: "0.84%",
      difference: "better" as const,
      description: "Lower property taxes"
    },
    {
      category: "Sales Tax",
      originCity: "8.25%",
      lasVegas: "8.38%",
      difference: "similar" as const,
      description: "Comparable sales tax"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Professional Relocation Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Moving to Las Vegas?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy and the Berkshire Hathaway team make your transition seamless. 
              Expert guidance for families and businesses relocating to Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </button>
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <QuickFacts 
        title="Why Choose Las Vegas?" 
        facts={lasVegasFacts}
        className="py-16"
      />

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Relocation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to settlement support, we handle every detail of your move
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Moving</h3>
              <p className="text-gray-600">
                Complete residential relocation services with personalized attention to every detail.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Relocation</h3>
              <p className="text-gray-600">
                Business relocation services for companies and executives moving to Las Vegas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Properties</h3>
              <p className="text-gray-600">
                Expert guidance for real estate investment opportunities in Las Vegas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settling In</h3>
              <p className="text-gray-600">
                Ongoing support to help you settle into your new Las Vegas community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Comparison Section */}
      <ComparisonTable
        title="Las Vegas vs. Major US Cities"
        originCity="Los Angeles"
        rows={cityComparison}
        className="py-16"
      />

      {/* Property Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Las Vegas Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover properties that offer better value than your current city
            </p>
          </motion.div>

          {/* RealScout Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_HIGH"
              listing-status="For Sale"
              property-types="SFR,MF"
              price-min="400000"
              price-max="800000"
            ></realscout-office-listings>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions About Las Vegas Relocation"
        faqs={homePageFAQs}
        className="py-16"
      />

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Las Vegas Journey?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact Dr. Jan Duffy today for a personalized consultation about your relocation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-200" />
                  <span>+1 (702) XXX-XXXX</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-blue-200" />
                  <span>Available 7 days a week</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Why Choose Dr. Jan Duffy?</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• 15+ years of Las Vegas real estate experience</li>
                  <li>• Berkshire Hathaway expertise and resources</li>
                  <li>• Personal attention to every client</li>
                  <li>• Deep knowledge of relocation challenges</li>
                  <li>• Ongoing support after your move</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-semibold mb-6">Free Consultation Request</h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor={fullNameId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id={fullNameId}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor={emailId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor={phoneId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor={currentCityId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Current City
                  </label>
                  <input
                    id={currentCityId}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Los Angeles, Chicago, New York"
                  />
                </div>

                <div>
                  <label
                    htmlFor={moveDateId}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Target Move Date
                  </label>
                  <input
                    id={moveDateId}
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Target move date"
                    title="Select your target move date"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for Homepage */}
      <SchemaMarkup 
        type="localBusiness" 
        data={{
          name: "Dr. Jan Duffy - Las Vegas Relocation Services",
          description: "Professional relocation services from major US cities to Las Vegas. Expert real estate guidance with Berkshire Hathaway.",
          url: "https://www.lasvegasrelocationservices.com",
          telephone: "+1-702-XXX-XXXX",
          email: "dr.jan.duffy@berkshirehathaway.com"
        }} 
      />
    </div>
  );
}
