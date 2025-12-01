import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import {
  Award, Users, MapPin, Heart, Star, Shield,
  Target, Eye, Handshake, TrendingUp, Clock, CheckCircle
} from 'lucide-react';
import CTAButton from '../components/CTAButton';

const About = () => {
  const stats = [
    { number: '500+', label: 'Properties Sold', icon: TrendingUp },
    { number: '1000+', label: 'Happy Families', icon: Heart },
    { number: '10+', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'Expert Agents', icon: Users },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in all our dealings, ensuring trust at every step.',
    },
    {
      icon: Target,
      title: 'Customer-Centric Approach',
      description: 'Your needs come first. We tailor our services to match your unique requirements.',
    },
    {
      icon: Eye,
      title: 'Market Expertise',
      description: 'Deep knowledge of Noida real estate market trends and investment opportunities.',
    },
    {
      icon: Handshake,
      title: 'Long-term Relationships',
      description: 'We build lasting relationships with our clients, not just one-time transactions.',
    },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: '/images/team/rajesh-kumar.jpg',
      experience: '12+ years',
      specialization: 'Luxury Properties',
      bio: 'Visionary leader with extensive experience in Noida real estate market.',
      achievements: ['500+ Properties Sold', 'Top Performer 2023', 'Customer Choice Award'],
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Sales Director',
      image: '/images/team/priya-sharma.jpg',
      experience: '8+ years',
      specialization: 'Residential Sales',
      bio: 'Expert in residential properties with a track record of satisfied clients.',
      achievements: ['300+ Properties Sold', 'Excellence in Service', 'Team Leader Award'],
    },
    {
      name: 'Amit Singh',
      role: 'Investment Consultant',
      image: '/images/team/amit-singh.jpg',
      experience: '10+ years',
      specialization: 'Property Investment',
      bio: 'Specialized in investment properties and portfolio management.',
      achievements: ['Investment Expert', '200+ Consultations', 'Market Analysis Specialist'],
    },
    {
      name: 'Sneha Gupta',
      role: 'Client Relations Manager',
      image: '/images/team/sneha-gupta.jpg',
      experience: '6+ years',
      specialization: 'Customer Service',
      bio: 'Dedicated to ensuring exceptional customer service and satisfaction.',
      achievements: ['Customer Excellence', '99% Satisfaction Rate', 'Service Innovation Award'],
    },
  ];

  const milestones = [
    { year: '2014', event: 'Company Founded', description: 'Started with a vision to transform real estate in Noida' },
    { year: '2016', event: 'First 100 Sales', description: 'Achieved our first major milestone of 100 property sales' },
    { year: '2018', event: 'Team Expansion', description: 'Expanded team to 25+ real estate professionals' },
    { year: '2020', event: 'Digital Innovation', description: 'Launched virtual tours and online property platform' },
    { year: '2022', event: '500th Property', description: 'Celebrated our 500th successful property transaction' },
    { year: '2024', event: 'Market Leadership', description: 'Recognized as top real estate agency in Noida' },
  ];

  const certifications = [
    { name: 'RERA Certified', logo: '/images/certifications/rera.png' },
    { name: 'ISO 9001:2015', logo: '/images/certifications/iso.png' },
    { name: 'Best Real Estate Agency 2023', logo: '/images/certifications/award-2023.png' },
    { name: 'Customer Choice Award', logo: '/images/certifications/customer-choice.png' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <Parallax speed={-20}>
          <div className="absolute inset-0">
            <img
              src="/images/about/office-building.jpg"
              alt="NoidaHomes Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/80 to-brand-red-dark/80" />
          </div>
        </Parallax>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Your Trusted Partner in
            <br />
            <span className="text-white/90">Noida Real Estate</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90"
          >
            For over a decade, we've been helping families and investors find their perfect property in Noida's most desirable locations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton variant="outline" size="lg" className="bg-white text-brand-red hover:bg-gray-100">
              Our Story
            </CTAButton>
            <CTAButton variant="ghost" size="lg" className="border-white text-white hover:bg-white/10">
              Meet Our Team
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2014, NoidaHomes began with a simple vision: to make real estate transactions in Noida transparent, efficient, and customer-centric. What started as a small team of passionate real estate professionals has grown into one of Noida's most trusted property consultancy firms.
                </p>
                <p>
                  Over the years, we've witnessed Noida's transformation from a developing satellite city to a thriving urban center. We've been part of this journey, helping thousands of families find their dream homes and investors discover profitable opportunities.
                </p>
                <p>
                  Our deep understanding of local market dynamics, combined with our commitment to ethical practices, has earned us the trust of clients and recognition as a leading real estate agency in the region.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton variant="primary" size="lg">
                  Learn More About Us
                </CTAButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/about/team-meeting.jpg"
                alt="Team Meeting"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-red text-white p-6 rounded-2xl">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Meet Our Expert Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Experienced professionals dedicated to your success
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-brand-red font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div>Experience: {member.experience}</div>
                    <div>Specialization: {member.specialization}</div>
                  </div>

                  <div className="space-y-1">
                    {member.achievements.slice(0, 2).map((achievement, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <CTAButton variant="outline" size="sm" className="w-full">
                      Contact {member.name.split(' ')[0]}
                    </CTAButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Key milestones that shaped our success story
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-red/20" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-brand-red mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-red rounded-full border-4 border-white shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Trust & Recognition
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Certified and awarded for excellence in service
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <img src={cert.logo} alt={cert.name} className="w-12 h-12 object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900">{cert.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-brand-red mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600">
                      Plot No. 15, Sector 18<br />
                      Noida, Uttar Pradesh 201301<br />
                      Near Atta Market Metro Station
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-brand-red mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <CTAButton variant="primary" size="lg">
                  Get Directions
                </CTAButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map integration would be here</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Start Your Real Estate Journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            Let our experienced team help you find the perfect property in Noida
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton variant="outline" size="lg" className="bg-white text-brand-red hover:bg-gray-100">
              Browse Properties
            </CTAButton>
            <CTAButton variant="ghost" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Us Today
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;