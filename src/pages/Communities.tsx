import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Anchor, Palmtree as Palm, Building } from 'lucide-react';

const COMMUNITIES = [
  {
    id: 1,
    name: "Miami Beach",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80",
    description: "Iconic Miami Beach offers luxury waterfront living with world-class amenities and vibrant culture.",
    features: ["Oceanfront Properties", "Private Beaches", "Marina Access"]
  },
  {
    id: 2,
    name: "Fort Lauderdale",
    image: "https://images.unsplash.com/photo-1571041804726-53e8bf082096?auto=format&fit=crop&q=80",
    description: "Known as the 'Venice of America' for its extensive canal system and waterfront homes.",
    features: ["Intracoastal Views", "Deep Water Dockage", "Gated Communities"]
  },
  {
    id: 3,
    name: "Boca Raton",
    image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80",
    description: "Exclusive waterfront estates in a sophisticated setting with premier golf courses.",
    features: ["Golf Communities", "Private Clubs", "Beach Access"]
  }
];

export function Communities() {
  return (
    <>
      <Helmet>
        <title>Communities - Clear Ocean Group</title>
        <meta name="description" content="Explore South Florida's most prestigious waterfront communities and find your perfect luxury home." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Featured Communities</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {COMMUNITIES.map(community => (
            <div key={community.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative pb-[66%]">
                <img
                  src={community.image}
                  alt={community.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{community.name}</h2>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <ul className="space-y-2">
                  {community.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Properties
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Anchor className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Waterfront Access</h3>
            <p className="text-gray-600">Direct ocean and intracoastal access for boating enthusiasts.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <Building className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Amenities</h3>
            <p className="text-gray-600">World-class facilities and services in every community.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <Palm className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Lifestyle</h3>
            <p className="text-gray-600">Resort-style living with year-round outdoor activities.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <MapPin className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">Prime locations near shopping, dining, and entertainment.</p>
          </div>
        </div>
      </div>
    </>
  );
}