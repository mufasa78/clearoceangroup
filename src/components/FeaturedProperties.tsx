import React from 'react';
import { Property } from '../types/property';

const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Oceanfront Villa',
    price: 2500000,
    address: '123 Ocean Drive',
    city: 'Miami Beach',
    state: 'FL',
    zipCode: '33139',
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    description: 'Stunning oceanfront villa with panoramic views',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80'],
    features: ['Ocean View', 'Pool', 'Private Beach Access'],
    type: 'sale',
    status: 'active',
    coordinates: { lat: 25.7617, lng: -80.1918 }
  },
  {
    id: '2',
    title: 'Modern Beachside Condo',
    price: 1200000,
    address: '456 Coastal Way',
    city: 'Fort Lauderdale',
    state: 'FL',
    zipCode: '33301',
    beds: 3,
    baths: 2,
    sqft: 1800,
    description: 'Contemporary condo with direct beach access',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80'],
    features: ['Beach Access', 'Gym', 'Covered Parking'],
    type: 'sale',
    status: 'active',
    coordinates: { lat: 26.1224, lng: -80.1373 }
  }
];

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative pb-[66%]">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                  {property.status === 'active' ? 'For Sale' : property.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
                <p className="text-2xl text-blue-600 font-bold mb-4">
                  ${property.price.toLocaleString()}
                </p>
                <div className="flex items-center justify-between text-gray-600 mb-4">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
                <p className="text-gray-600 mb-4">{property.address}, {property.city}, {property.state}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}