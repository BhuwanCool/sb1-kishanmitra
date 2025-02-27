import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { CropAdvisory } from '../types/database';

export function useCropAdvisories() {
  const [advisories, setAdvisories] = useState<CropAdvisory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAdvisories() {
      try {
        const { data, error } = await supabase
          .from('crop_advisories')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setAdvisories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchAdvisories();
  }, []);

  return { advisories, loading, error };
}