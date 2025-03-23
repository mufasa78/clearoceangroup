import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Clear Ocean Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="group relative">
              <Link to="/buy" className="text-gray-600 hover:text-blue-600">Buy</Link>
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48">
                <Link to="/featured-listings" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">Featured Listings</Link>
                <Link to="/search-properties" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">Search Properties</Link>
                <Link to="/mortgage-calculator" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">Mortgage Calculator</Link>
              </div>
            </div>
            <div className="group relative">
              <Link to="/sell" className="text-gray-600 hover:text-blue-600">Sell</Link>
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48">
                <Link to="/home-valuation" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">Home Valuation</Link>
                <Link to="/selling-process" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">Selling Process</Link>
                <Link to="/market-report" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">Market Report</Link>
              </div>
            </div>
            <Link to="/communities" className="text-gray-600 hover:text-blue-600">Communities</Link>
            <div className="group relative">
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48">
                <Link to="/our-team" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">Our Team</Link>
                <Link to="/testimonials" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">Testimonials</Link>
                <Link to="/careers" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">Careers</Link>
              </div>
            </div>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              List Your Property
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <Link to="/buy" className="block text-gray-600 hover:text-blue-600 font-semibold">Buy</Link>
                <Link to="/featured-listings" className="block text-gray-600 hover:text-blue-600 pl-4">Featured Listings</Link>
                <Link to="/search-properties" className="block text-gray-600 hover:text-blue-600 pl-4">Search Properties</Link>
                <Link to="/mortgage-calculator" className="block text-gray-600 hover:text-blue-600 pl-4">Mortgage Calculator</Link>
              </div>
              <div className="space-y-2">
                <Link to="/sell" className="block text-gray-600 hover:text-blue-600 font-semibold">Sell</Link>
                <Link to="/home-valuation" className="block text-gray-600 hover:text-blue-600 pl-4">Home Valuation</Link>
                <Link to="/selling-process" className="block text-gray-600 hover:text-blue-600 pl-4">Selling Process</Link>
                <Link to="/market-report" className="block text-gray-600 hover:text-blue-600 pl-4">Market Report</Link>
              </div>
              <Link to="/communities" className="block text-gray-600 hover:text-blue-600 font-semibold">Communities</Link>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-600 hover:text-blue-600 font-semibold">About</Link>
                <Link to="/our-team" className="block text-gray-600 hover:text-blue-600 pl-4">Our Team</Link>
                <Link to="/testimonials" className="block text-gray-600 hover:text-blue-600 pl-4">Testimonials</Link>
                <Link to="/careers" className="block text-gray-600 hover:text-blue-600 pl-4">Careers</Link>
              </div>
              <Link to="/blog" className="block text-gray-600 hover:text-blue-600 font-semibold">Blog</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-blue-600 font-semibold">Contact</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                List Your Property
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}