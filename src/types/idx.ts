export interface IDXSearchParams {
  idxID: string;
  pt?: number; // Property Type
  lp?: number; // Low Price
  hp?: number; // High Price
  bd?: number; // Bedrooms
  ba?: number; // Bathrooms
  sqft?: number; // Square Feet
  acres?: number; // Acres
  city?: string[];
  zip?: string[];
  status?: string[];
}

export interface IDXListing {
  listingID: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  acres?: number;
  propertyType: string;
  status: string;
  photos: string[];
  description: string;
  features: string[];
  virtualTour?: string;
}

export interface IDXSearchResponse {
  listings: IDXListing[];
  totalResults: number;
  currentPage: number;
  totalPages: number;
}