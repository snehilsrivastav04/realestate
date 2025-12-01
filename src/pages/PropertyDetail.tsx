import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Tilt } from 'react-tilt';
import { MapPin, Bed, Bath, Square, Star, Heart, Share2, Car, Wifi, Shield, Trees, Dumbbell, Camera, School, Guitar as Hospital, ShoppingBag, Phone, Mail, Calendar } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSellForm, setShowSellForm] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Mock property data - no prices shown
  const property = {
    id: '1',
    title: 'Luxury 4BHK Penthouse with Panoramic City Views',
    location: 'Sector 62, Noida',
    sector: 'Sector 62',
    description: 'Experience luxury living in this stunning 4BHK penthouse featuring premium finishes, spacious layouts, and breathtaking city views. Located in the heart of Noida\'s IT hub with excellent connectivity.',
    images: [
      'https://placehold.co/600x400/E5E7EB/1F2937',
      'https://placehold.co/600x400/E5E7EB/1F2937',
      'https://placehold.co/600x400/E5E7EB/1F2937',
      'https://placehold.co/600x400/E5E7EB/1F2937',
      'https://placehold.co/600x400/E5E7EB/1F2937',
      'https://placehold.co/600x400/E5E7EB/1F2937',
    ],
    beds: 4,
    baths: 4,
    sqft: 3200,
    parking: 2,
    badges: ['Luxury', 'Penthouse', 'Metro-Connected', 'Furnished'],
    rating: 4.9,
    reviews: 27,
    amenities: [
      { name: 'Swimming Pool', icon: '🏊' },
      { name: 'Gym', icon: '🏋️' },
      { name: 'Security', icon: '🛡️' },
      { name: 'Parking', icon: '🚗' },
      { name: 'Garden', icon: '🌳' },
      { name: 'WiFi', icon: '📶' },
      { name: 'Power Backup', icon: '⚡' },
      { name: 'Elevator', icon: '🏗️' },
    ],
    nearbyPlaces: [
      { name: 'Delhi Metro Station', distance: '2 min walk', type: 'transport', icon: '🚇' },
      { name: 'DLF Mall of India', distance: '5 min drive', type: 'shopping', icon: '🛍️' },
      { name: 'Fortis Hospital', distance: '10 min drive', type: 'healthcare', icon: '🏥' },
      { name: 'Delhi Public School', distance: '8 min drive', type: 'education', icon: '🏫' },
      { name: 'Sector 62 Golf Course', distance: '15 min drive', type: 'recreation', icon: '⛳' },
      { name: 'Brahmaputra Market', distance: '3 min walk', type: 'shopping', icon: '🛒' },
    ],
    agent: {
      name: 'Rajesh Kumar',
      title: 'Senior Property Consultant',
      image: 'https://placehold.co/100x100/E5E7EB/1F2937',
      phone: '+91 98765 43210',
      email: 'rajesh.kumar@noidahomes.com',
      experience: '8+ years',
      rating: 4.8,
      totalSales: '150+ properties',
      bio: 'Rajesh is a veteran real estate professional with deep expertise in Noida\'s premium property market. He has helped hundreds of families find their dream homes.',
    },
    highlights: [
      'Prime location in Noida\'s IT corridor',
      '24/7 security with CCTV surveillance',
      'Premium branded fixtures and fittings',
      'Ready-to-move with complete furnishing',
      'Excellent rental potential for investors',
      'Close to expressways and metro connectivity',
    ]
  };

  const handleImageNavigation = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) =>
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === 0 ? property.images.length - 1 : prev - 1
      );
    }
  };

  const SellForm = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl p-6 shadow-xl"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">Sell Your Property</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name*"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number*"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
          required
        />
        <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red">
          <option value="">Property Type*</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="plot">Plot</option>
          <option value="farmhouse">Farmhouse</option>
        </select>
        <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red">
          <option value="">Select Sector*</option>
          <option value="sector-62">Sector 62</option>
          <option value="sector-150">Sector 150</option>
          <option value="greater-noida-west">Greater Noida West</option>
        </select>
        <textarea
          placeholder="Property Details"
          rows={3}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
        />
        <CTAButton variant="primary" className="w-full">
          Submit Details
        </CTAButton>
      </form>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Image Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Parallax speed={-10}>
          <div className="relative h-full">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Navigation Arrows */}
            <button
              onClick={() => handleImageNavigation('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => handleImageNavigation('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              →
            </button>

            {/* Action Buttons */}
            <div className="absolute top-6 right-6 flex space-x-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isLiked 
                    ? 'bg-brand-red text-white' 
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <Camera className="h-5 w-5" />
              </button>
            </div>

            {/* Property Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 bg-brand-red rounded-full text-sm font-semibold"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-lg">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.location}</span>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {property.images.slice(0, 6).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Property Overview</h2>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold">{property.rating}</span>
                      <span className="ml-1">({property.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <CTAButton variant="outline">Request Price Quote</CTAButton>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <Bed className="h-8 w-8 text-brand-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.beds}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="h-8 w-8 text-brand-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.baths}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square className="h-8 w-8 text-brand-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.sqft}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center">
                  <Car className="h-8 w-8 text-brand-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.parking}</div>
                  <div className="text-sm text-gray-600">Parking</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {property.amenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-center space-x-3">
                    <span className="text-2xl">{amenity.icon}</span>
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Location & Nearby */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location & Nearby</h3>
              
              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive map would be integrated here</p>
                </div>
              </div>

              {/* Nearby Places */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.nearbyPlaces.map((place) => (
                  <div key={place.name} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-xl">{place.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{place.name}</div>
                      <div className="text-sm text-gray-600">{place.distance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Property Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
              <ul className="space-y-3">
                {property.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Agent & Actions */}
          <div className="space-y-8">
            {/* Agent Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Tilt options={{ max: 25, scale: 1.05 }}>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="text-center mb-6">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900">{property.agent.name}</h3>
                    <p className="text-gray-600">{property.agent.title}</p>
                    <div className="flex items-center justify-center mt-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{property.agent.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm text-gray-600">
                    <div>Experience: {property.agent.experience}</div>
                    <div>Total Sales: {property.agent.totalSales}</div>
                  </div>

                  <p className="text-sm text-gray-700 mb-6">{property.agent.bio}</p>

                  <div className="space-y-3">
                    <CTAButton variant="primary" size="md" className="w-full flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </CTAButton>
                    <CTAButton variant="outline" size="md" className="w-full flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Agent
                    </CTAButton>
                    <CTAButton variant="ghost" size="md" className="w-full flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Visit
                    </CTAButton>
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <CTAButton variant="outline" size="sm" className="w-full">
                  Download Brochure
                </CTAButton>
                <CTAButton variant="outline" size="sm" className="w-full">
                  Request Virtual Tour
                </CTAButton>
                <CTAButton variant="outline" size="sm" className="w-full">
                  Share Property
                </CTAButton>
                <CTAButton variant="outline" size="sm" className="w-full">
                  Report Issue
                </CTAButton>
              </div>
            </motion.div>

            {/* Sell Form Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-brand-red/5 rounded-2xl p-6 border border-brand-red/20"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">Have a Property to Sell?</h3>
              <p className="text-gray-600 mb-4">Get a free valuation and expert advice from our team</p>
              <CTAButton
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => setShowSellForm(!showSellForm)}
              >
                {showSellForm ? 'Hide Form' : 'Get Free Valuation'}
              </CTAButton>
              
              {showSellForm && (
                <div className="mt-6">
                  <SellForm />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 md:hidden">
        <div className="flex space-x-3">
          <CTAButton variant="outline" className="flex-1">
            Call Agent
          </CTAButton>
          <CTAButton variant="primary" className="flex-1">
            Schedule Visit
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;