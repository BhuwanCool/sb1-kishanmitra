import React, { useState } from 'react';
import { 
  Calculator, Calendar, TrendingUp, BarChart2, 
  DollarSign, Droplets, Sprout, Sun 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';

const expenses = [
  { category: 'Seeds', amount: 15000 },
  { category: 'Fertilizers', amount: 25000 },
  { category: 'Pesticides', amount: 10000 },
  { category: 'Labor', amount: 30000 },
  { category: 'Equipment', amount: 20000 }
];

const COLORS = ['#4f46e5', '#7c3aed', '#06b6d4', '#10b981', '#f59e0b'];

const cropCalendar = [
  {
    crop: 'Wheat',
    activities: [
      { activity: 'Sowing', date: '2024-03-20', status: 'upcoming' },
      { activity: 'Fertilizer Application', date: '2024-04-05', status: 'upcoming' },
      { activity: 'Irrigation', date: '2024-04-15', status: 'upcoming' }
    ]
  },
  {
    crop: 'Rice',
    activities: [
      { activity: 'Nursery Preparation', date: '2024-06-01', status: 'planned' },
      { activity: 'Transplanting', date: '2024-06-25', status: 'planned' },
      { activity: 'Pest Control', date: '2024-07-10', status: 'planned' }
    ]
  }
];

const yieldData = [
  { year: '2020', yield: 25 },
  { year: '2021', yield: 28 },
  { year: '2022', yield: 32 },
  { year: '2023', yield: 30 },
  { year: '2024', yield: 35 }
];

export function FarmManagement() {
  const [selectedCrop, setSelectedCrop] = useState('All Crops');

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Farm Management</h1>
        <select 
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
        >
          <option>All Crops</option>
          <option>Wheat</option>
          <option>Rice</option>
          <option>Cotton</option>
        </select>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Area</p>
              <p className="text-2xl font-bold text-theme-secondary">25 Acres</p>
            </div>
            <Sprout size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Expected Yield</p>
              <p className="text-2xl font-bold text-theme-secondary">75 Tons</p>
            </div>
            <TrendingUp size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Expenses</p>
              <p className="text-2xl font-bold text-theme-secondary">₹1,00,000</p>
            </div>
            <DollarSign size={24} className="text-theme-primary" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Water Usage</p>
              <p className="text-2xl font-bold text-theme-secondary">250 KL</p>
            </div>
            <Droplets size={24} className="text-theme-primary" />
          </div>
        </div>
      </div>

      {/* Expense Analysis and Yield Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Expense Analysis</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenses}
                  dataKey="amount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {expenses.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Yield Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="yield" fill="var(--color-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Crop Calendar */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Crop Calendar</h2>
        <div className="space-y-6">
          {cropCalendar.map((crop, index) => (
            <div key={index} className="border-b last:border-b-0 pb-6 last:pb-0">
              <h3 className="font-medium text-theme-primary mb-3">{crop.crop}</h3>
              <div className="space-y-3">
                {crop.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Calendar size={20} className="text-theme-tertiary" />
                      <div>
                        <p className="font-medium">{activity.activity}</p>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      activity.status === 'upcoming' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : activity.status === 'planned'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Management */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Water Management</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Current Usage</span>
              <span className="font-medium">250 KL</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-theme-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-600">70% of monthly allocation used</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Soil Health</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>pH Level</span>
              <span className="font-medium">6.8</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Nitrogen</span>
              <span className="font-medium">Medium</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Phosphorus</span>
              <span className="font-medium">High</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Labor Management</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Current Workers</span>
              <span className="font-medium">15</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tasks Completed</span>
              <span className="font-medium">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Efficiency Rate</span>
              <span className="font-medium">92%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}