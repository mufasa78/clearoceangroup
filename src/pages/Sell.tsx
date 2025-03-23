import { Helmet } from 'react-helmet-async';
import { Home, DollarSign, ClipboardList, BarChart3, Handshake } from 'lucide-react';

const SELLING_STEPS = [
  {
    icon: Home,
    title: "Home Valuation",
    description: "Get an accurate estimate of your property's current market value."
  },
  {
    icon: ClipboardList,
    title: "Property Preparation",
    description: "Learn how to prepare your home for maximum market appeal."
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "Understand current market conditions and pricing strategies."
  },
  {
    icon: Handshake,
    title: "Closing Process",
    description: "Navigate the final steps of selling your property."
  }
];

export function Sell() {
  return (
    <>
      <Helmet>
        <title>Sell Your Home - Clear Ocean Group</title>
        <meta name="description" content="Sell your waterfront property with Clear Ocean Group. Get expert guidance and maximize your property's value." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sell Your Home</h1>
          <p className="text-xl text-gray-600 mb-8">Get the best value for your waterfront property</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Your Home's Value</h2>
              <p className="text-gray-600 mb-6">Find out how much your property is worth in today's market.</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Property Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Get Valuation
                </button>
              </form>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <DollarSign className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Competitive commission rates and maximum value for your property</span>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Expert market analysis and pricing strategies</span>
                </li>
                <li className="flex items-start">
                  <Handshake className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Dedicated support throughout the selling process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Selling Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Selling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SELLING_STEPS.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <step.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Report Section */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Your Market Report</h2>
          <p className="text-gray-600 mb-6">Receive a detailed analysis of your property's market value and comparable sales in your area.</p>
          <form className="max-w-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Property Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Request Market Report
            </button>
          </form>
        </div>
      </div>
    </>
  );
} 