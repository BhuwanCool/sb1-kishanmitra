import { useState, useEffect } from 'react';
import { fetchMandiRates, getMockMandiRates } from '../services/mandiRates';
import type { MandiRate, MandiRatesResponse } from '../types/mandiRates';

export function useMandiRates(limit = 10) {
  const [rates, setRates] = useState<MandiRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRates() {
      try {
        setLoading(true);
        setError(null);
        
        // Use mock data for now since we don't have the API key
        // In production, replace with: const data = await fetchMandiRates(limit);
        const data = getMockMandiRates();
        
        setRates(data.records);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch mandi rates');
      } finally {
        setLoading(false);
      }
    }

    loadRates();
  }, [limit]);

  return { rates, loading, error };
}