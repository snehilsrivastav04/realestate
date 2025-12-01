import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, Users } from 'lucide-react';
import CTAButton from './CTAButton';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const noidaSectors = [
    'Sector 1', 'Sector 2', 'Sector 3', 'Sector 15', 'Sector 16', 'Sector 18',
    'Sector 22', 'Sector 25', 'Sector 27', 'Sector 37', 'Sector 44', 'Sector 50',
    'Sector 62', 'Sector 75', 'Sector 76', 'Sector 78', 'Sector 92', 'Sector 93',
    'Sector 104', 'Sector 120', 'Sector 137', 'Sector 150', 'Greater Noida West'
  ];

  const propertyTypes = ['Apartment', 'Villa', 'Plot', 'Farmhouse', 'Studio'];
  const bedroomOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'];

  const handleSearch = () => {
    console.log('Search params:', { location, propertyType, bedrooms });
    // Navigate to properties page with filters
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto border border-white/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 inline mr-1 text-brand-red" />
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors bg-white"
          >
            <option value="">Select Sector</option>
            {noidaSectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Home className="h-4 w-4 inline mr-1 text-brand-red" />
            Property Type
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors bg-white"
          >
            <option value="">All Types</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Users className="h-4 w-4 inline mr-1 text-brand-red" />
            Bedrooms
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors bg-white"
          >
            <option value="">Any</option>
            {bedroomOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <CTAButton
            variant="primary"
            size="lg"
            className="w-full flex items-center justify-center space-x-2"
            onClick={handleSearch}
          >
            <Search className="h-5 w-5" />
            <span>Search</span>
          </CTAButton>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;