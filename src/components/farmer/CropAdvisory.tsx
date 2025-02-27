import React from 'react';
import { AlertCircle, Sprout } from 'lucide-react';
import { useCropAdvisories } from '../../hooks/useCropAdvisories';

export function CropAdvisoryWidget() {
  const { advisories, loading, error } = useCropAdvisories();

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Crop Advisory</h2>
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
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Crop Advisory</h2>
        <div className="text-red-500 flex items-center">
          <AlertCircle className="mr-2" />
          <p>Error loading crop advisories</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Crop Advisory</h2>
      <div className="space-y-4">
        {advisories?.map((advisory, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Sprout className="text-theme-tertiary mt-1" />
            <div>
              <p className="font-medium">{advisory.title}</p>
              <p className="text-sm text-gray-600">{advisory.message}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-primary w-full mt-4">
        View All Advisories
      </button>
    </div>
  );
}