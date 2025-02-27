import React from 'react';
import { TrendingUp, BarChart2, AlertCircle } from 'lucide-react';
import { useMarketInsights } from '../../hooks/useMarketInsights';

export function MarketInsights() {
  const { insights, loading, error } = useMarketInsights();

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Market Insights</h2>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Market Insights</h2>
        <div className="text-red-500 flex items-center">
          <AlertCircle className="mr-2" />
          <p>Error loading market insights</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Market Insights</h2>
      <div className="space-y-4">
        {insights?.map((insight, index) => (
          <div key={index} className="flex items-start space-x-3">
            {index % 2 === 0 ? (
              <TrendingUp size={20} className="text-theme-tertiary mt-1" />
            ) : (
              <BarChart2 size={20} className="text-theme-tertiary mt-1" />
            )}
            <div>
              <p className="font-medium text-theme-secondary">{insight.title}</p>
              <p className="text-sm text-gray-600">{insight.message}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-primary w-full mt-4">
        View All Insights
      </button>
    </div>
  );
}