export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  images: string[];
  features: string[];
  type: 'sale' | 'rent';
  status: 'active' | 'pending' | 'sold';
  coordinates: {
    lat: number;
    lng: number;
  };
}