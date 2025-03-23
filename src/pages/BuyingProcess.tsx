import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, DollarSign, ClipboardList, Search, Handshake, FileText, Key } from 'lucide-react';

const BUYING_STEPS = [
  {
    icon: DollarSign,
    title: "Financial Preparation",
    description: "Get your finances in order and understand your buying power.",
    details: [
      "Credit score review",
      "Budget assessment",
      "Down payment planning",
      "Pre-approval process"
    ]
  },
  {
    icon: Search,
    title: "Property Search",
    description: "Work with our agents to find your perfect waterfront property.",
    details: [
      "Property type selection",
      "Location preferences",
      "Amenities checklist",
      "Virtual tours"
    ]
  },
  {
    icon: Home,
    title: "Property Viewing",
    description: "Tour potential properties and evaluate them in person.",
    details: [
      "Open house visits",
      "Private showings",
      "Property inspection",
      "Neighborhood exploration"
    ]
  },
  {
    icon: Handshake,
    title: "Making an Offer",
    description: "Our experts will help you craft and negotiate the best offer.",
    details: [
      "Market analysis",
      "Offer strategy",
      "Negotiation process",
      "Contract review"
    ]
  },
  {
    icon: ClipboardList,
    title: "Due Diligence",
    description: "Thoroughly evaluate the property and complete necessary checks.",
    details: [
      "Home inspection",
      "Title search",
      "Property appraisal",
      "Insurance quotes"
    ]
  },
  {
    icon: FileText,
    title: "Closing Process",
    description: "Finalize the purchase and complete all necessary paperwork.",
    details: [
      "Document review",
      "Final walkthrough",
      "Closing costs",
      "Title transfer"
    ]
  },
  {
    icon: Key,
    title: "Move-In",
    description: "Get the keys to your new home and begin your new chapter.",
    details: [
      "Utility setup",
      "Moving coordination",
      "Property orientation",
      "Warranty information"
    ]
  }
];

export function BuyingProcess() {
  return (
    <>
      <Helmet>
        <title>Buying Process - Clear Ocean Group</title>
        <meta name="description" content="Learn about our comprehensive buying process and how we help you find your perfect waterfront property." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Buying Process</h1>
          <p className="text-xl text-gray-600 mb-12">A step-by-step guide to purchasing your waterfront property with Clear Ocean Group</p>

          {/* Process Steps */}
          <div className="space-y-8">
            {BUYING_STEPS.map((step, index) => (
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-gray-600 mb-6">Let our experienced agents guide you through the buying process and help you find your perfect waterfront property.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Start Your Search</h3>
                <p className="text-gray-600 mb-4">Browse our collection of waterfront properties.</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Properties
                </button>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Pre-Approved</h3>
                <p className="text-gray-600 mb-4">Start the mortgage pre-approval process.</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Start Pre-Approval
                </button>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mortgage Calculator</h3>
                <p className="text-gray-600 mb-4">Calculate your monthly payments and explore financing options.</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Calculate Payments →
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Buying Guide</h3>
                <p className="text-gray-600 mb-4">Access our comprehensive guide to buying a waterfront property.</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Read Guide →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 