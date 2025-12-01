import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, MapPin, Camera, Users, Star, ArrowRight, Building, ShoppingCart, Home as HomeIcon, School } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import ParallaxLayers from '../components/ParallaxLayers';
import CTAButton from '../components/CTAButton';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger animation
  useEffect(() => {
    if (!featuredRef.current) return;
    const targets = featuredRef.current.querySelectorAll('.featured-property');
    if (targets.length === 0) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, featuredRef);
    return () => ctx.revert();
  }, []);

  const heroLayers = [
    {
      id: 'hero-bg',
      speed: -20,
      content: (
        <div className="absolute inset-0">
          <img
            src="/real-estate-hero.jpg"
            alt="Noida Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        </div>
      ),
      zIndex: 1,
    },
    {
      id: 'hero-buildings',
      speed: -10,
      mouseParallax: true,
      content: (
        <div className="absolute bottom-0 left-0 right-0 h-1/2">
          <img
            src="/hero-buildings.png"
            alt="Buildings"
            className="w-full h-full object-cover object-bottom opacity-60"
          />
        </div>
      ),
      zIndex: 2,
    },
    {
      id: 'hero-particles',
      speed: -5,
      content: (
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      ),
      zIndex: 3,
    },
  ];

  const featuredProperties = [
    {
      id: '1',
      title: 'Luxury 4BHK Apartment in Sector 150',
      location: 'Sector 150',
      sector: 'Greater Noida West',
      image: '/apartment-1.jpg',
      beds: 4,
      baths: 3,
      sqft: 2800,
      badges: ['Luxury', 'Metro-Connected'],
      rating: 4.8,
      agent: {
        name: 'Rajesh Kumar',
        image: '/agent-1.jpg',
      },
    },
    {
      id: '2',
      title: 'Modern Villa with Garden in Sector 22',
      location: 'Sector 22',
      sector: 'Noida',
      image: '/villa-1.jpg',
      beds: 5,
      baths: 4,
      sqft: 4200,
      badges: ['Villa', 'Garden'],
      rating: 4.9,
      agent: {
        name: 'Priya Sharma',
        image: '/agent-2.jpg',
      },
    },
    {
      id: '3',
      title: 'Spacious Farmhouse in Sector 135',
      location: 'Sector 135',
      sector: 'Noida Expressway',
      image: '/farmhouse-1.jpg',
      beds: 6,
      baths: 5,
      sqft: 6000,
      badges: ['Farmhouse', 'Eco-friendly'],
      rating: 4.7,
      agent: {
        name: 'Amit Singh',
        image: '/agent-3.jpg',
      },
    },
    {
      id: '4',
      title: 'Ready-to-move 3BHK in Sector 76',
      location: 'Sector 76',
      sector: 'Noida',
      image: '/apartment-2.jpg',
      beds: 3,
      baths: 2,
      sqft: 1850,
      badges: ['Ready-to-move', 'Family Home'],
      rating: 4.6,
      agent: {
        name: 'Sneha Gupta',
        image: '/agent-4.jpg',
      },
    },
  ];

  const commercialSectors = [
    {
      name: 'Office Spaces',
      description: 'Modern, fully-equipped office spaces in prime IT hubs.',
      image: '/office-space-1.jpg',
      icon: Building,
    },
    {
      name: 'Retail Stores',
      description: 'High-footfall retail locations and showrooms.',
      image: '/retail-store-1.jpg',
      icon: ShoppingCart,
    },
    {
      name: 'PGs/Hostels',
      description: 'Student and professional housing with modern amenities.',
      image: '/pg-hostel-1.jpg',
      icon: HomeIcon,
    },
    {
      name: 'Schools',
      description: 'Educational infrastructure and school buildings for lease.',
      image: '/school-1.jpg',
      icon: School,
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Verified Agents',
      description: 'All our real estate agents are verified and licensed professionals',
    },
    {
      icon: MapPin,
      title: 'Metro & Expressway Access',
      description: 'Properties with excellent connectivity to Delhi and NCR',
    },
    {
      icon: Camera,
      title: 'Virtual Tours',
      description: 'Experience properties with immersive 3D virtual tours',
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: '10+ years of experience in Noida real estate market',
    },
  ];

  const testimonials = [
    {
      name: 'Arjun Patel',
      role: 'Software Engineer',
      content: 'Found my dream apartment in Sector 62. The team was incredibly helpful and transparent throughout the process.',
      rating: 5,
      image: '/testimonial-1.jpg',
    },
    {
      name: 'Meera Singh',
      role: 'Marketing Manager',
      content: 'Excellent service! They helped us find a perfect villa in Greater Noida West within our timeline.',
      rating: 5,
      image: '/testimonial-2.jpg',
    },
    {
      name: 'Rohit Sharma',
      role: 'Business Owner',
      content: 'Professional team with deep knowledge of Noida market. Highly recommended for property investment.',
      rating: 5,
      image: '/testimonial-3.jpg',
    },
  ];

  return (
  <div className="min-h-screen relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <ParallaxLayers
          layers={heroLayers}
          className="h-full"
          enableMouseParallax={true}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Discover Your Dream Property in <span className="text-brand-red">Noida</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Residential & Commercial properties, verified and ready for you.
            </motion.p>

            <div className="mb-8">
              <SearchBar />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <CTAButton variant="outline" size="md">Browse Properties</CTAButton>
              <CTAButton variant="ghost" size="md">Schedule a Tour</CTAButton>
              <CTAButton variant="ghost" size="md">Sell Your Property</CTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Residential Properties */}
      <section ref={featuredRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-gray-900 mb-4">Featured Residential Properties</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-gray-600">Handpicked premium residential properties in Noida's most sought-after locations</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property, index) => (
              <div key={property.id} className="featured-property">
                <PropertyCard property={property} enableTilt={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Properties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-gray-900 mb-4">Commercial Properties for Lease</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-gray-600">Office spaces, retail stores, PGs, and schools available for lease.</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commercialSectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Link to="/commercial" key={sector.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-[4/3] relative">
                      <img src={sector.image} alt={sector.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="w-12 h-12 bg-brand-red/80 rounded-xl flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{sector.name}</h3>
                        <p className="text-sm text-gray-200">{sector.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-gray-900 mb-4">Why Choose NoidaHomes?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-gray-600">Your trusted partner in finding the perfect property in Noida</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-gray-600">Real stories from satisfied homeowners</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl relative"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-red-dark opacity-90" />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{ y: [-30, 30, -30], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Find Your Dream Property?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-white/90 mb-8">Let our expert team help you discover the perfect property in Noida</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="outline" size="lg" className="bg-white text-brand-red hover:bg-gray-100 flex items-center justify-center">Browse All Properties <ArrowRight className="ml-2 h-5 w-5" /></CTAButton>
            <CTAButton variant="ghost" size="lg" className="border-white text-white hover:bg-white/10">Talk to Agent Now</CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
