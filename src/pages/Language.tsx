import React, { useState } from 'react';
import { Languages, Check, Globe, Volume2 } from 'lucide-react';

const availableLanguages = [
  { code: 'hi', name: 'Hindi', native: 'हिंदी', users: '45%' },
  { code: 'en', name: 'English', native: 'English', users: '30%' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', users: '8%' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', users: '7%' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', users: '5%' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', users: '3%' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', users: '2%' }
];

const contentTypes = [
  { type: 'Interface Text', status: true },
  { type: 'Notifications', status: true },
  { type: 'Help Documents', status: true },
  { type: 'Market Reports', status: true },
  { type: 'Weather Updates', status: true }
];

export function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [textSize, setTextSize] = useState('normal');

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-secondary">Language Settings</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
          <Check size={20} />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Language Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Select Language</h2>
          <div className="space-y-4">
            {availableLanguages.map((lang) => (
              <div 
                key={lang.code}
                className={`flex items-center justify-between p-4 rounded-lg cursor-pointer border ${
                  selectedLanguage === lang.code 
                    ? 'border-theme-primary bg-theme-primary bg-opacity-5'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedLanguage(lang.code)}
              >
                <div className="flex items-center space-x-3">
                  <Globe size={20} className="text-theme-primary" />
                  <div>
                    <p className="font-medium">{lang.name}</p>
                    <p className="text-sm text-gray-600">{lang.native}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">{lang.users} users</span>
                  {selectedLanguage === lang.code && (
                    <Check size={20} className="text-theme-primary" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Text Size */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Text Size</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">A</span>
                <input 
                  type="range" 
                  min="0" 
                  max="2" 
                  step="1"
                  value={textSize === 'small' ? 0 : textSize === 'normal' ? 1 : 2}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setTextSize(value === 0 ? 'small' : value === 1 ? 'normal' : 'large');
                  }}
                  className="w-2/3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-lg">A</span>
              </div>
              <p className="text-sm text-gray-600">
                Current size: {textSize.charAt(0).toUpperCase() + textSize.slice(1)}
              </p>
            </div>
          </div>

          {/* Content Translation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Content Translation</h2>
            <div className="space-y-4">
              {contentTypes.map((content, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{content.type}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={content.status}
                      onChange={() => {}}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-theme-primary peer-focus:ring-opacity-20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-theme-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Language Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-theme-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <Volume2 size={32} className="text-theme-primary" />
            </div>
            <h3 className="font-medium text-theme-secondary mb-2">Text to Speech</h3>
            <p className="text-sm text-gray-600">
              Convert text to speech in your preferred language
            </p>
            <button className="mt-4 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
              Enable
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-theme-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <Languages size={32} className="text-theme-primary" />
            </div>
            <h3 className="font-medium text-theme-secondary mb-2">Auto Translation</h3>
            <p className="text-sm text-gray-600">
              Automatically translate content to your language
            </p>
            <button className="mt-4 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
              Configure
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-theme-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <Globe size={32} className="text-theme-primary" />
            </div>
            <h3 className="font-medium text-theme-secondary mb-2">Regional Format</h3>
            <p className="text-sm text-gray-600">
              Customize date, time, and number formats
            </p>
            <button className="mt-4 px-4 py-2 bg-theme-primary text-white rounded-lg hover:opacity-90">
              Customize
            </button>
          </div>
        </div>
      </div>

      {/* Language Support */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-theme-secondary">Language Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium">Need Help?</h3>
            <p className="text-sm text-gray-600">
              If you're having trouble with language settings or need assistance in your preferred language, our support team is here to help.
            </p>
            <button className="text-theme-primary hover:underline">
              Contact Support
            </button>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Suggest a Language</h3>
            <p className="text-sm text-gray-600">
              Don't see your language? Let us know which language you'd like us to add next.
            </p>
            <button className="text-theme-primary hover:underline">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}