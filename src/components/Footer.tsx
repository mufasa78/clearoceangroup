import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Clear Ocean Group</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Ocean Drive, Miami Beach, FL 33139
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+13055550123" className="hover:text-blue-400">305-555-0123</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@clearoceangroup.com" className="hover:text-blue-400">
                  info@clearoceangroup.com
                </a>
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/featured-listings" className="hover:text-blue-400">Featured Listings</Link></li>
              <li><Link to="/search-properties" className="hover:text-blue-400">Search Properties</Link></li>
              <li><Link to="/communities" className="hover:text-blue-400">Communities</Link></li>
              <li><Link to="/market-report" className="hover:text-blue-400">Market Report</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Buyers & Sellers</h3>
            <ul className="space-y-2">
              <li><Link to="/home-valuation" className="hover:text-blue-400">Home Valuation</Link></li>
              <li><Link to="/mortgage-calculator" className="hover:text-blue-400">Mortgage Calculator</Link></li>
              <li><Link to="/selling-process" className="hover:text-blue-400">Selling Process</Link></li>
              <li><Link to="/buying-process" className="hover:text-blue-400">Buying Process</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for market updates and exclusive properties.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Clear Ocean Group. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}