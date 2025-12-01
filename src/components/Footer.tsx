import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2, Phone, Mail, MapPin, Facebook, Twitter,
  Instagram, Linkedin, ArrowRight, Home, Search, Users
} from 'lucide-react';
import CTAButton from './CTAButton';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Properties', path: '/properties', icon: Search },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const propertyTypes = [
    { name: 'Apartments in Noida', path: '/properties?type=apartment' },
    { name: 'Villas in Greater Noida', path: '/properties?type=villa' },
    { name: 'Plots in Noida Extension', path: '/properties?type=plot' },
    { name: 'Farmhouses in Noida', path: '/properties?type=farmhouse' },
  ];

  const popularSectors = [
    { name: 'Properties in Sector 62', path: '/properties?sector=62' },
    { name: 'Properties in Sector 150', path: '/properties?sector=150' },
    { name: 'Properties in Greater Noida West', path: '/properties?sector=gnw' },
    { name: 'Properties in Sector 76', path: '/properties?sector=76' },
  ];

  const services = [
    { name: 'Property Buying', path: '/services/buying' },
    { name: 'Property Selling', path: '/services/selling' },
    { name: 'Property Rental', path: '/services/rental' },
    { name: 'Investment Advisory', path: '/services/investment' },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with Latest Properties
              </h3>
              <p className="text-gray-400 text-lg">
                Get exclusive access to new listings and market insights in Noida
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red text-white placeholder-gray-400"
              />
              <CTAButton variant="primary" size="md" className="flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">NoidaHomes</span>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect property in Noida. 
              With over 10 years of experience, we've helped thousands of families 
              find their dream homes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3 text-brand-red" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3 text-brand-red" />
                <span>info@noidahomes.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-3 text-brand-red mt-1 flex-shrink-0" />
                <span>Plot No. 15, Sector 18, Noida, UP 201301</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center text-gray-400 hover:text-brand-red transition-colors group"
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-3">Our Services</h5>
              <div className="space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block text-gray-400 hover:text-brand-red transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Property Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Property Types</h4>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <Link
                  key={type.name}
                  to={type.path}
                  className="block text-gray-400 hover:text-brand-red transition-colors text-sm"
                >
                  {type.name}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <h5 className="font-semibold mb-3">Popular Sectors</h5>
              <div className="space-y-2">
                {popularSectors.map((sector) => (
                  <Link
                    key={sector.name}
                    to={sector.path}
                    className="block text-gray-400 hover:text-brand-red transition-colors text-sm"
                  >
                    {sector.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-red transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h5 className="font-semibold mb-3">Business Hours</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Mon - Sat:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <CTAButton variant="outline" size="sm" className="w-full">
                Schedule a Call
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 NoidaHomes. All rights reserved. | RERA Registration No: UP-RERA-XXXXX
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <Link to="/privacy" className="text-gray-400 hover:text-brand-red transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-brand-red transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-brand-red transition-colors">
                Disclaimer
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;