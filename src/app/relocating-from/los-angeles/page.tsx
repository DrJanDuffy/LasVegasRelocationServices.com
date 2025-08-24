import type { Metadata } from 'next'
import { MapPin, Clock, DollarSign, Home, Car, Plane, Building, Users, Star, Phone, Mail, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Los Angeles to Las Vegas Relocation Services | Dr. Jan Duffy',
  description: 'Professional relocation services from Los Angeles to Las Vegas. Expert assistance with housing, schools, and settling into your new Las Vegas home.',
  keywords: 'Los Angeles to Las Vegas relocation, LA to Vegas move, California to Nevada relocation, Dr. Jan Duffy, Berkshire Hathaway',
  openGraph: {
    title: 'Los Angeles to Las Vegas Relocation Services',
    description: 'Professional relocation services from Los Angeles to Las Vegas with Dr. Jan Duffy and Berkshire Hathaway.',
  },
}

export default function LosAngelesToLasVegasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Los Angeles → Las Vegas
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Moving from LA to Las Vegas?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy and the Berkshire Hathaway team make your transition seamless. 
              We know both cities intimately and will guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Las Vegas Areas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Las Vegas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Las Vegas?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of living in Las Vegas compared to Los Angeles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Lower Cost of Living</h3>
              <p className="text-gray-600 text-center">
                Housing costs are significantly lower, and no state income tax means more money in your pocket.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">More Space</h3>
              <p className="text-gray-600 text-center">
                Get more square footage for your money. Las Vegas offers spacious homes and yards.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Car className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Less Traffic</h3>
              <p className="text-gray-600 text-center">
                Say goodbye to LA traffic jams. Las Vegas has much more manageable commute times.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Plane className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Easy Travel</h3>
              <p className="text-gray-600 text-center">
                McCarran International Airport offers direct flights to LA and major cities worldwide.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Building className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Business Friendly</h3>
              <p className="text-gray-600 text-center">
                Nevada's business-friendly environment with no corporate income tax.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Growing Community</h3>
              <p className="text-gray-600 text-center">
                Join a rapidly growing, diverse community with excellent amenities and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relocation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Relocation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle every detail of your move from Los Angeles to Las Vegas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Consultation</h3>
              <p className="text-gray-600">
                We discuss your needs, timeline, and preferences for your new Las Vegas home.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Area Research</h3>
              <p className="text-gray-600">
                We research neighborhoods, schools, and amenities that match your lifestyle.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Search</h3>
              <p className="text-gray-600">
                We find and show you properties that meet your criteria and budget.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settlement Support</h3>
              <p className="text-gray-600">
                We help you settle in with local connections and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Las Vegas Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Las Vegas Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best neighborhoods for your lifestyle and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Summerlin</h3>
                <p className="text-gray-600 mb-4">
                  Upscale master-planned community with excellent schools, parks, and shopping.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Family-friendly, great schools</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Henderson</h3>
                <p className="text-gray-600 mb-4">
                  Safe, family-oriented city with top-rated schools and beautiful parks.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Safe, excellent schools</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Green Valley</h3>
                <p className="text-gray-600 mb-4">
                  Established neighborhood with mature trees and convenient amenities.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Mature, established area</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Centennial Hills</h3>
                <p className="text-gray-600 mb-4">
                  Growing area with new homes, mountain views, and outdoor recreation.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>New homes, mountain views</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Anthem</h3>
                <p className="text-gray-600 mb-4">
                  Master-planned community with golf courses and resort-style amenities.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Golf, resort amenities</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Inspirada</h3>
                <p className="text-gray-600 mb-4">
                  Modern community with contemporary homes and active lifestyle amenities.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>Modern, active lifestyle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your LA to Vegas Journey?
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
                  <Mail className="w-5 h-5 mr-3 text-blue-200" />
                  <span>dr.jan.duffy@berkshirehathaway.com</span>
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
                  <li>• Deep knowledge of LA to Vegas relocation</li>
                  <li>• Ongoing support after your move</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-semibold mb-6">Free Consultation Request</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current LA Neighborhood
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Beverly Hills, Santa Monica, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Move Date
                  </label>
                  <input
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
    </div>
  )
}
