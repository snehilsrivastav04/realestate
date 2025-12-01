import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, Map, SortAsc, Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import CTAButton from '../components/CTAButton';

const Commercial = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    area: '',
    amenities: [] as string[],
  });

  const properties = [
    {
      id: '1',
      title: 'Modern Office Space in Sector 62',
      location: 'Sector 62',
      sector: 'Noida',
      image: '/office-space-2.jpg',
      beds: 0, // Not applicable
      baths: 2, // Washrooms
      sqft: 5000,
      badges: ['Office Space', 'IT Hub', 'Metro-Connected'],
      rating: 4.9,
      agent: {
        name: 'Rajesh Kumar',
        image: '/agent-1.jpg',
      },
    },
    {
      id: '2',
      title: 'Retail Showroom on Main Road',
      location: 'Sector 18',
      sector: 'Noida',
      image: '/retail-store-2.jpg',
      beds: 0,
      baths: 1,
      sqft: 2500,
      badges: ['Retail', 'High-Footfall'],
      rating: 4.8,
      agent: {
        name: 'Priya Sharma',
        image: '/agent-2.jpg',
      },
    },
    {
      id: '3',
      title: 'Fully-Furnished PG for Students',
      location: 'Knowledge Park 3',
      sector: 'Greater Noida',
      image: '/pg-hostel-2.jpg',
      beds: 50, // Rooms/beds
      baths: 25,
      sqft: 15000,
      badges: ['PG/Hostel', 'Student-Friendly', 'Mess Included'],
      rating: 4.7,
      agent: {
        name: 'Amit Singh',
        image: '/agent-3.jpg',
      },
    },
    {
      id: '4',
      title: 'School Building with Playground',
      location: 'Sector 137',
      sector: 'Noida Expressway',
      image: '/school-2.jpg',
      beds: 0, // Classrooms
      baths: 10,
      sqft: 30000,
      badges: ['School', 'Educational', 'Large Campus'],
      rating: 4.9,
      agent: {
        name: 'Sneha Gupta',
        image: '/agent-4.jpg',
      },
    },
  ];

  const noidaSectors = [
    'All Locations',
    'Sector 1', 'Sector 18', 'Sector 62', 'Sector 137',
    'Greater Noida', 'Noida Expressway'
  ];

  const propertyTypes = ['All Types', 'Office Space', 'Retail', 'PG/Hostel', 'School'];
  const areaOptions = ['Any', '1000-5000 sqft', '5000-10000 sqft', '10000+ sqft'];
  const amenityOptions = ['Metro Station', 'Parking', 'Power Backup', 'Furnished', 'Cafeteria'];

  const handleAmenityChange = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const filteredProperties = properties;

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
                Commercial Properties for Lease
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
               <CTAButton
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </CTAButton>
            </motion.div>
          </div>
        </div>
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

              {/* Area Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area (sqft)
                </label>
                <select
                  value={filters.area}
                  onChange={(e) => setFilters(prev => ({ ...prev, area: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                >
                  {areaOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

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

              <CTAButton
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setFilters({
                  location: '',
                  propertyType: '',
                  area: '',
                  amenities: [],
                })}
              >
                Clear All Filters
              </CTAButton>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
