const API_KEY = 'YOUR_API_KEY'; // You should get this from environment variables
const BASE_URL = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070';

export async function fetchMandiRates(limit = 10, offset = 0) {
  try {
    const response = await fetch(
      `${BASE_URL}?api-key=${API_KEY}&format=json&limit=${limit}&offset=${offset}`
    );
    if (!response.ok) throw new Error('Failed to fetch mandi rates');
    return await response.json();
  } catch (error) {
    console.error('Error fetching mandi rates:', error);
    throw error;
  }
}

// Mock data for development (remove in production)
export const getMockMandiRates = () => ({
  records: [
    {
      state: 'Madhya Pradesh',
      district: 'Indore',
      market: 'Indore Mandi',
      commodity: 'Wheat',
      variety: 'Sharbati',
      arrival_date: '2024-03-22',
      min_price: 2000,
      max_price: 2200,
      modal_price: 2100
    },
    {
      state: 'Haryana',
      district: 'Karnal',
      market: 'Karnal Mandi',
      commodity: 'Rice',
      variety: 'Basmati',
      arrival_date: '2024-03-22',
      min_price: 3400,
      max_price: 3600,
      modal_price: 3500
    },
    // Add more mock data as needed
  ],
  total: 2,
  success: true
});