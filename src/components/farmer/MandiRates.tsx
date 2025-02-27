import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useMandiRates } from '../../hooks/useMandiRates';

export function MandiRatesWidget() {
  const { rates, loading, error } = useMandiRates(5);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Live Mandi Rates</h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="h-12 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Live Mandi Rates</h2>
        <p className="text-red-500">Error loading rates: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Live Mandi Rates</h2>
      <div className="space-y-4">
        {rates.map((rate, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-theme-secondary">{rate.commodity}</p>
              <p className="text-lg font-semibold">₹{rate.modal_price}/q</p>
              <p className="text-xs text-gray-500">{rate.market}</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center space-x-1 text-gray-600">
                <span className="text-sm">Min: ₹{rate.min_price}</span>
                <span className="text-sm">Max: ₹{rate.max_price}</span>
              </div>
              <p className="text-xs text-gray-500">{new Date(rate.arrival_date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-primary w-full mt-4">
        View All Rates
      </button>
    </div>
  );
}