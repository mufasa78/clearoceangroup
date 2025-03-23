import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select';
import { Search } from 'lucide-react';
import type { IDXSearchParams } from '../types/idx';

const CITIES = [
  { value: '12542', label: 'Miami Beach' },
  { value: '48848', label: 'Fort Lauderdale' },
  { value: '41248', label: 'Boca Raton' },
  { value: '39454', label: 'Palm Beach' }
];

const PROPERTY_TYPES = [
  { value: '1', label: 'Single Family Home' },
  { value: '2', label: 'Condo/Townhouse' },
  { value: '3', label: 'Multi-Family' },
  { value: '4', label: 'Land' }
];

const PRICE_RANGES = [
  { value: '900000-2000000', label: '$900k - $2M' },
  { value: '2000000-5000000', label: '$2M - $5M' },
  { value: '5000000-10000000', label: '$5M - $10M' },
  { value: '10000000-50000000', label: '$10M - $50M' }
];

export function PropertySearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValues, setSearchValues] = React.useState<Partial<IDXSearchParams>>({
    idxID: 'd003',
    pt: 1,
    lp: 900000,
    hp: 50000000
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({
      ...searchValues,
      city: searchValues.city || []
    } as any);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <Select
              isMulti
              options={CITIES}
              placeholder="Select cities"
              className="text-sm"
              onChange={(selected) => setSearchValues({
                ...searchValues,
                city: selected.map(option => option.value)
              })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <Select
              options={PROPERTY_TYPES}
              placeholder="Select type"
              className="text-sm"
              onChange={(selected) => setSearchValues({
                ...searchValues,
                pt: selected ? parseInt(selected.value) : undefined
              })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <Select
              options={PRICE_RANGES}
              placeholder="Select price range"
              className="text-sm"
              onChange={(selected) => {
                if (selected) {
                  const [lp, hp] = selected.value.split('-').map(Number);
                  setSearchValues({
                    ...searchValues,
                    lp,
                    hp
                  });
                }
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
        >
          <Search className="w-5 h-5 mr-2" />
          Search Properties
        </button>
      </form>
    </div>
  );
}