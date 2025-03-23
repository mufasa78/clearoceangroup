import { Helmet } from 'react-helmet-async';
import { Search, MapPin, Home, DollarSign, BedDouble, Bath } from 'lucide-react';

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Luxury Oceanfront Estate",
    price: 2500000,
    location: "Miami Beach, FL",
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Modern Waterfront Condo",
    price: 1200000,
    location: "Fort Lauderdale, FL",
    beds: 3,
    baths: 2,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Beachfront Villa",
    price: 1800000,
    location: "Boca Raton, FL",
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c3a6f09?auto=format&fit=crop&q=80"
  }
];

export function Buy() {
  return (
    <>
      <Helmet>
        <title>Buy a Home - Clear Ocean Group</title>
        <meta name="description" content="Find your dream waterfront property with Clear Ocean Group. Browse our extensive collection of luxury homes and condos." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Dream Home</h1>
          <p className="text-xl text-gray-600 mb-8">Discover luxury waterfront properties across South Florida</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                placeholder="Price Range"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>

        {/* Featured Properties */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROPERTIES.map(property => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative pb-[66%]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
                  <p className="text-2xl text-blue-600 font-bold mb-4">
                    ${property.price.toLocaleString()}
                  </p>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <BedDouble className="w-5 h-5 mr-1" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 mr-1" />
                      <span>{property.baths} baths</span>
                    </div>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Featured Listings</h3>
            <p className="text-gray-600 mb-4">Browse our handpicked selection of premium properties.</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
              View Featured Listings →
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Search Properties</h3>
            <p className="text-gray-600 mb-4">Use our advanced search to find your perfect home.</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
              Start Search →
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mortgage Calculator</h3>
            <p className="text-gray-600 mb-4">Calculate your monthly payments and explore financing options.</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
              Calculate Now →
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 