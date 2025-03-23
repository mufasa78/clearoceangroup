import axios from 'axios';
import type { IDXSearchParams, IDXSearchResponse } from '../types/idx';

const IDX_API_KEY = import.meta.env.VITE_IDX_API_KEY;
const IDX_BASE_URL = 'https://api.idxbroker.com/clients/';

const idxApi = axios.create({
  baseURL: IDX_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'accesskey': IDX_API_KEY
  }
});

export async function searchProperties(params: IDXSearchParams): Promise<IDXSearchResponse> {
  try {
    const response = await idxApi.get('/featured', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching IDX properties:', error);
    throw error;
  }
}

export async function getPropertyDetails(listingId: string) {
  try {
    const response = await idxApi.get(`/listing/${listingId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching property details:', error);
    throw error;
  }
}