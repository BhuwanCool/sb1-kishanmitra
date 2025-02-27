import React, { useState } from 'react';
import { Bell, Mail, Phone, AlertTriangle, FileText, Cog, HelpCircle, Shield } from 'lucide-react';

export function NotificationSettings() {
  const [notificationSettings, setNotificationSettings] = useState({
    channels: {
      email: true,
      push: true,
      sms: false
    },
    types: {
      priceAlerts: true,
      weatherAlerts: true,
      governmentUpdates: true,
      marketInsights: true,
      cropAdvisories: true,
      systemUpdates: false
    },
    frequency: {
      priceAlerts: 'immediate',
      weatherAlerts: 'immediate',
      governmentUpdates: 'daily',
      marketInsights: 'daily',
      cropAdvisories: 'weekly',
      systemUpdates: 'weekly'
    }
  });

  const handleChannelChange = (channel: string) => {
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      channels: {
        ...prevSettings.channels,
        [channel]: !prevSettings.channels[channel as keyof typeof prevSettings.channels]
      }
    }));
  };

  const handleTypeChange = (type: string) => {
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      types: {
        ...prevSettings.types,
        [type]: !prevSettings.types[type as keyof typeof prevSettings.types]
      }
    }));
  };

  const handleFrequencyChange = (type: string, value: string) => {
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      frequency: {
        ...prevSettings.frequency,
        [type]: value
      }
    }));
  };

  const saveSettings = () => {
    alert('Notification settings saved successfully!');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Notification Settings</h1>
        <button 
          onClick={saveSettings}
          className="px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90"
        >
          Save Settings
        </button>
      </div>

      {/* Notification Channels */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Notification Channels</h2>
        <div className="space-y-4">
          {Object.entries(notificationSettings.channels).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                {key === 'email' && <Mail size={20} className="text-theme-primary" />}
                {key === 'push' && <Bell size={20} className="text-theme-primary" />}
                {key === 'sms' && <Phone size={20} className="text-theme-primary" />}
                <div>
                  <p className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)} Notifications</p>
                </div>
              </div>
              <input 
                type="checkbox" 
                className="toggle-checkbox"
                checked={value}
                onChange={() => handleChannelChange(key)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Notification Types */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Notification Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(notificationSettings.types).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                {key === 'priceAlerts' && <FileText size={20} className="text-green-500" />}
                {key === 'weatherAlerts' && <AlertTriangle size={20} className="text-yellow-500" />}
                {key === 'governmentUpdates' && <Shield size={20} className="text-blue-500" />}
                {key === 'marketInsights' && <Cog size={20} className="text-purple-500" />}
                {key === 'cropAdvisories' && <HelpCircle size={20} className="text-orange-500" />}
                {key === 'systemUpdates' && <Bell size={20} className="text-gray-500" />}
                <div>
                  <p className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                </div>
              </div>
              <input 
                type="checkbox" 
                className="toggle-checkbox"
                checked={value}
                onChange={() => handleTypeChange(key)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Notification Frequency */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Notification Frequency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(notificationSettings.frequency).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                {key === 'priceAlerts' && <FileText size={20} className="text-green-500" />}
                {key === 'weatherAlerts' && <AlertTriangle size={20} className="text-yellow-500" />}
                <div>
                  <p className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                </div>
              </div>
              <select 
                className="border rounded-lg p-2"
                value={value}
                onChange={(e) => handleFrequencyChange(key, e.target.value)}
              >
                <option value="immediate">Immediate</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
