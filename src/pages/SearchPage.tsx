import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PropertySearch } from '../components/PropertySearch';
import { PropertyResults } from '../components/PropertyResults';

export function SearchPage() {
  return (
    <>
      <Helmet>
        <title>Search Properties - Clear Ocean Group</title>
        <meta name="description" content="Search luxury waterfront properties in Miami Beach, Fort Lauderdale, and surrounding areas." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Search Properties</h1>
        <PropertySearch />
        <div className="mt-12">
          <PropertyResults />
        </div>
      </div>
    </>
  );
}