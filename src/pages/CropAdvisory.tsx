import React, { useState } from 'react';
import { 
  Sprout, AlertCircle, Calendar, Droplets, 
  Bug, Leaf, MessageCircle, BookOpen 
} from 'lucide-react';

const cropGuides = [
  {
    crop: 'Wheat',
    season: 'Rabi',
    stages: [
      { name: 'Sowing', timing: 'October-November', advice: 'Use certified seeds, maintain proper spacing' },
      { name: 'Irrigation', timing: 'Critical stages', advice: 'First irrigation 21 days after sowing' },
      { name: 'Fertilizer', timing: 'Multiple stages', advice: 'Apply NPK in recommended doses' },
      { name: 'Harvesting', timing: 'March-April', advice: 'Harvest when grains are fully mature' }
    ]
  },
  {
    crop: 'Rice',
    season: 'Kharif',
    stages: [
      { name: 'Nursery', timing: 'June', advice: 'Prepare raised nursery beds' },
      { name: 'Transplanting', timing: 'July', advice: 'Transplant 21-25 days old seedlings' },
      { name: 'Water Management', timing: 'Throughout', advice: 'Maintain 5cm water level' },
      { name: 'Harvesting', timing: 'October-November', advice: 'Harvest when 80% grains are mature' }
    ]
  }
];

const pestAlerts = [
  {
    crop: 'Wheat',
    pest: 'Aphids',
    severity: 'High',
    solution: 'Apply recommended insecticides, monitor regularly'
  },
  {
    crop: 'Rice',
    pest: 'Stem Borer',
    severity: 'Medium',
    solution: 'Use pheromone traps, apply neem-based solutions'
  }
];

export function CropAdvisory() {
  const [selectedCrop, setSelectedCrop] = useState('Wheat');
  const [selectedTab, setSelectedTab] = useState('guide');

  const selectedGuide = cropGuides.find(guide => guide.crop === selectedCrop);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Crop Advisory</h1>
        <select 
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
        >
          {cropGuides.map(guide => (
            <option key={guide.crop} value={guide.crop}>{guide.crop}</option>
          ))}
        </select>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        <button
          onClick={() => setSelectedTab('guide')}
          className={`pb-2 px-4 ${
            selectedTab === 'guide'
              ? 'border-b-2 border-theme-primary text-theme-primary'
              : 'text-gray-600'
          }`}
        >
          Crop Guide
        </button>
        <button
          onClick={() => setSelectedTab('alerts')}
          className={`pb-2 px-4 ${
            selectedTab === 'alerts'
              ? 'border-b-2 border-theme-primary text-theme-primary'
              : 'text-gray-600'
          }`}
        >
          Pest Alerts
        </button>
        <button
          onClick={() => setSelectedTab('expert')}
          className={`pb-2 px-4 ${
            selectedTab === 'expert'
              ? 'border-b-2 border-theme-primary text-theme-primary'
              : 'text-gray-600'
          }`}
        >
          Expert Connect
        </button>
      </div>

      {/* Crop Guide Content */}
      {selectedTab === 'guide' && selectedGuide && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Crop Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Sprout className="text-theme-primary" size={24} />
              <h2 className="text-xl font-semibold text-theme-secondary">
                {selectedGuide.crop} Cultivation Guide
              </h2>
            </div>
            <div className="space-y-4">
              {selectedGuide.stages.map((stage, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <h3 className="font-medium text-theme-primary mb-2">{stage.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <Calendar size={16} className="inline mr-2" />
                    Timing: {stage.timing}
                  </p>
                  <p className="text-sm text-gray-600">
                    <AlertCircle size={16} className="inline mr-2" />
                    {stage.advice}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-theme-secondary mb-4">Best Practices</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Droplets className="text-theme-tertiary mt-1" />
                  <div>
                    <p className="font-medium">Water Management</p>
                    <p className="text-sm text-gray-600">Maintain proper irrigation schedule based on crop stage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bug className="text-theme-tertiary mt-1" />
                  <div>
                    <p className="font-medium">Pest Management</p>
                    <p className="text-sm text-gray-600">Regular monitoring and integrated pest management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="text-theme-tertiary mt-1" />
                  <div>
                    <p className="font-medium">Nutrient Management</p>
                    <p className="text-sm text-gray-600">Balanced fertilizer application as per soil test</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-theme-secondary mb-4">Government Schemes</h2>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-theme-primary">PM-KISAN</h3>
                  <p className="text-sm text-gray-600">Direct income support of ₹6000 per year</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-theme-primary">Soil Health Card</h3>
                  <p className="text-sm text-gray-600">Free soil testing and recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pest Alerts Content */}
      {selectedTab === 'alerts' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pestAlerts.map((alert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-theme-primary">{alert.crop}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  alert.severity === 'High' ? 'bg-red-100 text-red-800' :
                  alert.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {alert.severity} Risk
                </span>
              </div>
              <p className="text-lg font-medium mb-2">{alert.pest}</p>
              <p className="text-gray-600">{alert.solution}</p>
            </div>
          ))}
        </div>
      )}

      {/* Expert Connect Content */}
      {selectedTab === 'expert' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="text-theme-primary" size={24} />
              <h2 className="text-xl font-semibold text-theme-secondary">
                Connect with Experts
              </h2>
            </div>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-theme-primary bg-opacity-10 rounded-full flex items-center justify-center">
                    <BookOpen className="text-theme-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Agricultural Expert</p>
                    <p className="text-sm text-gray-600">Available Now</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-theme-primary text-white rounded-lg">
                  Connect
                </span>
              </button>
              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-theme-secondary bg-opacity-10 rounded-full flex items-center justify-center">
                    <Bug className="text-theme-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Pest Control Specialist</p>
                    <p className="text-sm text-gray-600">Available in 10 mins</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-theme-secondary text-white rounded-lg">
                  Connect
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-theme-secondary mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium text-theme-primary mb-2">
                  When is the best time to sow wheat?
                </h3>
                <p className="text-gray-600">
                  The optimal sowing time for wheat is between late October to early November,
                  depending on your region and variety.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium text-theme-primary mb-2">
                  How to control aphids in wheat?
                </h3>
                <p className="text-gray-600">
                  Monitor regularly, use yellow sticky traps, and apply recommended insecticides
                  when population crosses economic threshold.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}