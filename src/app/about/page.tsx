import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  Clock, 
  Star, 
  Phone, 
  Calendar,
  Shield,
  Building,
  Globe,
  Heart,
  MapPin
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Las Vegas Relocation Services Expert',
  description: 'Meet Dr. Jan Duffy, your trusted Las Vegas relocation specialist. Learn about our team, credentials, and commitment to making your move to Las Vegas seamless and successful.',
  keywords: 'Dr. Jan Duffy, Las Vegas relocation expert, relocation specialist, about us, team credentials',
  openGraph: {
    title: 'About Dr. Jan Duffy | Las Vegas Relocation Services Expert',
    description: 'Meet Dr. Jan Duffy, your trusted Las Vegas relocation specialist with 15+ years of experience.',
    type: 'website',
    locale: 'en_US',
  },
}

const credentials = [
  {
    icon: Award,
    title: 'Berkshire Hathaway Services',
    description: 'Relocation Services Team Member',
    details: 'Prestigious team with proven track record'
  },
  {
    icon: Shield,
    title: 'Certified Relocation Specialist',
    description: 'Professional certification and training',
    details: 'Industry-recognized expertise'
  },
  {
    icon: Building,
    title: 'Las Vegas Market Expert',
    description: '15+ years local experience',
    details: 'Deep knowledge of neighborhoods and markets'
  },
  {
    icon: Globe,
    title: 'International Relocation',
    description: 'Worldwide broker network',
    details: 'Global relocation expertise'
  }
]

const teamStats = [
  { number: '500+', label: 'Families Relocated', icon: Users },
  { number: '98%', label: 'Client Satisfaction', icon: Star },
  { number: '15+', label: 'Years Experience', icon: Clock },
  { number: '50+', label: 'Neighborhoods Served', icon: MapPin }
]

const values = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every relocation is unique. We treat your move as if it were our own family\'s move.'
  },
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'Built on 15+ years of trust, transparency, and consistent delivery of promises.'
  },
  {
    icon: Building,
    title: 'Local Expertise',
    description: 'Deep knowledge of Las Vegas neighborhoods, schools, and real estate markets.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Committed to exceeding expectations in every aspect of your relocation.'
  }
]

const achievements = [
  {
    title: 'Primary Service Provider',
    description: 'Primary service provider for Las Vegas metro with BGRS (2nd largest relocation provider worldwide)',
    highlight: 'Trusted by Fortune 100 Companies'
  },
  {
    title: 'Preferred Broker Status',
    description: 'Earned "primary" or "preferred" broker status with most third-party relocation companies',
    highlight: 'Industry Recognition'
  },
  {
    title: 'Nationally Recognized Team',
    description: 'Multiple awards for service and performance, representing the majority of Las Vegas relocations',
    highlight: 'Award-Winning Excellence'
  },
  {
    title: '1,300+ Local Experts',
    description: 'Network of over 1,300 local Las Vegas experts providing valuable insights and support',
    highlight: 'Extensive Local Network'
  }
]

export default function AboutPage() {
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
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">Dr. Jan Duffy</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Your trusted Las Vegas relocation specialist with over 15 years of experience helping 
                families and businesses successfully transition to the vibrant Las Vegas community.
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
                <Users className="w-32 h-32 text-white/80" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
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
              Why Choose Dr. Jan Duffy for Your Las Vegas Relocation?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Relocating to Las Vegas can be overwhelming. Dr. Jan Duffy and our team of certified 
              relocation specialists provide exceptional, personalized service you can depend on. 
              Whether you're moving for work, retirement, or lifestyle, we make your Las Vegas 
              relocation seamless and stress-free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Complete Relocation Services</h3>
              <p className="text-gray-600 text-center">
                Full-service relocation division with over 1,300 local Las Vegas experts providing 
                valuable insights relevant to your family and lifestyle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Single Point of Contact</h3>
              <p className="text-gray-600 text-center">
                Dr. Jan Duffy personally oversees your entire relocation process, ensuring seamless 
                communication and exceptional results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Award-Winning Team</h3>
              <p className="text-gray-600 text-center">
                Our nationally recognized team has received multiple awards for service and performance, 
                representing the majority of Las Vegas relocations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials & Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Fortune 100 Companies</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              We are the primary service provider for Las Vegas metro with BGRS (2nd largest 
              relocation provider worldwide). Our team has earned "primary" or "preferred" broker 
              status with most third-party relocation companies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{credential.title}</h3>
                <p className="text-blue-100 text-sm mb-2">{credential.description}</p>
                <p className="text-blue-200 text-xs">{credential.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              Our Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy and our team have earned recognition for exceptional service and 
              industry leadership in Las Vegas relocation services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
              >
                <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  {achievement.highlight}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and action in our relocation services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
              Ready to Start Your Las Vegas Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let Dr. Jan Duffy and our expert team guide you through a seamless relocation to Las Vegas. 
              Schedule your free consultation today and discover the difference professional expertise makes.
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
