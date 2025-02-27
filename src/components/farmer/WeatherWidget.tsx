import React from 'react';
import { Cloud, Sun, CloudRain, AlertCircle } from 'lucide-react';
import { useWeatherAlerts } from '../../hooks/useWeatherAlerts';

export function WeatherWidget() {
  const { alerts, loading, error } = useWeatherAlerts();

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Weather Forecast</h2>
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
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Weather Forecast</h2>
        <div className="text-red-500 flex items-center">
          <AlertCircle className="mr-2" />
          <p>Error loading weather data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Weather Forecast</h2>
      <div className="space-y-4">
        {alerts?.map((alert, index) => (
          <div key={index} className="flex items-start space-x-3">
            {alert.severity === 'high' ? (
              <AlertCircle className="text-red-500 mt-1" />
            ) : (
              <CloudRain className="text-blue-500 mt-1" />
            )}
            <div>
              <p className="font-medium">{alert.title}</p>
              <p className="text-sm text-gray-600">{alert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}