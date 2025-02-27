import React, { useState } from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets, CloudLightning, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyForecast = [
  { day: 'Mon', temp: 32, humidity: 65, rain: 20 },
  { day: 'Tue', temp: 30, humidity: 70, rain: 40 },
  { day: 'Wed', temp: 28, humidity: 75, rain: 60 },
  { day: 'Thu', temp: 29, humidity: 72, rain: 30 },
  { day: 'Fri', temp: 31, humidity: 68, rain: 10 },
  { day: 'Sat', temp: 33, humidity: 62, rain: 5 },
  { day: 'Sun', temp: 32, humidity: 65, rain: 15 }
];

const hourlyForecast = [
  { time: '6 AM', temp: 24 },
  { time: '9 AM', temp: 27 },
  { time: '12 PM', temp: 32 },
  { time: '3 PM', temp: 34 },
  { time: '6 PM', temp: 31 },
  { time: '9 PM', temp: 28 }
];

export function Weather() {
  const [selectedLocation, setSelectedLocation] = useState('Current Location');

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Weather Forecast</h1>
        <select 
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-primary"
        >
          <option>Current Location</option>
          <option>Indore</option>
          <option>Bhopal</option>
          <option>Ujjain</option>
        </select>
      </div>

      {/* Current Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-theme-secondary">32°C</h2>
              <p className="text-gray-600">Partly Cloudy</p>
              <p className="text-sm text-gray-500 mt-1">Feels like 34°C</p>
            </div>
            <Sun size={64} className="text-yellow-500" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="flex items-center space-x-2">
              <Wind className="text-theme-tertiary" />
              <div>
                <p className="text-sm text-gray-600">Wind</p>
                <p className="font-medium">12 km/h</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="text-theme-tertiary" />
              <div>
                <p className="text-sm text-gray-600">Humidity</p>
                <p className="font-medium">65%</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <CloudRain className="text-theme-tertiary" />
              <div>
                <p className="text-sm text-gray-600">Rain</p>
                <p className="font-medium">20%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weather Alerts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Weather Alerts</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle className="text-yellow-600" />
              <div>
                <p className="font-medium text-yellow-800">Heat Wave Alert</p>
                <p className="text-sm text-yellow-600">High temperatures expected for next 3 days</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <CloudRain className="text-blue-600" />
              <div>
                <p className="font-medium text-blue-800">Rain Forecast</p>
                <p className="text-sm text-blue-600">Light rain expected tomorrow evening</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Hourly Forecast</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hourlyForecast}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="temp" 
                stroke="var(--color-primary)" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Forecast */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {weeklyForecast.map((day, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
            <p className="font-medium text-theme-secondary">{day.day}</p>
            {day.rain > 50 ? (
              <CloudRain className="mx-auto my-2 text-blue-500" />
            ) : day.rain > 20 ? (
              <Cloud className="mx-auto my-2 text-gray-500" />
            ) : (
              <Sun className="mx-auto my-2 text-yellow-500" />
            )}
            <p className="text-lg font-bold">{day.temp}°C</p>
            <p className="text-sm text-gray-600">{day.rain}% rain</p>
          </div>
        ))}
      </div>

      {/* Crop Weather Advisory */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Crop Weather Advisory</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-medium text-theme-primary">Wheat</h3>
            <p className="text-sm text-gray-600">
              Current weather conditions are favorable for wheat cultivation. 
              Maintain proper irrigation schedule.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-theme-primary">Rice</h3>
            <p className="text-sm text-gray-600">
              Expected rainfall will benefit rice crops. 
              Ensure proper drainage in fields.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-theme-primary">Cotton</h3>
            <p className="text-sm text-gray-600">
              Monitor for pests due to increasing humidity. 
              Apply protective measures if needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}