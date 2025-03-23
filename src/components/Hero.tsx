import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Dream Home by the Ocean
        </h1>
        <p className="text-xl text-white mb-8">
          Discover luxury waterfront properties along Florida's most beautiful coastlines
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter location, ZIP code, or address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="apartment">Apartment</option>
            </select>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}