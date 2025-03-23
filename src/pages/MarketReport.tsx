import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, DollarSign } from 'lucide-react';

export function MarketReport() {
  return (
    <>
      <Helmet>
        <title>Market Report - Clear Ocean Group</title>
        <meta name="description" content="Stay informed with the latest real estate market trends and insights for South Florida's luxury waterfront properties." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">South Florida Market Report</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Market Statistics</h3>
            <p className="text-gray-600">Comprehensive data on property values, sales trends, and market dynamics.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Price Trends</h3>
            <p className="text-gray-600">Analysis of pricing trends across different neighborhoods and property types.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Investment Insights</h3>
            <p className="text-gray-600">Expert insights on investment opportunities and market forecasts.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Market Overview</h2>
          <div className="space-y-6">
            <p className="text-gray-600">The South Florida luxury real estate market continues to show strong performance, with waterfront properties experiencing particularly high demand. Key factors driving the market include:</p>
            
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>Limited inventory of premium waterfront properties</li>
              <li>Strong interest from domestic and international buyers</li>
              <li>Continued population growth in South Florida</li>
              <li>Favorable tax environment</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Your Custom Market Report</h2>
          <form className="max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Request Report
            </button>
          </form>
        </div>
      </div>
    </>
  );
}