import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { MarketInsight } from '../types/database';

export function useMarketInsights() {
  const [insights, setInsights] = useState<MarketInsight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInsights() {
      try {
        const { data, error } = await supabase
          .from('market_insights')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setInsights(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchInsights();
  }, []);

  return { insights, loading, error };
}