import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

const historicalData = [
  { month: 'Jan', price: 2100 },
  { month: 'Feb', price: 2300 },
  { month: 'Mar', price: 2000 },
  { month: 'Apr', price: 2400 },
  { month: 'May', price: 2600 },
  { month: 'Jun', price: 2200 }
];

const mandiRates = [
  {
    crop: 'Wheat',
    variety: 'Sharbati',
    price: 2100,
    change: '+120',
    trend: 'up',
    market: 'Indore Mandi'
  },
  {
    crop: 'Rice',
    variety: 'Basmati',
    price: 3500,
    change: '+80',
    trend: 'up',
    market: 'Karnal Mandi'
  },
  {
    crop: 'Cotton',
    variety: 'Long Staple',
    price: 6300,
    change: '-150',
    trend: 'down',
    market: 'Rajkot Mandi'
  },
  {
    crop: 'Soybean',
    variety: 'Yellow',
    price: 4200,
    change: '+200',
    trend: 'up',
    market: 'Ujjain Mandi'
  },
  {
    crop: 'Mustard',
    variety: 'Black',
    price: 5100,
    change: '-90',
    trend: 'down',
    market: 'Alwar Mandi'
  }
];

export function MandiRates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMarket, setSelectedMarket] = useState('All Markets');

  const filteredRates = mandiRates.filter(rate => 
    rate.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rate.market.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Mandi Rates</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search crops or markets..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Rates Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Live Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Crop</th>
                  <th className="text-left py-3">Variety</th>
                  <th className="text-left py-3">Price (₹/q)</th>
                  <th className="text-left py-3">Change</th>
                  <th className="text-left py-3">Market</th>
                </tr>
              </thead>
              <tbody>
                {filteredRates.map((rate, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3">{rate.crop}</td>
                    <td className="py-3 text-gray-600">{rate.variety}</td>
                    <td className="py-3 font-medium">₹{rate.price}</td>
                    <td className={`py-3 flex items-center ${
                      rate.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {rate.trend === 'up' ? 
                        <TrendingUp size={16} className="mr-1" /> : 
                        <TrendingDown size={16} className="mr-1" />
                      }
                      {rate.change}
                    </td>
                    <td className="py-3 text-gray-600">{rate.market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Trends Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Price Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="var(--color-primary)" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3 text-theme-secondary">Market Insights</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <TrendingUp className="text-green-500 mt-1" size={20} />
              <p className="text-sm">Wheat prices expected to rise due to increased export demand</p>
            </li>
            <li className="flex items-start space-x-2">
              <TrendingDown className="text-red-500 mt-1" size={20} />
              <p className="text-sm">Cotton prices showing downward trend in major markets</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3 text-theme-secondary">Price Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-green-700">Wheat ₹2100/q</span>
              <span className="text-sm text-green-600">Target Reached</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-red-700">Cotton ₹6300/q</span>
              <span className="text-sm text-red-600">Below Target</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-3 text-theme-secondary">Market Updates</h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              New procurement center opened in Indore Mandi
            </p>
            <p className="text-sm text-gray-600">
              Electronic trading system implemented in 50 new mandis
            </p>
            <p className="text-sm text-gray-600">
              Special trading session announced for upcoming festival season
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}