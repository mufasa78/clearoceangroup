import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, DollarSign, ClipboardList, Camera, Handshake, FileText } from 'lucide-react';

const SELLING_STEPS = [
  {
    icon: Home,
    title: "Home Preparation",
    description: "We'll help you prepare your home for sale, including repairs, cleaning, and staging recommendations.",
    details: [
      "Professional cleaning and maintenance",
      "Minor repairs and updates",
      "Home staging consultation",
      "Curb appeal enhancement"
    ]
  },
  {
    icon: DollarSign,
    title: "Pricing Strategy",
    description: "Our experts will analyze market conditions and comparable properties to determine the optimal listing price.",
    details: [
      "Market analysis",
      "Comparative property review",
      "Price optimization",
      "Value assessment"
    ]
  },
  {
    icon: Camera,
    title: "Marketing",
    description: "We'll create a comprehensive marketing plan to showcase your property to potential buyers.",
    details: [
      "Professional photography",
      "Virtual tours",
      "Online listings",
      "Social media promotion"
    ]
  },
  {
    icon: ClipboardList,
    title: "Showings",
    description: "We'll coordinate and manage property showings to maximize exposure to qualified buyers.",
    details: [
      "Open house events",
      "Private showings",
      "Virtual tours",
      "Feedback collection"
    ]
  },
  {
    icon: Handshake,
    title: "Negotiations",
    description: "Our experienced agents will handle all negotiations to get you the best possible offer.",
    details: [
      "Offer review",
      "Counter-offer strategy",
      "Terms negotiation",
      "Closing coordination"
    ]
  },
  {
    icon: FileText,
    title: "Closing",
    description: "We'll guide you through the closing process to ensure a smooth transaction.",
    details: [
      "Document preparation",
      "Title search",
      "Final walkthrough",
      "Closing coordination"
    ]
  }
];

export function SellingProcess() {
  return (
    <>
      <Helmet>
        <title>Selling Process - Clear Ocean Group</title>
        <meta name="description" content="Learn about our comprehensive selling process and how we help you get the best value for your waterfront property." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Selling Process</h1>
          <p className="text-xl text-gray-600 mb-12">A step-by-step guide to selling your waterfront property with Clear Ocean Group</p>

          {/* Process Steps */}
          <div className="space-y-8">
            {SELLING_STEPS.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Step {index + 1}: {step.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Sell Your Property?</h2>
            <p className="text-gray-600 mb-6">Let our experienced agents guide you through the selling process and help you get the best value for your waterfront property.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Started Today</h3>
                <p className="text-gray-600 mb-4">Schedule a consultation with one of our real estate experts.</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Schedule Consultation
                </button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Home Valuation</h3>
                <p className="text-gray-600 mb-4">Find out how much your property is worth in today's market.</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Get Your Valuation
                </button>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Market Reports</h3>
                <p className="text-gray-600 mb-4">Access detailed market analysis and trends for your area.</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  View Market Reports →
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Selling Tips</h3>
                <p className="text-gray-600 mb-4">Learn expert tips for preparing your home for sale.</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Read Selling Tips →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 