import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, Map, SortAsc, Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import CTAButton from '../components/CTAButton';
import SearchBar from '../components/SearchBar';

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    bedrooms: '',
    amenities: [] as string[],
    // Price filter intentionally disabled per requirement
    // priceRange: [0, 10000000], // PRICES HIDDEN BY REQUIREMENT
  });

  // Mock property data - no prices shown
  const properties = [
    {
      id: '1',
      title: 'Luxury 4BHK Penthouse in Sector 62',
      location: 'Sector 62',
      sector: 'Noida',
      image: 'https://placehold.co/600x400/E5E7EB/1F2937',
      beds: 4,
      baths: 4,
      sqft: 3200,
      badges: ['Luxury', 'Penthouse', 'Metro-Connected'],
      rating: 4.9,
      agent: {
        name: 'Rajesh Kumar',
        image: 'https://placehold.co/100x100/E5E7EB/1F2937',
      },
    },
    {
      id: '2',
      title: 'Modern 3BHK Apartment in Greater Noida West',
      location: 'Sector 1',
      sector: 'Greater Noida West',
      image: 'https://placehold.co/600x400/E5E7EB/1F2937',
      beds: 3,
      baths: 2,
      sqft: 1850,
      badges: ['New Launch', 'Ready-to-move'],
      rating: 4.7,
      agent: {
        name: 'Priya Sharma',
        image: 'https://placehold.co/100x100/E5E7EB/1F2937',
      },
    },
    {
      id: '3',
      title: 'Spacious Villa with Private Garden',
      location: 'Sector 150',
      sector: 'Noida',
      image: 'https://placehold.co/600x400/E5E7EB/1F2937',
      beds: 5,
      baths: 4,
      sqft: 4500,
      badges: ['Villa', 'Garden', 'Gated Community'],
      rating: 4.8,
      agent: {
        name: 'Amit Singh',
        image: 'https://placehold.co/100x100/E5E7EB/1F2937',
      },
    },
    {
      id: '4',
      title: 'Eco-Friendly Farmhouse in Sector 135',
      location: 'Sector 135',
      sector: 'Noida Expressway',
      image: 'https://placehold.co/600x400/E5E7EB/1F2937',
      beds: 6,
      baths: 5,
      sqft: 7200,
      badges: ['Farmhouse', 'Eco-friendly', 'Large Plot'],
      rating: 4.6,
      agent: {
        name: 'Sneha Gupta',
        image: 'https://placehold.co/100x100/E5E7EB/1F2937',
      },
    },
    {
      id: '5',
      title: 'Studio Apartment for Young Professionals',
      location: 'Sector 18',
      sector: 'Noida',
      image: 'https://placehold.co/600x400/E5E7EB/1F2937',
      beds: 1,
      baths: 1,
      sqft: 650,
      badges: ['Studio', 'Metro Station', 'Furnished'],
      rating: 4.4,
      agent: {
        name: 'Rohit Malhotra',
        image: 'https://placehold.co/100x100/E5E7EB/1F2937',
      },
    },
    {
      id: '6',
      title: 'Family-Friendly 2BHK in Sector 76',
      location: 'Sector 76',
      sector: 'Noida',
      image: 'https://placehold.co/600x400/E5E7EB/1F2937',
      beds: 2,
      baths: 2,
      sqft: 1200,
      badges: ['Family Home', 'School Nearby', 'Park View'],
      rating: 4.5,
      agent: {
        name: 'Kavita Joshi',
        image: 'https://placehold.co/100x100/E5E7EB/1F2937',
      },
    },
  ];

  const noidaSectors = [
    'All Locations',
    'Sector 1', 'Sector 15', 'Sector 18', 'Sector 22', 'Sector 25',
    'Sector 50', 'Sector 62', 'Sector 76', 'Sector 135', 'Sector 150',
    'Greater Noida West', 'Noida Expressway'
  ];

  const propertyTypes = ['All Types', 'Apartment', 'Villa', 'Plot', 'Farmhouse', 'Studio'];
  const bedroomOptions = ['Any', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'];
  const amenityOptions = ['Metro Station', 'Park', 'School', 'Hospital', 'Mall', 'Gym', 'Swimming Pool'];

  const handleAmenityChange = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const filteredProperties = properties.filter(property => {
    if (filters.location && filters.location !== 'All Locations' && 
        !property.location.includes(filters.location) && 
        !property.sector.includes(filters.location)) return false;
    
    if (filters.propertyType && filters.propertyType !== 'All Types') {
      const typeMatch = filters.propertyType.toLowerCase();
      if (!property.badges.some(badge => badge.toLowerCase().includes(typeMatch))) return false;
    }
    
    if (filters.bedrooms && filters.bedrooms !== 'Any') {
      const bedroomNum = parseInt(filters.bedrooms);
      if (filters.bedrooms.includes('5+') && property.beds < 5) return false;
      if (!filters.bedrooms.includes('5+') && property.beds !== bedroomNum) return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-900 mb-2"
              >
                Properties in Noida
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-600"
              >
                {filteredProperties.length} properties found
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-4 mt-4 lg:mt-0"
            >
              {/* View Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white text-brand-red shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'map'
                      ? 'bg-white text-brand-red shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Map className="h-5 w-5" />
                </button>
              </div>

              {/* Filter Toggle */}
              <CTAButton
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </CTAButton>

              {/* Sort */}
              <CTAButton
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2"
              >
                <SortAsc className="h-4 w-4" />
                <span>Sort</span>
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <SearchBar />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Filters</h3>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                >
                  {noidaSectors.map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
              </div>

              {/* Property Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Bedrooms Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                >
                  {bedroomOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter - Disabled/Hidden per requirement */}
              {/* 
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range (PRICES HIDDEN BY REQUIREMENT)
                </label>
                <div className="opacity-50 pointer-events-none">
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    className="w-full"
                    disabled
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹1Cr+</span>
                  </div>
                </div>
              </div>
              */}

              {/* Amenities Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Amenities
                </label>
                <div className="space-y-2">
                  {amenityOptions.map(amenity => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                        className="w-4 h-4 text-brand-red border-gray-300 rounded focus:ring-brand-red"
                      />
                      <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <CTAButton
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setFilters({
                  location: '',
                  propertyType: '',
                  bedrooms: '',
                  amenities: [],
                })}
              >
                Clear All Filters
              </CTAButton>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              // Grid View
              <div>
                {filteredProperties.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                  >
                    {filteredProperties.map((property, index) => (
                      <motion.div
                        key={property.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <PropertyCard property={property} enableTilt={false} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  // No Properties Found
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <div className="max-w-md mx-auto">
                      <Search className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        No Properties Found
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Try adjusting your filters or search criteria to find more properties.
                      </p>
                      <CTAButton variant="primary" size="lg">
                        Contact Us to List Your Property
                      </CTAButton>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              // Map View
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl shadow-lg h-[600px] flex items-center justify-center"
              >
                <div className="text-center">
                  <Map className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Interactive Map View
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Map integration would show property locations with markers
                  </p>
                  <CTAButton
                    variant="primary"
                    onClick={() => setViewMode('grid')}
                  >
                    Switch to Grid View
                  </CTAButton>
                </div>
              </motion.div>
            )}

            {/* Load More Button */}
            {filteredProperties.length > 6 && viewMode === 'grid' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-12"
              >
                <CTAButton variant="outline" size="lg">
                  Load More Properties
                </CTAButton>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;