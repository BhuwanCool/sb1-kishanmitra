import React, { useState, useEffect, useRef } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const colorPresets = {
  primary: [
    '#4f46e5', // Indigo
    '#2563eb', // Blue
    '#7c3aed', // Purple
    '#db2777', // Pink
    '#dc2626', // Red
  ],
  secondary: [
    '#6366f1', // Light Indigo
    '#3b82f6', // Light Blue
    '#8b5cf6', // Light Purple
    '#ec4899', // Light Pink
    '#ef4444', // Light Red
  ],
  tertiary: [
    '#06b6d4', // Cyan
    '#10b981', // Emerald
    '#f59e0b', // Amber
    '#8b5cf6', // Purple
    '#14b8a6', // Teal
  ],
};

export function ThemePicker() {
  const { theme, setTheme, customColors, setCustomColors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeColorType, setActiveColorType] = useState<'primary' | 'secondary' | 'tertiary' | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveColorType(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleColorSelect = (type: keyof typeof colorPresets, color: string) => {
    setCustomColors({ ...customColors, [type]: color });
    setActiveColorType(null);
  };

  const ColorButton = ({ type, color }: { type: keyof typeof colorPresets, color: string }) => (
    <button
      onClick={() => handleColorSelect(type, color)}
      className="w-6 h-6 rounded-full flex items-center justify-center transition-transform hover:scale-110 relative"
      style={{ backgroundColor: color }}
    >
      {customColors[type] === color && (
        <Check size={14} className="text-white" />
      )}
    </button>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-opacity-80 rounded-lg transition-colors flex items-center space-x-2"
        style={{ background: 'var(--color-primary)' }}
      >
        <Palette size={20} className="text-white" />
        <span className="hidden md:inline text-white">Theme</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl p-4 z-50">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'light' 
                    ? 'bg-theme-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-black'
                }`}
              >
                Light Mode
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-theme-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-black'
                }`}
              >
                Dark Mode
              </button>
              <button
                onClick={() => setTheme('custom')}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'custom' 
                    ? 'bg-theme-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-black'
                }`}
              >
                Custom Mode
              </button>
            </div>

            {theme === 'custom' && (
              <div className="space-y-3 pt-2 border-t">
                <h3 className="font-medium text-sm text-black">Custom Colors</h3>
                <div className="space-y-2">
                  {/* Primary Color Selection */}
                  <div>
                    <button
                      onClick={() => setActiveColorType(activeColorType === 'primary' ? null : 'primary')}
                      className="w-full flex items-center justify-between text-black hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: customColors.primary }} />
                        <span className="text-sm font-medium">Primary Color</span>
                      </div>
                    </button>
                    {activeColorType === 'primary' && (
                      <div className="mt-1 ml-11 flex space-x-2">
                        {colorPresets.primary.map((color, index) => (
                          <ColorButton key={index} type="primary" color={color} />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Secondary Color Selection */}
                  <div>
                    <button
                      onClick={() => setActiveColorType(activeColorType === 'secondary' ? null : 'secondary')}
                      className="w-full flex items-center justify-between text-black hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: customColors.secondary }} />
                        <span className="text-sm font-medium">Secondary Color</span>
                      </div>
                    </button>
                    {activeColorType === 'secondary' && (
                      <div className="mt-1 ml-11 flex space-x-2">
                        {colorPresets.secondary.map((color, index) => (
                          <ColorButton key={index} type="secondary" color={color} />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tertiary Color Selection */}
                  <div>
                    <button
                      onClick={() => setActiveColorType(activeColorType === 'tertiary' ? null : 'tertiary')}
                      className="w-full flex items-center justify-between text-black hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full" style={{ backgroundColor: customColors.tertiary }} />
                        <span className="text-sm font-medium">Tertiary Color</span>
                      </div>
                    </button>
                    {activeColorType === 'tertiary' && (
                      <div className="mt-1 ml-11 flex space-x-2">
                        {colorPresets.tertiary.map((color, index) => (
                          <ColorButton key={index} type="tertiary" color={color} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}