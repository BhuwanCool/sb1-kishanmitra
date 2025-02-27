import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { WeatherAlert } from '../types/database';

export function useWeatherAlerts() {
  const [alerts, setAlerts] = useState<WeatherAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const { data, error } = await supabase
          .from('weather_alerts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setAlerts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchAlerts();
  }, []);

  return { alerts, loading, error };
}