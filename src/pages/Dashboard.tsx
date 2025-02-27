import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, AreaChart, Area
} from 'recharts';
import { MandiRatesWidget } from '../components/farmer/MandiRates';
import { WeatherWidget } from '../components/farmer/WeatherWidget';
import { CropAdvisoryWidget } from '../components/farmer/CropAdvisory';
import { MarketInsights } from '../components/farmer/MarketInsights';
import { 
  Calendar, MapPin, Newspaper, ChevronDown, ChevronUp, Eye, EyeOff, 
  Layout, Settings, X 
} from 'lucide-react';

const cropYieldData = [
  { month: 'Jan', wheat: 4000, rice: 2400, cotton: 2400 },
  { month: 'Feb', wheat: 3000, rice: 1398, cotton: 2210 },
  { month: 'Mar', wheat: 2000, rice: 9800, cotton: 2290 },
  { month: 'Apr', wheat: 2780, rice: 3908, cotton: 2000 },
  { month: 'May', wheat: 1890, rice: 4800, cotton: 2181 },
  { month: 'Jun', wheat: 2390, rice: 3800, cotton: 2500 },
];

const priceHistoryData = [
  { date: '2023-07', price: 2400 },
  { date: '2023-08', price: 2210 },
  { date: '2023-09', price: 2290 },
  { date: '2023-10', price: 2000 },
  { date: '2023-11', price: 2181 },
  { date: '2023-12', price: 2500 },
  { date: '2024-01', price: 2100 },
];

const rainfallData = [
  { month: 'Jan', rainfall: 65 },
  { month: 'Feb', rainfall: 45 },
  { month: 'Mar', rainfall: 75 },
  { month: 'Apr', rainfall: 85 },
  { month: 'May', rainfall: 95 },
  { month: 'Jun', rainfall: 125 },
];

const agricultureNews = [
  {
    title: 'New Government Scheme for Organic Farming',
    date: 'March 15, 2024',
    description: 'The government announces new subsidies for organic farming initiatives...'
  },
  {
    title: 'Record Wheat Production Expected',
    date: 'March 14, 2024',
    description: 'Experts predict bumper wheat crop this season due to favorable weather...'
  },
  {
    title: 'Innovation in Irrigation Technology',
    date: 'March 13, 2024',
    description: 'Smart irrigation systems helping farmers reduce water consumption...'
  }
];

const upcomingEvents = [
  {
    title: 'Farmer Training Workshop',
    date: 'March 20, 2024',
    location: 'District Agriculture Center'
  },
  {
    title: 'Organic Certification Camp',
    date: 'March 25, 2024',
    location: 'Community Hall'
  },
  {
    title: 'Kisan Mela 2024',
    date: 'April 1, 2024',
    location: 'State Agriculture University'
  }
];

interface DashboardSection {
  id: string;
  title: string;
  visible: boolean;
  expanded: boolean;
}

export function Dashboard() {
  const [layout, setLayout] = useState<'1' | '2' | '3'>('2');
  const [showScreenOptions, setShowScreenOptions] = useState(false);
  const [sections, setSections] = useState<DashboardSection[]>([
    { id: 'quickStats', title: 'Quick Stats', visible: true, expanded: true },
    { id: 'charts', title: 'Charts & Analytics', visible: true, expanded: true },
    { id: 'news', title: 'Agriculture News', visible: true, expanded: true },
    { id: 'events', title: 'Upcoming Events', visible: true, expanded: true }
  ]);

  const toggleVisibility = (sectionId: string) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? { ...section, visible: !section.visible }
        : section
    ));
  };

  const toggleExpanded = (sectionId: string) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? { ...section, expanded: !section.expanded }
        : section
    ));
  };

  const getSection = (id: string) => sections.find(s => s.id === id)!;

  return (
    <main className="p-6 space-y-6">
      {/* Layout Controls */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowScreenOptions(!showScreenOptions)}
            className="flex items-center space-x-2 bg-white rounded-lg shadow px-4 py-2 hover:bg-gray-50"
          >
            <Settings size={20} className="text-theme-primary" />
            <span className="text-sm">Screen Options</span>
          </button>
          <div className="flex items-center space-x-2 bg-white rounded-lg shadow px-4 py-2">
            <Layout size={20} className="text-theme-primary" />
            <select 
              value={layout}
              onChange={(e) => setLayout(e.target.value as '1' | '2' | '3')}
              className="border-none focus:ring-0 text-sm"
            >
              <option value="1">Single Column</option>
              <option value="2">Two Columns</option>
              <option value="3">Three Columns</option>
            </select>
          </div>
        </div>
      </div>

      {/* Screen Options Panel */}
      {showScreenOptions && (
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-theme-primary">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-theme-secondary">Screen Options</h2>
            <button
              onClick={() => setShowScreenOptions(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-3">
            {sections.map(section => (
              <div key={section.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={`screen-option-${section.id}`}
                  checked={section.visible}
                  onChange={() => toggleVisibility(section.id)}
                  className="rounded border-gray-300 text-theme-primary focus:ring-theme-primary"
                />
                <label 
                  htmlFor={`screen-option-${section.id}`}
                  className="text-gray-700"
                >
                  {section.title}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Stats Section */}
      {getSection('quickStats').visible && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold text-theme-secondary">Quick Stats</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => toggleExpanded('quickStats')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {getSection('quickStats').expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <button 
                onClick={() => toggleVisibility('quickStats')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {getSection('quickStats').visible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {getSection('quickStats').expanded && (
            <div className={`p-6 grid grid-cols-1 md:grid-cols-${layout} gap-6`}>
              <MandiRatesWidget />
              <WeatherWidget />
              <CropAdvisoryWidget />
              <MarketInsights />
            </div>
          )}
        </div>
      )}

      {/* Charts Section */}
      {getSection('charts').visible && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold text-theme-secondary">Charts & Analytics</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => toggleExpanded('charts')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {getSection('charts').expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <button 
                onClick={() => toggleVisibility('charts')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {getSection('charts').visible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {getSection('charts').expanded && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Crop Yield Comparison</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={cropYieldData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="wheat" fill="var(--color-primary)" />
                      <Bar dataKey="rice" fill="var(--color-secondary)" />
                      <Bar dataKey="cotton" fill="var(--color-tertiary)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Price History</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceHistoryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="price" stroke="var(--color-primary)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* News Section */}
      {getSection('news').visible && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold text-theme-secondary">Agriculture News</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => toggleExpanded('news')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {getSection('news').expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <button 
                onClick={() => toggleVisibility('news')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {getSection('news').visible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {getSection('news').expanded && (
            <div className="p-6">
              <div className="space-y-4">
                {agricultureNews.map((news, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h3 className="font-medium text-theme-primary">{news.title}</h3>
                    <p className="text-sm text-gray-500">{news.date}</p>
                    <p className="text-sm mt-1">{news.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Events Section */}
      {getSection('events').visible && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold text-theme-secondary">Upcoming Events</h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => toggleExpanded('events')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {getSection('events').expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <button 
                onClick={() => toggleVisibility('events')}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {getSection('events').visible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {getSection('events').expanded && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-medium text-theme-primary">{event.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                      <Calendar size={16} />
                      {event.date}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin size={16} />
                      {event.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}