import React, { useState } from 'react';
import { Brain, Plane as Plant, CloudRain, TrendingUp, AlertTriangle, Sprout, Bug, Droplets, Check } from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar 
} from 'recharts';

const yieldPredictions = [
  { month: 'Jan', predicted: 85, actual: 82 },
  { month: 'Feb', predicted: 88, actual: 87 },
  { month: 'Mar', predicted: 92, actual: 90 },
  { month: 'Apr', predicted: 90, actual: 88 },
  { month: 'May', predicted: 85, actual: 84 },
  { month: 'Jun', predicted: 82, actual: 80 }
];

const cropRecommendations = [
  {
    crop: "Wheat",
    confidence: 92,
    reasons: [
      "Suitable soil conditions",
      "Optimal temperature range",
      "Market demand trending up"
    ]
  },
  {
    crop: "Soybeans",
    confidence: 88,
    reasons: [
      "Good rainfall prediction",
      "High market potential",
      "Low pest risk"
    ]
  },
  {
    crop: "Cotton",
    confidence: 85,
    reasons: [
      "Favorable climate forecast",
      "Strong price trends",
      "Available water resources"
    ]
  }
];

const pestPredictions = [
  {
    pest: "Aphids",
    risk: "High",
    affectedCrops: ["Wheat", "Cotton"],
    preventiveMeasures: "Apply neem-based solutions, monitor regularly"
  },
  {
    pest: "Stem Borer",
    risk: "Medium",
    affectedCrops: ["Rice"],
    preventiveMeasures: "Use pheromone traps, timely irrigation"
  },
  {
    pest: "Whitefly",
    risk: "Low",
    affectedCrops: ["Cotton", "Vegetables"],
    preventiveMeasures: "Yellow sticky traps, natural predators"
  }
];

const marketTrends = [
  { month: 'Jan', price: 2100 },
  { month: 'Feb', price: 2300 },
  { month: 'Mar', price: 2200 },
  { month: 'Apr', price: 2400 },
  { month: 'May', price: 2600 },
  { month: 'Jun', price: 2500 }
];

export function AIRecommendations() {
  const [selectedCrop, setSelectedCrop] = useState('Wheat');

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">AI Recommendations</h1>
        <select 
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
        >
          <option>Wheat</option>
          <option>Rice</option>
          <option>Cotton</option>
          <option>Soybeans</option>
        </select>
      </div>

      {/* AI Insights Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Yield Prediction</p>
              <p className="text-2xl font-bold text-theme-secondary">92%</p>
            </div>
            <Plant size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Weather Risk</p>
              <p className="text-2xl font-bold text-theme-secondary">Low</p>
            </div>
            <CloudRain size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Market Potential</p>
              <p className="text-2xl font-bold text-theme-secondary">High</p>
            </div>
            <TrendingUp size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Pest Risk</p>
              <p className="text-2xl font-bold text-theme-secondary">Medium</p>
            </div>
            <Bug size={24} className="text-theme-primary" />
          </div>
        </div>
      </div>

      {/* Yield Predictions Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Yield Predictions vs Actual</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={yieldPredictions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="var(--color-primary)" 
                strokeWidth={2}
                name="Predicted Yield"
              />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="var(--color-tertiary)" 
                strokeWidth={2}
                name="Actual Yield"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Crop Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Crop Recommendations</h2>
          <div className="space-y-4">
            {cropRecommendations.map((rec, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-theme-primary">{rec.crop}</h3>
                  <span className="px-3 py-1 bg-theme-primary bg-opacity-10 text-theme-primary rounded-full text-sm">
                    {rec.confidence}% Confidence
                  </span>
                </div>
                <div className="space-y-2">
                  {rec.reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      {reason}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Price Prediction */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Market Price Prediction</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marketTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="var(--color-primary)" name="Price (₹/q)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Pest and Disease Predictions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Pest & Disease Predictions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pestPredictions.map((pest, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">{pest.pest}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  pest.risk === 'High' 
                    ? 'bg-red-100 text-red-800'
                    : pest.risk === 'Medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {pest.risk} Risk
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium">Affected Crops:</span>{' '}
                  {pest.affectedCrops.join(', ')}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Prevention:</span>{' '}
                  {pest.preventiveMeasures}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Droplets className="text-theme-primary" size={24} />
            <h3 className="font-semibold text-theme-secondary">Irrigation Advisory</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">Next irrigation recommended in 2 days</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-theme-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-500">Soil moisture: 70%</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Sprout className="text-theme-primary" size={24} />
            <h3 className="font-semibold text-theme-secondary">Growth Stage</h3>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">Current: Vegetative Growth</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Progress:</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-theme-primary rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-sm text-gray-500">45%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="text-theme-primary" size={24} />
            <h3 className="font-semibold text-theme-secondary">Risk Alerts</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-yellow-800 bg-yellow-50 p-2 rounded">
              <AlertTriangle size={16} />
              <p className="text-sm">Potential frost risk in next week</p>
            </div>
            <div className="flex items-center space-x-2 text-blue-800 bg-blue-50 p-2 rounded">
              <AlertTriangle size={16} />
              <p className="text-sm">Heavy rainfall expected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}