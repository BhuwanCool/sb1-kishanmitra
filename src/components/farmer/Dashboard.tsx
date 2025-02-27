import React from 'react';
import { MandiRates } from './MandiRates';
import { WeatherWidget } from './WeatherWidget';
import { CropAdvisory } from './CropAdvisory';
import { MarketInsights } from './MarketInsights';

export function Dashboard() {
  return (
    <main className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MandiRates />
        <WeatherWidget />
        <CropAdvisory />
        <MarketInsights />
      </div>
    </main>
  );
}