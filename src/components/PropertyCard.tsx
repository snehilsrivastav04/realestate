import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { MapPin, Bed, Bath, Square, Star } from 'lucide-react';
import CTAButton from './CTAButton';

interface Property {
  id: string;
  title: string;
  location: string;
  sector: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  badges: string[];
  rating?: number;
  agent?: {
    name: string;
    image: string;
  };
}

interface PropertyCardProps {
  property: Property;
  className?: string;
  enableTilt?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  className = '',
  enableTilt = true,
}) => {
  const CardWrapper = enableTilt ? Tilt : motion.div;
  
  const tiltOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const cardProps = enableTilt
    ? { options: tiltOptions }
    : {
        whileHover: { scale: 1.02, y: -5 },
        transition: { duration: 0.3 }
      };

  return (
    <CardWrapper {...cardProps} className={className}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <motion.img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {property.badges.slice(0, 2).map((badge, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-brand-red text-white text-xs font-semibold rounded-full shadow-md"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Rating */}
          {property.rating && (
            <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold text-gray-800">
                {property.rating}
              </span>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {property.title}
            </h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="h-4 w-4 mr-1 text-brand-red" />
              <span>{property.location}, {property.sector}</span>
            </div>
          </div>

          {/* Property Details */}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Bed className="h-4 w-4" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="h-4 w-4" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square className="h-4 w-4" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>

          {/* Agent Info */}
          {property.agent && (
            <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
              <img
                src={property.agent.image}
                alt={property.agent.name}
                className="w-8 h-8 rounded-full mr-3"
              />
              <span className="text-sm text-gray-600">Agent: {property.agent.name}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <CTAButton
              variant="outline"
              size="sm"
              className="flex-1 text-center"
              onClick={() => console.log('View details:', property.id)}
            >
              View Details
            </CTAButton>
            <CTAButton
              variant="primary"
              size="sm"
              onClick={() => console.log('Schedule tour:', property.id)}
            >
              Schedule Tour
            </CTAButton>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default PropertyCard;