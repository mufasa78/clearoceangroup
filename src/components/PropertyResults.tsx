import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import { searchProperties } from '../services/idx';
import type { IDXListing } from '../types/idx';

export function PropertyResults() {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const { data, isLoading, error } = useQuery({
    queryKey: ['properties', params],
    queryFn: () => searchProperties(params),
    enabled: Object.keys(params).length > 0
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Skeleton height={200} />
            <div className="p-6">
              <Skeleton count={4} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading properties. Please try again later.</p>
      </div>
    );
  }

  if (!data?.listings?.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No properties found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.listings.map((listing: IDXListing) => (
        <div key={listing.listingID} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative pb-[66%]">
            <img
              src={listing.photos[0]}
              alt={listing.address}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
              {listing.status}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{listing.address}</h3>
            <p className="text-2xl text-blue-600 font-bold mb-4">
              ${listing.price.toLocaleString()}
            </p>
            <div className="flex items-center justify-between text-gray-600 mb-4">
              <span>{listing.beds} beds</span>
              <span>{listing.baths} baths</span>
              <span>{listing.sqft.toLocaleString()} sqft</span>
            </div>
            <p className="text-gray-600 mb-4">
              {listing.city}, {listing.state} {listing.zipcode}
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}